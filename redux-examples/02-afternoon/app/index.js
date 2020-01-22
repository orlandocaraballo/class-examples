import React from "react";
import ReactDOM from "react-dom";
import store from "./store"; // imported for you already

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.increment = this.increment.bind(this);
    store.subscribe(() => {
      this.setState({ count: store.getState().count });
    });
  }

  increment() {
    store.dispatch({ type: "INCREMENT" });
    // this.setState({
    //   count: this.state.count + 1
    // });
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
