import Image from 'next/image';
import { SmartLink } from '@/components/site/smart-link';

type AffiliateCardProps = {
  title: string;
  image: string;
  comment: string;
  url: string;
  label?: string;
};

export function AffiliateCard({
  title,
  image,
  comment,
  url,
  label = 'PR / affiliate link',
}: AffiliateCardProps) {
  return (
    <div className="affiliate-card">
      <Image src={image} alt={title} width={720} height={480} className="affiliate-image" />
      <div className="affiliate-copy">
        <span className="affiliate-label">{label}</span>
        <h3>{title}</h3>
        <p>{comment}</p>
        <SmartLink href={url} sponsored className="button button-secondary">
          View product
        </SmartLink>
      </div>
    </div>
  );
}
