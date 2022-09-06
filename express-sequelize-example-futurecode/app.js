const PORT = 3000;
const express = require("express");
const { Meal, Student } = require("./db");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Good to go!");
});

// meal tracker

// create
app.post("/meals", async (req, res, next) => {
  try {
    const meal = await Meal.create(req.body);

    res.json(meal);
  } catch (err) {
    next(err);
  }
});

// read all
app.get("/meals", async (req, res, next) => {
  try {
    const meals = await Meal.findAll();

    res.json(meals);
  } catch (err) {
    next(err);
  }
});

// read one
app.get("/meals/:id", async (req, res, next) => {
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
app.put("/meals/:id", async (req, res, next) => {
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
app.delete("/meals/:id", async (req, res, next) => {
  try {
    const meal = await Meal.findByPk(req.params.id);

    await meal.destroy();

    res.json(meal);
  } catch (err) {
    next(err);
  }
});

// error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).json(err.message);
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
