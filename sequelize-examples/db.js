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
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

// this defines a new model with the following information:
//  - table name = posts
//  - columns = content | string
//  - automatically created columns = id | integer, createdAt | datetime, updatedAt | datetime
//  - model name = post
//  - model constant name = Post
const Post = db.define("post", {
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

// set our associations between our models
User.hasMany(Post);
Post.belongsTo(User);

// define an auto executing async function
(async () => {
  // tell the database to sync
  await db.sync({ force: true });

  // here we create a dummy user
  // the create command will make the call to the db
  //  and create it in the users table
  const orlando = await User.create({
    name: "Orlando",
    email: "orlando@mail.com",
  });

  // we can also create other users
  const stephanie = await User.create({ name: "Stephanie" });
  const helen = await User.create({ name: "Helen" });
  const margarita = await User.create({ name: "Margarita" });

  // here we create some posts and assign them to a user
  await Post.create({
    content: "I say weird things sometimes",
    userId: orlando.id,
  });
  await Post.create({
    content: "Wired headphones are the truth!",
    userId: stephanie.id,
  });
  await Post.create({
    content: "I enjoy plants on my head and as my background",
    userId: helen.id,
  });
  await Post.create({
    content: "I only drink the finest tea!",
    userId: margarita.id,
  });

  // when we have a reference to a particular object we can make
  //  use of the getPosts() method due to our User.hasMany(Post) association above
  const posts = await orlando.getPosts();

  // we can grab the first post from our collection object
  const firstPost = posts[0];

  // once we have a reference to a post, we can utilize the getUser() method
  //  due to our Post.belongsTo(User) association above
  // it is singular because a post belongs to a user (the foreign key is in the posts table)
  const user = firstPost.getUser();

  // because we have a reference to the post that is associated with the post
  //  we can also retrieve its properties by directly referencing the column name
  //  from the user instance much like we would retrieve a property from a plain js object
  console.log(user.name, user.email);
})();
