const { merge } = require('webpack-merge')
const ESLintPlugin = require('eslint-webpack-plugin')
const commonConfig = require('./webpack.config.common')

module.exports = merge(commonConfig, {
  mode: 'development',
  devServer: {
    port: 3000,
    hot: false,
    open: true,
  },
  plugins: [
    new ESLintPlugin({
      extensions: ['ts'],
      fix: true,
      failOnError: false,
    }),
  ],
})
