const path = require('path')
const cssRules = require('./cssRules')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const config = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    entry: path.resolve(__dirname, './../demo/main.tsx'),
    stats: "verbose",
    output: {
      path: path.resolve(__dirname, './../dist'),
      publicPath: '/',
      filename: '[name].[hash].js'
    },
    module: {
        rules: [
          {
            test: /\.(ts|tsx)$/, // jsx/js文件的正则
            exclude: /node_modules/, // 排除 node_modules 文件夹
            use: {
              loader: 'babel-loader',
              options: {
                // babel 转义的配置选项
                babelrc: false,
                presets: [
                  // 添加 preset-react
                  require.resolve('@babel/preset-env'),
                  require.resolve('@babel/preset-react'),
                  require.resolve('@babel/preset-typescript'),
                ],
                cacheDirectory: true
              }
            }
          },
          ...cssRules,
        ],
      },
      resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
        alias: {
            "@components": path.join(__dirname, '..', 'components'),
        },
      },
      plugins: [
        // 实现热加载
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
          title: 'Custom template',
          template: './demo/index.html',
          filename: './index.html'
        }),
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
