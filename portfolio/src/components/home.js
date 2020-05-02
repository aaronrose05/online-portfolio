import React from 'react';
import Navbar from './navbar';
import Intro from './intro';
import Portfolio from './portfolio';
import Experience from './experience';
import About from './about';

class Home extends React.Component{
    render(){
        return(
            <div>
                <div class="bg"></div>
                <div class="bg bg2"></div>
                <div class="bg bg3"></div>
                <Intro />
                <Navbar />
                <About />
                <Experience />
                <Portfolio />
            </div>
        )
    }
}
export default Home;