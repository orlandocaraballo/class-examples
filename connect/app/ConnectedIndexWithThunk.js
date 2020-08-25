import React from "react";
import ReactDOM from "react-dom";
import store, { loadData } from "./storeWithThunk"; // imported for you already
import { INCREMENT } from "./actionTypes";
import { connect, Provider } from "react-redux";

class Counter extends React.Component {
  constructor() {
    super();
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.props.incrementCountInReact();
    this.props.loadDataInReact();
  }

  render() {
    // here I am first checking to see that studentsInReact exists
    //  before mapping thru the array
    const studentElements =
      this.props.studentsInReact &&
      this.props.studentsInReact.map((student) => {
        return <li>{student.name}</li>;
      });

    return (
      <div id="container">
        <div id="counter">
          <h1>{this.props.countInReact}</h1>
          <button type="button" onClick={this.increment}>
            Increment
          </button>
        </div>
        <ul>{studentElements}</ul>
      </div>
    );
  }
}

/*
  we map the names of properties from the state
    to props:
    - state.count becomes props.countInReact in the component
    - state.students becomes props.studentsInReact in the component
*/
const mapStateToProps = (state) => {
  return {
    countInReact: state.count,
    studentsInReact: state.students
  };
};

/*
  we map the names of properties from the state
    to props:
    - dispatch({ type: INCREMENT}) becomes props.incrementCountInReact in the component
    - dispatch(loadData()) becomes props.loadDataInReact in the component
*/
const mapDispatchToProps = (dispatch) => {
  return {
    incrementCountInReact: () => {
      dispatch({
        type: INCREMENT
      });
    },
    loadDataInReact: () => {
      dispatch(loadData());
    }
  };
};

// here we connect the mapped props
//    to our component and created a connected
//    component
const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

// we must wrap our connected component
//    with the Provider component
ReactDOM.render(
  <Provider store={store}>
    <ConnectedCounter />
  </Provider>,
  document.getElementById("app")
);
