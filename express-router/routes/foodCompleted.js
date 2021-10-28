const express = require("express");
const router = express.Router();
const { client } = require("../db");

// create
router.post("/", async (req, res, next) => {
  // create a meal
  const { name, userId } = req.body;

  let response;

  try {
    response = await client.query(
      'INSERT INTO meals (name, "userId") VALUES ($1,$2)',
      [name, userId]
    );
  } catch (error) {
    next(error);
  }

  res.send(response.rows[0]);
});

// read
router.get("/", async (req, res, next) => {
  let response;

  try {
    response = await client.query("SELECT * FROM meals");
  } catch (error) {
    next(error);
  }

  res.send(response.rows);
});

router.get("/:id", (req, res) => {});

// update
router.put("/:id", (req, res) => {});

// delete
router.delete("/:id", (req, res) => {});

module.exports = router;
