import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import store from "../store";

// import our reducers
import { counterReducer } from "./counterReducer";
import { animeFactsReducer } from "./animeFactsReducer";

// combine our reducers together
export const topLevelReducer = combineReducers({
  counterReducer: counterReducer,
  animeFactsReducer: animeFactsReducer,
});
