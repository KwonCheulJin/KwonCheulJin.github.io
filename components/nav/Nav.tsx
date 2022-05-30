import styled from '@emotion/styled';
import Link from 'next/link';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { useState } from 'react';

const NavContainer = styled.nav`
  background: rgba(0, 0, 0, 0.3);
  width: max-content;
  display: block;
  padding: 0.7rem 1.7rem;
  z-index: 2;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 2rem;
  display: flex;
  gap: 0.8rem;
  border-radius: 3rem;
  backdrop-filter: blur(15px);

  a {
    background: transparent;
    padding: 0.9rem;
    border-radius: 50%;
    display: flex;
    color: var(--color-light);
    font-size: 1.1rem;

    &:hover {
      background: rgba(0, 0, 0, 0.3);
    }

    &.active {
      background: var(--color-primary);
      color: var(--color-bg-top);
    }
  }
`;

function Nav() {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <NavContainer>
      <Link href="#">
        <a onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
          <AiOutlineHome />
        </a>
      </Link>
      <Link href="#about">
        <a
          onClick={() => setActiveNav('#about')}
          className={activeNav === '#about' ? 'active' : ''}
        >
          <AiOutlineUser />
        </a>
      </Link>
      <Link href="#experience">
        <a
          onClick={() => setActiveNav('#experience')}
          className={activeNav === '#experience' ? 'active' : ''}
        >
          <BiBook />
        </a>
      </Link>
      <Link href="#services">
        <a
          onClick={() => setActiveNav('#services')}
          className={activeNav === '#services' ? 'active' : ''}
        >
          <RiServiceLine />
        </a>
      </Link>
      <Link href="#contact">
        <a
          onClick={() => setActiveNav('#contact')}
          className={activeNav === '#contact' ? 'active' : ''}
        >
          <BiMessageSquareDetail />
        </a>
      </Link>
    </NavContainer>
  );
}

export default Nav;
