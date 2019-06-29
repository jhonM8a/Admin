import React from "react";
import logo from "../images/logo.svg";
import "./styles/NavBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <a className="Navbar__brand" href="/">
            <img className="Navbar__brand-logo" src={logo} alt="Logo" />
          </a>
        </div>
      </div>
    );
  }
}
export default NavBar;
