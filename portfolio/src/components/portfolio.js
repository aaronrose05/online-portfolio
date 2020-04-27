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
                        <div className="image-overlay">
                            <form>
                                <button formAction="./classlist" className="overlay-button-377"><i className="fa fa-link"></i> Read More </button>
                            </form>
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
                            <form>
                                <button formAction="./classlist" className="overlay-button-377"><i className="fa fa-link"></i> Read More </button>
                            </form>
                            <br />
                            <form>
                                <button formAction="https://github.com/INST377-Team-12/pgcounty-vote" className="overlay-button-377"><i className="fa fa-github"></i> Github Code </button>
                            </form>
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