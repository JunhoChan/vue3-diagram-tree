const path = require('path')
const cssRules = require('./cssRules')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const externals = [
  {
    'react-router-dom': 'ReactRouterDOM',
    'react': 'react',
  }
]

const webpackConfig = {
    mode: 'production',
    entry: path.resolve(__dirname, './../components/main/index.ts'),
    output: {
      path: path.resolve(__dirname, '../lib'),
      publicPath: '/',
      filename: 'index.js',
      libraryTarget: 'umd',
      library: 'ReactDiagramTree',
      umdNamedDefine: true,
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
                require.resolve('@babel/preset-typescript'),//  推荐ts-lint一起使用
              ],
              cacheDirectory: true
            }
          }
        },
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
                require.resolve('@babel/preset-typescript'),// 配合ts-lint一起使用
              ],
              cacheDirectory: true
            }
          }
        },
        ...cssRules,
      ]
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      alias: {
        "@components": path.join(__dirname, '..', 'components'),
      },
    },
    optimization: {
      minimize: true,
      minimizer: [
        new CssMinimizerPlugin(),
      ],
    },
    externals,
    plugins: []
}

module.exports = webpackConfig