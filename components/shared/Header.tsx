import { Messages, Notification, Search, Settings } from 'tabler-icons-react';

import {
  ActionIcon,
  Avatar,
  Burger,
  Group,
  Input,
  MediaQuery,
  Text,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import { useDashboardStore } from '@/utils/store/useDashboardStore';

const Header = ({ theme }: any) => {
  const isBurger = useDashboardStore((state) => state.isBurger);
  const toggleBurger = useDashboardStore((state) => state.toggleBurger);

  const showSearch = useMediaQuery('(min-width: 700px)', true);
  const showHeaderActions = useMediaQuery('(min-width: 360px)', true);

  return (
    <Group grow spacing='xs'>
      {/* Burger and Logo */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
          <Burger
            opened={isBurger}
            onClick={() => toggleBurger()}
            size='sm'
            color={theme.colors.gray[6]}
            mr='xs'
          />
        </MediaQuery>
        <Text size='xl' color='blue' weight={700}>
          Portal
        </Text>
      </div>

      {/* Search Bar */}
      {showSearch && <Input variant='filled' size='xs' icon={<Search />} />}

      {/* User Info Block*/}
      <Group spacing='xs' position='right'>
        {showHeaderActions && (
          <Group spacing='xs'>
            <ActionIcon onClick={() => console.log('clicked')}>
              <Settings size={20} strokeWidth={1} />
            </ActionIcon>
            <ActionIcon>
              <Notification size={20} strokeWidth={1} />
            </ActionIcon>
            <ActionIcon>
              <Messages size={20} strokeWidth={1} />
            </ActionIcon>
          </Group>
        )}
        <Avatar
          src='https://api.lorem.space/image/face?hash=33791'
          alt='Profile Picture of the User'
          radius='xl'
          size='sm'
        />
      </Group>
    </Group>
  );
};

export default Header;
