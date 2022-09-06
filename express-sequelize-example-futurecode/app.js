const PORT = 3000;
const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Good to go!");
});

app.use("/meals", require("./routes/meals"));
app.use("/students", require("./routes/students"));
app.use("/ingredients", require("./routes/ingredients"));

// error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message);
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
