const commonPaths = require("./common-paths");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
  entry: {
    vendor: ["semantic-ui-react"]
  },
  output: {
    path: commonPaths.outputPath,
    publicPath: "/"
  },
  resolve: {
    modules: [commonPaths.appEntry, "node_modules"]
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                modules: true,
                importLoaders: 1,
                camelCase: true,
                sourceMap: true
              }
            },
            {
              loader: "postcss-loader",
              options: {
                config: {
                  ctx: {
                    autoprefixer: {
                      browsers: "last 2 versions"
                    }
                  }
                }
              }
            }
          ]
        })
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "initial",
          test: "vendor",
          name: "vendor",
          enforce: true
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      favicon: "public/favicon.ico"
    }),
    new ExtractTextPlugin({
      filename: "styles/styles.[hash].css",
      allChunks: true
    })
  ]
};
module.exports = config;
