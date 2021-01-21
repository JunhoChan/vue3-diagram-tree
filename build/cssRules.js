const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = [{
  test: /\.(sass|scss)$/,
  use: [
    'style-loader',
    'css-loader',
    {
      loader: 'sass-loader',
      options: {
        implementation: require('sass'),
      },
    },
  ],
}, {
  test: /\.css$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        hmr: true,
      },
    },
    'css-loader',
  ],
}]
