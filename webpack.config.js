const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  context: __dirname + '/app/',
  entry: {
    'background.js': './scripts.babel/background.js',
  },
  output: {
    path: path.resolve(__dirname, '/dist/help'),
    filename: '[name]'
  },
  resolve: {
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader'
        }]
      },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader'
          })
        },

      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            useRelativePath: false,
            name: '[name].[ext]',
            publicPath: '../fonts/icons/',
            outputPath: 'fonts/'
          }
        }]
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin("bundle.min.css"),

    new UglifyJsPlugin()
  ]
};
