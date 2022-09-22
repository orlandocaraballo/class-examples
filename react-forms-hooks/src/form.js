const formField = document.getElementsByTagName("form")[0];

formField.addEventListener("submit", async (event) => {
  event.preventDefault();

  const username = event.target.username.value;

  console.log(username);

  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${username}`
  );

  console.log(data);
});
