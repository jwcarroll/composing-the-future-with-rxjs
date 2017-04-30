/* eslint-disable */

var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: {
    presentation:[
      "whatwg-fetch",
      "babel-polyfill",
      "./index"
    ],
    'demo-typeahead':[
      "whatwg-fetch",
      "babel-polyfill",
      "./demo-typeahead"
    ],
    'demo-redux':[
      "whatwg-fetch",
      "babel-polyfill",
      "./demo-redux"
    ],
    'demo-trailing-letters':[
      "whatwg-fetch",
      "babel-polyfill",
      "./demo-trailing-letters"
    ]
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
    publicPath: "/dist/"
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production")
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.md$/,
      loader: "html-loader!markdown-loader?gfm=false"
    }, {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }, {
      test: /\.(png|jpg|gif)$/,
      loader: "url-loader?limit=8192"
    }, {
      test: /\.svg$/,
      loader: "url-loader?limit=10000&mimetype=image/svg+xml"
    }]
  }
};