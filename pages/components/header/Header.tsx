import Image from 'next/image';
import Link from 'next/link';
import styled from '@emotion/styled';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';

const HeaderContainer = styled.header`
  height: 100vh;
  padding-top: 7rem;
  overflow: hidden;

  .header__container {
    text-align: center;
    height: 100%;
    position: relative;
  }
  .me {
    background: linear-gradient(var(--color-primary), transparent);
    width: 25%;
    height: 80%;
    border-radius: 15rem 15rem 0 0;
    position: absolute;
    left: 37%;
    margin-top: 4rem;
    overflow: hidden;
    padding: 5rem 1.5rem 1.5rem 1.5rem;
    & .image {
      width: 100%;
      height: 100%;
      position: relative !important;
      object-fit: cover; // Optional
    }
  }

  .scroll__down {
    position: absolute;
    right: -2.3rem;
    bottom: 5rem;
    transform: rotate(90deg);
    font-weight: 300;
    font-size: 0.9rem;
  }

  /* ===== MEDIA QUERIES(MEDIUM DEVICES) ===== */

  @media screen and (max-width: 1024px) {
    height: 68vh;

    .me {
      width: 45%;
      height: 65%;
      left: 28%;
    }
  }

  /* ===== MEDIA QUERIES(SMALL DEVICES) ===== */

  @media screen and (max-width: 600px) {
    height: 100vh;

    .header__socials,
    .scroll__down {
      display: none;
    }

    .me {
      width: 75%;
      height: 65%;
      left: 13%;
    }
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Charles Kwon</h1>
        <h5 className="text-light">FrontEnd Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <Image alt="me" src="/me.png" layout="fill" className="image" />
        </div>

        <Link href="#contact">
          <a className="scroll__down">Scroll Down</a>
        </Link>
      </div>
    </HeaderContainer>
  );
}

export default Header;
