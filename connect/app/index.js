import React from "react";
import ReactDOM from "react-dom";
import store, { increment, decrement, loadStudents } from "./store"; // imported for you already
import { Provider, connect } from "react-redux";

class Counter extends React.Component {
  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    // this.props.incrementer();
    this.props.loadStudentsInReact();
  }

  render() {
    const listItems =
      this.props.studentsInReact &&
      this.props.studentsInReact.map((student) => {
        return <li>{student.name}</li>;
      });

    return (
      <div id="container">
        <div id="counter">
          <button onClick={this.clickHandler}>Increment</button>
          <ul>{listItems}</ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counterValue: state.counterReducer.count,
    studentsInReact: state.studentsReducer.students,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementer: () => {
      dispatch(increment());
    },
    decrementer: () => {
      dispatch(decrement());
    },
    loadStudentsInReact: () => {
      dispatch(loadStudents());
    },
  };
};

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

function App() {
  return (
    <div>
      <ConnectedCounter />
    </div>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
