import { BrandInstagram, BrandTwitter, BrandYoutube } from 'tabler-icons-react';

import { ActionIcon, Anchor, Group, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.lg,
      marginBottom: theme.spacing.sm,
    },
  },
}));

const links = [
  {
    link: '#',
    label: 'Contact',
  },
  {
    link: '#',
    label: 'Privacy',
  },
  {
    link: '#',
    label: 'Blog',
  },
  {
    link: '#',
    label: 'Store',
  },
  {
    link: '#',
    label: 'Careers',
  },
];

const Footer = () => {
  const { classes } = useStyles();
  const items = links.map((link) => (
    <Anchor<'a'>
      color='dimmed'
      key={link.label}
      href={link.link}
      sx={{ lineHeight: 1 }}
      onClick={(event) => event.preventDefault()}
      size='sm'
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div style={{ marginBottom: '10px' }}>
      <div className={classes.inner}>
        Portal
        <Group className={classes.links}>{items}</Group>
        <Group spacing={0} position='right' noWrap>
          <ActionIcon size='lg'>
            <BrandTwitter size={18} />
          </ActionIcon>
          <ActionIcon size='lg'>
            <BrandYoutube size={18} />
          </ActionIcon>
          <ActionIcon size='lg'>
            <BrandInstagram size={18} />
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
};

export default Footer;
