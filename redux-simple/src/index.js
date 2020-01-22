import store from "./store";
import { addArticle } from "./actions";

console.log(store.getState());

store.subscribe(() => console.log("Allo Gov!"));

store.dispatch(
  addArticle({
    title: "Something",
    id: 1
  })
);

console.log(store.getState());
