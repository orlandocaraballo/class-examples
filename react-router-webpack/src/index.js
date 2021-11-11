import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";

// we can either import BrowserRouter or HashRouter
//  BrowserRouter uses more modern url syntax
import { BrowserRouter as Router } from "react-router-dom";

// Definition: A HashRouter / BrowserRouter keep the UI
//  in sync with the browser url. HashRouter uses the hash portion
//  to achieve this (#/[path]) while BrowserRouter uses the HTML5 history API
//  https://v5.reactrouter.com/web/api/BrowserRouter
//  https://v5.reactrouter.com/web/api/HashRouter
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
