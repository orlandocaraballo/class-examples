// we make sure to define our PORT as a const so our code can read better below
const PORT = 3000;

// we make sure to require all necessary libraries that we will need
const express = require("express");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");

// here we require our custom utils library and make sure to destructure our
//  object to pick both the format and layout functions
const { format, layout } = require("./utils");

// here we create our express application
const app = express();

// here we define our student data
const students = [
  {
    name: "Andrew",
    mood: "😴",
    coffeePreference: null,
  },
  {
    name: "Sarah",
    mood: "🥶",
    coffeePreference: "ice",
  },
  {
    name: "Hamza",
    mood: "😅",
    coffeePreference: "ice",
  },
  {
    name: "John David",
    mood: "🤓",
    coffeePreference: "ice",
  },
];

// here we mount our middlewares that we are utilizing when matching any route
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("<h1>Landing Page</h1>");
});

app.get("/students", (req, res) => {
  // first we generate our html from student data and we make sure to
  //  format it before placing it within the li element
  let html = students
    .map(({ name, mood, coffeePreference }) => {
      return `<li>${format(name, mood, coffeePreference)}</li>`;
    })
    .join(""); // here we join our mapped array into a string

  // we make sure to surround our li string by a ul
  html = `<ul>${html}</ul>`;

  // we always make sure to wrap our html code within a static layout
  res.send(layout(html));
});

app.get("/students/:id", (req, res, next) => {
  const student = students[req.params.id - 1];

  // we check if the student exists
  if (student) {
    // if it does then we retrieve the student and format our data
    const { name, mood, coffeePreference } = student;
    const html = `<p>${format(name, mood, coffeePreference)}</p>`;

    res.send(layout(html));
  } else {
    // if it does not then we create an error and send it to next
    const error = { status: 404, message: "Student not found" };
    next(error);
  }
});

// if we did not have the express.static middleware pointing to the public
//  directory we would need to write a route that responds to each filename individually
// app.get("/style.css", (req, res) => {
//   res.send(fs.readFileSync(path.join(__dirname, "public", "style.css")));
// });

// our error middleware
app.use(({ status, message }, req, res, next) => {
  console.error(message);
  res.status(status).send(`<h1>${message}</h1>`);
});

// we need the following function defined so we can be notified when the server is running
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
