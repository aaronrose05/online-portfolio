import React from 'react';
import Navbar from './navbar';
import Intro from './intro';
import Portfolio from './portfolio';
import Experience from './experience';
import About from './about';
import ScrollToTop from './scrollbutton';

class Home extends React.Component{
    render(){
        return(
            <div>
                <div className="bg"></div>
                <div className="bg bg2"></div>
                <div className="bg bg3"></div>
                <Intro />
                <Navbar />
                <About />
                <Experience />
                <Portfolio />
                <ScrollToTop />
            </div>
        )
    }
}
export default Home;