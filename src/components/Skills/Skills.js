import React from 'react';
import { Button, Glyphicon, Label } from 'react-bootstrap';
import './Skills.css';

class Skills extends React.Component {
    render(){
        return(
            <div className="skills">
                <h2>Skills</h2>
                <div className="listSkills">
                    <h1>
                        <Label>Java</Label>
                    </h1>
                    <h1>
                        <Label>HTML/CSS</Label>
                    </h1>
                    <h1>
                        <Label>Javascript</Label>
                    </h1>
                    <h1>
                        <Label>React.js</Label>
                    </h1>
                    <h1>
                        <Label>React Native</Label>
                    </h1>
                    <h1>
                        <Label>C#</Label>
                    </h1>
                    <h1>
                        <Label>Python</Label>
                    </h1>
                    <h1>
                        <Label>C Programming Language</Label>
                    </h1>
                    <h1>
                        <Label>SQL</Label>
                    </h1>
                    <h1>
                        <Label>Angular 1 and 2+</Label>
                    </h1>
                    <h1>
                        <Label>Ionic</Label>
                    </h1>
                    <h1>
                        <Label>Arduino</Label>
                    </h1>
                    <h1>
                        <Label>noSQL</Label>
                    </h1>
                    <h1>
                        <Label>Android Studio</Label>
                    </h1>
                    <h1>
                        <Label>Node.js</Label>
                    </h1>
                    <h1>
                        <Label>Adobe Premiere/AE/Photoshop</Label>
                    </h1>
                </div>
            </div>
        );
    }
}

export default Skills;