import { INCREMENT_COUNT, STUDENTS_LOADED } from "./actionTypes";

export const incrementCount = () => {
  return {
    type: INCREMENT_COUNT
  };
};

export const loadedStudents = students => {
  return {
    type: STUDENTS_LOADED,
    students: students
  };
};

export const loadedStudent = student => {
  return {
    type: STUDENT_LOADED,
    student: student
  };
};

export const loadStudents = () => {
  return async (dispatch, getState) => {
    const res = await fetch("https://sei-api.herokuapp.com/students");
    const data = await res.json();

    // console.log(data);
    dispatch(loadedStudents(data));
    // dispatch(incrementCount());
  };
};

export const loadStudent = (id) => {
  return async (dispatch, getState) => {
    const res = await fetch(`https://sei-api.herokuapp.com/students/${id}`);
    const data = await res.json();

    // console.log(data);
    dispatch(loadedStudent(data));
    // dispatch(incrementCount());
  };
};
