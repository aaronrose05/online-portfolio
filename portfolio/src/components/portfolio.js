import React from 'react';
import './styles.css';

class Portfolio extends React.Component{
    render(){
        return(
            <div id="portfolio" className="portfolio">
                My Portfolio:

                <div className="portfolio-card">
                    <div className="portfolio-image-wrapper">
                        <img className="portfolio-image" alt="Summer 2019 intern project" src={require('../assets/intern_project1.JPG')} />
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