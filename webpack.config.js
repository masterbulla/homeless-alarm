var path = require('path');

module.exports = {
  context: path.join(__dirname, 'public/javascripts'),
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'public/javascripts'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}