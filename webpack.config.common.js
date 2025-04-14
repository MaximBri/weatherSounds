const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const outDir = 'dist';

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.ts',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, outDir),
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx'],
    alias: {
      'webpack/hot/dev-server': false,
      'webpack/hot/only-dev-server': false,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(
        __dirname,
        './public/index.html',
      ),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(
            __dirname,
            './public/favicon.ico',
          ),
          to: path.resolve(__dirname, outDir),
        },
        {
          from: path.resolve(__dirname, 'public/assets'),
          to: 'assets',
          noErrorOnMissing: true,
        },
      ],
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('postcss-preset-env')],
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
};
