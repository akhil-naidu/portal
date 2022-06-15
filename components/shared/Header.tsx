import {
  ArrowsLeftRight,
  MessageCircle,
  Messages,
  Notification,
  Photo,
  Search,
  Settings,
} from 'tabler-icons-react';

import {
  ActionIcon,
  Avatar,
  Box,
  Burger,
  Divider,
  Group,
  Input,
  MediaQuery,
  Menu,
  Text,
  UnstyledButton,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import { useDashboardStore } from '@/utils/store/useDashboardStore';

const Header = ({ theme }: any) => {
  const isBurger = useDashboardStore((state) => state.isBurger);
  const toggleBurger = useDashboardStore((state) => state.toggleBurger);

  const showSearch = useMediaQuery('(min-width: 700px)', true);
  const showHeaderActions = useMediaQuery('(min-width: 300px)', true);

  return (
    <Group grow spacing='xs'>
      {/* Burger and Logo */}
      <Group spacing='xs' noWrap>
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
      </Group>

      {/* Search Bar */}
      {showSearch && <Input variant='filled' size='xs' icon={<Search />} />}

      {/* User Info Block*/}
      <Group spacing='xs' position='right' noWrap>
        {showHeaderActions && (
          <Group spacing='xs' noWrap>
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

        {/* Avatar Menu */}
        <Menu
          trigger='click'
          control={
            <UnstyledButton
              sx={(theme) => ({
                display: 'block',
                width: '100%',
                padding: theme.spacing.xs,
                borderRadius: theme.radius.sm,
                color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

                '&:hover': {
                  backgroundColor:
                    theme.colorScheme === 'dark'
                      ? theme.colors.dark[6]
                      : theme.colors.gray[0],
                },
              })}
            >
              <Avatar
                src='https://api.lorem.space/image/face?hash=33791'
                alt='Profile Picture of the User'
                radius='xl'
                size='sm'
              />
            </UnstyledButton>
          }
        >
          <Box>
            <Menu.Label>Application</Menu.Label>
            <Menu.Item icon={<Settings size={14} />}>Dashboard</Menu.Item>
            <Menu.Item icon={<MessageCircle size={14} />}>Create Post</Menu.Item>
            <Menu.Item icon={<Photo size={14} />}>Reading List</Menu.Item>

            <Divider />
          </Box>
          {!showHeaderActions && (
            <Box>
              <Menu.Label>Hidden</Menu.Label>
              <Menu.Item icon={<Settings size={14} />}>Settings</Menu.Item>
              <Menu.Item icon={<MessageCircle size={14} />}>Messages</Menu.Item>
              <Menu.Item icon={<Photo size={14} />}>Gallery</Menu.Item>

              <Divider />
            </Box>
          )}

          <Box>
            <Menu.Item icon={<ArrowsLeftRight size={14} />}>Logout</Menu.Item>
          </Box>
        </Menu>
      </Group>
    </Group>
  );
};

export default Header;
