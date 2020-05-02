import React from 'react';
import './styles.css';

class Intro extends React.Component{
    render(){
        return(
            /* 
            <div id="intro" className="intro">
                <p className="intro-hello">Hi, my name is Aaron Rose</p>
                <div className="typewriter">
                    <div className="typewriter-text">I'm a Software Developer and Data Scientist</div>
                </div>
            </div>
            */

           <div class="shell-wrap">
           <p class="shell-top-bar">/Users/aaronrose/Documents/online-portfolio/portfolio</p>
           <div className='blur-overlay'>
           <ul class="shell-body">
             <li>cd&nbsp;/Users/aaronrose/Documents/online-portfolio/portfolio</li>
             <li>npm start</li>
             <br />
             Compiled successfully!
             <br />
             <br />
             You can now view portfolio in the browser.
           </ul>
           </div>
         </div>

        )
    }
}
export default Intro;