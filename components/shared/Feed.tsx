import Link from 'next/link';

import { Bookmark, Heart, Share } from 'tabler-icons-react';

import {
  ActionIcon,
  Avatar,
  Badge,
  Card,
  Group,
  Image,
  Text,
  Title,
  createStyles,
  useMantineTheme,
} from '@mantine/core';

const useStyles = createStyles((theme, _params, getRef) => {
  const image = getRef('image');
  return {
    card: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      cursor: 'pointer',

      [`&:hover .${image}`]: {
        transform: 'scale(1.03)',
      },
    },

    image: {
      ref: image,

      width: '100%',
      overflow: 'hidden',

      // position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      // backgroundSize: 'cover',
      transition: 'transform 500ms ease',

      [`&:hover `]: {
        transform: 'scale(1.03)',
      },
    },

    body: {
      paddingInline: theme.spacing.xl,
      paddingTop: theme.spacing.xl,
    },
  };
});

interface PostData {
  url: string;
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

  const secondaryColor =
    theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7];

  const data: PostData = {
    url: '/',
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
    <Link href={data.url}>
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
            <Tags />

            <Title order={2} my='xs'>
              {data.title}
            </Title>
            <Text size='md' style={{ color: secondaryColor, lineHeight: 1.5 }}>
              {data.excerpt}
            </Text>
          </div>
          <div style={{ paddingInline: '24px', paddingTop: '8px' }}>
            <Group position='apart'>
              <Group>
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
                <Text size='xs' color='dimmed'>
                  •
                </Text>
                <Text size='sm' color='dimmed'>
                  1min read
                </Text>
              </Group>

              <Group position='right'>
                <ActionIcon>
                  <Heart size={18} color={theme.colors.red[6]} />
                </ActionIcon>
                <ActionIcon>
                  <Bookmark size={18} color={theme.colors.yellow[6]} />
                </ActionIcon>
                <ActionIcon>
                  <Share size={16} color={theme.colors.blue[6]} />
                </ActionIcon>
              </Group>
            </Group>
          </div>
        </Card>
      </div>
    </Link>
  );
};
export default Feed;
