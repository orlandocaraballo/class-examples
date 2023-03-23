import axios from "axios";
import { useState } from "react";
import Card from "./Card";
import { useSelector, useDispatch } from "react-redux";
import { fetchAsyncPokemon } from "./pokemonSlice";

const Search = () => {
  const dispatch = useDispatch();
  const { data: pokemonData } = useSelector((state) => state.pokemon);

  // form field state
  const [pokemonName, setPokemonName] = useState("");

  // handleSubmit
  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(fetchAsyncPokemon(pokemonName));
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
      <Card data={pokemonData} />
    </>
  );
};

export default Search;
