import { useEffect, useState } from 'react';

import { Center, Loader } from '@mantine/core';

import type { NextPage } from 'next';

import { DashboardLayout } from '@/components/DashboardLayout';
import { DashboardFeed } from '@/components/shared';

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <Center style={{ height: '100vh' }}>
        <Loader />
      </Center>
    );
  }

  return (
    <DashboardLayout enableSidebar={true}>
      <DashboardFeed />
    </DashboardLayout>
  );
};

export default Home;
