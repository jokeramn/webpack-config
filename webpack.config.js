let mode = 'development'

if (process.env.NODE_ENV === 'production') {
  mode = 'production'
}

module.exports = {
  mode: mode,

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },

  devtool: 'source-map',
  devServer: {
    static: './dist'
  }
}