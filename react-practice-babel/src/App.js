import React from "react";
import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import Students from "./components/Students";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Students />
    </React.Fragment>
  );
}

export default App;
