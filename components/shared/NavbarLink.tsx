import React from 'react';

import { Group, Text, ThemeIcon, UnstyledButton } from '@mantine/core';

import { customButtonStyles } from '@/components/shared';

interface NavbarLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
}

const NavbarLink = ({ icon, color, label }: NavbarLinkProps) => {
  return (
    <UnstyledButton sx={(theme) => customButtonStyles(theme, { padding: '8px' })}>
      <Group noWrap>
        <ThemeIcon color={color} variant='light'>
          {icon}
        </ThemeIcon>

        <Text size='sm'>{label}</Text>
      </Group>
    </UnstyledButton>
  );
};

export default NavbarLink;
