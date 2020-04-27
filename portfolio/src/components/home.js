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
                <Navbar />
                <Intro />
                <Portfolio />
                <Experience />
                <About />
            </div>
        )
    }
}
export default Home;