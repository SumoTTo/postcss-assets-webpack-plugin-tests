const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config = require('../../webpack.config')();

config.module.rules[0].use.unshift(MiniCssExtractPlugin.loader);
config.plugins.push(new MiniCssExtractPlugin());

module.exports = config;
