const fs = require("fs").promises;

const readFromFile = (filename) => {
  return fs.readFile(filename, "utf-8");
};

// thennable style syntax
const promise = readFromFile("file.txt")
                  .then((data) => {
                    console.log(data);
                  })
                  .catch((error) => {
                    console.error(error);
                  });

console.log(promise)