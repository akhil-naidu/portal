import { useEffect, useState } from 'react';

import { Center, Loader } from '@mantine/core';

import type { NextPage } from 'next';

import { UserAuth } from '@/components/Auth';
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
    <UserAuth>
      <DashboardLayout enableSidebar={true}>
        <DashboardFeed />
      </DashboardLayout>
    </UserAuth>
  );
};

export default Home;
