const express = require("express");
const app = express();

// http://localhost:3000/?name=orlando
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello Class");
});

app.post("/", (req, res) => {
  res.send(req.body);
});

app.use("/users", require("./users"));
app.use("/posts", require("./posts"));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
