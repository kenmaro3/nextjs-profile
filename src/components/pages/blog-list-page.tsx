import { PageHero } from '@/components/site/page-hero';
import { PostCard } from '@/components/site/post-card';
import { JsonLd } from '@/components/site/json-ld';
import { getAllPosts } from '@/lib/content';
import { breadcrumbJsonLd } from '@/lib/json-ld';
import { getCopy } from '@/lib/copy';
import type { Locale } from '@/lib/locale';
import { withLocale } from '@/lib/locale';

export async function BlogListPage({ locale }: { locale: Locale }) {
  const { page, common } = getCopy(locale);
  const posts = await getAllPosts();
  const categories = Array.from(new Set(posts.map((post) => post.category)));

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: common.home, path: withLocale('/', locale) },
          { name: common.blog, path: withLocale('/blog', locale) },
        ])}
      />

      <PageHero
        eyebrow={page.blogList.heroEyebrow}
        title={page.blogList.heroTitle}
        description={page.blogList.heroDescription}
      >
        <div className="tag-list">
          {categories.map((category) => (
            <span key={category} className="tag-chip">
              {category}
            </span>
          ))}
        </div>
      </PageHero>

      <section className="section">
        <div className="container">
          {posts.length > 0 ? (
            <div className="card-grid">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} locale={locale} />
              ))}
            </div>
          ) : (
            <div className="empty-state-card">
              <h2>{locale === 'ja' ? 'まだ記事はありません' : 'No posts yet'}</h2>
              <p>
                {locale === 'ja'
                  ? '準備ができ次第、このブログに制作ログや補足記事を追加していきます。'
                  : 'Build logs and companion posts will be added here once they are ready.'}
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
