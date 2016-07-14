var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: {
    a: './src/a.js',
    b: './src/b.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: 'dist/'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor.js')
  ]
};