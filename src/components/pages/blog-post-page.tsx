import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/site/breadcrumbs';
import { GitHubCard } from '@/components/site/github-card';
import { JsonLd } from '@/components/site/json-ld';
import { PostCard } from '@/components/site/post-card';
import { SponsorCTA } from '@/components/site/sponsor-cta';
import { TableOfContents } from '@/components/site/toc';
import { TagList } from '@/components/site/tag-list';
import { YouTubeEmbed } from '@/components/site/youtube-embed';
import { getPostBySlug } from '@/lib/content';
import { blogPostingJsonLd, breadcrumbJsonLd, techArticleJsonLd } from '@/lib/json-ld';
import { getCopy } from '@/lib/copy';
import type { Locale } from '@/lib/locale';
import { withLocale } from '@/lib/locale';
import { formatDate } from '@/lib/utils';

export async function BlogPostPage({ locale, slug }: { locale: Locale; slug: string }) {
  const { common } = getCopy(locale);

  let post;

  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  const path = withLocale(`/blog/${post.frontmatter.slug}`, locale);
  const breadcrumbItems = [
    { label: common.home, href: withLocale('/', locale) },
    { label: common.blog, href: withLocale('/blog', locale) },
    { label: post.frontmatter.title, href: path },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: common.home, path: withLocale('/', locale) },
            { name: common.blog, path: withLocale('/blog', locale) },
            { name: post.frontmatter.title, path },
          ]),
          blogPostingJsonLd({
            title: post.frontmatter.title,
            description: post.frontmatter.description,
            path,
            image: post.frontmatter.coverImage,
            publishedAt: post.frontmatter.publishedAt,
            updatedAt: post.frontmatter.updatedAt,
            tags: post.frontmatter.tags,
          }),
          techArticleJsonLd({
            title: post.frontmatter.title,
            description: post.frontmatter.description,
            path,
            image: post.frontmatter.coverImage,
            publishedAt: post.frontmatter.publishedAt,
            updatedAt: post.frontmatter.updatedAt,
            tags: post.frontmatter.tags,
          }),
        ]}
      />

      <section className="section">
        <div className="container article-shell">
          <div className="article-body">
            <header className="article-header">
              <Breadcrumbs items={breadcrumbItems} />
              <div className="meta-group">
                <span className="meta-pill">{post.frontmatter.category}</span>
                <span className="meta-text">{post.readingTime}</span>
              </div>
              <h1>{post.frontmatter.title}</h1>
              <p className="article-summary">{post.frontmatter.description}</p>
              <div className="article-meta">
                <span>
                  {common.published} {formatDate(post.frontmatter.publishedAt)}
                </span>
                <span>
                  {common.updated} {formatDate(post.frontmatter.updatedAt)}
                </span>
              </div>
              <TagList tags={post.frontmatter.tags} />
              <div className="article-cover">
                <Image src={post.frontmatter.coverImage} alt={post.frontmatter.title} width={1200} height={630} />
              </div>
            </header>

            <div className="article-utility-grid">
              {post.frontmatter.youtubeUrl ? <YouTubeEmbed url={post.frontmatter.youtubeUrl} title={post.frontmatter.title} /> : null}
              {post.frontmatter.githubUrl ? (
                <GitHubCard
                  url={post.frontmatter.githubUrl}
                  title={common.githubTitle}
                  description={common.githubDescription}
                />
              ) : null}
            </div>

            <article className="article-prose">{post.content}</article>

            <SponsorCTA title={common.sponsorTitle} description={common.sponsorDescription} />

            {post.relatedPosts.length > 0 ? (
              <section className="related-grid">
                <div className="section-heading">
                  <div>
                    <p className="eyebrow">{common.relatedPostsEyebrow}</p>
                    <h2>{common.moreFromSameThread}</h2>
                  </div>
                </div>
                <div className="card-grid">
                  {post.relatedPosts.map((relatedPost) => (
                    <PostCard key={relatedPost.slug} post={relatedPost} locale={locale} />
                  ))}
                </div>
              </section>
            ) : null}
          </div>

          <div className="article-aside">
            <TableOfContents items={post.headings} title={common.contents} />
          </div>
        </div>
      </section>
    </>
  );
}
