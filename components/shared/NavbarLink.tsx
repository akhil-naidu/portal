import React from 'react';

import { Center, Group, Text, ThemeIcon, UnstyledButton } from '@mantine/core';

interface NavbarLinkProps {
  icon: React.ReactNode;
  color?: string;
  label: string;
}

const NavbarLink = ({ icon, color, label }: NavbarLinkProps) => {
  return (
    <Center>
      <UnstyledButton
        sx={(theme) => ({
          display: 'block',
          width: '100%',
          height: '40px',
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

          '&:hover': {
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
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

export default NavbarLink;
