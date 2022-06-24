import Link from 'next/link';

import { useState } from 'react';
import {
  CalendarStats,
  DeviceDesktopAnalytics,
  Fingerprint,
  Gauge,
  Home2,
  Settings,
  User,
} from 'tabler-icons-react';

import {
  Box,
  Navbar,
  ScrollArea,
  Title,
  Tooltip,
  UnstyledButton,
  createStyles,
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
  },

  aside: {
    flex: '0 0 60px',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRight: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    paddingTop: '4px',
  },

  main: {
    flex: 1,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
  },

  mainLink: {
    width: 32,
    height: 32,
    marginInline: 12,
    marginBlock: 2,
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    },
  },

  mainLinkActive: {
    '&, &:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
          : theme.colors[theme.primaryColor][0],
      color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 7],
    },
  },

  title: {
    boxSizing: 'border-box',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.sm,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    padding: theme.spacing.md,
    paddingTop: 12,
    height: 48,
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
  },

  link: {
    boxSizing: 'border-box',
    display: 'block',
    textDecoration: 'none',
    borderTopRightRadius: theme.radius.md,
    borderBottomRightRadius: theme.radius.md,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    padding: `0 ${theme.spacing.md}px`,
    fontSize: theme.fontSizes.sm,
    marginRight: theme.spacing.md,
    height: 36,
    lineHeight: '36px',

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },

  linkActive: {
    '&, &:hover': {
      borderLeftColor:
        theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 7 : 5],
      backgroundColor:
        theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 7 : 5],
      color: theme.white,
    },
  },
}));

const mainLinksData = [
  { icon: Home2, label: 'Home' },
  { icon: Gauge, label: 'Dashboard' },
  { icon: DeviceDesktopAnalytics, label: 'Analytics' },
  { icon: CalendarStats, label: 'Releases' },
  { icon: User, label: 'Account' },
  { icon: Fingerprint, label: 'Security' },
  { icon: Settings, label: 'Settings' },
];

const linksData = [
  'Security',
  'Settings',
  'Dashboard',
  'Releases',
  'Account',
  'Orders',
  'Clients',
  'Databases',
  'Pull Requests',
  'Open Issues',
  'Wiki pages',
];

const DoubleNavbar = () => {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState('Home');
  const [activeLink, setActiveLink] = useState('Dashboard');

  const mainLinks = mainLinksData.map((link) => (
    <Tooltip
      label={link.label}
      position='right'
      withArrow
      transitionDuration={0}
      key={link.label}
    >
      <UnstyledButton
        onClick={() => setActive(link.label)}
        className={cx(classes.mainLink, {
          [classes.mainLinkActive]: link.label === active,
        })}
      >
        <link.icon size={20} strokeWidth={1.5} />
      </UnstyledButton>
    </Tooltip>
  ));

  const links = linksData.map((link) => (
    <Link href='/' key={link} passHref>
      <a
        className={cx(classes.link, { [classes.linkActive]: activeLink === link })}
        onClick={(event) => {
          event.preventDefault();
          setActiveLink(link);
        }}
      >
        {link}
      </a>
    </Link>
  ));

  return (
    <Navbar style={{ maxWidth: 300, width: 'inherit' }}>
      <Navbar.Section grow className={classes.wrapper}>
        <ScrollArea className={classes.aside}>{mainLinks}</ScrollArea>
        <Box className={classes.main}>
          <Title order={5} className={classes.title}>
            {active}
          </Title>
          <ScrollArea>{links}</ScrollArea>
        </Box>
      </Navbar.Section>
    </Navbar>
  );
};

export default DoubleNavbar;
