import React from 'react';
import './styles.css';

class Experience extends React.Component{
    render(){
        return(
            <div id="portfolio" className="experience">
                My Experience:

                <div className="experience-card">
                    Experience #1 Goes In This Box
                </div>

                My Education:

                <div className="experience-card">
                    Experience #2 Goes In This Box
                </div>
            </div>
        )
    }
}
export default Experience;