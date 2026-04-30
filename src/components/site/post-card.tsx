import Image from 'next/image';
import { BlogSummary } from '@/lib/content';
import type { Locale } from '@/lib/locale';
import { withLocale } from '@/lib/locale';
import { formatDate } from '@/lib/utils';
import { SmartLink } from '@/components/site/smart-link';
import { TagList } from '@/components/site/tag-list';

type PostCardProps = {
  post: BlogSummary;
  locale?: Locale;
};

export function PostCard({ post, locale = 'ja' }: PostCardProps) {
  const href = withLocale(`/blog/${post.slug}`, locale);

  return (
    <article className="card post-card">
      <SmartLink href={href} className="card-media-link">
        <Image src={post.coverImage} alt={post.title} width={1200} height={630} className="card-media" />
      </SmartLink>

      <div className="card-body">
        <div className="meta-row">
          <span className="meta-pill">{post.category}</span>
          <span className="meta-text">
            {formatDate(post.publishedAt)} · {post.readingTime}
          </span>
        </div>

        <div className="card-copy">
          <SmartLink href={href} className="card-title">
            {post.title}
          </SmartLink>
          <p>{post.description}</p>
        </div>

        <TagList tags={post.tags} />
      </div>
    </article>
  );
}
