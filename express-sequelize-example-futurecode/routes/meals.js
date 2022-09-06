const express = require("express");
const router = express.Router();
const { Meal } = require("../db");

// meal routes

// create
router.post("/", async (req, res, next) => {
  try {
    const meal = await Meal.create(req.body);

    res.json(meal);
  } catch (err) {
    next(err);
  }
});

// read all
router.get("/", async (req, res, next) => {
  try {
    const meals = await Meal.findAll();

    res.json(meals);
  } catch (err) {
    next(err);
  }
});

// read one
router.get("/:id", async (req, res, next) => {
  try {
    // const meal = await Meal.findOne({
    //   where: {
    //     id: req.params.id,
    //   },
    // });

    const meal = await Meal.findByPk(req.params.id);

    res.json(meal);
  } catch (err) {
    next(err);
  }
});

// update
router.put("/:id", async (req, res, next) => {
  try {
    const meal = await Meal.findByPk(req.params.id);

    await meal.update(req.body);

    // reloads data from database onto model instance
    await meal.reload();

    res.json(meal);
  } catch (err) {
    next(err);
  }
});

// delete
router.delete("/:id", async (req, res, next) => {
  try {
    const meal = await Meal.findByPk(req.params.id);

    await meal.destroy();

    res.json(meal);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
