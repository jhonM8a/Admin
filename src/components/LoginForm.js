import React from "react";
import { Redirect } from "react-router";
import "./styles/LoginForm.css";
class LoginForm extends React.Component {
  state = {
    redirect: false,
    userName: "",
    password: "",
    errorCredentials: false,
    colorBorder: ""
  };

  hanldeChangeUserName = e => {
    this.setState({
      userName: e.target.value
    });
  };

  hanldeChangePassword = e => {
    this.setState({
      password: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.userName === "jhon" && this.state.password === "test123") {
      this.setState({ redirect: true });
    }
    this.setState({
      errorCredentials: true,
      colorBorder: "red"
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/home" />;
    }
    return (
      <div className="body">
        <div className="d-flex justify-content-center h-100">
          <div className="card">
            <div className="card-header">
              <h3>Admin Module</h3>
            </div>
            <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-user" />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="username"
                    onChange={this.hanldeChangeUserName}
                    style={{ borderColor: this.state.colorBorder }}
                  />
                </div>

                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-key" />
                    </span>
                  </div>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="password"
                    onChange={this.hanldeChangePassword}
                    style={{ borderColor: this.state.colorBorder }}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Sign In"
                    className="btn float-right login_btn"
                  />
                </div>
                {this.state.errorCredentials && <h5>Invalid Credentials</h5>}
              </form>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-center">
                <a href="/">Forgot your password?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
