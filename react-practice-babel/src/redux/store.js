import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { THUNK, REPLACE_STUDENTS, ADD_STUDENT, REMOVE_STUDENT } from "./types";

const reducer = (state = { count: 0, students: [] }, action) => {
  switch (action.type) {
    case REPLACE_STUDENTS:
      return { count: action.count, students: action.students };
    case ADD_STUDENT:
      return {
        count: state.count + 1,
        students: [action.student, ...state.students]
      };
    case REMOVE_STUDENT:
      const students = state.students.filter(
        student => student.id !== action.id
      );

      return { count: state.count - 1, students: students };
    case THUNK:
      return state;
    default:
      return state;
  }
};

const logger = store => next => action => {
  console.log("Dispatching: ", action);
  next(action);
};

export default createStore(reducer, applyMiddleware(logger, thunk));
