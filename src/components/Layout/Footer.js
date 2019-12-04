import React from 'react';
import styled from "styled-components";

const Footer = () => {
    return (
        <FooterStyled>
            <p>Footer</p>
        </FooterStyled>
    );
}

export default Footer;

const FooterStyled = styled.div`
  flex: 1;
`;