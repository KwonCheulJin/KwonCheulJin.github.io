/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from '@emotion/styled';
import Link from 'next/link';
import { MdOutlineEmail } from 'react-icons/md';
import { AiOutlineGithub } from 'react-icons/ai';

import { useRef } from 'react';
import emailjs from 'emailjs-com';

const ContactContainer = styled.section`
  .container.contact__container {
    width: 58%;
    display: grid;
    grid-template-columns: 30% 58%;
    gap: 12%;
  }

  .contact__options {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  .contact__option {
    background: var(--color-bg-variant);
    padding: 1.2rem;
    border-radius: 1.2rem;
    text-align: center;
    border: 1px solid transparent;
    transition: var(--transition);
    &:hover {
      background: transparent;
      border-color: var(--color-primary-variant);
    }
    &-icon {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }

    & a {
      margin-top: 0.7rem;
      display: inline-block;
      font-size: 0.8rem;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  input,
  textarea {
    font-family: 'Poppins', sans-serif;
    width: 100%;
    padding: 1.5rem;
    border-radius: 0.5rem;
    background: transparent;
    border: 2px solid var(--color-primary-variant);
    resize: none;
    color: var(--color-white);
  }

  /* ===== MEDIA QUERIES(MEDIUM DEVICES) ===== */

  @media screen and (max-width: 1024px) {
    .container.contact__container {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }

  /* ===== MEDIA QUERIES(SMALL DEVICES) ===== */

  @media screen and (max-width: 600px) {
    .container.contact__container {
      width: var(--container-width-sm);
    }
  }
`;

function Contact() {
  const form = useRef(null);

  const sendEmail = (e: any) => {
    e.preventDefault();
    e.target.reset();
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_KEY,
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        },
      );
  };

  return (
    <ContactContainer id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>chkftm12@gmail.com</h5>
            <Link href="mailto:chkftm12@gmail.com">
              <a target="_blank">Send a message</a>
            </Link>
          </article>
          <article className="contact__option">
            <AiOutlineGithub className="contact__option-icon" />
            <h4>Github</h4>
            <h5>https://github.com/KwonCheulJin</h5>
            <Link href="https://github.com/KwonCheulJin">
              <a target="_blank">Let's go visiting</a>
            </Link>
          </article>
          {/* <article className="contact__option">
            <RiKakaoTalkFill className="contact__option-icon" />
            <h4>KakaoTalk</h4>
            <h5>chkftm12</h5>
            <Link href="mainto:chkftm12@gmail.com">
              <a>Send a message</a>
            </Link>
          </article> */}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required autoComplete="off" />
          <input type="email" name="email" placeholder="Your Email" required autoComplete="off" />
          <textarea name="message" rows={7} placeholder="Your Message" />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </ContactContainer>
  );
}

export default Contact;
