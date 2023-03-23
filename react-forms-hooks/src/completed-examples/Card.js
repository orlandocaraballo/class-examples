import React from "react";

const Card = ({ data }) => {
  return (
    data.sprites && (
      <>
        <h1>Single Pokemon</h1>
        <section>
          <img
            src={data.sprites.other["official-artwork"].front_default}
            alt="artwork"
          />
          <h2>{data.name}</h2>
          <p>
            <em>
              {data.abilities.map(({ ability }) => ability.name).join(", ")}
            </em>
          </p>
          <span>{}</span>
        </section>
      </>
    )
  );
};

export default Card;
