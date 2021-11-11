import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import axios from "axios";
import thunk from "redux-thunk";

import { animeFactsReducer } from "./reducers/animeFactsReducer";
import { counterReducer } from "./reducers/counterReducer";
// import { topLevelReducer } from "./reducers";

const topLevelReducer = combineReducers({
  animeFactsReducer,
  counterReducer,
});

const store = createStore(topLevelReducer, applyMiddleware(logger, thunk));

export default store;
