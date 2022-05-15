import React from 'react';
import { Main } from '.';
import styled from '@emotion/styled';
import Link from 'next/link';

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  padding-top: 40px;
  font-size: 18px;
  font-weight: 700;
  a {
    color: #b388ff;
    text-decoration: none;
    &:not(:last-child) {
      padding-right: 20px;
    }
  }
`;

function main() {
  return (
    <>
      <Nav>
        <Link href="/date-range">DATE-RANGE</Link>
      </Nav>
      <Main>main</Main>
    </>
  );
}

export default main;
