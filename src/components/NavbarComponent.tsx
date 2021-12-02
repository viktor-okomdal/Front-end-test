import React from 'react';
import styled from 'styled-components';

export const NavbarComponent = () => {
  return (
    <NavbarWrapper>
      <Navbar>
        <NavbarItem>🍦</NavbarItem>
      </Navbar>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.div`
  background-color: grey;
  height: 100px;
  width: 100vw;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavbarItem = styled.a`
  font-size: 2em;
  margin: 20px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.2);
    transform: rotate(360deg);
  }
`;
