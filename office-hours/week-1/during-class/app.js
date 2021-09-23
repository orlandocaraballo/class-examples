const images = document.getElementsByTagName("img");
const anchors = document.getElementsByTagName("a");

const [fryImage, benderImage, leelaImage] = images;
const [fryAnchor, benderAnchor, leelaAnchor] = anchors;

// console.log(images);

window.addEventListener("scroll", () => {
  console.log("scroll Y = ", window.scrollY);
  console.log(
    "offsets = ",
    fryImage.offsetTop,
    benderImage.offsetTop,
    leelaImage.offsetTop
  );

  Array.from(images).forEach((image) => {
    if (window.scrollY > image.offsetTop) {
      image.classList.add("show");
    }
  });

  // for (const image of images) {
  //   if (window.scrollY > image.offsetTop) {
  //   image.classList.add("show");
  // }
  // }

  // if (window.scrollY > fryImage.offsetTop) {
  //   fryImage.classList.add("show");
  // }

  // if (window.scrollY > benderImage.offsetTop) {
  //   benderImage.classList.add("show");
  // }

  // if (window.scrollY > leelaImage.offsetTop) {
  //   leelaImage.classList.add("show");
  // }
});

// Array.from(anchors).forEach((anchor) => {
//   anchor.addEventListener("click", (event) => {
//     event.preventDefault();

//     window.scrollTo({
//       left: 0,
//       top: anchor.offsetTop + 20,
//       behavior: "smooth",
//     });
//   });
// });

fryAnchor.addEventListener("click", (event) => {
  event.preventDefault();

  window.scrollTo({
    left: 0,
    top: fryImage.offsetTop + 20,
    behavior: "smooth",
  });
});

benderAnchor.addEventListener("click", (event) => {
  event.preventDefault();

  window.scrollTo({
    left: 0,
    top: benderImage.offsetTop + 20,
    behavior: "smooth",
  });
});

leelaAnchor.addEventListener("click", (event) => {
  event.preventDefault();

  window.scrollTo({
    left: 0,
    top: leelaImage.offsetTop + 20,
    behavior: "smooth",
  });
});
