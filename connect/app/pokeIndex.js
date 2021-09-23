import React from "react";
import ReactDOM from "react-dom";
import { connect, Provider } from "react-redux";
import store, { loadData } from "./storeWithThunk"; // imported for you already

class Counter extends React.Component {
  render() {
    console.log("data in react", this.props.dataInReact.length);

    return (
      <div id="container">
        <div id="counter">
          <button>Increment</button>
          <button onClick={this.props.loadInReact}>Get Data</button>
          <ul>
            {this.props.dataInReact.map((pokemon) => (
              <li>{pokemon.name}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataInReact: state.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadInReact: () => {
      dispatch(loadData());
    },
  };
};

// const InBetweenComponent = connect(mapStateToProps, mapDispatchToProps);
// const ConnectedCounter = InBetweenComponent(Counter);

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedCounter />
  </Provider>,
  document.getElementById("app")
);
