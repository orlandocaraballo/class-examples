import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import axios from "axios";

class Main extends React.Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();

    console.log(event.target.username.value);

    const username = event.target.username.value;

    await axios.post("http://localhost:8080/api/test", {
      username,
    });
  }

  render() {
    return (
      <>
        <h1>POST Form</h1>
        <form method="post" action="/" onSubmit={this.handleSubmit}>
          <div>
            <input type="text" name="username" placeholder="Username" />
          </div>
          <br />
          <button>Go</button>
        </form>
      </>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
