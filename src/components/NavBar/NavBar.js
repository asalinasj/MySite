import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//import './NavBar.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  };

function NavBar(props) {
    const { classes } = props;
    return(
        <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h12" color="inherit" className={classes.grow}>
            Portfolio
          </Typography>
          <Button color="inherit"></Button>
        </Toolbar>
      </AppBar>
    </div>
            // <Navbar fluid collapseOnSelect style={{marginBottom: "0"}} className="navSection">
            //     <Navbar.Header>
            //         <Navbar.Brand>
            //             <a href="#">Portfolio</a>
            //         </Navbar.Brand>
            //     </Navbar.Header>
            //     <Nav pullRight>
            //         <NavItem eventKey={1} href="#">Skills</NavItem>
            //         <LinkContainer to="/projects">
            //             <NavItem eventKey={2}>Projects</NavItem>
            //         </LinkContainer>
            //         <NavItem eventKey={3} href="#">Experience</NavItem>
            //     </Nav>
            // </Navbar>
    );
    
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);