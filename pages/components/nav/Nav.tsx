import styled from '@emotion/styled';
import Link from 'next/link';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';

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
      background: var(--color-bg-top);
      color: var(--color-white);
    }
  }
`;

function Nav() {
	return (
		<NavContainer>
			<Link href="#">
				<a className="active">
					<AiOutlineHome />
    </a>
    </Link>
			<Link href="#about">
				<a>
					<AiOutlineUser />
    </a>
    </Link>
			<Link href="#experience">
				<a>
					<BiBook />
    </a>
    </Link>
			<Link href="#services">
				<a>
					<RiServiceLine />
    </a>
    </Link>
			<Link href="#contact">
				<a>
					<BiMessageSquareDetail />
    </a>
    </Link>
    </NavContainer>
	);
}

export default Nav;
