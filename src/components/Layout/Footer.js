import React from 'react';
import styled from "styled-components";

const Footer = props => {
    const { small } = props;
    return (
        <FooterStyled small={small}>
            <p>Footer</p>
        </FooterStyled>
    );
}

export default Footer;

const FooterStyled = styled.div`
position: absolute;
right: 0;
bottom: 0;
left: ${props => (props.small ? "0px" : "250px")};
padding: 0 0 0 10px;
background-color: transparent;
text-align: center;
transition: all linear 350ms;
`;