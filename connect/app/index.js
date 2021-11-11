import React from "react";
import ReactDOM from "react-dom";
import store, { increment } from "./redux/store"; // imported for you already
import { Provider, connect } from "react-redux";

class Counter extends React.Component {
  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.props.incrementInReact();
  }

  render() {
    return (
      <div id="container">
        <div id="counter">
          <h1>{this.props.counterInReact}</h1>
          <button onClick={this.clickHandler}>Increment</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counterInReact: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementInReact: () => {
      dispatch(increment());
    },
  };
};

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter); // currying

ReactDOM.render(
  <Provider store={store}>
    <ConnectedCounter />
  </Provider>,
  document.getElementById("app")
);
