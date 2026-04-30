import { BlogListPage } from '@/components/pages/blog-list-page';
import { buildMetadata } from '@/lib/metadata';
import { pageCopy } from '@/lib/copy';

export const metadata = buildMetadata({
  title: pageCopy.ja.blogList.title,
  description: pageCopy.ja.blogList.description,
  path: '/blog',
  keywords: ['hardware blog', 'robotics blog', 'ESP32 blog', 'build log'],
});

export default async function Page() {
  return <BlogListPage locale="ja" />;
}
