import React from "react";
import ReactDOM from "react-dom";
import store, { INCREMENT } from "./store";

// we make sure to import connect / Provider from the react-redux module
import { connect, Provider } from "react-redux";

class Counter extends React.Component {
  constructor() {
    super();
    this.increment = this.increment.bind(this);
  }

  increment() {
    // this corresponds to the function defined on line 49
    this.props.incrementCount();
  }

  render() {
    return (
      <div id="container">
        <div id="counter">
          {/* the this.props.countInReact value corresponds to the value stored in countInReact on line 39 */}
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
    - state.count becomes props.count in the component
*/
const mapStateToProps = (state) => {
  return {
    countInReact: state.count,
  };
};

/*
  we map the names of properties from the state
    to props:
    - dispatch({ type: INCREMENT_COUNT}) becomes props.incrementCount
*/
const mapDispatchToProps = (dispatch) => {
  return {
    incrementCount: () => {
      dispatch({
        type: INCREMENT,
      });
    },
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
