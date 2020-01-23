const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send([
    { id: 1, name: "User 1" },
    { id: 2, name: "User 2" },
    { id: 3, name: "User 3" }
  ]);
});

router.get("/:id", (req, res) => {
  res.send([{ id: req.params.id, name: `User ${req.params.id}` }]);
});

module.exports = router;
