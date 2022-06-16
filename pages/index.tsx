import type { NextPage } from 'next';

import { DashboardLayout } from '@/components/DashboardLayout';
import { DashboardFeed } from '@/components/shared';

const Home: NextPage = () => {
  return (
    <DashboardLayout enableSidebar={true}>
      <DashboardFeed />
    </DashboardLayout>
  );
};

export default Home;
