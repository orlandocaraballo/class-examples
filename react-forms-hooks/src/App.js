import axios from "axios";
import React, { useState } from "react";
import MyRoutes from "./MyRoutes";
import { Link } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <>
      <Link to="/">Search</Link>
      <br />
      <MyRoutes />
    </>
  );
};

export default App;
