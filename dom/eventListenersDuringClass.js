const homeAnchors = document.querySelectorAll("a");
const navElement = document.querySelector("nav");

document.body.addEventListener("click", () => {
  console.log("I am within the body click handler");
});

navElement.addEventListener("click", (event) => {
  console.log("I am within the nav click handler");
});

homeAnchors.forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    event.preventDefault();

    navElement.style.color = "red";
    // if you need to refer where the event has occured
    //  you can utilize event.target to retrieve the matching
    //  element
    // console.log(event.target);
    console.log("I am within the anchor click handler");
  });
});
