import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Header from "./container/Header";

ReactDOM.render(
  <div>
    <Header />
    <App />
  </div>,
  document.getElementById("root")
);
