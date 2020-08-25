import React from "react";
import ReactDOM from "react-dom";
import store from "./store"; // imported for you already
import { INCREMENT } from "./actionTypes";
import { connect, Provider } from "react-redux";

class Counter extends React.Component {
  constructor() {
    super();
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.props.incrementCountInReact();
  }

  render() {
    return (
      <div id="container">
        <div id="counter">
          <h1>{this.props.countInReact}</h1>
          <button type="button" onClick={this.increment}>
            Increment
          </button>
        </div>
      </div>
    );
  }
}

/*
  we map the names of properties from the state
    to props:
    - state.count becomes props.countInReact in the component
*/
const mapStateToProps = (state) => {
  return {
    countInReact: state.count
  };
};

/*
  we map the names of properties from the state
    to props:
    - dispatch({ type: INCREMENT_COUNT}) becomes props.incrementCountInReact
*/
const mapDispatchToProps = (dispatch) => {
  return {
    incrementCountInReact: () => {
      dispatch({
        type: INCREMENT
      });
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
