import React, { useState } from "react";
import ReactDOM from "react-dom/client";

// we are passing in topping and chooseTopping
const Topping = ({ chooseTopping, topping }) => {
  return <li onClick={() => chooseTopping(topping)}>{topping}</li>;
};

// const Cheese = (props) => {
//   return <li onClick={() => props.chooseTopping("cheese")}>Cheese</li>;
// };

// const Broccoli = (props) => {
//   return <li onClick={() => props.chooseTopping("broccoli")}>Broccoli</li>;
// };

// const Anchovies = (props) => {
//   return <li onClick={() => props.chooseTopping("anchovies")}>Anchovies</li>;
// };

const ToppingList = () => {
  const [selectedTopping, setSelectedTopping] = useState("cheese");

  const chooseTopping = (topping) => {
    setSelectedTopping(topping);
    console.log("chosen topping: ", topping);
  };

  return (
    <div>
      <h1>
        You chose <em>{selectedTopping}</em> as a topping.
      </h1>
      <ul>
        <Topping chooseTopping={chooseTopping} topping={"cheese"} />
        <Topping chooseTopping={chooseTopping} topping={"broccoli"} />
        <Topping chooseTopping={chooseTopping} topping={"anchovies"} />
        <Topping chooseTopping={chooseTopping} topping={"pepperoni"} />
        <Topping chooseTopping={chooseTopping} topping={"pineapple"} />
        {/* <Cheese chooseTopping={chooseTopping} />
        <Broccoli chooseTopping={chooseTopping} />
        <Anchovies chooseTopping={chooseTopping} /> */}
      </ul>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // React.Fragment
  <>
    <ToppingList />
  </>
);
