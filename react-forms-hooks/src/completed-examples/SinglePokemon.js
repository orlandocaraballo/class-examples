import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const SinglePokemon = () => {
  const { id } = useParams();
  const [pokemonData, setPokemonData] = useState({});

  useEffect(() => {
    const fetchPokemonData = async () => {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      setPokemonData(data);
    };

    fetchPokemonData();
  }, [id]);

  return (
    <>
      <h1>Single Pokemon</h1>
      <Card data={pokemonData} />
    </>
  );
};

export default SinglePokemon;
