import React, { useState } from 'react';
import styled from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";
// import Footer from "./Footer";

const Layout = props => {
  const { Component } = props;
  const [handleMenu, setHandleMenu] = useState(false);

  const toggleMenu = e => {
    e.stopPropagation();
    setHandleMenu(!handleMenu);
  };

  return (
    <LayoutStyled>
      <Sidebar small={handleMenu} />
      <CoreStyled>
        <Header handleMenu={toggleMenu} />
        <ScrollStyled>
          <ComponentStyled>
            <Component />
          </ComponentStyled>
        </ScrollStyled>
        {/* <Footer small={handleMenu} /> */}
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
padding: 20px;
    background: #f0f0f0;
`;

const CoreStyled = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`;

const ScrollStyled = styled.div`
height: 100%;
overflow: auto;
`;

