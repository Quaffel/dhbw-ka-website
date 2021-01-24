const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  name: 'dhbw-ka-website-dev',
  target: 'web',

  entry: {
    frontend: './src/index.tsx'
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.mdx$/,
        use: ['babel-loader', '@mdx-js/loader']
      }
    ]
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.scss', '.mdx'],
    modules: ["src", "content", "node_modules"],
    plugins: [new TsconfigPathsPlugin()]
  }
}
