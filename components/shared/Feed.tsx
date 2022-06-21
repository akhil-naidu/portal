import { useState } from 'react';
import { Messages } from 'tabler-icons-react';

import {
  Avatar,
  Button,
  Card,
  Group,
  Image,
  Input,
  Stack,
  Text,
  UnstyledButton,
  createStyles,
} from '@mantine/core';

import customButtonStyles from './customButtonStyles';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  image: {
    maxWidth: 720,
    width: '100%',
  },

  title: {
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1.2,
  },

  body: {
    padding: theme.spacing.md,
  },
}));

interface ArticleCardVerticalProps {
  image: string;
  category: string;
  title: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
}

const Feed = () => {
  const [openCommentSection, setOpenCommentSection] = useState(false);

  const data = {
    image:
      'https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    category: 'technology',
    title: 'The best laptop for Frontend engineers in 2022',
    date: 'Feb 6th',
    author: {
      name: 'Elsa Brown',
      avatar:
        'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
    },
  };
  const { classes } = useStyles();

  return (
    <Card withBorder radius='md' p={0} mx={92} className={classes.card}>
      <Group direction='column' noWrap spacing={0}>
        <Image src={data.image} height={320} width={720} className={classes.image} />
        <div className={classes.body}>
          <Text transform='uppercase' color='dimmed' weight={700} size='xs'>
            {data.category}
          </Text>
          <Text className={classes.title} mt='xs' mb='md'>
            {data.title}
          </Text>
          <Group noWrap spacing='xs'>
            <Group spacing='xs' noWrap>
              <Avatar size={20} src={data.author.avatar} />
              <Text size='xs'>{data.author.name}</Text>
            </Group>
            <Text size='xs' color='dimmed'>
              •
            </Text>
            <Text size='xs' color='dimmed'>
              {data.date}
            </Text>
          </Group>
        </div>
      </Group>
      <Group position='apart'>
        <Group noWrap mx={4}>
          <UnstyledButton sx={(theme) => customButtonStyles(theme, { padding: '8px' })}>
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
          <UnstyledButton sx={(theme) => customButtonStyles(theme, { padding: '8px' })}>
            <Group noWrap>
              <Messages size={16} />

              <Text size='sm'>share</Text>
            </Group>
          </UnstyledButton>
        </Group>

        <Group position='right'>
          <Text size='xs'>1min read</Text>
          <Button color='gray'>Save</Button>
        </Group>
      </Group>
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
  );
};
export default Feed;
