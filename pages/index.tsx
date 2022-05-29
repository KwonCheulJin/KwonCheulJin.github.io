import type { NextPage } from 'next';
import Link from 'next/link';
import TypeIt from 'typeit-react';
import styled from '@emotion/styled';
import { Button } from '@mui/material';
import HeadInfo from '../components/HeadInfo';

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  background: black;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 45px;
  font-weight: 700;
  color: #ffc4ff;
  --ti-cursor-margin-left: 0.1em;
  --ti-cursor-color: #ffc4ff;
  --ti-cursor-font-size: 45px;
  /* ===== MEDIA QUERIES(MEDIUM DEVICES) ===== */

  @media screen and (max-width: 1024px) {
  }

  /* ===== MEDIA QUERIES(SMALL DEVICES) ===== */

  @media screen and (max-width: 600px) {
    font-size: 30px;
  }
`;

const Section = styled.div`
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

const CustomBtn = styled(Button)`
  &:hover {
    background: var(--color-primary);
  }
`;

const Home: NextPage = () => (
  <>
    <HeadInfo />
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
            <CustomBtn size="large" variant="outlined" color="secondary">
              Welcome
            </CustomBtn>
          </Link>
        </div>
      </Section>
    </Main>
  </>
);

export default Home;
