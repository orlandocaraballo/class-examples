import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();

    // event.target.username.value === username value that the user entered
    // event.target.password.value === password value that the user entered
    // const { username, password } = event.target;

    const { username, password } = this.state;

    await axios.post("http://localhost:8080/api/test", {
      username: username,
      password: password,
    });
  }

  async handleUsernameChange(event) {
    console.log(event.target.value);

    this.setState({
      username: event.target.value,
    });
  }

  async handlePasswordChange(event) {
    console.log(event.target.value);

    this.setState({
      password: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <h1>POST Form</h1>
        <form method="post" action="/" onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={this.handleUsernameChange}
              value={this.state.username}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.handlePasswordChange}
              value={this.state.password}
            />
          </div>
          <br />
          <button>Go</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
