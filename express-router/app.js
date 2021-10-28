const express = require("express");
const app = express();

// TODO: add body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// TODO: create landing page route
app.get("/", (req, res) => {
  res.send("hello");
});

// TODO: create food, people routes
app.use("/meals", require("./routes/meals"));
app.use("/people", require("./routes/people"));

// TODO: error middleware

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
