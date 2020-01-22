import { ADD_ARTICLE } from "./actionTypes";

const initialState = {
  articles: []
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ARTICLE:
      // copy set of articles and append new article
      return [...state.articles, action.article];
    default:
      // return prior state if no action is not matched above
      return state;
  }
}
