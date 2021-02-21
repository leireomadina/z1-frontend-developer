import React from "react";
import ReactDOM from "react-dom";
import "./stylesheets/index.scss";
import Home from "./components/pages/Home";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Home />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
