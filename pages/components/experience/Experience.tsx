import styled from '@emotion/styled';
import { BsPatchCheckFill } from 'react-icons/bs';

const ExperienceContainer = styled.section`
  .experience__container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    & > div {
      background: var(--color-bg-variant);
      padding: 2.4rem 5rem;
      border-radius: 2rem;
      border: 1px solid transparent;
      transition: var(--transition);
      & h3 {
        text-align: center;
        margin-bottom: 2rem;
        color: var(--color-primary);
      }
      &:hover {
        background: transparent;
        border-color: var(--color-primary-variant);
        cursor: default;
      }
    }
  }

  .experience__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 2rem;
  }

  .experience__details {
    display: flex;
    gap: 1rem;
    &-icon {
      margin-top: 6px;
      color: var(--color-primary);
    }
  }

  /* ===== MEDIA QUERIES(MEDIUM DEVICES) ===== */

  @media screen and (max-width: 1024px) {
    .experience__container {
      grid-template-columns: 1fr;
      & > div {
        width: 80%;
        padding: 2rem;
        margin: 0 auto;
      }
    }

    .experience__content {
      padding: 1rem;
    }

    .experience__details {
      justify-content: center;
    }
  }

  /* ===== MEDIA QUERIES(SMALL DEVICES) ===== */

  @media screen and (max-width: 600px) {
    .experience__container {
      gap: 1rem;
      & > div {
        width: 100%;
        padding: 2rem 1rem;
      }
    }
  }
`;

const frontendSkills = [
  {
    key: '1',
    skill: 'HTML',
    text: 'Experienced',
  },
  {
    key: '2',
    skill: 'CSS',
    text: 'Intermediate',
  },
  {
    key: '3',
    skill: 'JavaScript',
    text: 'Experienced',
  },
  {
    key: '4',
    skill: 'Bootstrap',
    text: 'Experienced',
  },
  {
    key: '5',
    skill: 'React',
    text: 'Experienced',
  },
];

const backendSkills = [
  {
    key: '1',
    skill: 'Node JS',
    text: 'Experienced',
  },
  {
    key: '2',
    skill: 'Java',
    text: 'Experienced',
  },
  {
    key: '3',
    skill: 'GraphQL',
    text: 'Basic',
  },
  {
    key: '4',
    skill: 'MariaDB',
    text: 'Basic',
  },
  {
    key: '5',
    skill: 'PostgreSQL',
    text: 'Basic',
  },
];

function Experience() {
  return (
    <ExperienceContainer id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {frontendSkills.map(item => (
              <article key={item.key} className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>{item.skill}</h4>
                  <small className="text-light">{item.text}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {backendSkills.map(item => (
              <article key={item.key} className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>{item.skill}</h4>
                  <small className="text-light">{item.text}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </ExperienceContainer>
  );
}

export default Experience;
