import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

class INSTReadMore extends React.Component{
    render(){
        return(
            <div className="classlist">
                <div className="ext_navbar">
                    <Link to="/"><img alt="My Logo" src={require('../assets/AR_Logo_Final.png')} /></Link>
                </div>
                INST 377
            </div>
        )
    }
}
export default INSTReadMore;