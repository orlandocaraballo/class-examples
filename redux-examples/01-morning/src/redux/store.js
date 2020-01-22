import { createStore } from "redux";
// import { INCREMENT, DECREMENT } from "./actionTypes";
// import { createIncrement, createDecrement } from "./actionCreators";
// import { logger } from "./logMiddleware";

// set the default state
const defaultState = 0;

// create our reducer
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    // case "DECREMENT":
    //   return state - 1;
    default:
      return state;
  }
};

// create our redux store
const store = createStore(reducer);

export default store;
