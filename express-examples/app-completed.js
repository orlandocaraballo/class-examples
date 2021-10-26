// require your modules
const express = require("express");
const app = express();

// require our middlewares
// const morgan = require("morgan");
// const cors = require("cors");

// mount your middle wares
// app.use(morgan());
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// corresponds to when you retrieve all the things
app.get("/", (req, res) => {
  console.log(req.query);
  res.send("HELLO");
});

// corresponds to when you retrieve a thing
app.get("/wiki", (req, res) => {
  res.send(req.body);
});

// corresponds to when you create things
app.post("/data", (req, res) => {
  res.send(req.body);
  // res.send([
  //   { name: "orlando", age: 36 },
  //   { name: "patrisha", age: 36 }
  // ]);
});

// corresponds to when you update things
app.put("/data", (req, res) => {
  res.send(req.body);
  // res.send([
  //   { name: "orlando", age: 36 },
  //   { name: "patrisha", age: 36 }
  // ]);
});

// corresponds to when you delete things
app.delete("/data", (req, res) => {
  res.send(req.body);
});

app.listen(3000, () => {
  console.log("server running");
});
