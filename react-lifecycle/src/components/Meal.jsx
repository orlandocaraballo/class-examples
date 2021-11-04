import React from "react";

export default ({ meal }) => {
  // CONTEXT: we can destructure meal from props here

  return <li>{meal.name}</li>;
};
