import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import home from '../assets/portfolio_home.png';
import about from '../assets/portfolio_about.png';
import experience from '../assets/portfolio_experience.png';
import education from '../assets/portfolio_education.png';
import project from '../assets/portfolio_project.png';
import ScrollToTop from './scrollbutton';

class PortfolioReadMore extends React.Component{
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render(){
        return(
            <div className="classlist">
                <div className="ext_navbar">
                    <Link to="/"><img alt="My Logo" src={require('../assets/AR_Logo_Final.png')} /></Link>
                    <div className="ext_navbar_text">
                        <i className="fa fa-arrow-left"></i> Back to home
                    </div>
                </div>
                <div className="image-slider">
                    <AwesomeSlider>
                        <div data-src={home} />
                        <div data-src={about} />
                        <div data-src={experience} />
                        <div data-src={education} />
                        <div data-src={project} />
                    </AwesomeSlider>
                </div>
                <div className="read-more-content">
                    <h1>Project Description</h1>
                    <strong>What is it?</strong>
                    <br />
                    What it is
                    <br /> <br />
                    <strong>What does it do?</strong>
                    <br />
                    What it does
                    <br /> <br />
                    <strong>How does it work?</strong>
                    <br />
                    How it works
                    <br /> <br />
                    <strong>How did I contribute?</strong>
                    <br />
                    How I contributed
                    <h1> Project Process </h1>
                    Insert project process description
                    <h1> Technologies used: </h1>
                </div>
                <div className="technologies">
                    <div className="row">
                        <div className="column">
                            <img alt="React Logo" src={require('../assets/react_logo.png')} />
                            React
                        </div>
                        <div className="column">
                            <img alt="React Router Logo" src={require('../assets/react_router_logo.png')} />
                            React Router
                        </div>
                        <div className="column">
                            <img alt="NPM Logo" src={require('../assets/npm_logo.png')} />
                            NPM
                        </div>
                        <div className="column">
                            <img alt="Bootstrap Logo" src={require('../assets/bootstrap_logo.png')} />
                            Bootstrap
                        </div>
                        <div className="column">
                            <img alt="Javascript Logo" src={require('../assets/js_logo.png')} />
                            Javascript
                        </div>
                        <div className="column">
                            <img alt="CSS Logo" src={require('../assets/css_logo.png')} />
                            CSS3
                        </div>
                        <div className="column">
                            <img alt="HTML Logo" src={require('../assets/html_logo.png')} />
                            HTML5
                        </div>
                        <div className="column">
                            <img alt="Git Logo" src={require('../assets/git_logo.png')} />
                            Github
                        </div>
                        <div className="column">
                            <img alt="EmailJS Logo" src={require('../assets/emailjs_logo.png')} />
                            EmailJS
                        </div>
                    </div>
                </div>
                <ScrollToTop />
            </div>
        )
    }
}
export default PortfolioReadMore;