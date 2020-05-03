const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/sequelize_examples");

const User = db.define("user", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

const Post = db.define("post", {
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

User.hasMany(Post);
Post.belongsTo(User);

(async () => {
  await db.sync({ force: true });

  const orlando = await User.create({
    name: "Orlando C",
    email: "orlando.caraballo@fullstackacademy.com"
  });
  // const bryce = await User.create({ name: "Bryce" });
  // const malka = await User.create({ name: "Malka" });
  // const sayeed = await User.create({ name: "Sayeed" });

  await Post.create({ content: "bla bla bla 1", userId: orlando.id });
  await Post.create({ content: "bla bla bla 2", userId: orlando.id });
  await Post.create({ content: "bla bla bla 3", userId: orlando.id });

  const firstPost = await Post.findByPk(1);

  firstPost.getUser();

  const user = await firstPost.getUser();

  user.getPosts();

  const allPosts = await user.getPosts();

  console.log(allPosts[2].content);

  //   const users = await User.findAll();
  //   const posts = await users[0].getPosts();
  //   console.log("-------------------------");
  //   console.log(posts[0].content);
  //   console.log("-------------------------");
})();
