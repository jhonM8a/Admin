import React from "react";
import NavBar from "../components/NavBar";
import LoginForm from "../components/LoginForm";
import Footer from "../components/FooterCopyRight";

class Login extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <div className="row">
            <div className="col">
              <LoginForm />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Login;
