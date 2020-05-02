import React from 'react';
import './styles.css';

class Navbar extends React.Component{

    onClickAbout(e) {
        e && e.preventDefault(); // to avoid the link from redirecting
        document.getElementById("about").scrollIntoView();
        }

    onClickExperience(e) {
        e && e.preventDefault(); // to avoid the link from redirecting
        document.getElementById("experience").scrollIntoView();
        }

    onClickEducation(e) {
        e && e.preventDefault(); // to avoid the link from redirecting
        document.getElementById("education").scrollIntoView();
        }

    onClickPortfolio(e) {
        e && e.preventDefault(); // to avoid the link from redirecting
        document.getElementById("portfolio").scrollIntoView();
        }

    onClickContact(e) {
        e && e.preventDefault(); // to avoid the link from redirecting
        document.getElementById("contact").scrollIntoView();
        }

    render(){
        return(
            <div className="navbar">
                <li> <p onClick={this.onClickAbout.bind(this)}> About </p> </li>
                <li> <p onClick={this.onClickExperience.bind(this)}> Experience </p> </li>
                <li> <p onClick={this.onClickEducation.bind(this)}> Education </p> </li>
                <li> <p onClick={this.onClickPortfolio.bind(this)}> Portfolio </p> </li>
                <li> <p onClick={this.onClickContact.bind(this)}> Contact </p> </li>
            </div>
        )
    }
}
export default Navbar;