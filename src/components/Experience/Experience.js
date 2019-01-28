import React from 'react';
import './Experience.css';

class Experience extends React.Component {
    render(){
        return(
            <div className="experience">
                <h2 style={{textAlign: "center"}}>Experience</h2>
                <div className="expInfo">
                    <div className="job">
                        <img style={{marginBottom: 15}} src="https://i.ibb.co/hcj96ZX/fiupanthersoft.png" alt="fiupanthersoft" border="0" />
                        <p style={{textAlign: "left", padding: 40}}>I am currently interning at PantherSoft, the software team at Florida International 
                            University. I have been working on chatbot services for several departments such as 
                            OneStop utilizing the Azure Bot Framework. I have also been developing new additions 
                            to the FIU Mobile App incorporating push notifications to the next big update. Developing the
                            app using the Ionic framework testing the device with Android Studio and Xcode.
                        </p>
                    </div>
                    <div className="jobPic">
                        <img style={{width: 400, height: 350}} src="https://panthersoft.fiu.edu/wp-content/uploads/sites/48/2017/02/fiumobile_003.png" alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Experience;