import { SmartLink } from '@/components/site/smart-link';
import { getYouTubeVideoId } from '@/lib/utils';

type YouTubeEmbedProps = {
  url: string;
  title?: string;
};

export function YouTubeEmbed({ url, title = 'YouTube video' }: YouTubeEmbedProps) {
  const videoId = getYouTubeVideoId(url);

  if (!videoId) {
    return (
      <div className="video-fallback">
        <p>Video link</p>
        <SmartLink href={url}>{title}</SmartLink>
      </div>
    );
  }

  return (
    <div className="video-frame">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
