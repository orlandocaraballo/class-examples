import { createStore } from "redux";

// Still need:
//  - action type
//  - action creator
//  - initial state
//  - reducer

const initialState = {
  // what should be on our initial state?
  count: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
