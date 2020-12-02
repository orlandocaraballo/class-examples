const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/sequelize_examples");

const Author = db.define("author", {
  name: Sequelize.STRING,
  email: Sequelize.STRING,
});

const Book = db.define("book", {
  content: Sequelize.TEXT,
});

Author.hasMany(BlogPost);
BlogPost.belongsTo(Author);

(async () => {
  await db.sync({ force: true });

  const orlando = await Author.create({
    name: "Orlando C",
    email: "orlando.caraballo@fullstackacademy.com",
  });
  // const bryce = await User.create({ name: "Bryce" });
  // const malka = await User.create({ name: "Malka" });
  // const sayeed = await User.create({ name: "Sayeed" });

  await Book.create({ content: "bla bla bla 1", authorId: orlando.id });
  await Book.create({ content: "bla bla bla 2", authorId: orlando.id });
  await Book.create({ content: "bla bla bla 3", authorId: orlando.id });

  const firstPost = await Book.findByPk(1);

  firstPost.getUser();

  const author = await firstPost.getAuthor();

  author.getBooks();

  const allBooks = await author.getBooks();

  console.log(allBooks[2].content);

  //   const users = await User.findAll();
  //   const posts = await users[0].getPosts();
  //   console.log("-------------------------");
  //   console.log(posts[0].content);
  //   console.log("-------------------------");
})();
