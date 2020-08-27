import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import axios from "axios";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      error: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async handleChange(event) {
    const username = event.target.value;
    let error = null;

    if (username.length >= 7 && username !== "orlando") {
      error = "Your username is incorrect";
      console.log("dsfds");
    }
    // validation logic here
    this.setState({
      username,
      error
    });
  }

  async handleSubmit(event) {
    event.preventDefault();

    const username = event.target.username.value;

    console.log(username);

    await axios.post("http://localhost:8080/api/test", this.state);
  }

  render() {
    const errorMessage = this.state.error ? <p>{this.state.error}</p> : "";

    return (
      <>
        <h1>Login</h1>
        {errorMessage}
        <form method="post" action="/" onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={this.handleChange}
              value={this.state.username}
            />
          </div>
          <br />
          <button>Go</button>
        </form>
      </>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
