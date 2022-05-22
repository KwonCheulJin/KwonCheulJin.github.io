import styled from "@emotion/styled";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

const SocialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  position: absolute;
  left: 0;
  bottom: 3rem;

  &::after {
    content: "";
    width: 2px;
    height: 2rem;
    background: var(--color-primary);
  }
`;

const HeaderSocials = () => {
  return (
    <SocialsContainer className="header__socials">
      <Link href="https://linkedin.com">
        <a target="_blank">
          <BsLinkedin />
        </a>
      </Link>
      <Link href="https://github.com">
        <a target="_blank">
          <FaGithub />
        </a>
      </Link>
      <Link href="https://dribbble.com">
        <a target="_blank">
          <FiDribbble />
        </a>
      </Link>
    </SocialsContainer>
  );
};

export default HeaderSocials;
