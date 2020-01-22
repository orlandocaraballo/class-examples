const { createStore } = require("redux");

// set the default state
const defaultState = 0;

// create our reducer
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    default:
      return state;
  }
};

// create our redux store
const store = createStore(reducer);

// dispatch the increment action
store.dispatch({ type: "INCREMENT" });

// log the state
console.log(store.getState());

store.dispatch({ type: "INCREMENT" });

console.log(store.getState());

store.dispatch({ type: "INCREMENT" });

console.log(store.getState());
