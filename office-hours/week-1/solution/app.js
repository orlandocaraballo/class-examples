const images = document.getElementsByTagName("img");
const [fry, bender, leela] = images;
const [fryAnchor, benderAnchor, leelaAnchor] =
  document.getElementsByTagName("a");
const footer = document.getElementsByTagName("footer")[0];

fryAnchor.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    left: 0,
    top: fry.offsetTop,
    behavior: "smooth",
  });
  console.log("fry");
});

benderAnchor.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    left: 0,
    top: bender.offsetTop,
    behavior: "smooth",
  });
  console.log("bender");
});

leelaAnchor.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    left: 0,
    top: leela.offsetTop,
    behavior: "smooth",
  });
  console.log("leela");
});

footer.addEventListener("click", (e) => {
  e.preventDefault();

  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", () => {
  for (const image of images) {
    if (
      window.scrollY + 200 >= image.offsetTop &&
      !image.classList.contains("show")
    ) {
      image.classList.add("show");
    }
  }

  // if (window.scrollY >= fry.offsetTop) {
  //   fry.classList.add("show");
  // }

  // if (window.scrollY >= bender.offsetTop) {
  //   bender.classList.add("show");
  // }

  // if (window.scrollY >= leela.offsetTop) {
  //   leela.classList.add("show");
  // }
});
