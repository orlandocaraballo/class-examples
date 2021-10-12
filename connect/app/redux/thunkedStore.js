import { createStore, applyMiddleware, combineReducers } from "redux";
import { INCREMENT_COUNT, STUDENTS_LOADED } from "./actionTypes";
import thunk from "redux-thunk";
import logger from "redux-logger";

const counterInitialState = {
  count: 0
};

const studentsInitialState = {
  students: []
};

const counterReducer = (state = counterInitialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
};

const studentsReducer = (state = studentsInitialState, action) => {
  switch (action.type) {
    case STUDENTS_LOADED:
      return { ...state, students: action.students };
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    counter: counterReducer,
    students: studentsReducer
  }),
  applyMiddleware(thunk, logger)
);

export default store;
