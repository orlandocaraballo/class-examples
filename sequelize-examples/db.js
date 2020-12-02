const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost/sequelize-examples");

// this defines our user model
//  notice how user is singular but the corresponding
//  table name would be plural
const User = db.define("user", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  pictureUrl: Sequelize.STRING,
});

(async () => {
  // syncronizes with our database
  //  the { force: true} statement (re)creates our table
  //  (even it already exists)
  await User.sync({ force: true });

  // creates a new user object
  const user = new User({
    name: "Orlando",
    pictureUrl: "http://picture-of-myself.jpg",
  });

  // saves our user object to the database
  await user.save();

  // this loads all people from the database
  const users = await User.findAll();

  // displays all users in the console
  console.log("all the users -> ", users);
})();
