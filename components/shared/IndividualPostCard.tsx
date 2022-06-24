import Link from 'next/link';

import { Bookmark, Heart, Share } from 'tabler-icons-react';

import {
  ActionIcon,
  Avatar,
  Badge,
  Card,
  Divider,
  Group,
  Image,
  MediaQuery,
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

const IndividualPost = ({ post }: any) => {
  const theme = useMantineTheme();
  const { classes } = useStyles();

  const secondaryColor =
    theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7];

  const dividerColor =
    theme.colorScheme === 'light' ? theme.colors.gray[2] : theme.colors.gray[8];

  const Tags = ({ tags }: any) => (
    <Group spacing='xs'>
      {tags.map((tag: any) => (
        <Badge key={tag.name} color={tag.color} variant='light'>
          {tag.name}
        </Badge>
      ))}
    </Group>
  );

  // const RenderedImage = () => (

  // )

  return (
    <div
      key={post.id}
      style={{ maxWidth: '700px', margin: 'auto', paddingBottom: '16px' }}
    >
      <Card withBorder radius='md' p={0}>
        <Link href={post.url} className={classes.card}>
          <div>
            {post?.image && (
              <Card.Section>
                <Image
                  src={post?.image}
                  height={300}
                  className={classes.image}
                  alt={post.title}
                />
              </Card.Section>
            )}

            <div className={classes.body}>
              <Tags tags={post.category} />

              <Title order={2} my='xs'>
                {post.title}
              </Title>
              <Text size='md' style={{ color: secondaryColor, lineHeight: 1.5 }}>
                {post.excerpt}
              </Text>
            </div>
          </div>
        </Link>

        <Divider my='sm' color={dividerColor} />

        <div style={{ paddingInline: '24px', paddingBottom: '10px' }}>
          <Group position='apart' noWrap>
            <Group>
              <Avatar radius='xl' size='md' src={post.author.avatar} />
              <MediaQuery smallerThan={480} styles={{ display: 'none' }}>
                <div>
                  <Text size='xs'>{post.author.name}</Text>

                  <Text size='xs' color='dimmed'>
                    {post.date}
                  </Text>
                </div>
              </MediaQuery>
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
  );
};

export default IndividualPost;
