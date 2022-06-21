import type { NextPage } from 'next';
import Link from 'next/link';
import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
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

function Model({ ...props }) {
  const group = useRef()
  useFrame( ({clock}) => {
    if (group.current) {
      group.current.rotation.y = clock.getElapsedTime()
    }
  })
  const { nodes, materials } = useGLTF('/arale.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.평면.geometry} material={materials.매테리얼} position={[-0.68, -0.01, -3.29]} scale={[0, 1, 1]} />
      <mesh geometry={nodes.arale.geometry} material={materials['palette.002']} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

const Home: NextPage = () => (
  <>
    <HeadInfo />
    <Main>
      <div style={{ width: "50vw", height: "50vh" }}>
        <Canvas camera={{ fov:95, psition: [0, 0, 100]}}>
          <Suspense fallback={null}>
            <ambientLight />
            <directionalLight intensity={2} position={[0, 0,50]}/>
            <Model />
            <OrbitControls enablePan enableZoom enableRotate />
          </Suspense>
        </Canvas>
      </div>
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
