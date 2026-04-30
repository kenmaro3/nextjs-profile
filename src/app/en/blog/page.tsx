import { BlogListPage } from '@/components/pages/blog-list-page';
import { buildMetadata } from '@/lib/metadata';
import { pageCopy } from '@/lib/copy';

export const metadata = buildMetadata({
  title: pageCopy.en.blogList.title,
  description: pageCopy.en.blogList.description,
  path: '/en/blog',
  keywords: ['hardware blog', 'robotics blog', 'ESP32 blog', 'build log'],
});

export default async function Page() {
  return <BlogListPage locale="en" />;
}
