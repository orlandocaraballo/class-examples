const { Client } = require("pg");

// define the connection details
const client = new Client("postgres://localhost/fooddb");

const getFood = async () => {
  // define our response

  // first we must open a connection to our db
  client.connect();

  try {
    // lets talk to our db
    await client.query("SELECT * FROM food");
    await client.query("SELECT * FROM food");
    await client.query("SELECT * FROM food");
    await client.query("SELECT * FROM food");
  } catch (error) {
    console.error(error);
  }

  // display the response
  console.log(response.rows);

  // then we must close the connection to our db
  client.end();
};

// define our response

// first we must open a connection to our db
client.connect();

client.query("SELECT * FROM food").then((response) => {
  console.log(response.rows);

  client.end();
});

// getFood();
