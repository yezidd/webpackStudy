const path = require("path");
const merge = require("webpack-merge");
const webpackCommon = require("./webpack.common.config");
const webpack = require("webpack");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = merge(webpackCommon, {
  // devtool: "source-map",
  // plugins: [
  //   new UglifyJSPlugin({
  //     sourceMap: true
  //   })
  // ],
});