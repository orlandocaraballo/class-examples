import { THUNK, REPLACE_STUDENTS, ADD_STUDENT, REMOVE_STUDENT } from "./types";
import { shuffle } from "lodash-es";

// define and export our action creators
//  for use in React
export const replaceStudents = (students, count) => ({
  type: REPLACE_STUDENTS,
  students: students,
  count: count
});

export const addStudent = student => ({
  type: ADD_STUDENT,
  student: student
});

export const removeStudent = id => ({
  type: REMOVE_STUDENT,
  id: id
});

export const fetchStudents = () => {
  return dispatch => {
    fetch("https://sei-api.herokuapp.com/students")
      .then(res => res.json())
      .then(students => {
        dispatch(replaceStudents(shuffle(students), students.length));
      });
  };
};
