import {
  Input,
  Group,
  Grid,
  ActionIcon,
  Avatar,
  MediaQuery,
  Burger,
  Text,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Notification, Messages, Settings, Search } from 'tabler-icons-react';

import { useDashboardStore } from '@/utils/store/useDashboardStore';

const Header = ({ theme }: any) => {
  const isBurger = useDashboardStore((state) => state.isBurger);
  const toggleBurger = useDashboardStore((state) => state.toggleBurger);

  const removeSearch = useMediaQuery('(min-width: 700px)', false);

  return (
    <Grid columns={18}>
      <Grid.Col span={removeSearch ? 6 : 8}>
        <Group>
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
      </Grid.Col>
      {removeSearch && (
        <Grid.Col span={6}>
          <Input variant='filled' size='xs' icon={<Search />} />
        </Grid.Col>
      )}
      <Grid.Col span={removeSearch ? 6 : 10}>
        <Group position='right' spacing='xs'>
          <ActionIcon onClick={() => console.log('clicked')}>
            <Settings size={20} strokeWidth={1} />
          </ActionIcon>
          <ActionIcon>
            <Notification size={20} strokeWidth={1} />
          </ActionIcon>
          <ActionIcon>
            <Messages size={20} strokeWidth={1} />
          </ActionIcon>
          <Avatar
            src='https://api.lorem.space/image/face?hash=33791'
            alt='Profile Picture of the User'
            radius='xl'
            size='sm'
          />
        </Group>
      </Grid.Col>
    </Grid>
  );
};

export default Header;
