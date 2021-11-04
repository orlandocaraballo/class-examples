import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";

class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      showApp: false,
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(event) {
    this.setState({ showApp: !this.state.showApp });
  }

  render() {
    return (
      <>
        <button onClick={this.clickHandler}>Click me!</button>
        {this.state.showApp ? <App /> : "Show this text"}
      </>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
