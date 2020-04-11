const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/app.tsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: path.join(__dirname, 'public'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
    ]
  },
  devServer: {
    historyApiFallback: true,
  }
}
