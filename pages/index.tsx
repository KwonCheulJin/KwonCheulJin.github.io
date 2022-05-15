import type { NextPage } from 'next';
import { useState, useLayoutEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import TypeIt from 'typeit-react';
import styled from '@emotion/styled';
import { Button } from '@mui/material';

const HomeContainer = styled.div``;

export const Main = styled.main`
  min-height: 100vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 45px;
  font-weight: 700;
  color: #b388ff;
  --ti-cursor-margin-left: 0.1em;
  --ti-cursor-color: #b388ff;
  --ti-cursor-font-size: 45px;
`;

const Section = styled.section`
  margin-top: 40px;
  .btn-container {
    -webkit-animation: fadeOut 15s ease-in-out;
    -moz-animation: fadeOut 15s ease-in-out;
    -ms-animation: fadeOut 15s ease-in-out;
    -o-animation: fadeOut 15s ease-in-out;
    animation: fadeOut 15s ease-in-out;
    a {
      text-decoration: none;
    }
  }
  @keyframes fadeOut {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Home: NextPage = () => {
  return (
    <HomeContainer>
      <Head>
        <title>Charles's Blog</title>
        <meta name="description" content="Charles's Practice Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <TypeIt
          options={{
            loop: true,
            loopDelay: 1000,
            deleteSpeed: 80,
          }}
          getBeforeInit={instance => {
            instance
              .type('Hello, World?')
              .pause(1000)
              .delete(7)
              .pause(750)
              .type(" Charles's Blog!")
              .pause(1000)
              .go();

            // Remember to return it!
            return instance;
          }}
        />
        <Section>
          <div className="btn-container">
            <Link href="/main">
              <Button size="large" variant="outlined" color="secondary">
                Welcome
              </Button>
            </Link>
          </div>
        </Section>
      </Main>
    </HomeContainer>
  );
};

export default Home;
