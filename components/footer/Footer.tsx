import styled from '@emotion/styled';
import Link from 'next/link';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';

const FooterContainer = styled.footer`
  background: var(--color-primary);
  padding: 3rem 0;
  text-align: center;
  font-size: 0.9rem;
  margin-top: 7rem;

  a {
    color: var(--color-bg-top);
    &:hover {
      color: var(--color-white);
    }
  }

  .footer__logo {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 2rem;
    display: inline-block;
  }

  .permalinks {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin: 0 auto 3rem;
  }

  .footer__socails {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 4rem;

    & a {
      background: var(--color-bg-top);
      color: var(--color-white);
      padding: 0.8rem;
      border-radius: 0.7rem;
      display: flex;
      border: 1px solid transparent;

      &:hover {
        background: transparent;
        color: var(--color-bg-top);
        border-color: var(--color-bg-top);
      }
    }
  }

  .footer__copyright {
    margin-bottom: 4rem;
    color: var(--color-bg-top);
  }

  /* ===== MEDIA QUERIES(SMALL DEVICES) ===== */

  @media screen and (max-width: 600px) {
    .permalinks {
      flex-direction: column;
      gap: 1.5rem;
    }

    .footer__socails {
      margin-bottom: 2.6rem;
    }
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <Link href="#">
        <a className="footer__logo">Charles</a>
      </Link>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socails">
        <Link href="https://facebook.com">
          <a>
            <FaFacebookF />
          </a>
        </Link>
        <Link href="https://instagram.com">
          <a>
            <FiInstagram />
          </a>
        </Link>
        <Link href="https://twitter.com">
          <a>
            <IoLogoTwitter />
          </a>
        </Link>
      </div>

      <div className="footer__copyright">
        <small>&copy; EGATOR Tutorials. All rights reserved</small>
      </div>
    </FooterContainer>
  );
}

export default Footer;
