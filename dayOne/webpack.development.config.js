const path = require("path");
const merge = require("webpack-merge");
const webpackCommon = require("./webpack.common.config");
const webpack = require("webpack");

module.exports = merge(webpackCommon, {
  devtool: 'inline-source-map',
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: "/build",
    hot: true
  }
});