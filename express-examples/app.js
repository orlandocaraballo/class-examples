const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan());

app.get("/", (req, res) => {
  console.log(req.query);
  res.send("HELLO");
});

app.get("/wiki", (req, res) => {
  console.log(req.query);
  res.send({ name: "orlando" });
});

app.listen(3000, () => {
  console.log("server running");
});
