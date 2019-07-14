import React from "react";
import Sidebar from "../components/LeftSideBar";
import Footer from "../components/FooterCopyRight";
import BarMenu from "../components/BarMenu";
import "./styles/Home.css";
class Home extends React.Component {
  constructor() {
    super();
    this.state = { contentNow: false };
  }
  render() {
    return (
      <div>
        <div className="wrapper">
          <Sidebar userName={"Admin User"} rol={"admin"} />
          <div className="content">
            <BarMenu />
            <h3>Hola contenido</h3>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
