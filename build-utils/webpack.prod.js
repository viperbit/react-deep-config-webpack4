const commonPaths = require("./common-paths");
const webpack = require("webpack");
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
const config = {
  mode: "production",
  entry: {
    app: [`${commonPaths.appEntry}/index.js`]
  },
  output: {
    filename: "static/[name].[chunkhash].js"
  },
  devtool: "source-map",
  module: {},
  plugins: [
    new ManifestPlugin({
      fileName: "assets.json",
      basePath: "/"
    })
  ]
};
module.exports = config;
