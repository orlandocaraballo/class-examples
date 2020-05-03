export const clickHandler = (event) => {
  fetch("localhost:3000/");
  console.log("clicked");
};

export const scrollHandler = (event) => {
  console.log("scrolling");
};
