import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { FaAward, FaRegBuilding } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';

const AboutContainer = styled.section`
  .about__container {
    display: grid;
    grid-template-columns: 35% 50%;
    gap: 15%;
  }

  .about__me {
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 2rem;
    background: linear-gradient(45deg, transparent, var(--color-primary), transparent);
    display: grid;
    place-items: center;

    &-image {
      width: 100%;
      height: 100%;
      border-radius: 2rem;
      overflow: hidden;
      transform: rotate(10deg);
      transition: var(--transition);
      &:hover {
        transform: rotate(0);
      }
      & .image {
        width: 100%;
        height: 100%;
        position: relative !important;
        object-fit: cover; // Optional
      }
    }
  }

  .about__cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  .about__card {
    background: var(--color-bg-variant);
    border: 1px solid transparent;
    border-radius: 1rem;
    padding: 2rem;
    text-align: center;
    & h5 {
      font-size: 0.95rem;
      color: var(--color-white);
    }
    & small {
      font-size: 0.7rem;
      color: var(--color-light);
    }
    &:hover {
      background: transparent;
      border-color: var(--color-primary-variant);
    }
    cursor: default;
  }

  .about__icon {
    color: var(--color-primary);
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }

  .about__content p {
    margin: 2rem 0 2.6rem;
    color: var(--color-light);
  }

  /* ===== MEDIA QUERIES(MEDIUM DEVICES) ===== */

  @media screen and (max-width: 1024px) {
    .about__container {
      grid-template-columns: 1fr;
      gap: 0;
    }

    .about__me {
      width: 50%;
      margin: 2rem auto 5rem;
    }

    .about__content {
      text-align: center;
      & p {
        margin: 1rem 0 1.5rem;
        color: var(--color-light);
      }
    }
  }

  /* ===== MEDIA QUERIES(SMALL DEVICES) ===== */

  @media screen and (max-width: 600px) {
    .about__me {
      width: 65%;
      margin: 0 auto 3rem;
    }

    .about__cards {
      margin: 1rem 1rem;
      grid-template-columns: 1fr 1fr;
    }

    .about__content {
      text-align: center;
      & p {
        margin: 1rem 1rem;
      }
    }
  }
`;

const cardItems = [
  {
    key: '1',
    icon: <FaAward className="about__icon" />,
    title: 'Experience',
    text: '1+ Years Working',
  },
  {
    key: '2',
    icon: <FaRegBuilding className="about__icon" />,
    title: 'Workplace',
    text: 'Opstech',
  },
  {
    key: '3',
    icon: <VscFolderLibrary className="about__icon" />,
    title: 'projects',
    text: '3+ Completed',
  },
];

function About() {
  return (
    <AboutContainer id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <Image alt="me" src="/me2.jpg" layout="fill" className="image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            {cardItems.map(item => (
              <article key={item.key} className="about__card">
                {item.icon}
                <h5>{item.title}</h5>
                <small>{item.text}</small>
              </article>
            ))}
          </div>

          <p>????????? ???????????? ???????????? ???????????????!</p>

          <Link href="#contact">
            <a className="btn btn-primary">Let's Talk</a>
          </Link>
        </div>
      </div>
    </AboutContainer>
  );
}

export default About;
