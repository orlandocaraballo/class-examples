const { Client } = require("pg");

// define the connection details
const client = new Client("postgres://localhost/wnews");

const getFood = async () => {
  // define our response
  let response;

  // first we must open a connection to our db
  client.connect();

  try {
    // lets talk to our db
    response = await client.query("SELECT * posts WHERE posts.id = 1000000");
  } catch (error) {
    console.error(error);
  }

  // display the response
  console.log(response.rows);

  // then we must close the connection to our db
  client.end();
};

getFood();
