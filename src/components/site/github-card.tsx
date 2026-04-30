import { SmartLink } from '@/components/site/smart-link';

type GitHubCardProps = {
  url: string;
  title?: string;
  description?: string;
};

export function GitHubCard({
  url,
  title = 'GitHub repository',
  description = 'Code, logs, and supporting files live here.',
}: GitHubCardProps) {
  return (
    <div className="github-card">
      <span className="meta-pill">GitHub</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <SmartLink href={url} className="button button-secondary">
        Open repository
      </SmartLink>
    </div>
  );
}
