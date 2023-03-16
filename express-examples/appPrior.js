// require your modules
const express = require("express");
const app = express();
// const morgan = require("morgan");

// mount our middlewares here (part 2)
// app.use(express.static("public"));
// app.use(morgan("dev"));

// app.use((request, response, next) => {
//   // return all people
//   console.log(request.headers);
//   next();
// });

// app.use((request, response, next) => {
//   // return all people
//   console.log(request.ip);
//   next();
// });

// define your routes here (part 1)

// read

app.get("/", (request, response) => {
  // return all people
  response.send("Hello Class");
});

// app.get("/puppies", (request, response) => {
//   // return all people
//   response.send("Hello Class here is the puppies page");
// });

// app.get("/people/:id", (request, response) => {
//   // return one person by id
//   response.send("Got person with id of");
// });

// // create
// app.post("/people", (request, response) => {
//   // create a person
//   // usually we return the person we created
//   response.send("Created person");
// });

// // update
// app.put("/people/:id", (request, response) => {
//   // updates one person by id
//   // usually we return the person we update
// });

// // delete
// app.delete("/people/:id", (request, response) => {
//   // delete one person by id
//   // usually we return the id of the person that was deleted
// });

app.listen(3000, () => {
  console.log("server running");
});
