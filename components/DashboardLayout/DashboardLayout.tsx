import { AppShell, Footer, Header, Navbar, useMantineTheme } from '@mantine/core';

import { useDashboardStore } from '@/lib/store/';

import {
  DashboardFooter,
  DashboardHeader,
  DashboardNavbar,
  DashboardSidebar,
} from '@/components/shared';

interface DashboardProps {
  enableSidebar: boolean;
  children: any;
}

const DashboardLayout = ({ enableSidebar, children }: DashboardProps) => {
  const theme = useMantineTheme();
  const isBurger = useDashboardStore((state) => state.isBurger);

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint='sm'
      asideOffsetBreakpoint='sm'
      fixed
      navbar={
        <Navbar
          p='md'
          hiddenBreakpoint='sm'
          hidden={!isBurger}
          width={{ sm: 200, lg: 300 }}
        >
          <DashboardNavbar />
        </Navbar>
      }
      aside={<>{enableSidebar && <DashboardSidebar />}</>}
      footer={
        <Footer height={60} p='md'>
          <DashboardFooter />
        </Footer>
      }
      header={
        <Header height={62} p='sm'>
          <DashboardHeader theme={theme} />
        </Header>
      }
    >
      {children}
    </AppShell>
  );
};

export default DashboardLayout;
