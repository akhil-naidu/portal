import { Dispatch, SetStateAction } from 'react';
import {
  Input,
  Group,
  Grid,
  ActionIcon,
  Avatar,
  MediaQuery,
  Burger,
} from '@mantine/core';
import { Notification, Messages, Settings, Search } from 'tabler-icons-react';

interface Props {
  theme: any;
  opened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
}

const Header = ({ theme, opened, setOpened }: Props) => {
  return (
    <Grid align='center' columns={18}>
      <Grid.Col span={4}>
        <Group>
          <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
            <Burger
              opened={opened}
              onClick={() => setOpened((o: boolean) => !o)}
              size='sm'
              color={theme.colors.gray[6]}
              mr='xs'
            />
          </MediaQuery>
          <p>P</p>
        </Group>
      </Grid.Col>
      <Grid.Col span={8}>
        <MediaQuery smallerThan='xs' styles={{ display: 'none' }}>
          <Input variant='filled' size='xs' icon={<Search />} />
        </MediaQuery>
      </Grid.Col>
      <Grid.Col span={6}>
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
