import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

class Portfolio extends React.Component{
    render(){
        return(
            <div id="portfolio" className="portfolio">
                My Portfolio:

                <div className="portfolio-card">
                    <div className="portfolio-image-wrapper">
                        <img className="portfolio-image" alt="Summer 2019 intern project" src={require('../assets/intern_project1.JPG')} />
                        <div className="image-overlay">
                            <Link to="/pci_read_more">
                                <button className="overlay-button-pci"><i className="fa fa-link"></i> Read More </button>
                            </Link>
                         </div>
                    </div>
                    <div className="portfolio-desc-wrapper">
                        Description here
                        <br />
                        Just testing the spacing
                    </div>
                </div>

                <div className="portfolio-card">
                    <div className="portfolio-image-wrapper">
                        <img className="portfolio-image" alt="INST377 final project" src={require('../assets/377_home.png')} />
                        <div className="image-overlay">
                            <Link to="/inst_read_more">
                                <button className="overlay-button-377"><i className="fa fa-link"></i> Read More </button>
                            </Link>
                            <br />
                            <a href="https://github.com/INST377-Team-12/pgcounty-vote"><button className="overlay-button-377"><i className="fa fa-github"></i> Github Code </button></a>
                        </div>
                    </div>
                    <div className="portfolio-desc-wrapper">
                        Description here
                        <br />
                        Just testing the spacing
                    </div>
                </div>
            </div>
        )
    }
}
export default Portfolio;