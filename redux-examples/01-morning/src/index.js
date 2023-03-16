import store from "./redux/store";
import { createIncrement, createDecrement } from "./redux/actionCreators";

const buttonIncrement = document.getElementById("button-increment");
const buttonDecrement = document.getElementById("button-decrement");
const h1 = document.getElementsByTagName("h1")[0];

// h1.innerText = store.getState();

// subscribe to our store so we can see how our
//    state changes as we dispatch actions
// store.subscribe(() => {
//   const state = store.getState();
//   // h1.innerText = state;
//   console.log("INCREMENT VALUE =>", state);
// });

buttonIncrement.addEventListener("click", () => {
  store.dispatch(createIncrement());
});

buttonDecrement.addEventListener("click", () => {
  store.dispatch(createDecrement());
});
