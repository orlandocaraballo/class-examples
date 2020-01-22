const fs = require("fs").promises;

const readFromFile = filename => {
  fs.readFile(filename, "utf-8")
    .then(data => {
      console.log(data);
    })
    .catch(data => {
      console.error(data);
    });
};

readFromFile("file.txt");
