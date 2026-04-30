import { PageHero } from '@/components/site/page-hero';
import { ProjectCard } from '@/components/site/project-card';
import { JsonLd } from '@/components/site/json-ld';
import { getAllProjects } from '@/lib/content';
import { breadcrumbJsonLd } from '@/lib/json-ld';
import { getCopy } from '@/lib/copy';
import type { Locale } from '@/lib/locale';
import { withLocale } from '@/lib/locale';

export async function ProjectsListPage({ locale }: { locale: Locale }) {
  const { page, common } = getCopy(locale);
  const projects = await getAllProjects();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: common.home, path: withLocale('/', locale) },
          { name: common.projects, path: withLocale('/projects', locale) },
        ])}
      />

      <PageHero
        eyebrow={page.projectsList.heroEyebrow}
        title={page.projectsList.heroTitle}
        description={page.projectsList.heroDescription}
      />

      <section className="section">
        <div className="container">
          {projects.length > 0 ? (
            <div className="card-grid">
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} locale={locale} />
              ))}
            </div>
          ) : (
            <div className="empty-state-card">
              <h2>{locale === 'ja' ? 'まだ制作物はありません' : 'No hardware projects yet'}</h2>
              <p>
                {locale === 'ja'
                  ? '公開できる段階になったら、このページに制作物を追加します。'
                  : 'Projects will appear here once they are ready to publish.'}
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
