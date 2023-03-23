import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import SinglePokemon from "./SinglePokemon";
import Search from "./Search";
import "./App.css";

function App() {
  return (
    <>
      <nav>
        <Link to="/pokemon/search">Search</Link>
      </nav>
      <Routes>
        <Route path="/pokemon/:id" element={<SinglePokemon />} />
        <Route path="/pokemon/search" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;
