import React from "react";
import ReactDOM from "react-dom";
import store from "./store";
import { incrementCount } from "./actionCreators";
import { Provider, connect } from "react-redux";

class Counter extends React.Component {
  constructor() {
    super();
    this.increment = this.increment.bind(this);
  }

  increment() {
    // store.dispatch(incrementCount());
    // this.props.incrementCount();
    console.log(this.props);
  }

  render() {
    return (
      <div id="container">
        <div id="counter">
          <h1>0</h1>

          <button onClick={this.increment}>Increment</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.count,
  amount: state.amount
});

const mapDispatchToProps = (dispatch) => ({
  incrementCount: () => dispatch(incrementCount())
});

// const mapDispatchToProps = { incrementCount };

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedCounter />
  </Provider>,
  document.getElementById("app")
);
