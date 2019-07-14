import React from "react";
import { Link } from "react-router-dom";
import FooterCopiRight from "../components/FooterCopyRight";
import NavBar from "../components/NavBar";
import "./styles/NoMatch.css";

class NoMatch extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <section className="error-container">
          <span>
            <span>4</span>
          </span>
          <span>0</span>
          <span>
            <span>4</span>
          </span>
        </section>
        <div>
          <h1>Opps, page not found please click to:</h1>
        </div>
        <div className="container">
          <div className="button">
            <Link to="/admin" className="btn btn-info">
              Login
            </Link>
          </div>
        </div>
        <FooterCopiRight />
      </div>
    );
  }
}

export default NoMatch;
