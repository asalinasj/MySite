import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './NavBar.css';

class NavBar extends React.Component {
    render(){
        return(
            <Navbar style={{marginBottom: "0"}} className="navSection">
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Andres Salinas</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">Skills</NavItem>
                    <NavItem eventKey={2} href="#">Projects</NavItem>
                    <NavItem eventKey={3} href="#">Experience</NavItem>
                </Nav>
            </Navbar>
        );
    }
}
export default NavBar