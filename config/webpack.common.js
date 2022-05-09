const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackInlineSourcePlugin = require('@effortlessmotion/html-webpack-inline-source-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
  },
  resolve: {
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat',
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              ['@babel/plugin-transform-runtime'],
              [
                '@babel/plugin-transform-react-jsx',
                {
                  pragma: 'h',
                  pragmaFrag: 'Fragment',
                },
              ],
            ],
          },
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inlineSource: '.(js|css)$', // embed all javascript and css inline // Works in conjunction with ...inline source plugin
      inject: 'body',
    }),
    // new HtmlWebpackInlineSourcePlugin(),
    // new CompressionPlugin(),
    new BundleAnalyzerPlugin({
      // analyzerHost: '0.0.0.0', // To make it work in the container
    }),
  ],
}
