// import configureStore
import { configureStore } from "@reduxjs/toolkit";

// import reducer
import pokemonSlice from "./pokemonSlice";

// configureStore
const store = configureStore({
  reducer: {
    pokemon: pokemonSlice,
  },
});

export default store;
