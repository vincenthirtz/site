import React , { useState } from 'react';
import styled from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout = props => {
  const { component } = props;
  const [handleMenu, setHandleMenu] = React.useState(false);

  const toggleMenu = e => {
    e.stopPropagation();
    setHandleMenu(!handleMenu);
};

  return (
    <LayoutStyled>
      <Sidebar small={handleMenu} />
      <CoreStyled>
        <Header handleMenu={toggleMenu} />
        <ComponentStyled>
          {component()}
        </ComponentStyled>
        <Footer />
      </CoreStyled>
    </LayoutStyled>
  );
}

export default Layout;

const LayoutStyled = styled.div`
    display: flex;
    height: 100%;
`;

const ComponentStyled = styled.div`
flex: 1;
`;

const CoreStyled = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`;

