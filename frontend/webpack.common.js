const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

/**
 * @param options {{styleLocalIdentName: string}}
 */
module.exports = function(options) {
  return {
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
          test: /\.mdx$/,
          use: ['babel-loader', '@mdx-js/loader']
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                esModule: true,
                modules: {
                  localIdentName: options?.styleLocalIdentName ?? '[hash]'
                },
                importLoaders: 1
              }
            },
            'sass-loader'
          ]
        },
        {
          test: /\.svg/,
          type: 'asset/resource',
          generator: {
            filename: 'img/[hash][ext]'
          }
        }
      ]
    },

    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.mdx'],
      modules: ['src', 'node_modules'],
      plugins: [new TsconfigPathsPlugin()]
    }
  };
};
