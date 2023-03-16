import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [count, setCount] = useState(0);

  // button handler
  function goUp(event) {
    event.preventDefault();

    // set state of counter
    setCount(count + 1);

    console.log(`The current count is now set to: ${count}`);
  }

  function goDown(event) {
    event.preventDefault();

    // set state of counter
    setCount(count - 1);

    console.log(`The current count is now set to: ${count}`);
  }

  // always return something
  return (
    <ul>
      <div id="count">Count: {count}</div>

      <button onClick={goUp}>Go up!</button>
      <button onClick={goDown}>Go down!</button>
    </ul>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
