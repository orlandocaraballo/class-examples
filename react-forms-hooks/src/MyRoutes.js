import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Search from "./Search";
import SinglePokemon from "./SinglePokemon";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/:id" element={<SinglePokemon />} />
    </Routes>
  );
};

export default MyRoutes;
