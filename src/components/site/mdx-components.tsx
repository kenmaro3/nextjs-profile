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
  AffiliateCard,
  Callout,
  GitHubCard,
  PartsList,
  SponsorCTA,
  YouTubeEmbed,
};
