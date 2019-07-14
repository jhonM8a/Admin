import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faChartLine,
  faUsers,
  faEdit,
  faComments,
  faFile,
  faExclamationTriangle,
  faCogs,
  faUserCog
} from "@fortawesome/free-solid-svg-icons";
import "./styles/LeftSideBar.css";

class LeftSideBar extends React.Component {
  render() {
    return (
      <nav className="sidebar">
        <div className="sidebar-header">
          <h3>{this.props.userName}</h3>
        </div>
        <ul className="list-unstyled components">
          <li className="active">
            <a href="#" className="dropdown-toggle">
              <FontAwesomeIcon icon={faTachometerAlt} />
              Dashboard
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faChartLine} />
              Anlytics
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faUsers} />
              Account Management
            </a>
          </li>
          <li className="active">
            <a
              href="#homeSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <FontAwesomeIcon icon={faEdit} />
              Content
            </a>
            <ul className="collapse list-unstyled" id="homeSubmenu">
              <li>
                <a href="#">Content 1</a>
              </li>
              <li>
                <a href="#">Content 2</a>
              </li>
              <li>
                <a href="#">Content 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faComments} />
              Survey Questions
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faFile} />
              Notifications Templates
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faExclamationTriangle} />
              Out Alerts
            </a>
          </li>
        </ul>
        <ul className="list-unstyled CTAs">
          <span style={{ display: "flex", justifyContent: "center" }}>
            {" "}
            Avanced Settings
          </span>
          <li className="active">
            <a
              href="#contentSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <FontAwesomeIcon icon={faCogs} />
              Portal Settings
            </a>
            <ul className="collapse list-unstyled" id="contentSubmenu">
              <li>
                <a href="#">Settings 1</a>
              </li>
              <li>
                <a href="#">Settings 2</a>
              </li>
              <li>
                <a href="#">Settings 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" className="download">
              <FontAwesomeIcon icon={faUserCog} />
              User Management
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default LeftSideBar;
