import React from 'react';
import {
  GitPullRequest,
  AlertCircle,
  Messages,
  Database,
  Home,
} from 'tabler-icons-react';
import {
  ThemeIcon,
  UnstyledButton,
  Group,
  Text,
  Box,
  Center,
} from '@mantine/core';

interface NavbarLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
}

const NavbarLink = ({ icon, color, label }: NavbarLinkProps) => {
  return (
    <Center>
      <UnstyledButton
        sx={(theme) => ({
          display: 'block',
          width: '100%',
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color:
            theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

          '&:hover': {
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
          },
        })}
      >
        <Group>
          <ThemeIcon color={color} variant='light'>
            {icon}
          </ThemeIcon>

          <Text size='sm'>{label}</Text>
        </Group>
      </UnstyledButton>
    </Center>
  );
};

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
];

const Navbar = () => {
  return (
    <Box>
      {/* <NavbarLink icon={} color= {} label={}/> */}

      <Box>
        {navbarInfo.map((individualNavbarInfo) => {
          return (
            <div key={individualNavbarInfo.title}>
              <Text size='lg' weight={500} color={'dimmed'}>
                {individualNavbarInfo.title}
              </Text>
              {individualNavbarInfo.data.map((link) => (
                <NavbarLink {...link} key={link.label} />
              ))}
            </div>
          );
        })}
      </Box>
    </Box>
  );
};

export default Navbar;
