import React from 'react';
import styled from "styled-components";
import {
    Link,
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import LinkIcon from '@material-ui/icons/Link';
import CreateIcon from '@material-ui/icons/Create';
import HomeIcon from '@material-ui/icons/Home';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
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
                <Link to="/">
                    <ListItem button>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary={t('welcome')} />
                    </ListItem>
                </Link>
                <Link to="/blog">
                    <ListItem button>
                        <ListItemIcon>
                            <CreateIcon />
                        </ListItemIcon>
                        <ListItemText primary={t('blog')} />
                    </ListItem>
                </Link>
                <Link to="/portfolio">
                    <ListItem button>
                        <ListItemIcon>
                            <CodeIcon />
                        </ListItemIcon>
                        <ListItemText primary={t('portfolio')} />
                    </ListItem>
                </Link>
                <ListItem button onClick={handleClick}>
                    <ListItemIcon>
                        <LinkIcon />
                    </ListItemIcon>
                    <ListItemText primary="Liens" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <TwitterIcon />
                            </ListItemIcon>
                            <ListItemText primary="Twitter" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <LinkedInIcon />
                            </ListItemIcon>
                            <ListItemText primary="Linkedin" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <InstagramIcon />
                            </ListItemIcon>
                            <ListItemText primary="Instagram" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <GitHubIcon />
                            </ListItemIcon>
                            <ListItemText primary="Github" />
                        </ListItem>
                    </List>
                </Collapse>
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
