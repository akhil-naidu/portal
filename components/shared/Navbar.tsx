import {
  AlertCircle,
  ClipboardList,
  Database,
  GitPullRequest,
  Home,
  Messages,
  Run,
} from 'tabler-icons-react';

import { Box, ScrollArea, Text } from '@mantine/core';

import { DashboardNavbarLink } from '@/components/shared';

const navbarInfo = [
  {
    title: 'Getting Started',
    data: [
      { icon: <Messages size={16} />, color: 'violet', label: 'Discussions' },
      { icon: <Database size={16} />, color: 'grape', label: 'Databases' },
    ],
  },
  {
    title: 'Advanced',
    data: [
      {
        icon: <GitPullRequest size={16} />,
        color: 'blue',
        label: 'Pull Requests',
      },
      { icon: <AlertCircle size={16} />, color: 'teal', label: 'Open Issues' },
    ],
  },
  {
    title: 'Introductions',
    data: [
      { icon: <Messages size={16} />, color: 'violet', label: 'Discussions' },
      { icon: <Database size={16} />, color: 'grape', label: 'Databases' },
    ],
  },
  {
    title: 'Notification',
    data: [
      { icon: <Messages size={16} />, color: 'violet', label: 'Discussions' },
      { icon: <Database size={16} />, color: 'grape', label: 'Databases' },
    ],
  },
  {
    title: 'More Info',
    data: [
      { icon: <Messages size={16} />, color: 'violet', label: 'Discussions' },
      { icon: <Database size={16} />, color: 'grape', label: 'Databases' },
    ],
  },
];

const Navbar = () => {
  return (
    <Box component={ScrollArea} mx='-xs' px='xs'>
      <DashboardNavbarLink
        icon={<Home size={16} strokeWidth={1.5} />}
        color={'green'}
        label={'Home'}
      />

      <DashboardNavbarLink
        icon={<Run size={16} strokeWidth={1.5} />}
        color={'blue'}
        label={'Getting started'}
      />

      <DashboardNavbarLink
        icon={<ClipboardList size={16} strokeWidth={1.5} />}
        color={'grape'}
        label={'Notice Board'}
      />

      <Box>
        {navbarInfo.map((individualNavbarInfo) => {
          return (
            <Box key={individualNavbarInfo.title}>
              <Text size='md' weight={500} color={'dimmed'} pt='md'>
                {individualNavbarInfo.title}
              </Text>
              {individualNavbarInfo.data.map((link) => (
                <DashboardNavbarLink {...link} key={link.label} />
              ))}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Navbar;
