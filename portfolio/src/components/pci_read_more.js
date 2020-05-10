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
                    <strong>What is it?</strong>
                    <br />
                    This was the project assigned to my partner and I during my internship at PCI. This project
                    was assigned to us with the task to build an application that captures live network data and displays it
                    for an easy solution to monitoring the company's network.
                    <br /> <br />
                    <strong>What does it do?</strong>
                    <br />
                    This web application uses a Python script to capture network data and sends it to a database
                    to be displayed on the front-end we developed using Angular. As new connections join the network,
                    their logical address will appear on the "Logical Map" as a node containing their "From IP" information
                    as well as their "To IP" information. Their physical address will also appear on the "Physical Map" as a node
                    containing their "MAC Address" as information and decorated with the correct company logo image for the node. Upon
                    clicking on any node, the user will be prompted will the correct information for the node as a popup as well as 3 options
                    to interact with the node. The three interactive options allowed the user to pin the node on the map so that it wouldn't move,
                    delete the node from displaying on the map, or add the selected nodes connecting nodes. The 
                    search bar allows users to search for specific IP addresses as well as MAC Addresses, and each map will update
                    to show the searched address as the central node. From there, users can expanded and collapse the network map using
                    a slider to determine the number of connected nodes. A "Save Map" and "Load Map" feature was added so users could
                    save specific map layouts after searching for addresses, and load their saved maps at any given time.

                    The main page of the web application was an iFrame of a Kibana dashboard that displayed various different
                    metrics of network analysis using Beats as the tool for analysis.
                    What it does
                    <br /> <br />
                    <strong>How does it work?</strong>
                    <br />
                    The Python script uses T-Shark to capture the network data live as the script runs. As the script is running, it 
                    creates a pool to utilize multiprocessing and sends each line of packet data to a different core of the processor to
                    extract specific parameters of the packet as well as be evaluated for uniqueness. The purpose of the evaluation was to ensure no duplicate packets were being processed. After the
                    packets were extracted and evaluated, the information was stored as a JSON array to be sent to an Elasticsearch
                    database for display. Once in Elasticsearch, our Angular front-end would call the information from Elasticsearch using their
                    built-in API for data extraction and be sent to our script containing the run-time code for Vis.JS to display the nodes.
                    <br /> <br />
                    Once the nodes were displayed, the user had the option to select a node and choose from 3 interactive options. If the user
                    selected the "delete" option, the node and its' connected nodes would be temporarily removed from the Vis.JS array of information. 
                    If the user selected the "add" option, the node's connected nodes would be temporarily added to the Vis.JS array of information and
                    be displayed on the correct map. If the user selected the "pin" option, the node would be temporarily pinned to its' location
                    on the map.
                    <br /> <br />
                    If the user chose to search for a map, the Vis.JS array of information would update to contain the searched node as the
                    central node in the map and display one layer of connected nodes. The user then had the 3 interactive options discussed above 
                    as well as 3 more interactive options. The user could slide the provided slider to display more layers of connected nodes, which
                    would use the same script as the "add" interactive option but display more layers of nodes based on the slider's value. The user
                    could "save" their map, which would create a new Elasticsearch database using the name the user provided for the "saved" map, and
                    send the array of Vis.JS information to this database. The user could also "load" saved maps, which would provide the user
                    a modal upon clicking the load button and contained a list of their saved map names. Once the user selected a map name, the front-end utilized the
                    provided Elasticseach API for data extraction and loaded the correct Vis.JS information into our run-time Vis.JS script to be displayed.
                    <br /> <br />
                    <strong>How did I contribute?</strong>
                    <br />
                    While my partner worked on implementing the T-Shark code into our Python script, I was tasked with developing
                    the pool to utilize multiprocessing as well as the script to evaluate each packet for uniqueness. Once the Python script
                    was fully developed, I was tasked with creating our Elasticsearch database and implementation of the Elasticsearch API into our
                    Python script to be able to send our packet information into the database. Once the Elasticsearch API was implemented, I was then
                    tasked to create a Kibana dashboard using Beats for the tool for network analysis. I was then tasked with creating an
                    Angular front-end to display all of this information. While I created the front-end, my partner developed the Vis.JS code that
                    would display the nodes on our front-end. Once the front-end was developed, my partner and I were both
                    tasked with implementing specific features to the front-end such as the search bar, the slider to control how many
                    layers of connected nodes were displayed, and the load and save map options.
                    <h1> Technologies used: </h1>
                </div>
                <div className="technologies">
                    <div className="row">
                        <div className="column">
                            <img alt="Angular Logo" src={require('../assets/angular_logo.png')} />
                            Angular
                        </div>
                        <div className="column">
                            <img alt="Boostrap Logo" src={require('../assets/bootstrap_logo.png')} />
                            Bootstrap
                        </div>
                        <div className="column">
                            <img alt="Typescript Logo" src={require('../assets/ts_logo.png')} />
                            Typescript
                        </div>
                        <div className="column">
                            <img alt="CSS Logo" src={require('../assets/css_logo.png')} />
                            CSS3
                        </div>
                        <div className="column">
                            <img alt="HTML Logo" src={require('../assets/html_logo.png')} />
                            HTML5
                        </div>
                        <div className="column">
                            <img alt="VisJS Logo" src={require('../assets/vis_logo.png')} />
                            VisJS
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <img alt="Elasticsearch Logo" src={require('../assets/elastic_logo.png')} />
                            Elasticsearch
                        </div>
                        <div className="column">
                            <img alt="Kibana Logo" src={require('../assets/kibana_logo.png')} />
                            Kibana
                        </div>
                        <div className="column">
                            <img alt="Beats Logo" src={require('../assets/beats_logo.png')} />
                            Beats
                        </div>
                        <div className="column">
                            <img alt="Python Logo" src={require('../assets/python_logo.png')} />
                            Python
                        </div>
                        <div className="column">
                            <img alt="jQuery Logo" src={require('../assets/jquery_logo.png')} />
                            jQuery
                        </div>
                        <div className="column">
                            <img alt="NodeJS Logo" src={require('../assets/node_logo.png')} />
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