 const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
  entry: {
     app: './src/index.js',
  },

  output: {
     filename: 'index.js',
     path: path.resolve(__dirname, './dist'),
     clean: true,
  },

  plugins: [
  new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html', 
  }),
],

};