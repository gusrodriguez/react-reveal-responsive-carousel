const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, './lib');
const APP_DIR = path.resolve(__dirname, './');

const config = {
  entry: ['core-js/stable/promise', `${APP_DIR}/src/components/carousel/index.tsx`],
  mode: 'production',

  output: {
    path: BUILD_DIR,
    filename: 'index.js',
    publicPath: '/',
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      // ES6 Loader
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(jpg|gif|png)$/,
        exclude: /node_modules/,
        use: {
          loader: 'file-loader',
        },
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  watch: false,
  resolve: {
    extensions: ['.js', '.jsx','.tsx', '.ts'],
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
  }
};

module.exports = config;
