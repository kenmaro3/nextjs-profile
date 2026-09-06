import { ProjectsListPage } from '@/components/pages/projects-list-page';
import { buildMetadata } from '@/lib/metadata';
import { pageCopy } from '@/lib/copy';

export const metadata = buildMetadata({
  title: pageCopy.en.projectsList.title,
  description: pageCopy.en.projectsList.description,
  path: '/en/projects',
  keywords: ['hardware projects', 'robotics portfolio', 'ESP32 projects', 'build log'],
});

export default async function Page() {
  return <ProjectsListPage locale="en" />;
}
