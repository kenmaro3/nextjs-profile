import { PageHero } from '@/components/site/page-hero';
import { JsonLd } from '@/components/site/json-ld';
import { SmartLink } from '@/components/site/smart-link';
import { breadcrumbJsonLd } from '@/lib/json-ld';
import { getCopy } from '@/lib/copy';
import type { Locale } from '@/lib/locale';
import { withLocale } from '@/lib/locale';
import { siteConfig } from '@/lib/site-config';

export function ContactPage({ locale }: { locale: Locale }) {
  const { page, common } = getCopy(locale);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: common.home, path: withLocale('/', locale) },
          { name: common.contact, path: withLocale('/contact', locale) },
        ])}
      />

      <PageHero
        eyebrow={page.contact.heroEyebrow}
        title={page.contact.heroTitle}
        description={page.contact.heroDescription}
      />

      <section className="section">
        <div className="container contact-grid">
          <article className="contact-card">
            <p className="eyebrow">{page.contact.emailEyebrow}</p>
            <h2>{page.contact.emailTitle}</h2>
            <p>{page.contact.emailBody}</p>
            <div className="contact-links">
              <SmartLink href={`mailto:${siteConfig.email}`} className="button">
                {siteConfig.email}
              </SmartLink>
            </div>
          </article>

          <article className="contact-card">
            <p className="eyebrow">{page.contact.socialEyebrow}</p>
            <h2>{page.contact.socialTitle}</h2>
            <p>{page.contact.socialBody}</p>
            <div className="contact-links">
              <SmartLink href={siteConfig.social.youtube} className="button button-secondary">
                YouTube
              </SmartLink>
              <SmartLink href={siteConfig.social.x} className="button button-secondary">
                X
              </SmartLink>
              <SmartLink href={siteConfig.social.github} className="button button-secondary">
                GitHub
              </SmartLink>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
