var defaults = require('./webpack.common.js');
var extend = require('merge');
var webpack = require('webpack');


module.exports = extend(defaults, {
  devtool: 'source-map',
  output: extend(defaults.output, {
    publicPath: '/carfixr.io/'
  }),
  plugins: defaults.plugins.concat([
    new webpack.optimize.UglifyJsPlugin({}),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      __PROD__: true,
      __DEV__: false
    })
  ])
});