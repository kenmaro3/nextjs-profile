import { SmartLink } from '@/components/site/smart-link';
import { siteConfig } from '@/lib/site-config';

type SponsorCTAProps = {
  title?: string;
  description?: string;
};

export function SponsorCTA({
  title = 'Sponsor, review, or collaboration',
  description = 'If you make tools, components, or hardware that fit this site, I am open to product reviews, technical validation, sponsored videos, and build collaborations.',
}: SponsorCTAProps) {
  return (
    <section className="sponsor-cta">
      <div>
        <p className="eyebrow">Sponsor / Collaboration</p>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div className="cta-actions">
        <SmartLink href={`mailto:${siteConfig.email}`} className="button">
          Email
        </SmartLink>
        <SmartLink href={siteConfig.social.youtube} className="button button-secondary">
          YouTube
        </SmartLink>
      </div>
    </section>
  );
}
