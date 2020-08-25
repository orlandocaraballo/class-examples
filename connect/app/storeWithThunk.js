import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import axios from "axios";

// Type constants
export const INCREMENT = "INCREMENT";
export const LOADED_STUDENTS = "LOADED_STUDENTS";

// Action creators
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
      type: LOADED_STUDENTS,
      loadedStudents: data
    });
  };
};

// reducer

const initialState = {
  count: 0,
  students: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1
      };
    case LOADED_STUDENTS:
      return { ...state, students: action.loadedStudents };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
