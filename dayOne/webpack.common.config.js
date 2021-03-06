const path = require("path");
const CleanWebpack = require("clean-webpack-plugin");
const HtmlWebpack = require("html-webpack-plugin");
const webpack = require("webpack");

console.log(path.resolve(__dirname, 'dist'), "_--当前路径");

module.exports = {
  entry: {
    index: './src/index.js',
    vendor: [
      'lodash'
    ]
  },
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
      {test: /\.(png|jpg|jpeg|gif)$/, use: ['url-loader']}
    ]
  },
  plugins: [
    new CleanWebpack(['dist']),
    new HtmlWebpack({
      title: "webpack学习"
    }),
    // new webpack.NamedModulesPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor"
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "manifest"
    })
  ],
};