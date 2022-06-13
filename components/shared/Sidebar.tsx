import { MediaQuery, Aside, Text } from '@mantine/core';
import React from 'react';

const Sidebar = () => {
  return (
    <MediaQuery smallerThan='md' styles={{ display: 'none' }}>
      <Aside p='md' hiddenBreakpoint='md' width={{ sm: 200, lg: 300 }}>
        <Text>Application sidebar</Text>
      </Aside>
    </MediaQuery>
  );
};

export default Sidebar;
