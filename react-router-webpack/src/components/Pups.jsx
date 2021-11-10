import React from "react";
import { Link } from "react-router-dom";

const Pups = ({ pups }) => (
  <ul>
    {pups.map(({ id, name }) => (
      <li key={id}>
        <Link to={`/pups/${id}`}>{name}</Link>
      </li>
    ))}
  </ul>
);

export default Pups;
