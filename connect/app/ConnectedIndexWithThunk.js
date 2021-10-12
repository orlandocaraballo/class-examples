import React from "react";
import ReactDOM from "react-dom";
import store, { loadData } from "./redux/storeWithThunk"; // imported for you already
import { INCREMENT } from "./redux/actionTypes";
import { connect, Provider } from "react-redux";

class Counter extends React.Component {
  constructor() {
    super();
    this.load = this.load.bind(this);
  }

  load() {
    this.props.loadDataInReact();
  }

  render() {
    // here I am first checking to see that studentsInReact exists
    //  before mapping thru the array
    const animeFactsElements = this.props.animeFactsInReact.map((fact) => {
      return (
        <li key={fact.anime_id}>
          {fact.anime_name}
          <img src={fact.anime_img} />
        </li>
      );
    });

    return (
      <div id="container">
        <div id="counter">
          <button type="button" onClick={this.load}>
            Load Anime Facts
          </button>
          {this.props.animeFactsInReact.length > 0 ? (
            <ul>{animeFactsElements}</ul>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

/*
  we map the names of properties from the state
    to props:
    - state.count becomes props.countInReact in the component
    - state.students becomes props.studentsInReact in the component
*/
const mapStateToProps = (state) => {
  return {
    animeFactsInReact: state.animeFacts,
  };
};

/*
  we map the names of properties from the state
    to props:
    - dispatch({ type: INCREMENT}) becomes props.incrementCountInReact in the component
    - dispatch(loadData()) becomes props.loadDataInReact in the component
*/
const mapDispatchToProps = (dispatch) => {
  return {
    loadDataInReact: () => {
      dispatch(loadData());
    },
  };
};

// here we connect the mapped props
//    to our component and created a connected
//    component
const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

// we must wrap our connected component
//    with the Provider component
ReactDOM.render(
  <Provider store={store}>
    <ConnectedCounter />
  </Provider>,
  document.getElementById("app")
);
