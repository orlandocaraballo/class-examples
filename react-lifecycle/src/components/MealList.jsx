import React from "react";
import Meal from "./Meal.jsx";

export default ({ meals }) => {
  // CONTEXT: we can destructure props here to only grab meals

  return (
    <ul>
      {meals.map((meal) => (
        // NEW IDEA: whenever you map over a piece of state
        //  in React, you always need to set a key for React to keep track
        //  of that item during reorders or removals in the Virtual DOM
        <Meal key={meal.id} meal={meal} />
      ))}
    </ul>
  );
};
