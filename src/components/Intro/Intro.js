import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import './Intro.css';
//import { Button } from '@material-ui/core/Button';

class Intro extends React.Component {
    render(){
        return(
            <div className="intro">
                <div className="introInfo">
                    <h1 className="name"><strong>Andres Salinas</strong></h1>
                    <div className="mediaLinks">
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=andressalinasj@gmail.com">
                            <Button className="links">
                                <i className="icons" class="fa fa-facebook-official"></i>
                                Email
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
                </div>  
            </div>
        );
    }
}

export default Intro;