import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/content';
import { siteConfig } from '@/lib/site-config';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();
  const staticRoutes = ['', '/blog', '/en', '/en/blog'];

  return [
    ...staticRoutes.map((route) => {
      const changeFrequency: 'weekly' | 'monthly' = route === '' ? 'weekly' : 'monthly';

      return {
        url: `${siteConfig.url}${route || '/'}`,
        lastModified: new Date(),
        changeFrequency,
        priority: route === '' ? 1 : 0.8,
      };
    }),
    ...posts.map((post) => ({
      url: `${siteConfig.url}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...posts.map((post) => ({
      url: `${siteConfig.url}/en/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
