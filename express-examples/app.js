// require your modules
const express = require("express");
const app = express();

// require our middlwares here (part 2)

// mount our middlewares here (part 2)
app.use(express.static("public"));
app.use(require("morgan")("dev"));

app.use((request, response, next) => {
  // return all people
  console.log(request.headers);
  next();
});

app.use((request, response, next) => {
  // return all people
  console.log(request.ip);
  next();
});

// define your routes here (part 1)

// read

app.get("/people", (request, response) => {
  // return all people
  response.send("Hello");
});

app.get("/people/:id", (request, response) => {
  // return one person by id
  response.send("Got person with id of");
});

// create
app.post("/people", (request, response) => {
  // create a person
  // usually we return the person we created
  response.send("Created person");
});

// update
app.put("/people/:id", (request, response) => {
  // updates one person by id
  // usually we return the person we update
});

// delete
app.delete("/people/:id", (request, response) => {
  // delete one person by id
  // usually we return the id of the person that was deleted
});

app.listen(3000, () => {
  console.log("server running");
});
