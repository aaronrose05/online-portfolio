import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import home from '../assets/377_home.png';
import help from '../assets/377_help.png';
import results from '../assets/377_results.png';
import search from '../assets/377_search.png';

class INSTReadMore extends React.Component{

    render(){
        return(
            <div className="classlist">
                <div className="ext_navbar">
                    <Link to="/"><img alt="My Logo" src={require('../assets/AR_Logo_Final.png')} /></Link>
                    <div className="ext_navbar_text">
                        Back to home
                    </div>
                </div>
                <div className="image-slider">
                    <AwesomeSlider>
                        <div data-src={home} />
                        <div data-src={search} />
                        <div data-src={results} />
                        <div data-src={help} />
                    </AwesomeSlider>
                </div>
                <div className="read-more-content">
                    <h1>Project Description</h1>
                    Insert description about project
                    <h1> Project Timeline </h1>
                    Insert timeline from project
                    <h1> Technologies used: </h1>
                </div>
                <div className="technologies">
                    <div className="row">
                        <div className="column">
                            <img alt="My Logo" src={require('../assets/js_logo.png')} />
                            Javascript
                        </div>
                        <div className="column">
                            <img alt="My Logo" src={require('../assets/bootstrap_logo.png')} />
                            Bootstrap
                        </div>
                        <div className="column">
                            <img alt="My Logo" src={require('../assets/css_logo.png')} />
                            CSS3
                        </div>
                        <div className="column">
                            <img alt="My Logo" src={require('../assets/html_logo.png')} />
                            HTML5
                        </div>
                        <div className="column">
                            <img alt="My Logo" src={require('../assets/leaflet_logo.png')} />
                            Leaflet
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <img alt="My Logo" src={require('../assets/git_logo.png')} />
                            Git
                        </div>
                        <div className="column">
                            <img alt="My Logo" src={require('../assets/google_api_logo.jpg')} />
                            Google Maps API
                        </div>
                        <div className="column">
                            <img alt="My Logo" src={require('../assets/python_logo.png')} />
                            Python
                        </div>
                        <div className="column">
                            <img alt="My Logo" src={require('../assets/jquery_logo.png')} />
                            jQuery
                        </div>
                        <div className="column">
                            <img alt="My Logo" src={require('../assets/node_logo.png')} />
                            NodeJS
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default INSTReadMore;