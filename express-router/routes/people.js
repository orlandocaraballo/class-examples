const express = require("express");
const router = express.Router();

// notice how we are destructuring here
//  this is due to the db module exporting an object
//  with another client object within it
const { client } = require("../db");

// create
router.post("/", async (req, res) => {
  const { body } = req;
  let response;

  // create a person
  try {
    response = await client.query(
      `
      INSERT INTO people (name)
      VALUES ($1)
      RETURNING *
    `,
      [body.name]
    );
  } catch (error) {
    console.error(error);
  }

  res.send(response.rows[0]);
});

// read
router.get("/", async (req, res) => {
  let response;

  try {
    // get all people
    response = await client.query("SELECT * FROM people");
  } catch (error) {
    console.error(error);
  }

  res.send(response.rows);
});

router.get("/:id", (req, res) => {
  // get a person
});

// update
router.put("/:id", (req, res) => {
  // update one person
});

// delete
router.delete("/:id", (req, res) => {
  // delete a person
});

module.exports = router;
