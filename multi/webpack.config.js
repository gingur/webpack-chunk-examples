var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: {
    a: './src/a.js',
    b: './src/b.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor.js')
  ]
};