const path = require("path");

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  devServer: {
    contentBase: path.join(__dirname, "dist")
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  }
};
