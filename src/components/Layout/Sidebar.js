import React from 'react';
import styled from "styled-components";
import {
    Link,
} from "react-router-dom";

const Sidebar = props => {
    const { small } = props;


    return (
        <SidebarStyled small={small}>
            <ul>
            <li><Link to="/">Home</Link></li>
                <li><Link to="/blog">Blog</Link></li>
            </ul>

        </SidebarStyled>
    );
}

export default Sidebar;

const SidebarStyled = styled.div`
font-size: inherit;
visibility: visible;
width: ${props => (props.small ? "0px" : "285px")};
height: 100%;
position: relative;
top: auto;
left: auto;
transition: all linear 350ms;
box-shadow: 0 0 4px rgba(0,0,0,0.666);
a {
    color: black;
}
`;
