import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPokemon = createAsyncThunk(
  "pokemon/fetchPokemon",
  async (name) => {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
    );
    return data;
  }
);

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    data: {},
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchPokemon.fulfilled, (state, action) => {
      console.log(action.payload);
      state.data = action.payload;
    });
  },
});

export default pokemonSlice.reducer;
