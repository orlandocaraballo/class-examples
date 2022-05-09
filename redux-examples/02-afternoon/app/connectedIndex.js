import React from "react";
import ReactDOM from "react-dom";
import store from "./store";
import { incrementActionCreator } from "./actionCreators";
import { Provider, connect } from "react-redux";

class Counter extends React.Component {
  constructor() {
    super();
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.props.incrementInReact();
  }

  render() {
    return (
      <div id="container">
        <div id="counter">
          <h1>{this.props.countInReact}</h1>
          <button onClick={this.increment}>Increment</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  countInReact: state.count,
});

const mapDispatchToProps = (dispatch) => ({
  incrementInReact: () => dispatch(incrementActionCreator()),
});

// const CounterBridge = connect(mapStateToProps, mapDispatchToProps);
// const ConnectedCounter = CounterBridge(Counter);

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedCounter />
  </Provider>,
  document.getElementById("app")
);
