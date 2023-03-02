const nav = document.querySelector("nav");
const anchors = document.querySelectorAll("a");

console.log(nav);

nav.addEventListener("click", function (event) {
  event.preventDefault();

  alert("Hello");
});

anchors[1].addEventListener("click", function (event) {
  event.preventDefault();

  alert("Hello from the second link");
});
