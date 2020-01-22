const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin')
const webpackBase = require('./webpack.base')

const webpackConfig = merge(webpackBase, {
  entry: path.join(__dirname, '../app/main.js'),
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name]_[hash].js'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: '../dist',
    port: 4000,
    hot: true,
    stats: 'errors-only',
    historyApiFallback: true
  },
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserWebpackPlugin({ url: 'http://localhost:4000' })
  ]
})

module.exports = webpackConfig
