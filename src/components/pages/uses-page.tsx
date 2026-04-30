import { AffiliateCard } from '@/components/site/affiliate-card';
import { PageHero } from '@/components/site/page-hero';
import { JsonLd } from '@/components/site/json-ld';
import { usesCategories } from '@/data/uses';
import { breadcrumbJsonLd } from '@/lib/json-ld';
import { getCopy } from '@/lib/copy';
import type { Locale } from '@/lib/locale';
import { withLocale } from '@/lib/locale';

export function UsesPage({ locale }: { locale: Locale }) {
  const { page, common } = getCopy(locale);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: common.home, path: withLocale('/', locale) },
          { name: common.uses, path: withLocale('/uses', locale) },
        ])}
      />

      <PageHero
        eyebrow={page.uses.heroEyebrow}
        title={page.uses.heroTitle}
        description={page.uses.heroDescription}
      />

      <section className="section">
        <div className="container related-grid">
          {usesCategories.map((category) => (
            <section key={category.title} className="content-grid">
              <div className="section-heading">
                <div>
                  <p className="eyebrow">{category.title}</p>
                  <h2>{category.title}</h2>
                </div>
                <p>{category.description}</p>
              </div>

              <div className="uses-grid">
                {category.items.map((item) => (
                  <AffiliateCard
                    key={item.title}
                    title={item.title}
                    image={item.image}
                    comment={item.comment}
                    url={item.url}
                    label={item.affiliate ? page.uses.affiliateLabel : page.uses.referenceLabel}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
