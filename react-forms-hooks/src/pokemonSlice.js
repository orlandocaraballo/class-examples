// import createSlice and createAsyncThunk
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// create thunk
export const fetchAsyncPokemon = createAsyncThunk(
  "pokemon/fetchPokemon",
  async (name) => {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
    return data;
  }
);

// execute createSlice with
//  - name
//  - initialState
//  - reducers
//  - extraReducers
const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    data: {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncPokemon.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

// export reducer from slice
export default pokemonSlice.reducer;
