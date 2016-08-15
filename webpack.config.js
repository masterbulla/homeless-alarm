var path = require('path');

module.exports = {
  context: path.join(__dirname, 'src/client'),
  entry: './index.jsx',
  output: {
    path: path.join(__dirname, 'src/public/javascripts'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.json$/,
        loaders: ['json'],
        include: path.join(__dirname, '.')
      }
    ]
  }
}