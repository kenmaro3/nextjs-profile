import { ProjectPostPage } from '@/components/pages/project-post-page';
import { getAllProjects, getProjectBySlug } from '@/lib/content';
import { buildMetadata } from '@/lib/metadata';
import { pageCopy } from '@/lib/copy';

type ProjectPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPostPageProps) {
  try {
    const { slug } = await params;
    const project = await getProjectBySlug(slug);

    return buildMetadata({
      title: project.frontmatter.title,
      description: project.frontmatter.description,
      path: `/en/projects/${project.frontmatter.slug}`,
      image: project.frontmatter.coverImage,
      keywords: [...project.frontmatter.technologies, ...project.frontmatter.parts],
      type: 'article',
      publishedTime: project.frontmatter.publishedAt,
      modifiedTime: project.frontmatter.updatedAt,
    });
  } catch {
    return buildMetadata({
      title: pageCopy.en.projectsList.title,
      description: pageCopy.en.projectsList.description,
      path: '/en/projects',
    });
  }
}

export default async function Page({ params }: ProjectPostPageProps) {
  const { slug } = await params;
  return <ProjectPostPage locale="en" slug={slug} />;
}
