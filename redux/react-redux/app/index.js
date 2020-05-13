import React from "react";
import ReactDOM from "react-dom";
import store from "./store";
import { incrementActionCreator } from "./actionCreators";

class Counter extends React.Component {
  constructor() {
    super();
    this.increment = this.increment.bind(this);
    this.state = store.getState();

    store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  increment() {
    store.dispatch(incrementActionCreator());
  }

  render() {
    return (
      <div id="container">
        <div id="counter">
          <h1>{this.state.count}</h1>
          <button onClick={this.increment}>Increment</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("app"));
