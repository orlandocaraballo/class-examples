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
Person.findBoomers = function () {
  return this.findAll({
    where: {
      age: {
        [Sequelize.Op.gt]: 30,
      },
    },
  });
};

// TODO: define ageInDogYears instance method
Person.prototype.ageInDogYears = function () {
  return Math.floor(this.age / 7);
};

Person.belongsToMany(Meal, { through: "MealPeople", foreignKey: "personId" });
Meal.belongsToMany(Person, { through: "MealPeople", foreignKey: "mealId" });

// notice how I am placing the client
//  within another object literal
module.exports = { db, Person, Meal };
