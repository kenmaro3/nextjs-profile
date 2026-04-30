import fs from 'node:fs/promises';
import path from 'node:path';
import { cache } from 'react';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { compileMDX } from 'next-mdx-remote/rsc';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import { extractHeadings } from '@/lib/utils';
import { mdxComponents } from '@/components/site/mdx-components';

const contentRoot = path.join(process.cwd(), 'content');
const blogRoot = path.join(contentRoot, 'blog');
const projectRoot = path.join(contentRoot, 'projects');

export type PartEntry = {
  name: string;
  note?: string;
  url?: string;
  affiliate?: boolean;
};

export type BlogFrontmatter = {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  updatedAt: string;
  category: string;
  tags: string[];
  coverImage: string;
  youtubeUrl?: string;
  githubUrl?: string;
  draft?: boolean;
};

export type BlogSummary = BlogFrontmatter & {
  readingTime: string;
};

export type ProjectFrontmatter = {
  title: string;
  slug: string;
  description: string;
  status: 'Planning' | 'Building' | 'Completed' | 'Failed / Archived';
  coverImage: string;
  technologies: string[];
  parts: string[];
  youtubeUrl?: string;
  githubUrl?: string;
  relatedPosts: string[];
  publishedAt: string;
  updatedAt: string;
  draft?: boolean;
};

export type ProjectSummary = ProjectFrontmatter & {
  readingTime: string;
};

async function getEntries<T>(directory: string) {
  const files = await fs.readdir(directory);
  const entries = await Promise.all(
    files
      .filter((file) => file.endsWith('.mdx'))
      .map(async (fileName) => {
        const source = await fs.readFile(path.join(directory, fileName), 'utf8');
        const { data, content } = matter(source);

        return {
          source,
          content,
          frontmatter: data as T,
        };
      }),
  );

  return entries;
}

export const getAllPosts = cache(async () => {
  const entries = await getEntries<BlogFrontmatter>(blogRoot);

  return entries
    .filter(({ frontmatter }) => !frontmatter.draft)
    .map(({ frontmatter, content }) => ({
      ...frontmatter,
      readingTime: readingTime(content).text,
    }))
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));
});

export const getLatestPosts = cache(async (limit = 3) => {
  const posts = await getAllPosts();
  return posts.slice(0, limit);
});

export const getPostBySlug = cache(async (slug: string) => {
  const source = await fs.readFile(path.join(blogRoot, `${slug}.mdx`), 'utf8');
  const { content, frontmatter } = await compileMDX<BlogFrontmatter>({
    source,
    components: mdxComponents,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'append' }]],
      },
    },
  });

  const summaries = await getAllPosts();
  const relatedPosts = summaries
    .filter((post) => post.slug !== slug)
    .map((post) => {
      let score = 0;

      if (post.category === frontmatter.category) {
        score += 2;
      }

      score += post.tags.filter((tag) => frontmatter.tags.includes(tag)).length;

      return { post, score };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((entry) => entry.post);

  const { data } = matter(source);

  return {
    frontmatter,
    content,
    raw: source,
    headings: extractHeadings(source),
    readingTime: readingTime(matter(source).content).text,
    relatedPosts,
    data,
  };
});

export const getAllProjects = cache(async () => {
  const entries = await getEntries<ProjectFrontmatter>(projectRoot);

  return entries
    .filter(({ frontmatter }) => !frontmatter.draft)
    .map(({ frontmatter, content }) => ({
      ...frontmatter,
      readingTime: readingTime(content).text,
    }))
    .sort((a, b) => +new Date(b.updatedAt) - +new Date(a.updatedAt));
});

export const getFeaturedProjects = cache(async (limit = 3) => {
  const projects = await getAllProjects();
  const statusWeight = {
    Building: 4,
    Completed: 3,
    Planning: 2,
    'Failed / Archived': 1,
  };

  return [...projects]
    .sort((a, b) => statusWeight[b.status] - statusWeight[a.status])
    .slice(0, limit);
});

export const getProjectBySlug = cache(async (slug: string) => {
  const source = await fs.readFile(path.join(projectRoot, `${slug}.mdx`), 'utf8');
  const { content, frontmatter } = await compileMDX<ProjectFrontmatter>({
    source,
    components: mdxComponents,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'append' }]],
      },
    },
  });

  const posts = await getAllPosts();

  return {
    frontmatter,
    content,
    raw: source,
    headings: extractHeadings(source),
    readingTime: readingTime(matter(source).content).text,
    relatedPosts: posts.filter((post) => frontmatter.relatedPosts.includes(post.slug)),
  };
});
