import { createStore } from "redux";
import { INCREMENT, DECREMENT } from "./actionTypes";
import { createIncrement, createDecrement } from "./actionCreators";

// set the default state
const defaultState = 0;

// first we need to define our reducer, and pass in our default state
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

// next create our redux store
const store = createStore(reducer);

// with the subscribe method we can run code whenever any action
//  is dispatched
store.subscribe(() => {
  const state = store.getState();
  console.log("VALUE =>", state);
});

// here we dispatch the INCREMENT action three times
store.dispatch(createIncrement());
store.dispatch(createIncrement());
store.dispatch(createIncrement());
store.dispatch(createIncrement());
store.dispatch(createIncrement());

store.dispatch(createDecrement());
store.dispatch(createDecrement());

export default store;
