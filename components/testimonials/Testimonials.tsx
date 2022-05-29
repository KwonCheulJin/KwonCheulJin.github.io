/* eslint-disable react/no-array-index-key */
import styled from '@emotion/styled';
import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const TestimonialsContainer = styled.section`
  .container {
    &.testimonials__container {
      width: 40%;
      padding-bottom: 4rem;
    }
  }

  .testimonial {
    background: var(--color-bg-variant);
    text-align: center;
    padding: 2rem;
    border-radius: 2rem;
    user-select: none;
  }

  .client__avatar {
    width: 4rem;
    aspect-ratio: 1/1;
    overflow: hidden;
    border-radius: 50%;
    margin: 0 auto 1rem;
    border: 0.4rem solid var(--color-primary-variant);
    position: relative;
    & .image {
      width: 100%;
      height: 100%;
      border-radius: 1.5rem;
      position: relative !important;
      object-fit: cover; // Optional
    }
  }

  .client__review {
    color: var(--color-light);
    font-weight: 300;
    display: block;
    width: 80%;
    margin: 0.8rem auto 0;
  }

  .swiper-pagination-bullet.swiper-pagination-bullet-active {
    background: var(--color-primary);
  }

  /* ===== MEDIA QUERIES(MEDIUM DEVICES) ===== */

  @media screen and (max-width: 1024px) {
    .container {
      &.testimonials__container {
        width: 60%;
      }
    }
  }

  /* ===== MEDIA QUERIES(SMALL DEVICES) ===== */

  @media screen and (max-width: 600px) {
    .container {
      &.testimonials__container {
        width: var(--container-width-sm);
      }
    }

    .client__review {
      width: var(--container-width-sm);
    }
  }
`;

function Testimonials() {
  return (
    <TestimonialsContainer id="testmonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        spaceBetween={40}
        slidesPerView={1}
        pagination
        modules={[Pagination]}
        loop
      >
        {[...Array(4)].map((_, i) => (
          <SwiperSlide key={i} className="testimonial">
            <div className="client__avatar">
              <Image
                alt={`avatar${i + 1}`}
                src={`/avatar${i + 1}.jpg`}
                layout="fill"
                className="image"
              />
            </div>
            <h5 className="client__name">Ernest Achieer</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nihil adipisci
              aliquid harum dolore minus soluta tenetur laudantium labore molestias, doloribus iste
              officia, laboriosam, dignissimos tempora eveniet animi blanditiis ipsum!
            </small>
          </SwiperSlide>
        ))}
      </Swiper>
    </TestimonialsContainer>
  );
}

export default Testimonials;
