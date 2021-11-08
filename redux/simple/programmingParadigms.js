// CONTEXT: Below are examples of the different types of programming paradigms
//  we have learned throughout the course. They are used to solve problems in
//  alternative ways.

// Object Oriented
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

const largeCircle = new Circle(100000);

// Functional
[1, 2, 3, 4].forEach((element) => {
  /* do something */
})

[1, 2, 3, 4].map((number) => number + 4);

// Event Based
button.addEventListener("click", (event) => {
  /* run some code */
});

// Imperative
for (let i = 0; i < arr.length; ++i) {
  // run some code here
}
