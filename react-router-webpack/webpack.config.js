const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    index: ["babel-polyfill", "./src/index.js"],
  },
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  context: __dirname,
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
  },
  node: {
    Buffer: false,
    process: false,
  },
};
