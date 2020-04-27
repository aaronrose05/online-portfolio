import React from 'react';
import './styles.css';

class Navbar extends React.Component{
    render(){
        return(
            <div class="navbar">
                <li> <a href="#portfolio"> Portfolio </a> </li>
                <li> <a href="#experience"> Experience </a> </li>
                <li> <a href="#education"> Education </a> </li>
                <li> <a href="#about"> About </a> </li>
                <li> <a href="#contact"> Contact </a> </li>
            </div>
        )
    }
}
export default Navbar;