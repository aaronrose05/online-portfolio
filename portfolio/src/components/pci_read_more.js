import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import pic1 from '../assets/intern_project1.JPG';
import pic2 from '../assets/intern_project2.JPG';
import pic4 from '../assets/intern_project4.JPG';
import ScrollToTop from './scrollbutton';

class PCIReadMore extends React.Component{
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
                        <div data-src={pic1} />
                        <div data-src={pic2} />
                        <div data-src={pic4} />
                    </AwesomeSlider>
                </div>
                <div className="read-more-content">
                    <h1>Project Description</h1>
                    Insert description about project
                    <h1> Project Process </h1>
                    Insert project process description
                    <h1> Technologies used: </h1>
                </div>
                <div className="technologies">
                    <div className="row">
                        <div className="column">
                            <img alt="My Logo" src={require('../assets/angular_logo.png')} />
                            Angular
                        </div>
                        <div className="column">
                            <img alt="My Logo" src={require('../assets/bootstrap_logo.png')} />
                            Bootstrap
                        </div>
                        <div className="column">
                            <img alt="My Logo" src={require('../assets/ts_logo.png')} />
                            Typescript
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
                            <img alt="My Logo" src={require('../assets/vis_logo.png')} />
                            VisJS
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <img alt="My Logo" src={require('../assets/elastic_logo.png')} />
                            Elasticsearch
                        </div>
                        <div className="column">
                            <img alt="My Logo" src={require('../assets/kibana_logo.png')} />
                            Kibana
                        </div>
                        <div className="column">
                            <img alt="My Logo" src={require('../assets/beats_logo.png')} />
                            Beats
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
                <ScrollToTop />
            </div>
        )
    }
}
export default PCIReadMore;