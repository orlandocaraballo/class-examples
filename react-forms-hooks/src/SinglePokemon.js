import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const SinglePokemon = () => {
  // retrieve params
  const { id } = useParams();

  // set stateful variables
  const [pokemonData, setPokemonData] = useState({});

  // set pokemon data using useEffect
  useEffect(() => {
    const fetchPokemonData = async () => {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );

      setPokemonData(data);
      console.log(data);
    };

    fetchPokemonData();
  }, [id]);

  // return Card
  return (
    <>
      <h1>Single Pokemon</h1>
      <Card data={pokemonData} />
    </>
  );
};

export default SinglePokemon;
