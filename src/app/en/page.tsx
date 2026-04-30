import { HomePage } from '@/components/pages/home-page';
import { buildMetadata } from '@/lib/metadata';
import { pageCopy } from '@/lib/copy';

export const metadata = buildMetadata({
  title: pageCopy.en.home.title,
  description: pageCopy.en.home.description,
  path: '/en',
  keywords: ['hardware DIY', 'robotics', 'ESP32', 'Arduino', '3D printing', 'Raspberry Pi', 'build log'],
});

export default async function Page() {
  return <HomePage locale="en" />;
}
