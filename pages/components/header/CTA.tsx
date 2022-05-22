import Link from 'next/link';
import styled from '@emotion/styled';

const CTAContainer = styled.div`
  margin-top: 2.5rem;
  display: flex;
  gap: 1.2rem;
  justify-content: center;
`;

const CTA = () => {
  return (
    <CTAContainer className="cta">
      <Link href="#contact">
        <a className="btn btn-primary">Let's Talk</a>
      </Link>
    </CTAContainer>
  );
};

export default CTA;
