import { PageHero } from '@/components/site/page-hero';
import { JsonLd } from '@/components/site/json-ld';
import { SmartLink } from '@/components/site/smart-link';
import { breadcrumbJsonLd } from '@/lib/json-ld';
import { getCopy } from '@/lib/copy';
import type { Locale } from '@/lib/locale';
import { withLocale } from '@/lib/locale';

export function SponsorPage({ locale }: { locale: Locale }) {
  const { page, common } = getCopy(locale);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: common.home, path: withLocale('/', locale) },
          { name: common.sponsor, path: withLocale('/sponsor', locale) },
        ])}
      />

      <PageHero
        eyebrow={page.sponsor.heroEyebrow}
        title={page.sponsor.heroTitle}
        description={page.sponsor.heroDescription}
      />

      <section className="section">
        <div className="container related-grid">
          <div className="support-grid">
            <article className="panel">
              <p className="eyebrow">{page.sponsor.activityEyebrow}</p>
              <h2 className="panel-title">{page.sponsor.activityTitle}</h2>
              <p>{page.sponsor.activityBody}</p>
            </article>

            <article className="panel">
              <p className="eyebrow">{page.sponsor.availableEyebrow}</p>
              <h2 className="panel-title">{page.sponsor.availableTitle}</h2>
              <ul className="offer-list">
                {page.sponsor.availableItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="panel">
              <p className="eyebrow">{page.sponsor.policyEyebrow}</p>
              <h2 className="panel-title">{page.sponsor.policyTitle}</h2>
              <ul className="policy-list">
                {page.sponsor.policyItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>

          <div className="panel">
            <p className="eyebrow">{page.sponsor.contactEyebrow}</p>
            <h2 className="panel-title">{page.sponsor.contactTitle}</h2>
            <p>{page.sponsor.contactBody}</p>
            <div className="resource-links">
              <SmartLink href={withLocale('/contact', locale)} className="button">
                {page.sponsor.contactButton}
              </SmartLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
