// because we are using this on our backend,
//  we need to use the require syntax in order to use the
//  redux module
const { createStore, applyMiddleware } = require("redux");
const { logger } = require("redux-logger");

// action types
const DEPOSIT = "DEPOSIT";
const WITHDRAW = "WITHDRAW";

const initialState = { amount: 0 };

// action creators
const depositActionCreator = (amount) => ({
  type: DEPOSIT,
  amount: amount
});

const withdrawActionCreator = (amount) => ({
  type: WITHDRAW,
  amount: amount
});

// a sample logging middleware
const loggingMiddleware = (store) => (next) => (action) => {
  // we can do whatever we want in a middleware

  // in this case we are assigning a new piece of data
  //  onto the action...
  // if other middlewares are applied after this one, that middleware
  //  would also have the name key set to "Orlando" on the action
  action.name = "Orlando";
  console.log("action type", action.name);
  return next(action);
};

// this is a longer form of writing the logging middleware above
// const loggingMiddleware = (store) => {
//   return (next) => {
//     return (action) => {
//       console.log("action type", action.type);
//       return next(action);
//     };
//   };
// };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DEPOSIT:
      return { amount: state.amount + action.amount };
    case WITHDRAW:
      return { amount: state.amount - action.amount };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(loggingMiddleware));

// store.subscribe(() => console.log(store.getState()));

store.dispatch(depositActionCreator(100));
store.dispatch(depositActionCreator(200));
store.dispatch(withdrawActionCreator(100));
store.dispatch(depositActionCreator(200));
store.dispatch(withdrawActionCreator(400));
