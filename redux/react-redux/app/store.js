import { createStore, applyMiddleware } from "redux";
import { INCREMENT } from "./actionTypes";
import { logger } from "redux-logger";

// Still need:
//  - action type
//  - action creator
//  - initial state
//  - reducer

const initialState = {
  count: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
