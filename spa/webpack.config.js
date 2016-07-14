var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: {
    app: './src/app.js',
    vendor: ['react', 'react-dom']
  },
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
  ]
};