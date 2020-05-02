import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import ScrollToTop from './scrollbutton';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import home from '../assets/377_home.png';
import help from '../assets/377_help.png';
import results from '../assets/377_results.png';
import search from '../assets/377_search.png';

class INSTReadMore extends React.Component{
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
                        <div data-src={home} />
                        <div data-src={search} />
                        <div data-src={results} />
                        <div data-src={help} />
                    </AwesomeSlider>
                </div>
                <div className="read-more-content">
                    <h1>Project Description</h1>
                    <strong>What is it?</strong>
                    <br />
                    This web application was a "final project" for my INST 377 class about Dynamic Web Applications. 
                    This "final project" was assigned to my class with the purpose to showcase everything we learned in the class
                    about HTML, CSS, and Javascript in a "real-life" scenario. We were given a list of APIs from Prince George's County, Maryland 
                    to select from and were assigned to create a web application solving an issue we discovered by analyzing
                    our selected API.
                    <br /> <br />
                    <strong>What does it do?</strong>
                    <br />
                    The team I was put in to, consisting of 6 members, selected an API containing the locations
                    of all polling centers in Prince George's County, Maryland for the 2020 elections. The issue
                    we discovered with this API was that there were no web applications that displayed where the polling
                    centers were located in relation to the user. Using this issue as our foundation, we decided to create a
                    web application that locates the nearest polling center in Prince George's County, Maryland in relation to users.
                    <br /> <br />
                    <strong>How does it work?</strong>
                    <br />
                    The web application we designed was built on HTML/CSS/JS with NodeJS and Express middleware. Since this
                    web application was built for a class "final project" and not for public use, the web application was
                    hosted using Heroku. The web application uses Google Map's API to request the user's location and stores
                    the user's longitude and latitude. After doing so, the web application creates three endpoints using the
                    RESTful API:
                    <ul>
                        <li> The GET endpoint by '/api/polling' that pulls the data from the PG county open API. </li>
                        <li> The POST endpoint by '/api/calculate' that takes the data from PG county open API and then creates new data housing the closest distance, closest location, and the current location reverse geocoded. </li>
                        <li> The PUT endpoint by '/api/distance' that returns the data calculated by the POST endpoint. </li>
                    </ul>
                    The closest polling center to the user is then stored as an enpoint containing the polling center's longitude
                    and latitude. The user's location information and closest polling center's location information is then
                    displayed in a Leaflet map, signifying which point is the user, which point is the polling center, displaying
                    both mailing addresses, and displaying the distance between them in miles.
                    <br /> <br />
                    <strong>How did I contribute?</strong>
                    <br />
                    My contribution to this web application was the design and creation of the front end. While other group members
                    were responsible for gathering necessary information, creating the application's documentation,
                    writing the project report, and creating the back end of the application, my responsibility was to
                    design and create a sophisticated but user-friendly front end to display our application.

                    <h1> Project Process </h1>
                    <strong>Phase One: Design</strong>
                    <br />
                    After my group selected our API and determined the issue we wanted to solve by creating a 
                    web application, I began looking at Maryland government and federal government websites for
                    design inspiration. I eventually found <a href="https://www.usa.gov">https://www.usa.gov</a> and decided
                    to use its design for our web application's main page.
                    <br /> <br />
                    <strong>Phase Two: Creation</strong>
                    <br />
                    Once I found inspiration for our web application's main page, I then began coding the main page in HTML while using
                    certain CSS classes from <a href="https://www.usa.gov">https://www.usa.gov</a> by inspecting different elements, and using some Bootstrap libraries.
                    I felt that the main page needed more than a header and navigation menu, so I decided to add an informative section to the
                    bottom of the page. I began creating an image carousel at the bottom of the main
                    page using jQuery to display Maryland's Senators and Representatives with links to their respective websites. 
                    <br /> <br />
                    After the main page had been completed, I then moved on to designing and creating the web application's
                    other pages. I felt that these pages did not need to be as sophisticated, so I designed them with a minimalist
                    approach - only displaying the necessary information for each respective page.
                    <br /> <br />
                    <strong>Phase Three: Mobile</strong>
                    <br />
                    One of this project's requirements was to design the web application to be mobile-friendly. After
                    finishing all of the web application's pages for computer monitor viewports, I began creating our 
                    web application's mobile-friendly CSS. I only had a few days to create the mobile viewport CSS for our
                    web application, so I focused on the main page. After successfully styling the main page to be mobile-friendly,
                    I only had one day left until the submission deadline. I spent this one day styling the other pages to be 
                    mobile-friendly as best as I could until I had no more time to code.
                    <br /> <br />
                    <strong>Conclusion:</strong>
                    <br />
                    After spending a month designing and creating a web application, my team had produced a final product
                    to present to our class and teacher. Although I ran out of time and did not get to completely finish creating
                    the mobile viewport CSS for all of the application's pages, my team still delivered a product we could be proud of.
                    <br /> <br />
                    If I could make any changes or additions to this web application, I would finish the mobile viewport CSS
                    for all of the pages, update the additional pages to look more modern, and move this application into a 
                    framework such as Angular or React.
                    <h1> Technologies used: </h1>
                </div>
                <div className="technologies">
                    <div className="row">
                        <div className="column">
                            <img alt="My Logo" src={require('../assets/js_logo.png')} />
                            Javascript
                        </div>
                        <div className="column">
                            <img alt="My Logo" src={require('../assets/bootstrap_logo.png')} />
                            Bootstrap
                        </div>
                        <div className="column">
                            <img alt="My Logo" src={require('../assets/css_logo.png')} />
                            CSS3
                        </div>
                        <div className="column">
                            <img alt="My Logo" src={require('../assets/html_logo.png')} />
                            HTML5
                        </div>
                        <div className="column">
                            <img alt="My Logo" src={require('../assets/leaflet_logo.png')} />
                            Leaflet
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <img alt="My Logo" src={require('../assets/git_logo.png')} />
                            Git
                        </div>
                        <div className="column">
                            <img alt="My Logo" src={require('../assets/google_api_logo.jpg')} />
                            Google Maps API
                        </div>
                        <div className="column">
                            <img alt="My Logo" src={require('../assets/python_logo.png')} />
                            Python
                        </div>
                        <div className="column">
                            <img alt="My Logo" src={require('../assets/jquery_logo.png')} />
                            jQuery
                        </div>
                        <div className="column">
                            <img alt="My Logo" src={require('../assets/node_logo.png')} />
                            NodeJS
                        </div>
                    </div>
                </div>
                <ScrollToTop />
            </div>
        )
    }
}
export default INSTReadMore;