const path = require('path');

module.exports = {
  entry: {
    app: ['./app/index.js']
  },
  mode: 'development',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, '/'),
    compress: true,
    watchContentBase: true,
    publicPath: path.resolve(__dirname, 'dist'),
    hot: true,
    port: 9000
  }
};