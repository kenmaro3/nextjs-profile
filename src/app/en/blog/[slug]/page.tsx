import { BlogPostPage } from '@/components/pages/blog-post-page';
import { getAllPosts, getPostBySlug } from '@/lib/content';
import { buildMetadata } from '@/lib/metadata';
import { pageCopy } from '@/lib/copy';

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  try {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    return buildMetadata({
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      path: `/en/blog/${post.frontmatter.slug}`,
      image: post.frontmatter.coverImage,
      keywords: [post.frontmatter.category, ...post.frontmatter.tags],
      type: 'article',
      publishedTime: post.frontmatter.publishedAt,
      modifiedTime: post.frontmatter.updatedAt,
    });
  } catch {
    return buildMetadata({
      title: pageCopy.en.blogList.title,
      description: pageCopy.en.blogList.description,
      path: '/en/blog',
    });
  }
}

export default async function Page({ params }: BlogPostPageProps) {
  const { slug } = await params;
  return <BlogPostPage locale="en" slug={slug} />;
}
