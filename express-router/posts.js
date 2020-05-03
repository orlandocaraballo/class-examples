const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.query);
  res.send([
    { id: 1, name: "Post 1" },
    { id: 2, name: "Post 2" },
    { id: 3, name: "Post 3" }
  ]);
});

router.get("/:id", (req, res) => {
  res.send([{ id: req.params.id, name: `Post ${req.params.id}` }]);
});

router.post("/", (req, res) => {
  console.log(req.body);
 
  await Post.create(req.body)
});

module.exports = router;
