import React from "react";
import ReactDOM from "react-dom";

// all components must inherit from React.Component
class App extends React.Component {
  // constructor method

  // goUp method

  // goDown method

  // always define a render method
  render() {
    return <div>Counter: 0</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
