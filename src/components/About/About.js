import React from 'react';
import './About.css';

class About extends React.Component {
    render(){
        return(
            <div className="about">
                <h2>About</h2>
                <h3>Education</h3>
                <div className="education">
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