const express = require("express");
const router = express.Router();
const { client } = require("../db");

// create
router.post("/", async (req, res, next) => {
  // create a meal
});

// read
router.get("/", async (req, res, next) => {
  // get all meals
});

router.get("/:id", (req, res) => {
  // get a meal
});

// update
router.put("/:id", (req, res) => {
  // update a meal
});

// delete
router.delete("/:id", (req, res) => {
  // delete a meal
});

module.exports = router;
