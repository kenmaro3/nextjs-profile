import { ProjectsListPage } from '@/components/pages/projects-list-page';
import { buildMetadata } from '@/lib/metadata';
import { pageCopy } from '@/lib/copy';

export const metadata = buildMetadata({
  title: pageCopy.ja.projectsList.title,
  description: pageCopy.ja.projectsList.description,
  path: '/projects',
  keywords: ['hardware projects', 'robotics portfolio', 'ESP32 projects', 'build log'],
});

export default async function Page() {
  return <ProjectsListPage locale="ja" />;
}
