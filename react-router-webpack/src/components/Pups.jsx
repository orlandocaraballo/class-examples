import React from "react";
import { Link } from "react-router-dom";

const Pups = (props) => {
  console.log(props);

  const { pups } = props;

  return (
    <ul>
      {pups.map(({ id, name }) => (
        <li key={id}>
          <Link to={`/pups/${id}`}>{name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Pups;
