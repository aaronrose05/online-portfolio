import React from 'react';
import './styles.css';

class Navbar extends React.Component{
    constructor() {
        super();
        this.navigate = this.navigate.bind(this); 
     }
     navigate(e, id) {
        e && e.preventDefault(); // to avoid the link from redirecting
        const elementToView = document.getElementById(id);
        elementToView.scrollIntoView(); 
     }
    render(){
        return(
            <div className="navbar">
                <li> <p onClick={(e=>this.navigate(e, 'about'))}> About </p> </li>
                <li> <p onClick={(e=>this.navigate(e, 'experience'))}> Experience </p> </li>
                <li> <p onClick={(e=>this.navigate(e, 'education'))}> Education </p> </li>
                <li> <p onClick={(e=>this.navigate(e, 'portfolio'))}> Portfolio </p> </li>
                <li> <p onClick={(e=>this.navigate(e, 'contact'))}> Contact </p> </li>
            </div>
        )
    }
}
export default Navbar;