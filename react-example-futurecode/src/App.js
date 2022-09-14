import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [pokemons, setPokemon] = useState([]);

  useEffect(() => {
    async function loadPokemon() {
      const {
        data: { results },
      } = await axios.get("https://pokeapi.co/api/v2/pokemon/");

      setPokemon(results);
    }

    loadPokemon();
  }, []);

  return (
    <div className="App">
      <h1>Pokemon</h1>
      <ul>
        {pokemons.map(({ name }, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
