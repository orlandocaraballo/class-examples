const { Sequelize, DataTypes, Op } = require("sequelize");

const db = new Sequelize("postgres://localhost/parkave");

// TODO: Rental model => address, price, bedrooms
const Rental = db.define("rental", {
  address: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.DECIMAL(5),
  },
  bedrooms: {
    type: DataTypes.INTEGER,
  },
});

// TODO: Tenant model => name, age, salary
const Tenant = db.define("tenant", {
  name: {
    type: DataTypes.STRING,
  },
  salary: {
    type: DataTypes.DECIMAL(10),
  },
  age: {
    type: DataTypes.INTEGER,
  },
});

// TODO: luxury homes or find rich class method
Tenant.findRich = function () {
  return this.findAll({
    where: { salary: 1_000_000 },
  });
};

// TODO: weekly salary instance method
Tenant.prototype.weeklySalary = function () {
  return this.salary / 52;
};

// TODO: Tenant belongsToMany(add alias?)
Tenant.belongsToMany(Rental, { through: "occupancies" });

// TODO: Rental belongsToMany(add alias?)
Rental.belongsToMany(Tenant, { through: "occupancies" });

// notice how I am placing the client
//  within another object literal

// const { db, Tenant, Rental } = require("db/index.js")
module.exports = { db, Tenant, Rental };
