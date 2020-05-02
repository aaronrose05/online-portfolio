import React from 'react';
import './styles.css';

class About extends React.Component{
    render(){
        return(
            <div id="about" className="about">
                About Me

                <div className="about-card">
                    <div className="about-desc-wrapper">
                        I'm a graduating senior from the University of Maryland and
                        looking for a job following graduation in the fields of: Software Development,
                        Web Development, Data Science and / or Data Analytics, and Software Engineering.
                        <br />
                        <br />
                        When I'm not programming or doing homework, I'm taking joy rides in my car,
                        hanging out with friends, or watching horror movies.
                        <br />
                        <br/>
                        Let's connect!
                        <br />
                        <a href="https://www.linkedin.com/in/aaronrose05/"><i className="fa fa-linkedin-square icon"></i></a>
                        <a href="https://github.com/aaronrose05"><i className="fa fa-github icon"></i></a>
                    </div>
                        <img className="about-image" alt="Me" src={require('../assets/profile_picture.png')} />
                </div>
            </div>
        )
    }
}
export default About;