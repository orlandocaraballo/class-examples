const express = require("express");
const router = express.Router();
const { Student, Meal } = require("../db");

// student routes
router.post("/", async (req, res, next) => {
  try {
    const student = await Student.create(req.body);

    res.json(student);
  } catch (err) {
    next(err);
  }
});

// read all
router.get("/", async (req, res, next) => {
  try {
    const students = await Student.findAll({
      include: Meal,
    });

    res.json(students);
  } catch (err) {
    next(err);
  }
});

// read one
router.get("/:id", async (req, res, next) => {
  try {
    // const meal = await Student.findOne({
    //   where: {
    //     id: req.params.id,
    //   },
    // });

    const student = await Student.findByPk(req.params.id);

    res.json(student);
  } catch (err) {
    next(err);
  }
});

// update
router.put("/:id", async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.id);

    await student.update(req.body);

    // reloads data from database onto model instance
    await student.reload();

    res.json(student);
  } catch (err) {
    next(err);
  }
});

// delete
router.delete("/:id", async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.id);

    await student.destroy();

    res.json(student);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
