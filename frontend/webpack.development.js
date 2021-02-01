const { merge } = require('webpack-merge');
const path = require('path');

const commonConfiguration = require('./webpack.common')({
  styleLocalIdentName: '[name][local]-[hash]'
});

module.exports = merge(commonConfiguration, {
  mode: 'development',

  devtool: 'inline-source-map',
  devServer: {
    contentBase: 'src/static'
  },

  output: {
    filename: '[name]/bundle.js',
    path: path.resolve(__dirname, 'dist/development')
  }
});
