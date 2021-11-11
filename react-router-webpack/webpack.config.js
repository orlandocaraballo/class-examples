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
        options: {
          presets: ["@babel/preset-react"],
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, "public"),
  },
};
