const router = require("express").Router();
const { Meal } = require("../db");

// create
router.post("/", async (req, res) => {
  // create a meal
  try {
    res.send(await Meal.create(req.body));
  } catch (error) {
    // TODO: send to error middleware
    console.error(error);
  }
});

// read
router.get("/", async (req, res) => {
  // get all meals
  try {
    res.send(await Meal.findAll());
  } catch (error) {
    // TODO: send to error middleware
    console.error(error);
  }
});

router.get("/:id", async (req, res) => {
  // get a meal
  let meal;

  try {
    // TODO: eager load person
    meal = await Meal.findByPk(req.params.id);

    // TODO: send 404 when not found
    res.send(meal);
  } catch (error) {
    // TODO: send to error middleware
    console.error(error);
  }
});

// update
router.put("/:id", async (req, res) => {
  // update a meal
  let meal;

  try {
    meal = await Meal.findByPk(req.params.id);

    await meal.update(req.body);

    res.send(meal);
  } catch (error) {
    // TODO: send to error middleware
    console.error(error);
  }
});

// delete
router.delete("/:id", async (req, res) => {
  // delete a meal
  let meal;

  try {
    meal = await Meal.findByPk(req.params.id);

    await meal.destroy();

    res.status(200).send();
  } catch (error) {
    // TODO: send to error middleware
    console.error(error);
  }
});

module.exports = router;
