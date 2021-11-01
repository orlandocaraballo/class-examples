const router = require("express").Router();
const { Person, Meal } = require("../db");

// create
router.post("/", async (req, res) => {
  // create a person
  try {
    res.send(await Person.create(req.body));
  } catch (error) {
    // TODO: send to error middleware
    console.error(error);
  }
});

// read
router.get("/", async (req, res) => {
  // get all people
  try {
    res.send(await Person.findAll());
  } catch (error) {
    // TODO: send to error middleware
    console.error(error);
  }
});

// TODO: define boomers route
router.get("/boomers", async (req, res) => {
  try {
    // TODO: set boomers variable using findBoomers()
    //  class method
    res.send(boomers);
  } catch (error) {
    // TODO: send to error middleware
    console.error(error);
  }
});

// TODO: define person in dog years route
router.get("/:id/age-in-dog-years", async (req, res) => {
  // get a person
  let person;

  try {
    person = await Person.findByPk(req.params.id);

    // TODO: set age in dog years using ageInDogYears()
    //  instance method

    // TODO: send 404 when not found
    res.send(person);
  } catch (error) {
    // TODO: send to error middleware
    console.error(error);
  }
});

router.get("/:id", async (req, res) => {
  // get a person
  let person;

  try {
    // TODO: eager load meal
    person = await Person.findByPk(req.params.id);

    // TODO: send 404 when not found
    res.send(person);
  } catch (error) {
    // TODO: send to error middleware
    console.error(error);
  }
});

// update
router.put("/:id", async (req, res) => {
  // update a person
  let person;

  try {
    person = await Person.findByPk(req.params.id);

    await person.update(req.body);

    res.send(person);
  } catch (error) {
    // TODO: send to error middleware
    console.error(error);
  }
});

// delete
router.delete("/:id", async (req, res) => {
  // delete a person
  let person;

  try {
    person = await Person.findByPk(req.params.id);

    await person.destroy();

    res.status(200).send();
  } catch (error) {
    // TODO: send to error middleware
    console.error(error);
  }
});

module.exports = router;
