const Sequelize = require("sequelize");

const db = new Sequelize("postgres://localhost/food_complex");

const Meal = db.define("Meal", {
  name: {
    type: Sequelize.STRING,
  },
});

const Person = db.define("Person", {
  name: {
    type: Sequelize.STRING,
  },
  age: {
    type: Sequelize.INTEGER,
  },
});

// TODO: define findBoomers class method

// TODO: define ageInDogYears instance method

// TODO: add alias for meals
Person.belongsToMany(Meal, { through: "MealPeople", foreignKey: "personId" });

// TODO: add alias for people
Meal.belongsToMany(Person, { through: "MealPeople", foreignKey: "mealId" });

// notice how I am placing the client
//  within another object literal
module.exports = { db, Person, Meal };
