import axios from "axios";
import React, { useState, createRef } from "react";

function App() {
  const [data, setData] = useState("");
  // const dataRef = createRef();

  // function handleChange(event) {
  //   console.log(dataRef.current.value);
  //   // setData(event.target.value);
  // }

  async function handleSubmit(event) {
    event.preventDefault();
    // console.log(event.target.data.value);

    const { data: pokemon } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${data}`
    );

    console.log(pokemon);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="data"
          placeholder="Data"
          value={data}
          onChange={(event) => setData(event.target.value)}
        />
      </div>
      <br />
      <button type="submit">Go</button>
    </form>
  );
}

export default App;
