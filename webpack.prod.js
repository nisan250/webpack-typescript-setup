const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
//image process
const imageminGifsicle = require("imagemin-gifsicle");
const imageminPngquant = require("imagemin-pngquant");
const imageminSvgo = require("imagemin-svgo");
const imageminMozjpeg = require('imagemin-mozjpeg');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: "[name].[contentHash].bundle.js", //Cache basting
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        // chunks: 'all',
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
    minimizer: [
      new OptimizeCssAssetsPlugin(), // minify css files
      new TerserPlugin(), //default minify js (preventing source maps)
      new HtmlWebpackPlugin(
        { // minify html
          title: 'WebPack',
          // template: "./src/template.html",
          // minify: {
          //   removeAttributeQuotes: true,
          //   collapseWhitespace: true,
          //   removeComments: true
          // }
        }
      )
    ],
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   title: 'WebPack',
    // }),
    new MomentLocalesPlugin({
      localesToKeep: ['es-us', 'ru'],
    }),
    new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" }), // Extarct css to a file
    new CleanWebpackPlugin() // clean files from dist
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, //3. Extract css into files
          "css-loader", //2. Turns css into commonjs
          "sass-loader" //1. Turns sass into css
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, //3. Extract css into files
          { loader: 'css-loader', options: { importLoaders: 1 } }, //2. Turns css into commonjs
          'postcss-loader' //1. Turns postcss into css
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          {
            loader: 'file-loader',
            options: {
              name: "[name].[hash].[ext]",
            }
          },
          {
            loader: 'img-loader',
            options: {
              plugins: [
                imageminGifsicle({
                  interlaced: false
                }),
                imageminMozjpeg({
                  progressive: true,
                  arithmetic: false
                }),
                imageminPngquant({
                  floyd: 0.5,
                  speed: 2
                }),
                imageminSvgo({
                  plugins: [
                    { removeTitle: true },
                    { convertPathData: false }
                  ]
                })
              ]
            }
          }
        ]
      },
      // {  // transpile new js to old js
      //   test: /\.(js)$/,
      //   exclude: /node_modules/,
      //   use: 'babel-loader' // the webpack loader for babel
      // }
    ]
  },

});
