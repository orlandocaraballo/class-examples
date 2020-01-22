import React from "react";
import ReactDOM from "react-dom";
import store from "./store"; // imported for you already
import { Provider, connect } from "react-redux";
import { INCREMENT_COUNT } from "./actionTypes";
import { loadStudents } from "./actionCreators";

function Counter(props) {
  return (
    <div id="container">
      <div id="counter">
        <h1>{props.count}</h1>
        <button type="button" onClick={props.incrementCount}>
          Increment
        </button>
      </div>
      <ul>
        {props.students.map(student => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    count: state.count,
    students: state.students
  };
};

const mapDispatchToProps = dispatch => {
  return {
    incrementCount: () => {
      dispatch(loadStudents());
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
