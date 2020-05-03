const anchors = document.getElementsByTagName("a");
const nav = document.getElementsByTagName("nav")[0];
const anchorsArray = Array.from(anchors);

const newFunction = function (event) {
  event.preventDefault();
  alert("First anchor has been clicked");
};

const firstAnchor = anchors[0];

// firstAnchor.addEventListener("click", function (event) {
//   event.preventDefault();
//   event.target.style.color = "red";
// });

// firstAnchor.addEventListener("click", newFunction);

// anchorsArray.forEach((element) => {
//   element.addEventListener("click", (event) => {
//     // console.log(this);
//     event.preventDefault();
//     alert("I have clicked the thing");
//   });
// });

nav.addEventListener("click", function (event) {
  event.preventDefault();
  alert("I have clicked the thing");
});
