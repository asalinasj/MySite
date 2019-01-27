import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import './Intro.css';
//import { Button } from '@material-ui/core/Button';

class Intro extends React.Component {
    render(){
        return(
            <div className="intro">
                <h1><strong>Andres Salinas</strong></h1>
                <a href="">
                    <Button className="links">
                        <i className="icons" class="fa fa-facebook-official"></i>
                        facebook
                    </Button>
                </a>
                <a href="https://www.linkedin.com/in/andres-salinas-a1875b103/">
                    <Button className="links">
                        <i className="icons" class="fa fa-linkedin"></i>
                        Linkedin
                    </Button>
                </a>
                <a href="https://github.com/asalinasj">
                    <Button className="links">
                        <i className="icons" class="fa fa-github"></i>
                        Github
                    </Button>
                </a>
            </div>
        );
    }
}

export default Intro;