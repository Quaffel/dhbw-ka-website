const { merge } = require('webpack-merge');
const path = require('path');

const CopyPlugin = require('copy-webpack-plugin');

const commonConfiguration = require('./webpack.common');

module.exports = merge(commonConfiguration, {
  mode: "production",

  output: {
    filename: '[name]/bundle.js',
    path: path.resolve(__dirname, 'dist/production')
  },

  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: "src/static",
          to: ".",
          toType: "dir"
        }
      ]
    })
  ]
});
