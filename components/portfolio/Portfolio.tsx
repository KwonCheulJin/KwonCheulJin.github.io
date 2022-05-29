/* eslint-disable react/no-array-index-key */
import styled from '@emotion/styled';
import Link from 'next/link';
import Image from 'next/image';

const PortfolioContainer = styled.section`
  .portfolio__container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
  }

  .portfolio__item {
    background: var(--color-bg-variant);
    padding: 1.3rem;
    border-radius: 2rem;
    border: 1px solid transparent;
    transition: var(--transition);
    & h3 {
      text-align: center;
      margin: 1.2rem 0 2rem;
    }
    &-cta {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 1rem;
    }
    &-image {
      width: 100%;
      height: 300px;
      position: relative;
      & .image {
        width: 100%;
        height: 100%;
        border-radius: 1.5rem;
        position: relative !important;
        object-fit: cover; // Optional
      }
    }
    &:hover {
      border-color: var(--color-primary-variant);
      background: transparent;
    }
  }

  /* ===== MEDIA QUERIES(MEDIUM DEVICES) ===== */

  @media screen and (max-width: 1024px) {
    .portfolio__container {
      grid-template-columns: 1fr 1fr;
      gap: 1.2rem;
    }

    .portfolio__item {
      &-image {
        width: 100%;
        height: 250px;
      }
    }
  }

  /* ===== MEDIA QUERIES(SMALL DEVICES) ===== */

  @media screen and (max-width: 600px) {
    .portfolio__container {
      grid-template-columns: 1fr;
      gap: 1.2rem;
    }

    .portfolio__item {
      &-image {
        width: 100%;
        height: 250px;
      }
    }
  }
`;

function Portfolio() {
  return (
    <PortfolioContainer id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {[...Array(6)].map((_, i) => (
          <article key={i} className="portfolio__item">
            <div className="portfolio__item-image">
              <Image
                alt={`portfolio${i + 1}`}
                src={`/portfolio${i + 1}.jpg`}
                layout="fill"
                className="image"
              />
            </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <Link href="https://github.com">
                <a target="_blank" className="btn">
                  Github
                </a>
              </Link>
              <Link href="https://dribbble.com/Alien_pixels">
                <a target="_blank" className="btn btn-primary">
                  Live Demo
                </a>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </PortfolioContainer>
  );
}

export default Portfolio;
