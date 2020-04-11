const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/app.tsx',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'dist/app.js',
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
    contentBase: path.join(__dirname, 'public'),
  }
}
