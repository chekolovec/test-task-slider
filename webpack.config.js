const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js',
    // publicPath: path.resolve('./dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: ['css-loader']
          })
      },
      {
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
      },
      {
        test: /\.(pug|jade)$/,
        loader: 'pug-loader',
        options: {
          pretty: true
        }
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.wav$|\.ico$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './img',
              publicPath: '../img'
            },  
          }
        ]
      },
      {
        test: /\.(eot|svg|ttf|otf|woff|woff2)$/,
        use: [
         {
           loader: 'file-loader',
           options: {
            name: '[name].[ext]',
            outputPath: '/fonts',
            publicPath: '../fonts'
           }
         }
       ]
      }
    ]
  },
  plugins: [ 
    new ExtractTextPlugin({filename: 'css/main.css'}),
    new HtmlWebpackPlugin({
    filename: 'index.html',
    template: './src/pug/index.pug'
    })
  ]
};