import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/store";

import { loadData } from "./redux/reducers/animeFactsReducer";
import { increment } from "./redux/reducers/counterReducer";

// imported for you already
import { connect, Provider } from "react-redux";

class Counter extends React.Component {
  constructor() {
    super();
    this.handleLoad = this.handleLoad.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleLoad() {
    this.props.loadDataInReact();
  }

  handleIncrement() {
    this.props.incrementInReact();
  }

  render() {
    const { animeFactsInReact } = this.props;

    const animeFactsElements = animeFactsInReact.map((fact) => {
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
          <button
            id="counter-button"
            type="button"
            onClick={this.handleIncrement}
          >
            {this.props.countInReact} Increment
          </button>
          <button
            id="anime-facts-button"
            type="button"
            onClick={this.handleLoad}
          >
            Load Anime Facts
          </button>
          {animeFactsInReact.length > 0 ? <ul>{animeFactsElements}</ul> : ""}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    animeFactsInReact: state.animeFactsReducer.animeFacts,
    countInReact: state.counterReducer.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadDataInReact: () => {
      dispatch(loadData());
    },
    incrementInReact: () => {
      dispatch(increment());
    },
  };
};

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

// we must wrap our connected component
//    with the Provider component
ReactDOM.render(
  <Provider store={store}>
    <ConnectedCounter />
  </Provider>,
  document.getElementById("app")
);
