import { Text, Input, Group, Grid, ActionIcon, Avatar } from '@mantine/core';
import { Notification, Messages, Settings, Search } from 'tabler-icons-react';

const Header = () => {
  return (
    <Grid>
      <Grid.Col span={4}>
        <Text size='lg' color='dimmed'>
          Portal
        </Text>
      </Grid.Col>
      <Grid.Col span={4}>
        <Input variant='filled' size='sm' icon={<Search />} />
      </Grid.Col>
      <Grid.Col span={4}>
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
            size='md'
          />
        </Group>
      </Grid.Col>
    </Grid>
  );
};

export default Header;
