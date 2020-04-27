import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import Collapsible from 'react-collapsible';

class ClassList extends React.Component{

    render(){
        return(
            <div className="classlist">
                <div className="ext_navbar">
                    <Link to="/"><img alt="PCI Logo" src={require('../assets/AR_Logo_Final.png')} /></Link>
                </div>
                <div className="classlist-body">
                    <Collapsible trigger="List of Classes">
                        <Collapsible trigger="INST490">
                            <p> Test text </p>
                        </Collapsible>
                        <Collapsible trigger="INST462">
                            <p> Test text </p>
                        </Collapsible>
                    </Collapsible>
                </div>
            </div>
        )
    }
}
export default ClassList;