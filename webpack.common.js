const path = require( 'path' );
const webpack = require( 'webpack' );
const CleanWebpackPlugin = require( 'clean-webpack-plugin' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
  entry: {
    polyfills: './src/polyfills.js',
    app: './src/index.js'
  },
  plugins: [
    new CleanWebpackPlugin( [ 'dist' ] ),
    new HtmlWebpackPlugin( {
      title: 'Shimming'
    } ),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.NamedModulesPlugin(), // Not woking :/
    new webpack.ProvidePlugin( {
      join: ['lodash', 'join']
    } )
  ],
  output: {
    filename: '[name].[hash].bundle.js',
    chunkFilename: '[name].[hash].bundle.js',
    path: path.resolve( __dirname, 'dist' )
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'all',
          name: 'vendor',
          test: /[\/]node_modules[\/]/
        }
      }
    },
    runtimeChunk: {
      name: "manifest",
    },
  }
};
