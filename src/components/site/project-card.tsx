import Image from 'next/image';
import { ProjectSummary } from '@/lib/content';
import type { Locale } from '@/lib/locale';
import { withLocale } from '@/lib/locale';
import { SmartLink } from '@/components/site/smart-link';
import { TagList } from '@/components/site/tag-list';

type ProjectCardProps = {
  project: ProjectSummary;
  locale?: Locale;
};

export function ProjectCard({ project, locale = 'ja' }: ProjectCardProps) {
  const href = withLocale(`/projects/${project.slug}`, locale);

  return (
    <article className="card project-card">
      <SmartLink href={href} className="card-media-link">
        <Image src={project.coverImage} alt={project.title} width={1200} height={630} className="card-media" />
      </SmartLink>

      <div className="card-body">
        <div className="meta-row">
          <span className="status-pill" data-status={project.status}>
            {project.status}
          </span>
          <span className="meta-text">{project.readingTime}</span>
        </div>

        <div className="card-copy">
          <SmartLink href={href} className="card-title">
            {project.title}
          </SmartLink>
          <p>{project.description}</p>
        </div>

        <TagList tags={project.technologies} />
      </div>
    </article>
  );
}
