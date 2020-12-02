const pg = require("pg");
const Client = pg.Client;

// define the connection details
const client = new Client({
  host: "localhost",
  user: "orlandocaraballo",
  database: "exampledb",
});

const client = new Client("postgres://localhost/exampledb")

const getFood = async () => {
  // first we must open a connection to our db
  client.connect();

  // talk to our db
  const res = await client.query("SELECT * FROM food");

  // display the response
  console.log(res.rows);

  // then we must close the connection to our db
  client.end();
};

getFood();
