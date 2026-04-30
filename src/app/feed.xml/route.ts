import { getAllPosts } from '@/lib/content';
import { siteConfig } from '@/lib/site-config';

export const dynamic = 'force-static';

export async function GET() {
  const posts = await getAllPosts();

  const items = posts
    .map(
      (post) => `
        <item>
          <title><![CDATA[${post.title}]]></title>
          <link>${siteConfig.url}/blog/${post.slug}</link>
          <guid>${siteConfig.url}/blog/${post.slug}</guid>
          <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
          <description><![CDATA[${post.description}]]></description>
        </item>`,
    )
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>${siteConfig.name}</title>
        <link>${siteConfig.url}</link>
        <description>${siteConfig.description}</description>
        <language>en</language>
        ${items}
      </channel>
    </rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
