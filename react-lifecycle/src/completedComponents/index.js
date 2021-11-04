import React from "react";
import MealList from "./MealList.jsx";
import axios from "axios";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = { meals: [] };
    this.interval = null;
  }

  componentDidMount() {
    console.log("got here");

    this.interval = setInterval(async () => {
      const { data } = await axios.get("http://localhost:3000/meals");
      this.setState({ meals: data });
      console.log("data has been retrieved", data);
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    console.log("component unmounted");
  }

  render() {
    return <MealList meals={this.state.meals} />;
  }
}
