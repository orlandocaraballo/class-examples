import React from "react";
import ReactDOM from "react-dom";
import store, { increment } from "./store"; // imported for you already

class Counter extends React.Component {
  constructor() {
    super();
    this.state = store.getState();
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    this.functionToCallWhenWeWantToUnsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentWillUnmount() {
    this.functionToCallWhenWeWantToUnsubscribe();
  }

  clickHandler() {
    const action = increment();
    store.dispatch(action);
  }

  render() {
    return (
      <div id="container">
        <div id="counter">
          <h1>{this.state.count}</h1>
          <button onClick={this.clickHandler}>Increment</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("app"));
