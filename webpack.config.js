/* global __dirname, require, module */

// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')
const env = require('yargs').argv.env // use --env with webpack 2
// const Dotenv = require('dotenv-webpack');
const nodeExternals = require('webpack-node-externals');
const WebpackSourceMapSupport = require('webpack-source-map-support');

let libraryName = 'library'

// let plugins = []
let outputFile, mode

if (env === 'build') {
  mode = 'production';
  // plugins.push(new UglifyJsPlugin())
  outputFile = libraryName + '.min.js'
} else {
  mode = 'development';
  outputFile = libraryName + '.js'
}

const config = {
  mode: mode,
  entry: path.join(__dirname, '/src/index.js'),
  devtool: 'inline-source-map',
  output: {
    path: path.join(__dirname, '/lib'),
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  context: __dirname,
  target: 'node',
  node: {
    //   __filename: true,
    __dirname: false
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },
  externals: [nodeExternals()],
  resolve: {
    alias: {
      '@': path.join(__dirname, '/src'),
      '@log': path.join(__dirname, '/src/log'),
      '@config': path.join(__dirname, '/src/config')
    },
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.json', '.js']
  },
  // plugins: plugins
  plugins: [new WebpackSourceMapSupport()]
}

module.exports = config
