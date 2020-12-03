import { createStore, applyMiddleware, combineReducers } from "redux";
import reduxLogger from "redux-logger";
import thunk from "redux-thunk";
import axios from "axios";

// Type constants
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const LOADED_STUDENTS = "LOADED_STUDENTS";
export const LOADED_STUDENT = "LOADED_STUDENT";
export const SET_GAME_NAME = "SET_GAME_NAME";
export const SET_GAME_POINTS = "SET_GAME_POINTS";
export const SET_GAME_STARTED = "SET_GAME_STARTED";

// Action creators
export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const loadedStudents = (students) => {
  return {
    type: LOADED_STUDENTS,
    studentsPayload: students,
  };
};

export const loadedStudent = (student) => {
  return {
    type: LOADED_STUDENT,
    studentPayload: student,
  };
};

export const setGameName = (name) => {
  return {
    type: SET_GAME_NAME,
    gameNamePayload: name,
  };
};

export const setGamePoints = (points) => {
  return {
    type: SET_GAME_POINTS,
    gamePointsPayload: points,
  };
};

export const setGameStarted = (started) => {
  return {
    type: SET_GAME_STARTED,
    gameStartedPayload: started,
  };
};

// thunks
export const loadStudents = () => {
  return async (dispatch) => {
    const { data } = await axios.get("https://sei-api.herokuapp.com/students");

    dispatch(loadedStudents(data));
  };
};

export const loadStudent = (id) => {
  return async (dispatch) => {
    const { data } = await axios.get(
      `https://sei-api.herokuapp.com/students/${id}`
    );

    dispatch(loadedStudent(data));
  };
};

// reducer

// make sure to set initial values of state variables
//  to prevent errors indicating that state is not set
const studentsReducerInitialState = {
  students: [],
  currentStudent: null,
  // gameName: "",
  // gamePoints: 0,
  // gameStarted: false,
};

const studentsReducer = (state = studentsReducerInitialState, action) => {
  switch (action.type) {
    case LOADED_STUDENTS:
      return { ...state, students: action.studentsPayload };
    case LOADED_STUDENT:
      return { ...state, currentStudent: action.studentPayload };
    // case SET_GAME_NAME:
    //   return { ...state, gameName: action.gameNamePayload };
    // case SET_GAME_POINTS:
    //   return { ...state, gamePoints: action.gamePointsPayload };
    // case SET_GAME_STARTED:
    //   return { ...state, gameStarted: action.gameStartedPayload };
    default:
      return state;
  }
};

// this will be the initial state for counterReducer
const counterReducerInitialState = {
  count: 0,
};

const counterReducer = (state = counterReducerInitialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};

// we define our sub-reducers as keys and give them values
//  corresponding to the matching sub-reducer name
const topLevelReducer = combineReducers({
  counterReducer: counterReducer, // state.counterReducer.count
  studentsReducer: studentsReducer, // state.studentsReducer.students
});

const store = createStore(topLevelReducer, applyMiddleware(reduxLogger, thunk));

export default store;
