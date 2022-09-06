const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("postgres://localhost:5432/meals");

const Meal = sequelize.define("Meal", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const Student = sequelize.define("Student", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const Ingredient = sequelize.define("Ingredient", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// noor.getMeals()
Student.hasMany(Meal);

// meal.getStudent()
Meal.belongsTo(Student);

Meal.belongsToMany(Ingredient, { through: "MealIngredients" });
Ingredient.belongsToMany(Meal, { through: "MealIngredients" });

module.exports = {
  Meal,
  Student,
  Ingredient,
  sequelize,
};
