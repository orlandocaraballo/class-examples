const formField = document.getElementsByTagName("form")[0];

formField.addEventListener("submit", async (event) => {
  event.preventDefault();

  console.log(event.target.username.value);

  await axios.post("http://localhost:8080/api/test", {
    username: event.target.username.value
  });
});
