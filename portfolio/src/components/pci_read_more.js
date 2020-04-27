import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

class PCIReadMore extends React.Component{
    render(){
        return(
            <div className="classlist">
                <div className="ext_navbar">
                    <Link to="/"><img alt="My Logo" src={require('../assets/AR_Logo_Final.png')} /></Link>
                </div>
                PCI
            </div>
        )
    }
}
export default PCIReadMore;