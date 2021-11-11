const router = require("express").Router();
const { Meal, Person } = require("../db");

// create
router.post("/", async (req, res) => {
  // create a meal
  try {
    res.send(await Meal.create(req.body));
  } catch (error) {
    // TODO: send to error middleware
    next(error);
  }
});

// read
router.get("/", async (req, res) => {
  // get all meals
  try {
    res.send(await Meal.findAll());
  } catch (error) {
    // TODO: send to error middleware
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  // get a meal
  let meal;

  try {
    // TODO: eager load people
    meal = await Meal.findByPk(req.params.id, {
      include: [
        {
          model: Person,
          as: "people",
        },
      ],
    });

    if (!meal) {
      // next(error);
      // res.status(404).send("Could not find resource");
      // throw { status: 404, message: "Could not find resource" };
      next({ status: 404, message: "Could not find resource" });
      return;
    }

    res.send(meal);
  } catch (error) {
    next(error);
  }
});

// update
router.put("/:id", async (req, res) => {
  // update a meal
  let meal;

  try {
    meal = await Meal.findByPk(req.params.id);

    if (!meal) {
      next({ status: 404, message: "Could not find resource" });
      return;
    }

    await meal.update(req.body);

    res.send(meal);
  } catch (error) {
    // TODO: send to error middleware
    next(error);
  }
});

// delete
router.delete("/:id", async (req, res) => {
  // delete a meal
  let meal;

  try {
    meal = await Meal.findByPk(req.params.id);

    if (!meal) {
      next({ status: 404, message: "Could not find resource" });
      return;
    }

    await meal.destroy();

    res.status(200).send();
  } catch (error) {
    // TODO: send to error middleware
    next(error);
  }
});

module.exports = router;
