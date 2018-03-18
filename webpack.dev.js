const merge = require( 'webpack-merge' );
const common = require( './webpack.common.js' );
const webpack = require( 'webpack' );
const WorkboxPlugin = require( 'workbox-webpack-plugin' );

module.exports = merge( common, {
  devtool: 'inline-source-map',
  mode: 'development',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new WorkboxPlugin.GenerateSW( {
      // these options encourage the ServiceWorkers to get in there fast 
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true
    } )
  ],
  output: {
    publicPath: '/'
  }
} );
