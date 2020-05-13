const { createStore, applyMiddleware } = require("redux");
const { logger } = require("redux-logger");

const initialState = { amount: 0 };

// action types
const DEPOSIT = "DEPOSIT";
const WITHDRAW = "WITHDRAW";

// action creators
const depositActionCreator = (amount) => ({
  type: DEPOSIT,
  amount: amount
});

const withdrawActionCreator = (amount) => ({
  type: WITHDRAW,
  amount: amount
});

const loggingMiddleware = (store) => (next) => (action) => {
  action.name = "Orlando";
  console.log("action type", action.name);
  return next(action);
};

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
