const express = require("express");
const app = express();

// set our middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/rentals", require("./routes/rentals"));
app.use("/tenants", require("./routes/tenants"));

app.get("/", (req, res) => {
  res.send("This is the homepage");
});

// TODO: error middleware
app.use((error, req, res, next) => {
  console.error(error.message);
  res.status(error.status || 500).send(error.message);
});

// run our server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
