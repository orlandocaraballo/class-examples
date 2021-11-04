import React from "react";
import Meal from "./Meal.jsx";

export default ({ meals }) => {
  return (
    <ul>
      {meals.map((meal) => (
        <Meal key={meal.id} meal={meal} />
      ))}
    </ul>
  );
};
