import React from 'react';
import './styles.css';

class Portfolio extends React.Component{
    render(){
        return(
            <div id="portfolio" className="portfolio">
                My Portfolio:

                <div className="portfolio-card">
                    <div>
                        Image Here
                    </div>
                    <div>
                        Description here
                    </div>
                </div>

                <div className="portfolio-card">
                    <div>
                        Image Here
                    </div>
                    <div>
                        Description here
                    </div>
                </div>
            </div>
        )
    }
}
export default Portfolio;