const { Sequelize, DataTypes, Op } = require("sequelize");

const db = new Sequelize("postgres://localhost/food_complex");

const Meal = db.define("Meal", {
  name: {
    type: DataTypes.STRING,
  },
});

const Person = db.define("Person", {
  name: {
    type: DataTypes.STRING,
  },
  age: {
    type: DataTypes.INTEGER,
  },
});

// TODO: define findBoomers class method
Person.findBoomers = function () {
  return this.findAll({
    where: {
      age: {
        [Op.gt]: 30,
      },
    },
  });
};

// TODO: define ageInDogYears instance method
Person.prototype.ageInDogYears = function () {
  return Math.floor(this.age / 7);
};

// TODO: add alias for meals
Person.belongsToMany(Meal, {
  through: "MealPeople",
  foreignKey: "personId",
});

// TODO: add alias for people
Meal.belongsToMany(Person, {
  through: "MealPeople",
  foreignKey: "mealId",
  as: "people",
});

// notice how I am placing the client
//  within another object literal
module.exports = { db, Person, Meal };
