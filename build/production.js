const path = require('path')
const cssRules = require('./cssRules')
const { VueLoaderPlugin } = require('vue-loader')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const externals = [
  {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
    },
  },
]

const webpackConfig = {
  mode: 'production',
  entry: path.resolve(__dirname, './../components/main/index.ts'),
  output: {
    path: path.resolve(__dirname, '../lib'),
    publicPath: '/',
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'VueDiagramTree',
    umdNamedDefine: true,
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
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      ...cssRules,
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@components': path.join(__dirname, '..', 'components'),
    },
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
  externals,
  plugins: [
    new VueLoaderPlugin(),
  ],
}

module.exports = webpackConfig
