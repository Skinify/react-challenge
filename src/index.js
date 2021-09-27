import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import "./extensions";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
