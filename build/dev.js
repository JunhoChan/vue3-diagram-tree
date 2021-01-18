const path = require('path')
const cssRules = require('./cssRules')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const config = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    entry: path.resolve(__dirname, './../demo/index.js'),
    stats: "verbose",
    output: {
      path: path.resolve(__dirname, './../dist'),
      publicPath: '/',
      filename: '[name].[hash].js'
    },
    module: {
        rules: [
          {
            test: /\.vue$/,
            use: 'vue-loader',
          },
          {
            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
          },
          {
            test: /\.tsx?$/,
            use: [
              {
                loader: 'ts-loader',
              },
            ],
          },
          ...cssRules,
        ],
      },
      resolve: {
        extensions: ['.ts', '.tsx', '.js', '.vue', '.json'],
        alias: {
            "@components": path.join(__dirname, '..', 'components'),
            // vue: 'vue/dist/vue.esm-browser.js',
        },
      },
      plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
          title: 'Custom template',
          template: './demo/index.html',
          filename: './index.html'
        }),
        new webpack.DefinePlugin({
          // see http://link.vuejs.org/feature-flags 
          '__VUE_OPTIONS_API__': JSON.stringify(false),
          '__VUE_PROD_DEVTOOLS__': JSON.stringify(false)
        })
      ],
      devServer: {
        inline: true,
        hot: true,
        stats: 'minimal',
        publicPath: '/',
        contentBase: path.join(__dirname, './../demo'),
        overlay: true,
      },
      optimization: {
        minimize: true,
      },
}

module.exports = config