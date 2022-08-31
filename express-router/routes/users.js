const express = require("express");
const router = express.Router();

// mounted on /users

// /users
router.get("/", (req, res) => {
  res.send("Here are the users");
});

// /users/[id]
router.get("/:id", (req, res) => {
  res.send("Here is the individual user");
});

module.exports = router;
