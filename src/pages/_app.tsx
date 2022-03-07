import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import { Provider as NextAuthProvider } from 'next-auth/client';
import { Provider as ReduxProvider } from 'react-redux';

import { store } from '~store/store';

import createEmotionCache from '../styles/create-emotion-cache';
import theme from '../styles/theme';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function App({
  Component,
  // @ts-ignore
  emotionCache = clientSideEmotionCache,
  pageProps,
}: AppProps) {
  const { session } = pageProps;
  return (
    <CacheProvider value={emotionCache}>
      <NextAuthProvider session={session}>
        <ReduxProvider store={store}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </ReduxProvider>
      </NextAuthProvider>
    </CacheProvider>
  );
}

export default App;
