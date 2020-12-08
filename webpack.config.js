const PostCSSAssetsPlugin = require('postcss-assets-webpack-plugin');
const autoprefixer = require('autoprefixer');
const path = require('path');

module.exports = function config() {
  return {
    entry: {
      main: path.resolve('../../src/index.js'),
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['css-loader'],
        },
      ],
    },
    plugins: [
      new PostCSSAssetsPlugin({ plugins: [autoprefixer()] }),
    ],
  };
};
