const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// set our routes
app.use("/meals", require("./routes/meals"));
app.use("/people", require("./routes/people"));

// TODO: error middleware
app.use((error, req, res, next) => {
  console.error(error.message);
  res.status(error.status || 500).send(error.message);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
