import axios from "axios";
import React, { useState } from "react";

const Search = () => {
  // form field state
  const [pokemonName, setPokemonName] = useState("");

  // handleSubmit
  const handleSubmit = async (event) => {
    event.preventDefault();

    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    console.log(data.name);
  };

  return (
    <>
      <h1>Pokemon Search</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="pokemon-name"
          placeholder="Enter pokemon name"
          value={pokemonName}
          onChange={(event) => setPokemonName(event.target.value)}
        />
        <button>Go</button>
      </form>
    </>
  );
};

export default Search;
