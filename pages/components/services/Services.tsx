/* eslint-disable react/no-array-index-key */
import styled from '@emotion/styled';
import { BiCheck } from 'react-icons/bi';

const ServicesContainer = styled.section`
  .services__container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }

  .service {
    background: var(--color-bg-variant);
    border-radius: 0 0 2rem 2rem;
    border: 1px solid var(--color-primary);
    height: fit-content;
    transition: var(--transition);
    &__head {
      background: var(--color-primary);
      padding: 2rem;
      border-radius: 0 0 2rem 2rem;
      box-shadow: 0 2rem 1rem rgba(0, 0, 0, 0.1);
      & h3 {
        color: var(--color-bg-top);
        font-size: 1rem;
        text-align: center;
      }
    }
    &__list {
      padding: 2rem;
      & li {
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin-bottom: 0.8rem;
      }
      & p {
        width: 250px;
        font-size: 1rem;
      }
      &-icon {
        color: var(--color-primary);
        margin-top: 4px;
      }
    }
    &:hover {
      background: transparent;
      border-color: var(--color-primaty--variant);
      cursor: default;
    }
  }

  /* ===== MEDIA QUERIES(MEDIUM DEVICES) ===== */

  @media screen and (max-width: 1024px) {
    .services__container {
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }

    .service {
      height: auto;
    }
  }

  /* ===== MEDIA QUERIES(SMALL DEVICES) ===== */

  @media screen and (max-width: 600px) {
    .services__container {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }
`;

function Services() {
  return (
    <ServicesContainer id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            {[...Array(7)].map((_, i) => (
              <li key={i}>
                <BiCheck className="service__list-icon" />
                <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
              </li>
            ))}
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            {[...Array(8)].map((_, i) => (
              <li key={i}>
                <BiCheck className="service__list-icon" />
                <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
              </li>
            ))}
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            {[...Array(7)].map((_, i) => (
              <li key={i}>
                <BiCheck className="service__list-icon" />
                <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </ServicesContainer>
  );
}

export default Services;
