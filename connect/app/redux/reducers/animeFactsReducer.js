import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import axios from "axios";
import thunk from "redux-thunk";

// type constants
export const LOADED_ANIME_FACTS = "LOADED_ANIME_FACTS";

// action creators
const loadedData = (animeFacts) => {
  return {
    type: LOADED_ANIME_FACTS,
    animeFacts,
  };
};

// thunk creator
export const loadData = () => {
  return async (dispatch) => {
    let response;

    try {
      response = await axios.get(
        "https://anime-facts-rest-api.herokuapp.com/api/v1"
      );
    } catch (error) {
      console.error(error);
    }

    dispatch(loadedData(response.data.data));
  };
};

// reducer
const initialState = {
  animeFacts: [],
};

export const animeFactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED_ANIME_FACTS:
      return { ...state, animeFacts: action.animeFacts };
    default:
      return state;
  }
};
