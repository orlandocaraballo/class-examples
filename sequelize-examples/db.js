const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/sequelize_examples");

const Page = db.define("pages", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

// const Post = db.define("post", {
//   content: {
//     type: Sequelize.TEXT,
//     allowNull: false
//   }
// });

// User.hasMany(Post);
// Post.belongsTo(User);

(async () => {
  await db.sync({ force: true });
  // const bryce = await User.create({ name: "Bryce" });
  // const malka = await User.create({ name: "Malka" });
  // const sayeed = await User.create({ name: "Sayeed" });

  // await Post.create({ content: "bla bla bla 1", userId: malka.id });
  // await Post.create({ content: "bla bla bla 2", userId: sayeed.id });
  // await Post.create({ content: "bla bla bla 3", userId: bryce.id });

  //   const users = await User.findAll();
  //   const posts = await users[0].getPosts();
  //   console.log("-------------------------");
  //   console.log(posts[0].content);
  //   console.log("-------------------------");
})();
