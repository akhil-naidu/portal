import { AppProps } from 'next/app';
import Head from 'next/head';

import { MantineProvider } from '@mantine/core';

import { useGlobalStore } from '@/lib/store/';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const isDarkMode = useGlobalStore((state) => state.isDarkMode);

  const currentTheme = isDarkMode ? 'dark' : 'light';

  return (
    <>
      <Head>
        <title>Portal</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: currentTheme,
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
