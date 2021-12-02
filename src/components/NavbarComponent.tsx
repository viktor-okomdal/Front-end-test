import React from 'react';
import styled from 'styled-components';

export const NavbarComponent = () => {
  return (
    <NavbarWrapper>
      <Navbar>
        <NavbarItem>Item 1</NavbarItem>
        <NavbarItem>Item 2</NavbarItem>
        <NavbarItem>Item 3</NavbarItem>
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
  justify-content: space-between;
  align-items: center;
`;

const NavbarItem = styled.button`
  border: solid 1px black;
`;
