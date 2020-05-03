const express = require("express");
const app = express();
const morgan = require("morgan");
// const cors = require("cors");

app.use(morgan());
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  console.log(req.query);
  res.send("HELLO");
});

app.get("/wiki", (req, res) => {
  res.send(req.body);
});

app.get("/data", (req, res) => {
  res.send([
    { name: "orlando", age: 36 },
    { name: "patrisha", age: 36 }
  ]);
});

app.listen(3000, () => {
  console.log("server running");
});
