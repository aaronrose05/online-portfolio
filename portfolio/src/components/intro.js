import React from 'react';
import './styles.css';

class Intro extends React.Component{
    render(){
        return(
            <div id="intro" className="intro">
                <p className="intro-hello">Hi, my name is Aaron Rose</p>
                <div class="typewriter">
                    <div class="typewriter-text">I'm a Software Developer</div>
                </div>
            </div>

        )
    }
}
export default Intro;