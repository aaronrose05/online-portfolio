import React from 'react';
import './styles.css';

class Intro extends React.Component{
    render(){
        return(
            <div id="top" className="black">
                <p className="shell-top-bar">/Users/aaronrose/Documents/online-portfolio/portfolio</p>
                <div id="intro" className="intro">
                <p className="intro-hello">Hi, my name is Aaron Rose</p>
                <div className="typewriter">
                    <div className="typewriter-text">I'm a Software Developer and Data Scientist</div>
                </div>
            </div>
                <div className="blur-overlay">
                    <div className="intro-background">
                        $ cd /Users/aaronrose/Documents/online-portfolio/portfolio
                        <br />
                        $ npm start
                        <br /> <br />
                        > portfolio@0.1.0 start /Users/aaronrose/Documents/online-portfolio/portfolio
                        <br />
                        > react-scripts start
                        <br /> <br />
                        Starting the development server...
                        <br /> <br />
                        Compiled successfully!
                        <br /> <br />
                        You can now view <strong>portfolio</strong> in the browser.
                        <br /> <br />
                        Local:            http://localhost:3000
                        <br /> <br />
                        Note that the development build is not optimized.
                        <br />
                        To create a production build, use <strong>npm run build</strong>.
                    </div>
                </div>
            </div>
        )
    }
}
export default Intro;