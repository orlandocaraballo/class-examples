import { createStore, applyMiddleware, combineReducers } from "redux";
import { INCREMENT_COUNT, STUDENTS_LOADED } from "./actionTypes";
import logger from "redux-logger";
import thunk from "redux-thunk";

const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
};

const studentsReducer = (state = { students: [] }, action) => {
  switch (action.type) {
    case STUDENTS_LOADED:
      return {
        ...state,
        students: action.students.sort((a, b) => {
          // make sure to sort students by name
          if (a.name > b.name) return 1;
          if (a.name < b.name) return -1;
          return 0;
        })
      };
    default:
      return state;
  }
};

// we are taking the two reducers
//  and creating one reducer from it where the keys of the
//  new reducer correspond to the keys of object defined below

// in other words our staste will now look like this
//  {
//    state: {
//      counter: { count: 0 },
//      students: { students: [] }
//    }
//  }
// by default

// state: { count: 1, students: [...] }
// state: { counter: { count: 1 }, students: { students: [...] } }
const mainReducer = combineReducers({
  counter: counterReducer,
  students: studentsReducer
});

const store = createStore(mainReducer, applyMiddleware(logger, thunk));

export default store;
