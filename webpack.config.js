const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');
const autoprefixer = require('autoprefixer');

dotenv.config();

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  devtool: isProduction ? 'source-map' : 'eval',
  entry: './src/frontend/index.js',
  mode: process.env.NODE_ENV,
  output: {
    path: isProduction ? path.join(process.cwd(), './src/server/public') : '/',
    filename: isProduction ? 'assets/app-[hash].js' : 'assets/app.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
      name: true,
      cacheGroups: {
        vendors: {
          name: 'vendors',
          chunks: 'all',
          reuseExistingChunk: true,
          priority: 1,
          filename: 'assets/vendor.js',
          enforce: true,
          test(module, chunks) {
            const name = module.nameForCondition && module.nameForCondition();
            return chunks.some(
              isChunks => isChunks.name !== 'vendor' &&
              /[\\/]node_modules[\\/]/.test(name),
            );
          },
        },
      },
    },
  },
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css|.styl$/,
        use: [{
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'postcss-loader',
          'stylus-loader',
        ],
      },
      {
        test: /\.(png|gif|jpg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'assets/[hash].[ext]'
          }
        }]
      }
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer()
        ]
      }
    }),
    new MiniCssExtractPlugin({
      filename: isProduction ? 'assets/app-[hash].css' : 'assets/app.css',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};