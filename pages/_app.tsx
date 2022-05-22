/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import { css, Global } from '@emotion/react';
import type { AppProps } from 'next/app';
import global from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global
        styles={css`
          ${global}
        `}
      />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
