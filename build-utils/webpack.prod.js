const commonPaths = require("./common-paths");
const webpack = require("webpack");
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
const config = {
  mode: "production",
  entry: {
    app: [`${commonPaths.appEntry}/index.js`]
  },
  output: {
    filename: "static/[name].[hash].js"
  },
  devtool: "source-map",
  module: {},
  plugins: []
};
module.exports = config;
