import axios from "axios";
import React from "react";
import MealList from "./MealList.jsx";
// TODO: import axios

export default class App extends React.Component {
  constructor() {
    super();

    // CONTEXT: we are starting with hardcoded data
    //  and will switch to dynamic data from axios later
    this.state = {
      meals: [],
    };
  }

  // NEW IDEA: lifecycle methods allow us to hook into a component's various
  //  stages such as:
  //    - after it mounts on the DOM tree (componentDidMount)
  //    - before it unmounts from the DOM tree (componentWillUnmount)

  componentDidMount() {
    console.log("this is going to run when it mounts");

    this.interval = setInterval(async () => {
      const { data } = await axios.get("http://localhost:3000/meals");
      this.setState({ meals: data });
    }, 5000);
  }

  componentWillUnmount() {
    console.log("this is going to happen on unmount");

    clearInterval(this.interval);
  }

  render() {
    return (
      <>
        <h1>Meal list</h1>
        {/* CONTEXT: we pass along our meals as props into the MealList component */}
        <MealList meals={this.state.meals} />
      </>
    );
  }
}
