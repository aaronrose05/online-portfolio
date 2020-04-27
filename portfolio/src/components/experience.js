import React from 'react';
import './styles.css';

class Experience extends React.Component{
    render(){
        return(
            <div id="experience" className="experience">
                My Experience:

                <div className="experience-card">
                    <div className="experience-image-wrapper">
                        <img className="experience-image" alt="PCI Logo" src={require('../assets/pci_logo.png')} />
                    </div>
                    <div className="experience-desc-wrapper">
                        <p> <strong> Software Developer Internship </strong>
                            <br />
                            <a href="https://www.gopci.com"> PCI </a>
                            <br />
                            June 2019 - August 2019
                        </p>
                        <ul>
                            <li> Developed complex python script for processing Gbs of Data into ElasticSearch, creating indexing modules for networking and infrastructure monitoring. </li>
                            <li> Engineered network graph web application, simplifying identification of infrastructure and its connections/ports. </li>
                            <li> Deployed Near Real Time, infrastructure monitoring tool using ELK stack, evaluated network and behavior traffic to increase insider threat detection/behavior analysis within a corporate network. </li>
                            <li> Used Gitlab, Python, ELK Stack, Vis.JS, Angular.JS in the development and deployment of network dashboard. </li>
                            <li> Deployed and configured ELK stack into AWS cluster, deployed beats into numerous cloud and baremetal systems, increasing monitoring by 30%. </li>
                        </ul>
                    </div>
                </div>

                <div className="experience-card">
                    <div className="experience-image-wrapper">
                        <img className="experience-image" alt="Project Zero Logo" src={require('../assets/pz_logo.png')} />
                    </div>
                    <div className="experience-desc-wrapper">
                        <p> <strong> Development Director </strong>
                            <br />
                            <a href="https://projectzeroinc.com"> Project Zero Inc. </a>
                            <br />
                            February 2019 - Current
                        </p>
                        <ul>
                            <li> Identified new sources, both individual and business, of support as donors and vendors. </li>
                            <li> Increased fundraising from $1,000 to $3,000 in two weeks. </li>
                            <li> Maintained a highly intensive schedule of visiting with potential donors and delivering compelling presentations and comprehensive fundraising proposals. </li>
                            <li> Increased fundraising donations by 25%. </li>
                        </ul>
                    </div>
                </div>

                <div id="education" className="education"> My Education </div>

                <div className="experience-card">
                    <div className="experience-image-wrapper">
                        <img className="education-image" alt="UMD Logo" src={require('../assets/umd_logo.jpg')} />
                    </div>
                    <div className="experience-desc-wrapper">
                        <p> <strong> Bachelor of Science, Information Science </strong> - Data Science Specialization
                            <br />
                            <a href="https://www.umd.edu"> University of Maryland, College Park </a>
                            <br />
                            August 2016 - May 2020
                            <br />
                            <br />
                            <a href="#education"> Click here for a list of my relevant coursework</a>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Experience;