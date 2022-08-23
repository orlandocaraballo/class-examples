const express = require("express");
const morgan = require("morgan");
const path = require("path");

// first we create our express app
const app = express();

// here we mount our middleware
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));

// the code below is considered a middleware
// this does more or less the same thing that the morgan middleware does above
// app.use((req, res, next) => {
//   console.log(req.method, req.url);
//   next();
// });

app.get("/", (req, res) => {
  res.send("<h1>Hello!</h1>");
});

app.get("/puppies", (req, res) => {
  res.send("<h1>Hello here the puppies!</h1>");
});

app.get("/puppies/:id", (req, res) => {
  res.send(`<h1>Hello here is puppy number ${req.params.id}</h1>`);
});

// the express static middleware above makes it so that we do not need to
//  write the code that is written below for every file that we want to retrieve
//  from the server
// app.get("/style.css", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "style.css"));
// });

// app.get("/index.js", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.js"));
// });

// here we set our server to run on port 3000
app.listen(3000, () => {
  console.log("Running server on port 3000");
});
