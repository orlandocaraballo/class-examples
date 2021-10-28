const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// landing page route
app.get("/", (req, res) => {
  res.send("Hello Class");
});

app.post("/", (req, res) => {
  res.send(req.body);
});

// other routes
app.use("/users", require("./routes/people"));
app.use("/food", require("./routes/food"));

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send(error);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
