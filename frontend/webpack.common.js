const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require("path");

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
                  localIdentName: (() => {
                    if (options && options.styleLocalIdentName) {
                      return options.styleLocalIdentName;
                    } else {
                      return '[hash]';
                    }
                  })()
                },
                importLoaders: 1
              }
            },
            'sass-loader'
          ]
        }
      ]
    },

    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.mdx'],
      modules: ['src', 'node_modules'],
      plugins: [new TsconfigPathsPlugin({
        configFile: path.join(__dirname, "tsconfig.json")
      })]
    }
  };
};
