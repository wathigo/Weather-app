const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000,
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },

      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],

      },

      {

        test: /\.(png|jpg)$/,
        use: [
          { loader: 'url-loader' },
        ],
      },

    ],
  },
};
