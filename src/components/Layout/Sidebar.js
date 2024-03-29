import React from 'react';
import styled from "styled-components";
import {
    NavLink,
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CreateIcon from '@material-ui/icons/Create';
import HomeIcon from '@material-ui/icons/Home';
import CodeIcon from '@material-ui/icons/Code';
import { useTranslation } from 'react-i18next';
import logo from "img/logo.png";

const useStyles = makeStyles(theme => ({
    root: props => ({
        width: props.small ? '0%' : `100%`,
        maxWidth: props.small ? 0 : 360,
        backgroundColor: theme.palette.background.paper,
    }),
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

const Sidebar = props => {
    const { small } = props;
    const propsStyles = { small: small };
    const classes = useStyles(propsStyles);
    const [open, setOpen] = React.useState(true);
    const { t } = useTranslation();

    const handleClick = () => {
        setOpen(!open);
    };


    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    };

    return (
        <SidebarStyled small={small}>
            <List
                style={{ display: small ? "none" : "block" }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        <img src={logo} alt="logo" />
                    </ListSubheader>
                }
                className={classes.root}
            >
                <NavLink exact activeStyle={activeStyle} to="/">
                    <ListItem button>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary={t('welcome')} />
                    </ListItem>
                </NavLink  >
                <NavLink activeStyle={activeStyle} to="/blog">
                    <ListItem button>
                        <ListItemIcon>
                            <CreateIcon />
                        </ListItemIcon>
                        <ListItemText primary={t('blog')} />
                    </ListItem>
                </NavLink  >
                <NavLink activeStyle={activeStyle} to="/portfolio">
                    <ListItem button>
                        <ListItemIcon>
                            <CodeIcon />
                        </ListItemIcon>
                        <ListItemText primary={t('portfolio')} />
                    </ListItem>
                </NavLink  >
            </List>
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
