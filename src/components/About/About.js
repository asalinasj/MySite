import React from 'react';
import './About.css';

class About extends React.Component {
    render(){
        return(
            <div className="about">
                <h2>About</h2>
                <div className="aboutInfo">
                    <img style={{width: 300, height: 300, margin: 0}} src="https://i.ibb.co/g9D0dk6/headshot.jpg" alt="headshot" border="0"/>
                    <div className="summary">
                        <p style={{textAlign: "left", fontWeight: "bold"}}>I'm Andres Salinas and I'm an aspiring Full Stack Web and Mobile applications software developer.
                            Currently, I'm working on my Bachelors Degree in Computer Science at FIU. Throughout my time in the program, 
                            I've taken every opportunity to learn new technologies, programming lanaguages and stacks. My concentration has been on web and mobile
                            development focusing on MERN and MEAN stacks. For mobile development, I have worked on hybrid app development 
                            as well as native Android development. Looking to focus my career on these technologies. I enjoy front end 
                            as well as back end development  
                        </p>
                    </div>
                </div>
                <div className="education">
                    <h3>Education</h3>
                    <div className="fiu">
                        <div className="fiuphoto">
                            <img style={{width: 200, height: 200, margin: 0}}src="https://www.cis.fiu.edu/wp-content/uploads/2016/07/scislogo-1.jpg" alt="fiuscis"/>
                        </div>
                        <div className="fiuinfo">
                            <h4>Florida International University</h4>
                            <p>Spring 2017 - Fall 2019</p>
                            <p>Bachelor of Science in Computer Science</p>
                        </div>
                    </div>
                    <div className="fsu">
                        <div className="fsuphoto">
                            <img style={{width: 200, height: 200, margin: 0}} src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Florida_State_University_seal.svg/1200px-Florida_State_University_seal.svg.png" alt=""/>
                        </div>
                        <div className="fsuinfo">
                            <h4>Florida State University</h4>
                            <p>2011 - 2015</p>
                            <p>Bachelor of Science in Biological Sciences </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;