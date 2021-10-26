const fs = require("fs");

const readFromFile = (filename) => {
  // Return a new promise
  //  - when creating a promise you must provide:
  //    - what happens when the promise is fulfilled (resolve)
  //    - what happens when the promise fails (reject)
  return new Promise((resolve, reject) => {
    // first we try to read a file asynchronously
    fs.readFile(filename, "utf-8", (error, data) => {
      // if there is an error while reading, reject the promise and send error
      if (error) reject(error);

      // otherwise resolve the promise and send the read data
      resolve(data);
    });
  });
};

readFromFile("file.txt")
  .then((data) => {
    // the data is sent by the "resolve" function
    console.log(data);
  })
  .catch((error) => {
    // the error is sent by the "reject function"
    console.error(error);
  });
