import type { AppProps } from 'next/app';
import { ServerStyleSheet } from 'styled-components';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const sheet = new ServerStyleSheet();

  return <Component {...pageProps} />;
}

export default MyApp;
