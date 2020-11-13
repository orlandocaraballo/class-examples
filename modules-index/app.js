/*
  require statements allow us to execute code from a different file
  and also retrieve any data stored within the module.exports object in that file
*/
const moduleB = require("./example/moduleB");

// here we are loading retrieving only the name value from moduleA
const { name } = require("./example/moduleA");

// we can also require modules installed on our system from the npm registry
const chalk = require("chalk");

// we are running the code
console.log(moduleB());

// here we are using the chalk module to make my name red
console.log(chalk.red(name));
