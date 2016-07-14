var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: {
    app: './src/app.js',
    vendor: ['react', 'react-dom']
  },
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    chunkFilename: '[name].chunk.js',
    publicPath: 'dist/'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
  ]
};