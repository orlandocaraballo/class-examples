import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import axios from "axios";

// Type constants
export const INCREMENT = "INCREMENT";
export const LOADED_STUDENTS = "LOADED_STUDENTS";

// action creator
export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const loadData = () => {
  return async (dispatch, getState) => {
    const response = await axios.get("https://sei-api.herokuapp.com/students");
    const data = response.data;

    console.log(data);

    dispatch({
      type: "LOADED_STUDENTS",
      loadedStudents: data
    });
  };
};

// reducers
const counterInitialState = {
  count: 0
};

const counterReducer = (state = counterInitialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1
      };
    default:
      return state;
  }
};

const studentInitialState = {
  students: []
};

const studentsReducer = (state = studentInitialState, action) => {
  switch (action.type) {
    case LOADED_STUDENTS:
      return { ...state, students: action.loadedStudents };
    default:
      return state;
  }
};

// here we create our top level reducer from the two sub reducers
const topLevelReducer = combineReducers({
  studentsReducer: studentsReducer,
  counterReducer: counterReducer
});

const store = createStore(topLevelReducer, applyMiddleware(logger, thunk));

export default store;
