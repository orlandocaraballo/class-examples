const fs = require("fs");

const readFromFile = (filename) => {
  fs.readFile(filename, "utf-8", (err, data) => {
    if (err) console.error(err);

    console.log(data);
  });
};

readFromFile("file.txt");