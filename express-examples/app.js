// require your modules
const express = require("express");
const app = express();

// require our middlewares
const morgan = require("morgan");
const path = require("path");

// app.use
// function doWork() {
//   console.log("Do some work!");
// }

// we assign our middlewares
app.use(express.static(path.join(__dirname, "public")));
app.use(morffgan("dev"));

// app.use((request, response, next) => {
//   console.log(request.method, " : ", request.headers);
//   next();
// });

// app.use((request, response, next) => {
//   console.log("Second middleware");
//   next();
// });

// API routes
app.get("/", (request, response) => {
  response.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <link rel="stylesheet" href="/style.css" />
      <script src="/script.js"></script>
    </head>
    <body>
      Hello this is the body
    </body>
    </html>
  `);
});

// app.get("/style.css", (request, response) => {
//   response.send("body { color: red; }");
// });

app.get("/orlando", (request, response) => {
  response.send("<h1>Hello my name is Orlando</h1>");
});

app.get("/students", (request, response) => {
  response.send("<h1>This is the students route</h1>");
});

app.get("/students/:studentId", (request, response) => {
  console.log(request.params);
  // 100 students in a database
  //  - to retrieve 3rd student you need an id
  response.send(
    `<h1>This is the students route with id of ${request.params.studentId}</h1>`
  );
});

app.listen(3000, () => {
  console.log("server running");
});
