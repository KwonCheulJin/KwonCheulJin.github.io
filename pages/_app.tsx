import { css, Global } from '@emotion/react';
import reset from '../styles/reset';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global
        styles={css`
          ${reset}
        `}
      />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
