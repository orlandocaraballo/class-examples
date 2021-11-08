// Redux Homepage: https://redux.js.org/
// Fundamentals of Redux Course: https://egghead.io/courses/fundamentals-of-redux-course-from-dan-abramov-bd5cc867

// CONTEXT: because we are using this on our backend,
//  we would normally need to use the require syntax in order to use the
//  redux module. However, we set the value of "type" in the package.json
//  to be set to "module" which allows for this syntax
import { createStore, applyMiddleware } from "redux";

// NPM module homepage: https://www.npmjs.com/package/redux-logger
import reduxLogger from "redux-logger";

// CONTEXT = this extra step should not be necessary when using it on the
//  front end. We have to do this in this specific example I have written
//  due to me trying to use Ecmascript module syntax with CommonJS modules. If this
//  makes little sense to you, that is ok. This is not important to understand
//  for this lesson.
const { logger } = reduxLogger;

// DEFINITION: action types are constants we define that represent actions
//  that are occuring on our redux store. The constants are typically named using
//  all caps and typically have a value the same as the name in the form of a string.
//  (i.e const DEPOSIT = "DEPOSIT")
const DEPOSIT = "DEPOSIT";
const WITHDRAW = "WITHDRAW";

// DEFINITION: action creators are factory functions that return a
//  an object representing the action. This action always has a type and
//  payload associated with it. A payload is any data that is passed along with
//  the type (i.e amount)
const depositActionCreator = (amount) => ({
  type: DEPOSIT,
  amount: amount,
});

const withdrawActionCreator = (amount) => ({
  type: WITHDRAW,
  amount: amount,
});

// DEFINITION: middleware are functions that allow us to run code whenever the
//  store dispatches an action. We have access to the store object, the next function
//  and the current action being fired. This is often used to add extra behavior
//  in between a store dispatching an action and it reaching the reducer.
//  Homepage: https://redux.js.org/understanding/history-and-design/middleware
//  Examples: https://redux.js.org/understanding/history-and-design/middleware#seven-examples
const personalLoggingMiddleware = (store) => (next) => (action) => {
  // we can do whatever we want in a middleware

  console.log("action", action.type, "@", new Date().toString());
  console.log("  prev state  => ", store.getState());
  console.log("  action      => ", action);

  const newState = next(action);

  console.log("  next state  => ", store.getState());

  return newState;
};

// this is a longer form of writing the logging middleware above
// const loggingMiddleware = (store) => {
//   return (next) => {
//     return (action) => {
//       // we can do whatever we want in a middleware
//       console.log("action", action.type, "@", new Date().toString());
//       console.log("  prev state  => ", store.getState());
//       console.log("  action      => ", action);

//       const newState = next(action);

//       console.log("  next state  => ", store.getState());

//       return newState;
//     };
//   };
// };

// DEFINITION: the initial state should always be set on a reducer. The initial
//  state represents what the initial state object that you are keeping track of
//  should store when the store is initialize. This is similar to assigning the
//  this.state = { amount: 0 } in a React Component
const initialState = { amount: 0 };

// DEFINITION: a reducer is a function that will be executed when the store
//  dispatches an action. A reducer always provides you the current state as its
//  first argument and an action for its second argument. The initial state is always
//  set as the default value of the state.
const reducer = (state = initialState, action) => {
  // our return value from here must be the next state object.

  // CONTEXT: the reason we use a switch statement here is because we are choosing
  //  to change the state according to what action has been dispatched
  switch (action.type) {
    case DEPOSIT:
      // IMPORTANT: state is immutable in redux (cannot be changed) therefore
      //  we must always return a new object representing the state
      return { amount: state.amount + action.amount };
    case WITHDRAW:
      return { amount: state.amount - action.amount };
    default:
      return state;
  }
};

// here we assign a reducer to the store along with assigning it some middleware
const store = createStore(reducer, applyMiddleware(logger));

// CLARIFICATION: store.subscribe() allows us to run some code in between
//  dispatches, however, it is not as powerful as middleware since we have
//  no access to the next state nor the current action. Oftentimes
// store.subscribe(() => console.log(store.getState()));

// CONTEXT: below we simulate a state changes that would occur
//  when interacting with a bank account using redux
// store.dispatch({ type: DEPOSIT, amount: 100 });
// store.dispatch({ type: DEPOSIT, amount: 200 });
// store.dispatch({ type: WITHDRAW, amount: 100 });
// store.dispatch({ type: DEPOSIT, amount: 200 });
// store.dispatch({ type: WITHDRAW, amount: 400 });

// its much easier to use an action creator
store.dispatch(depositActionCreator(100));
store.dispatch(depositActionCreator(200));
store.dispatch(withdrawActionCreator(100));
store.dispatch(depositActionCreator(200));
store.dispatch(withdrawActionCreator(400));
