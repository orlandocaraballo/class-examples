import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [username, setUsername] = useState("");

  function handleChange(event) {
    const usernameValue = event.target.value;
    // let error = null;

    // if (username.length >= 7 && username !== "orlando") {
    //   error = "Your username is incorrect";
    //   console.log("dsfds");
    // }
    // validation logic here
    // this.setState({
    //   username,
    //   error
    // });
    console.log(usernameValue);
    setUsername(usernameValue);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const usernameValue = event.target.username.value;

    // console.log(usernameValue);

    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${usernameValue}`
    );

    console.log(data);
  }

  // const errorMessage = this.state.error ? <p>{this.state.error}</p> : "";

  return (
    <>
      <h1>Login</h1>
      {/* {errorMessage} */}
      <form method="post" action="/" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            value={username}
          />
        </div>
        <br />
        <button>Go</button>
      </form>
    </>
  );
}

export default App;
