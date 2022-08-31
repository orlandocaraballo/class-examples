const express = require("express");
const app = express();

// const usersRouter = require("./routes/users");
// const postsRouter = require("./routes/posts");
const PORT = 3000;

// TODO: add body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// TODO: create landing page route
app.get("/", (req, res) => {
  res.send("Hello");
});

// app.use("/users", usersRouter);
// app.use("/posts", postsRouter);
app.use("/users", require("./routes/users"));
app.use("/posts", require("./routes/posts"));

// TODO: error middleware
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send(error);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
