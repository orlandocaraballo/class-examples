const { createStore } = require("redux");
const reducer = (state = { amount: 0 }, action) => {
  switch (action.type) {
    case "DEPOSIT":
      return { amount: state.amount + action.amount };
    case "WITHDRAW":
      return { amount: state.amount - action.amount };
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => console.log(`action: ${store.getState().amount}`));

store.dispatch({ type: "DEPOSIT", amount: 100 });
store.dispatch({ type: "DEPOSIT", amount: 200 });
store.dispatch({ type: "DEPOSIT", amount: 300 });
