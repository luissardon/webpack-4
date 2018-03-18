const path = require( 'path' );
const webpack = require( 'webpack' );
const CleanWebpackPlugin = require( 'clean-webpack-plugin' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
  entry: {
    app: './src/index.js'
  },
  plugins: [
    new CleanWebpackPlugin( [ 'dist' ] ),
    new HtmlWebpackPlugin( {
      title: 'Caching'
    } ),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.NamedModulesPlugin() // Not woking :/
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
