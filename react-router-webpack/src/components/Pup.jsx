import React from "react";
import pups from "./pups.js";

class Pup extends React.Component {
  constructor() {
    super();

    this.state = {
      pup: {},
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setState(pups[this.props.match.params.pupId - 1]);
  }

  handleClick(event) {
    // CONTEXT: components that are assigned to a Route have access to
    //  the history object from props
    // DEFINITION: the history.push() method allows us to redirect the user
    //  to a different url https://v5.reactrouter.com/web/api/history
    // this.props.history.push("/pups");
    this.props.history.push("/pups/1", this.props.match);
  }

  render() {
    console.log("props", this.props);

    const { name, age, imageSrc } = this.state;

    return (
      <React.Fragment>
        <h3>{name}</h3>
        <em>Age: {age}</em>
        <img src={`/${imageSrc}`} />
        <button onClick={this.handleClick}>Go Back</button>
      </React.Fragment>
    );
  }
}

export default Pup;
