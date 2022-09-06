const express = require("express");
const router = express.Router();
const { Ingredient, Meal } = require("../db");

// meal routes

// create
router.post("/", async (req, res, next) => {
  try {
    const ingredient = await Ingredient.create(req.body);

    res.json(meal);
  } catch (err) {
    next(err);
  }
});

// read all
router.get("/", async (req, res, next) => {
  try {
    const ingredients = await Ingredient.findAll();

    res.json(ingredients);
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

    const ingredient = await Ingredient.findByPk(req.params.id);

    res.json(ingredient);
  } catch (err) {
    next(err);
  }
});

// update
router.put("/:id", async (req, res, next) => {
  try {
    const ingredient = await Ingredient.findByPk(req.params.id);

    await ingredient.update(req.body);

    // reloads data from database onto model instance
    await ingredient.reload();

    res.json(ingredient);
  } catch (err) {
    next(err);
  }
});

// delete
router.delete("/:id", async (req, res, next) => {
  try {
    const ingredient = await Ingredient.findByPk(req.params.id);

    await ingredient.destroy();

    res.json(ingredient);
  } catch (err) {
    next(err);
  }
});

router.post("/:ingredientId/meals/:mealId", async (req, res, next) => {
  try {
    const { ingredientId, mealId } = req.params;
    const ingredient = await Ingredient.findByPk(ingredientId);
    const meal = await Meal.findByPk(mealId);

    ingredient.setMeals(meal);

    res.json(ingredient);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
