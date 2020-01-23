const fs = require("fs").promises;

const readFromFile = async filename => {
  try {
    const data = await fs.readFile(filename, "utf-8");

    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

readFromFile("file.txt");
