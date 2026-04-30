import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/site/breadcrumbs';
import { GitHubCard } from '@/components/site/github-card';
import { JsonLd } from '@/components/site/json-ld';
import { PostCard } from '@/components/site/post-card';
import { TableOfContents } from '@/components/site/toc';
import { TagList } from '@/components/site/tag-list';
import { YouTubeEmbed } from '@/components/site/youtube-embed';
import { getProjectBySlug } from '@/lib/content';
import { breadcrumbJsonLd, creativeWorkJsonLd } from '@/lib/json-ld';
import { getCopy } from '@/lib/copy';
import type { Locale } from '@/lib/locale';
import { withLocale } from '@/lib/locale';
import { formatDate } from '@/lib/utils';

export async function ProjectPostPage({ locale, slug }: { locale: Locale; slug: string }) {
  const { common } = getCopy(locale);

  let project;

  try {
    project = await getProjectBySlug(slug);
  } catch {
    notFound();
  }

  const path = withLocale(`/projects/${project.frontmatter.slug}`, locale);
  const breadcrumbItems = [
    { label: common.home, href: withLocale('/', locale) },
    { label: common.projects, href: withLocale('/projects', locale) },
    { label: project.frontmatter.title, href: path },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: common.home, path: withLocale('/', locale) },
            { name: common.projects, path: withLocale('/projects', locale) },
            { name: project.frontmatter.title, path },
          ]),
          creativeWorkJsonLd({
            title: project.frontmatter.title,
            description: project.frontmatter.description,
            path,
            image: project.frontmatter.coverImage,
            tags: [...project.frontmatter.technologies, ...project.frontmatter.parts],
          }),
        ]}
      />

      <section className="section">
        <div className="container article-shell">
          <div className="article-body">
            <header className="article-header">
              <Breadcrumbs items={breadcrumbItems} />
              <div className="meta-group">
                <span className="status-pill" data-status={project.frontmatter.status}>
                  {common.buildStatus[project.frontmatter.status]}
                </span>
                <span className="meta-text">{project.readingTime}</span>
              </div>
              <h1>{project.frontmatter.title}</h1>
              <p className="article-summary">{project.frontmatter.description}</p>
              <div className="article-meta">
                <span>
                  {common.published} {formatDate(project.frontmatter.publishedAt)}
                </span>
                <span>
                  {common.updated} {formatDate(project.frontmatter.updatedAt)}
                </span>
              </div>
              <TagList tags={project.frontmatter.technologies} />
              <div className="article-cover">
                <Image src={project.frontmatter.coverImage} alt={project.frontmatter.title} width={1200} height={630} />
              </div>
            </header>

            <div className="article-utility-grid">
              {project.frontmatter.youtubeUrl ? <YouTubeEmbed url={project.frontmatter.youtubeUrl} title={project.frontmatter.title} /> : null}
              {project.frontmatter.githubUrl ? (
                <GitHubCard
                  url={project.frontmatter.githubUrl}
                  title={common.githubTitle}
                  description={common.githubDescription}
                />
              ) : null}
            </div>

            <article className="article-prose">{project.content}</article>

            {project.relatedPosts.length > 0 ? (
              <section className="related-grid">
                <div className="section-heading">
                  <div>
                    <p className="eyebrow">{common.relatedPostsEyebrow}</p>
                    <h2>{common.projectRelatedPosts}</h2>
                  </div>
                </div>
                <div className="card-grid">
                  {project.relatedPosts.map((post) => (
                    <PostCard key={post.slug} post={post} locale={locale} />
                  ))}
                </div>
              </section>
            ) : null}
          </div>

          <div className="article-aside">
            <TableOfContents items={project.headings} title={common.contents} />
          </div>
        </div>
      </section>
    </>
  );
}
