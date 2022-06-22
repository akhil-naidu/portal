import { useState } from 'react';
import { Messages } from 'tabler-icons-react';

import {
  Avatar,
  Badge,
  Button,
  Card,
  Group,
  Image,
  Input,
  Stack,
  Text,
  Title,
  UnstyledButton,
  createStyles,
  useMantineTheme,
} from '@mantine/core';

import customButtonStyles from './customButtonStyles';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  image: {
    width: '100%',
    overflow: 'hidden',
  },

  body: {
    paddingInline: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
  },
}));

interface PostData {
  image: string;
  category: { name: string; color: string }[];
  title: string;
  excerpt: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
}

const Feed = () => {
  const theme = useMantineTheme();
  const [openCommentSection, setOpenCommentSection] = useState(false);

  const secondaryColor =
    theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7];

  const data: PostData = {
    image:
      'https://www.sentinelassam.com/wp-content/uploads/2019/01/22027956-1538912168011.jpeg',
    category: [
      { name: 'Alcheringa', color: 'blue' },
      { name: 'Entire Campus', color: 'green' },
      { name: 'Badge', color: 'grape' },
    ],
    title: 'The best laptop for Frontend engineers in 2022',
    excerpt: `Alcheringa is the annual cultural festival of the Indian Institute of
    Technology, Guwahati. A splendid idea realised by a group of students in 1996
    at IITG.`,
    date: 'Feb 6th',
    author: {
      name: 'Elsa Brown',
      avatar:
        'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
    },
  };
  const { classes } = useStyles();

  const Tags = () => (
    <Group spacing='xs'>
      {data.category.map((tag) => (
        <Badge key={tag.name} color={tag.color} variant='light'>
          {tag.name}
        </Badge>
      ))}
    </Group>
  );

  return (
    <div style={{ maxWidth: '700px', margin: 'auto' }}>
      <Card withBorder radius='md' className={classes.card}>
        <Card.Section>
          <Image
            src={data.image}
            height={300}
            className={classes.image}
            alt={data.title}
          />
        </Card.Section>
        <div className={classes.body}>
          <Group position='apart'>
            <Tags />
            <div>
              <Group spacing='xs' noWrap>
                <Avatar radius='xl' size='sm' src={data.author.avatar} />
                <Text size='sm' color='dimmed'>
                  {data.author.name}
                </Text>

                <Text size='xs' color='dimmed'>
                  •
                </Text>
                <Text size='sm' color='dimmed'>
                  {data.date}
                </Text>
              </Group>
            </div>
          </Group>
          <Title order={2} my='xs'>
            {data.title}
          </Title>
          <Text size='md' style={{ color: secondaryColor, lineHeight: 1.5 }}>
            {data.excerpt}
          </Text>
        </div>
        <div style={{ paddingInline: '16px', paddingTop: '8px' }}>
          <Group position='apart'>
            <Group noWrap>
              <UnstyledButton
                sx={(theme) => customButtonStyles(theme, { padding: '8px' })}
              >
                <Group>
                  <Messages size={16} />

                  <Text size='sm'>likes</Text>
                </Group>
              </UnstyledButton>
              <UnstyledButton
                sx={(theme) => customButtonStyles(theme, { padding: '8px' })}
                onClick={() => {
                  setOpenCommentSection((prev) => !prev);
                }}
              >
                <Group noWrap>
                  <Messages size={16} />

                  <Text size='sm'>comment</Text>
                </Group>
              </UnstyledButton>
              <UnstyledButton
                sx={(theme) => customButtonStyles(theme, { padding: '8px' })}
              >
                <Group noWrap>
                  <Messages size={16} />

                  <Text size='sm'>share</Text>
                </Group>
              </UnstyledButton>
            </Group>

            <Group position='right'>
              <Text size='sm' color='dimmed'>
                1min read
              </Text>
              <Button color='gray' variant='outline'>
                Save
              </Button>
            </Group>
          </Group>
        </div>

        {openCommentSection ? (
          <div>
            <Input size='xs' p={20} />
            <Group noWrap>
              <Avatar radius='xl' src={data.author.avatar} size={20} ml={4} />
              <Stack spacing={0} justify='flex-end' pb={12}>
                <Text size='sm'>Blake Boston</Text>
                <Text size='xs'>
                  some message he types some message he types some message he types some
                  message he types
                </Text>
              </Stack>
            </Group>
            <Group ml={20} noWrap>
              <Avatar radius='xl' src={data.author.avatar} size={20} ml={4} />
              <Stack spacing={0} justify='flex-end' pb={2}>
                <Text size='sm'>Blake Boston</Text>
                <Text size='xs'>
                  some message he types some message he types some message he types some
                  message he types
                </Text>
              </Stack>
            </Group>
          </div>
        ) : (
          <></>
        )}
      </Card>
    </div>
  );
};
export default Feed;
