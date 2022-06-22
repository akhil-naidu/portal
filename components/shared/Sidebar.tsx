import {
  Aside,
  Avatar,
  Box,
  Group,
  MediaQuery,
  Paper,
  ScrollArea,
  Stack,
  Text,
  Title,
  UnstyledButton,
} from '@mantine/core';

import customButtonStyles from './customButtonStyles';

const SidebarData = [
  {
    title: 'Trending posts',
    data: [
      {
        image:
          'https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Mahadev-Bhagwan-Photo-for-Devotee.jpg',
        text: 'Paper is the most basic ui component',
      },
      {
        image:
          'https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Mahadev-Bhagwan-Photo-for-Devotee.jpg',
        text: 'Paper is the most basic ui component',
      },
      {
        image:
          'https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Mahadev-Bhagwan-Photo-for-Devotee.jpg',
        text: 'Paper is the most basic ui component',
      },
      {
        image:
          'https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Mahadev-Bhagwan-Photo-for-Devotee.jpg',
        text: 'Paper is the most basic ui component',
      },
      {
        image:
          'https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Mahadev-Bhagwan-Photo-for-Devotee.jpg',
        text: 'Paper is the most basic ui component',
      },
      {
        image:
          'https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Mahadev-Bhagwan-Photo-for-Devotee.jpg',
        text: 'Paper is the most basic ui component',
      },
      {
        image:
          'https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Mahadev-Bhagwan-Photo-for-Devotee.jpg',
        text: 'Paper is the most basic ui component',
      },
      {
        image:
          'https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Mahadev-Bhagwan-Photo-for-Devotee.jpg',
        text: 'Paper is the most basic ui component',
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <MediaQuery smallerThan='md' styles={{ display: 'none' }}>
      <Aside hiddenBreakpoint='md' width={{ sm: 200, lg: 300 }}>
        <Stack>
          <Box>
            <Title order={5} pt='md' px='xs'>
              {SidebarData[0].title}
            </Title>
            <Paper
              component={ScrollArea}
              m='xs'
              p='xs'
              radius='md'
              shadow='xs'
              sx={{ height: 250 }}
              withBorder
            >
              {SidebarData[0].data.map((data, index) => {
                return (
                  <UnstyledButton
                    key={index}
                    sx={(theme) =>
                      customButtonStyles(theme, {
                        padding: '0px',
                        paddingTop: '8px',
                        paddingBottom: '8px',
                        borderRadius: '8px',
                      })
                    }
                  >
                    <Group noWrap>
                      <Avatar alt={data.text} radius='xl' src={data.image} />

                      <Text size='sm'>{data.text}</Text>
                    </Group>
                  </UnstyledButton>
                );
              })}
            </Paper>
          </Box>
        </Stack>
      </Aside>
    </MediaQuery>
  );
};

export default Sidebar;
