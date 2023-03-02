const homeAnchor = document.querySelector("a");
const articleElement = document.querySelector("article");
const divElement = document.createElement("div");
const asideElement = document.querySelector("aside");

homeAnchor.textContent = "Link 0";
// homeAnchor.style.fontSize = "2em";

homeAnchor.addEventListener("click", (event) => {
  event.preventDefault();

  console.log("I have clicked the anchor 1");

  divElement.innerHTML = "<p>Hello <strong>Class</strong></p>";
  articleElement.appendChild(divElement);
});

homeAnchor.addEventListener("click", (event) => {
  event.preventDefault();

  console.log("I have clicked the anchor 2");

  asideElement.innerHTML = "<p>I have changed the aside</p>";
  articleElement.appendChild(asideElement);
});
