import type { NextPage } from 'next';
import { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Input,
  TextInput,
  Group,
  Button,
} from '@mantine/core';
import { Search, Settings, Notification, Messages } from 'tabler-icons-react';

const Home: NextPage = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint='sm'
      asideOffsetBreakpoint='sm'
      fixed
      navbar={
        <Navbar
          p='md'
          hiddenBreakpoint='sm'
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
        >
          <Text>Application navbar</Text>
        </Navbar>
      }
      aside={
        <MediaQuery smallerThan='md' styles={{ display: 'none' }}>
          <Aside p='md' hiddenBreakpoint='md' width={{ sm: 200, lg: 300 }}>
            <Text>Application sidebar</Text>
          </Aside>
        </MediaQuery>
      }
      footer={
        <Footer height={60} p='md'>
          Application footer
        </Footer>
      }
      header={
        <Header height={70} p='md'>
          <Group
            position='apart'
            // style={{
            //   // display: 'flex',
            //   // alignItems: 'center',
            //   height: '100%',
            // }}
          >
            <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size='sm'
                color={theme.colors.gray[6]}
                mr='xl'
              />
            </MediaQuery>
            {/* <Group position='right'> */}
            <Text>Application header</Text>
            <Input variant='filled' size='sm' icon={<Search />} />
            <Group position='right' spacing='xs'>
              <Settings size={20} strokeWidth={1} />
              <Notification size={20} strokeWidth={1} />
              <Messages size={20} strokeWidth={1} />
              <img
                src='https://global-uploads.webflow.com/5dc6336c6ade633733ef6e44/61b223b3016df958c1fc033b_screenshot-header-avatar.png'
                alt='profile'
              ></img>
            </Group>
          </Group>
          {/* </Group> */}
        </Header>
      }
    >
      <Text>Resize app to see responsive navbar in action</Text>
    </AppShell>
  );
};

export default Home;
