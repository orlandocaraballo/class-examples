const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "source-map",
  output: {
    path: path.join(__dirname, "/public"),
    filename: "bundle.js",
  },
};
