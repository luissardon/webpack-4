const path = require( 'path' );
const webpack = require( 'webpack' );
const CleanWebpackPlugin = require( 'clean-webpack-plugin' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
  entry: {
    app: './src/index.ts'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        include: path.resolve( __dirname, 'src' ),
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  plugins: [
    new CleanWebpackPlugin( [ 'dist' ] ),
    new HtmlWebpackPlugin( {
      title: 'Typescript'
    } ),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.NamedModulesPlugin(), // Seems not to work :/
  ],
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
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
      name: 'manifest',
    },
  }
};
