import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  // we grab our state and state setting function
  //  from useState
  const [count, setCount] = useState(0);
  // const [name, setName] = useState("orlando");

  // setName("Veronica");

  // goUp function
  function goUp() {
    setCount(count + 1);
  }

  // goDown function
  function goDown() {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  }

  // always return from your functional component
  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={goUp}>Go up</button>
      <button onClick={goDown}>Go down</button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
