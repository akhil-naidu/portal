import {
  ArrowsLeftRight,
  Dashboard,
  ListNumbers,
  Messages,
  Moon,
  NewSection,
  Notification,
  Search,
  Settings,
  Sun,
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
  ThemeIcon,
  UnstyledButton,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import { useDashboardStore, useGlobalStore } from '@/lib/store/';

import { customButtonStyles } from '@/components/shared';

const Header = ({ theme }: any) => {
  const isBurger = useDashboardStore((state) => state.isBurger);
  const toggleBurger = useDashboardStore((state) => state.toggleBurger);
  const isDarkMode = useGlobalStore((state) => state.isDarkMode);
  const toggleTheme = useGlobalStore((state) => state.toggleTheme);

  const showSearch = useMediaQuery('(min-width: 768px)', true);
  const showHeaderActions = useMediaQuery('(min-width: 480px)', true);

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
              <ThemeIcon color='green' variant='light'>
                <Settings size={16} strokeWidth={1.5} />
              </ThemeIcon>
            </ActionIcon>

            <ActionIcon onClick={() => console.log('clicked')}>
              <ThemeIcon color='blue' variant='light'>
                <Messages size={20} strokeWidth={1.5} />
              </ThemeIcon>
            </ActionIcon>

            <ActionIcon onClick={() => console.log('clicked')}>
              <ThemeIcon color='grape' variant='light'>
                <Notification size={20} strokeWidth={1.5} />
              </ThemeIcon>
            </ActionIcon>
          </Group>
        )}

        {/* Avatar Menu */}
        <Menu
          trigger='click'
          control={
            <UnstyledButton sx={(theme) => customButtonStyles(theme)}>
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
            <Menu.Item
              icon={<Dashboard size={16} strokeWidth={1.5} color='green' />}
              style={{ paddingBlock: '6px' }}
            >
              <Text size='sm'>Dashboard</Text>
            </Menu.Item>
            <Menu.Item
              icon={<NewSection size={16} strokeWidth={1.5} color='blue' />}
              style={{ paddingBlock: '6px' }}
            >
              <Text size='sm'>Create Post</Text>
            </Menu.Item>
            <Menu.Item
              icon={<ListNumbers size={16} strokeWidth={1.5} color='violet' />}
              style={{ paddingBlock: '6px' }}
            >
              <Text size='sm'> Reading List</Text>
            </Menu.Item>

            <Divider />
          </Box>
          {!showHeaderActions && (
            <Box>
              <Menu.Label>Hidden</Menu.Label>
              <Menu.Item
                icon={<Settings size={16} strokeWidth={1.5} color='green' />}
                style={{ paddingBlock: '6px' }}
              >
                <Text size='sm'> Settings</Text>
              </Menu.Item>
              <Menu.Item
                icon={<Messages size={16} strokeWidth={1.5} color='blue' />}
                style={{ paddingBlock: '6px' }}
              >
                <Text size='sm'> Messages</Text>
              </Menu.Item>
              <Menu.Item
                icon={<Notification size={16} strokeWidth={1.5} color='purple' />}
                style={{ paddingBlock: '6px' }}
              >
                <Text size='sm'> Notification</Text>
              </Menu.Item>

              <Divider />
            </Box>
          )}

          <Box>
            <Menu.Item
              icon={
                isDarkMode ? (
                  <Sun size={16} strokeWidth={1.5} />
                ) : (
                  <Moon size={16} strokeWidth={1.5} />
                )
              }
              style={{ paddingBlock: '6px' }}
              color={isDarkMode ? 'yellow' : 'grape'}
              onClick={() => toggleTheme()}
            >
              <Text color={`${isDarkMode ? 'gray' : 'dark'}`} size='sm'>
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
              </Text>
            </Menu.Item>
            <Menu.Item
              icon={<ArrowsLeftRight size={16} strokeWidth={1.5} />}
              color='blue'
              style={{ paddingBlock: '6px' }}
            >
              <Text color={`${isDarkMode ? 'gray' : 'dark'}`} size='sm'>
                Logout
              </Text>
            </Menu.Item>
          </Box>
        </Menu>
      </Group>
    </Group>
  );
};

export default Header;
