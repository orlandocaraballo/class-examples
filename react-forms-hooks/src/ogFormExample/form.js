// retrieve form reference
const form = document.querySelector("form");

// event listener
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const pokemonName = event.target["pokemon-name"].value;
  console.log(pokemonName);

  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );

  console.log(data);
});
