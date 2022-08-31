const express = require("express");
const router = express.Router();

// /posts
router.get("/", (req, res) => {
  res.send("Here are the posts");
});

// /posts/[id]
router.get("/:id", (req, res) => {
  res.send("Here is the individual post");
});

// /posts
router.post("/", (req, res) => {
  console.log(req.body.title, req.body.content);

  // create a new post
  res.send("Created new post");
});

module.exports = router;
