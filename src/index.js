import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./global.css";
import Login from "./pages/Login";

const container = document.getElementById("app");

ReactDOM.render(<Login />, container);
