const Sequelize = require("sequelize");

const db = new Sequelize("postgres://localhost/food_complex_old");

const Meal = db.define("Meal", {
  name: {
    type: Sequelize.STRING,
  },
});

const Person = db.define("Person", {
  name: {
    type: Sequelize.STRING,
  },
});

Meal.belongsTo(Person, { as: "person" });

// notice how I am placing the client
//  within another object literal
module.exports = { db, Person, Meal };
