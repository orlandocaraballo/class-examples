const { Sequelize, DataTypes, Op } = require("sequelize");

const db = new Sequelize("postgres://localhost/park_ave");

const Rental = db.define("rental", {
  address: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.DECIMAL(6),
  },
  bedrooms: {
    type: DataTypes.INTEGER,
  },
});

const Tenant = db.define("tenant", {
  name: {
    type: DataTypes.STRING,
  },
  age: {
    type: DataTypes.INTEGER,
  },
  salary: {
    type: DataTypes.DECIMAL(9),
  },
});

// TODO: luxury homes or find rich class method

// TODO: weekly salary instance method

// TODO: add alias for meals
Tenant.belongsToMany(Rental, {
  through: "occupancies",
});

// TODO: add alias for people
Rental.belongsToMany(Tenant, {
  through: "occupancies",
});

// notice how I am placing the client
//  within another object literal
module.exports = { db, Tenant, Rental };
