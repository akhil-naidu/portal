import React from 'react';

import { Aside, MediaQuery, Text } from '@mantine/core';

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
