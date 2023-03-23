import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemon } from "./pokemonSlice";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.pokemon);

  // createRef

  // form field state
  const [pokemonName, setPokemonName] = useState("");

  // handleChange

  // handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(fetchPokemon(pokemonName));
  };

  return (
    <>
      <h1>Pokemon Card</h1>
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
      {data.sprites && (
        <section>
          <img
            src={data.sprites.other["official-artwork"].front_default}
            alt="artwork"
          />
          <h2>{data.name}</h2>
          <p>
            <em>
              {data.abilities.map(({ ability }) => ability.name).join(", ")}
            </em>
          </p>
          <span>{}</span>
        </section>
      )}
    </>
  );
}

export default App;
