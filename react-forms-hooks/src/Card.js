import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    data.sprites && (
      <>
        <section>
          <img
            src={data.sprites.other["official-artwork"].front_default}
            alt="artwork"
          />
          <h2>
            <Link to={`/${data.id}`}>{data.name}</Link>
          </h2>
          <p>
            <em>
              {data.abilities.map(({ ability }) => ability.name).join(", ")}
            </em>
          </p>
        </section>
      </>
    )
  );
};

export default Card;
