const path = require('path')

const entry = path.resolve('./index.js')

module.exports = {
  entry,
  output: {
    filename: 'bundle.js',
  },
  target: 'node',
  devtool: 'source-map',
  watch: false,
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  optimization: {
    minimize: false,
  },
  performance: {
    hints: false,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: [['env', { targets: { node: 'v6.0.0' } }]],
        },
        include: __dirname,
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: {},
  },
}
