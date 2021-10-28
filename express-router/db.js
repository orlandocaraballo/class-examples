const { Client } = require("pg");

const client = new Client("postgres://localhost/food");

client.connect();

// notice how I am placing the client
//  within another object literal
module.exports = { client };
