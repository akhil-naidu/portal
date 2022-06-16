import { CSSObject, MantineTheme } from '@mantine/core';

const customButtonStyles = ({ ...theme }: MantineTheme, props?: any): CSSObject => ({
  display: 'block',
  width: '100%',
  padding: theme.spacing.xs,
  borderRadius: theme.radius.sm,
  color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
  ...props,
  '&:hover': {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
  },
});

export default customButtonStyles;
