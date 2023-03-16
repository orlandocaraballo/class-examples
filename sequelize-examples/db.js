// load sequelize
const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost/meals");

// MODEL(S)
// ------------
// user model (with validations)
const User = db.define("user", {
  // name of field / column is fullname
  fullname: {
    // type of column is varchar / Sequelize.STRING
    type: Sequelize.STRING, // varchar()
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  age: {
    type: Sequelize.INTEGER,
  },
  phone: {
    type: Sequelize.STRING,
  },
});

// meal model
const Meal = db.define("meal", {
  name: {
    type: Sequelize.STRING,
  },
});

// ASSOCIATIONS
// ------------
// let's make users and meals correspond to each other

// one to one relationship
// User.hasOne(Meal); // defines [user instance].setMeal()
// Meal.belongsTo(User); // defines [meal instance].setUser()

// one to many relationship
// User.hasMany(Meal); // defines [user instance].setMeals()
// Meal.belongsTo(User); // defines [meal instance].setUser()

// many to many relationship through "meal_users" table
User.belongsToMany(Meal, { through: "meal_users" }); // defines [user instance].setMeals()
Meal.belongsToMany(User, { through: "meal_users" }); // defines [meal instance].setUsers()

// HOOKS
// -----
// beforeValidate
// afterValidate
// beforeCreate / beforeSave
// afterCreate / afterSave
// beforeUpdate / beforeSave
// afterUpdate / afterSave
User.beforeSave((user) => {
  const areaCode = user.phone.substr(0, 3);
  const prefix = user.phone.substr(3, 3);
  const lineNumber = user.phone.substr(6);

  // (123) 899-1232
  user.phone = `(${areaCode}) ${prefix}-${lineNumber}`;
});

// auto-executing function
(async () => {
  // this tells the database to create all tables
  await db.sync({ force: true });

  // CREATE data
  const orlando = await User.create({
    fullname: "Orlando C",
    age: 39,
    phone: "1234567890",
  });

  // const orlando = User.new({ fullname: "Orlando C", age: 39 })
  // await orlando.save()

  const malcolm = await User.create({
    fullname: "Malcolm V",
    age: 34,
    phone: "0987654321",
  });
  const frenchToast = await Meal.create({ name: "french toast" });
  const lasagna = await Meal.create({ name: "lasagna" });

  // FIND data

  // returns an array
  // const users = await User.findAll(); // select * from users;

  // const orlando = await User.findOne({
  //   where: {
  //     age: 39,
  //   },
  // });

  // const firstUser = await User.findByPk(1);

  // UPDATING data
  // await orlando.update({ age: 23 });

  // console.log(firstUser);

  // DELETING data
  // await orlando.destroy();

  // MAGIC METHODS
  // ------------
  await orlando.setMeals([frenchToast, lasagna]);
  await lasagna.addUser(malcolm);
  // await lasagna.setUsers(orlando);
  // await frenchToast.setUser(orlando);
  // await frenchToast.setUser(orlando);
})();
