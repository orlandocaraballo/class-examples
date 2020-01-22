import React from "react";
import ReactDOM from "react-dom";
import store from "./store"; // imported for you already
import { Provider, connect } from "react-redux";
import { INCREMENT_COUNT } from "./actionTypes";
import { incrementCount, loadStudents, loadStudent } from "./actionCreators";

function Counter(props) {
  return (
    <div id="container">
      <div id="counter">
        <h1>{props.count}</h1>
        <div>
          <button type="button" onClick={props.incrementCount}>
            Increment
          </button>
          <button type="button" onClick={props.loadStudents}>
            Load Students
          </button>
        </div>
      </div>
      <ul>
        {props.students.map(student => (
          <li key={student.id}>
            <span>{student.id}</span>
            <strong>
              <a href={student.github}>{student.name}</a>
            </strong>
            <em>{student.knownFor}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    count: state.counter.count,
    students: state.students.students
  };
};

const mapDispatchToProps = dispatch => {
  return {
    incrementCount: () => {
      dispatch(incrementCount());
    },
    loadStudents: () => {
      dispatch(loadStudents());
    },
    loadStudent: (id) => {
      dispatch(loadStudent(id));
    }
  };
};

const ConnectedCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedCounter />
  </Provider>,
  document.getElementById("app")
);
