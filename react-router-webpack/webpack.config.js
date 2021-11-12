const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// this plugin seems to require ecmascript modules and its output
//  is stored in a key named default
const InjectBodyPlugin = require("inject-body-webpack-plugin").default;

module.exports = {
  mode: "development",
  entry: {
    index: ["babel-polyfill", "./src/index.js"],
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
    publicPath: "/",
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
  plugins: [
    new HtmlWebpackPlugin(),
    new InjectBodyPlugin({ content: "<div id='root'></div>" }),
  ],
  devServer: {
    static: path.join(__dirname, "public"),
    historyApiFallback: true,
  },
};
