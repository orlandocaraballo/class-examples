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

// noor.getMeals()
Student.hasMany(Meal);

// meal.getStudent()
Meal.belongsTo(Student);

module.exports = {
  Meal,
  Student,
  sequelize,
};
