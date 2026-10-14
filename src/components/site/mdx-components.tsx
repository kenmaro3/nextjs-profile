import { AffiliateCard } from '@/components/site/affiliate-card';
import { Callout } from '@/components/site/callout';
import { GitHubCard } from '@/components/site/github-card';
import { PartsList } from '@/components/site/parts-list';
import { SmartLink } from '@/components/site/smart-link';
import { SponsorCTA } from '@/components/site/sponsor-cta';
import { YouTubeEmbed } from '@/components/site/youtube-embed';

function MdxLink({
  href = '',
  children,
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { children: React.ReactNode }) {
  return <SmartLink href={href}>{children}</SmartLink>;
}

export const mdxComponents = {
  a: MdxLink,
  table: ({ children, ...props }: React.TableHTMLAttributes<HTMLTableElement>) => (
    <div className="article-table" role="region" aria-label="記事内の表" tabIndex={0}>
      <table {...props}>{children}</table>
    </div>
  ),
  AffiliateCard,
  Callout,
  GitHubCard,
  PartsList,
  SponsorCTA,
  YouTubeEmbed,
};
