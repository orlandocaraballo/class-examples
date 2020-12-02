import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    // required in order for this to work within buttonClick
    this.goUp = this.goUp.bind(this);
    this.goDown = this.goDown.bind(this);
  }

  // button handler
  goUp(event) {
    event.preventDefault();

    // set state of counter
    this.setState((state, props) => ({
      count: ++state.count,
    }));

    console.log(`The current count is now set to: ${this.state.count}`);
  }

  goDown(event) {
    event.preventDefault();

    // set state of counter
    this.setState((state, props) => ({
      count: --state.count,
    }));

    console.log(`The current count is now set to: ${this.state.count}`);
  }

  render() {
    return (
      <ul>
        <div id="count">Count: {this.state.count}</div>

        <button onClick={this.goUp}>Go up!</button>
        <button onClick={this.goDown}>Go down!</button>
      </ul>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
