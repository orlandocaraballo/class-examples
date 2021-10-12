import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import axios from "axios";

// Type constants
export const LOADED_ANIME_FACTS = "LOADED_ANIME_FACTS";

// Action creators
export const loadedAnimeFacts = (animeFacts) => {
  return {
    type: LOADED_ANIME_FACTS,
    animeFacts,
  };
};

export const loadData = () => {
  return async (dispatch, getState) => {
    let response;

    try {
      response = await axios.get(
        "https://anime-facts-rest-api.herokuapp.com/api/v1"
      );
    } catch (e) {
      console.error(e);
    }

    const data = response.data;

    console.log(data);

    dispatch(loadedAnimeFacts(data.data));
  };
};

// reducer

const initialState = {
  animeFacts: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED_ANIME_FACTS:
      return { ...state, animeFacts: action.animeFacts };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
