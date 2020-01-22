import store from "./redux/store";

const buttonIncrement = document.getElementById("button-increment");
// const buttonDecrement = document.getElementById("button-decrement");
const h1 = document.getElementsByTagName("h1")[0];

h1.innerText = store.getState();

// subscribe to our store so we can see how our
//    state changes as we dispatch actions
store.subscribe(() => {
  h1.innerText = store.getState();
});

buttonIncrement.addEventListener("click", () => {
  store.dispatch({ type: "INCREMENT" });
});

// buttonDecrement.addEventListener("click", () => {
//   store.dispatch({ type: "DECREMENT" });
// });
