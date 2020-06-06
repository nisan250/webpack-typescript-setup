const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map', // development source maps
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // devServer: {
  //   // contentBase: './dist',
  //   contentBase: path.join(__dirname, 'dist'),
  //   compress: true,
  //   port: 9000
  //   hot: true,
  // },
  plugins: [
    // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
    // new HtmlWebpackPlugin({ // create a index.html from an existing template
    //   template: "./src/template.html"  // will generate a HTML file from template file (good for code splitting)
    // })
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ // create a index.html on the fly
      title: 'WebPack',
    }),
  ],
  module: {
    rules: [
      { // support images types
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          // options: {
          //   name: "[name].[hash].[ext]",
          //   outputPath: "imgs"
          // }
        }
      },
      { // support scss
        test: /\.scss$/,
        use: [
          "style-loader", //3. Inject styles into DOM
          "css-loader", //2. Turns css into commonjs
          "sass-loader" //1. Turns sass into css
        ]
      },
      // { // support css
      //   test: /\.css$/,
      //   use: [
      //     'style-loader',
      //     'css-loader',
      //   ],
      // },
      { // support css and postcss
        test: /\.css$/,
        use: [
        'style-loader',
        { loader: 'css-loader', options: { importLoaders: 1 } },
        'postcss-loader'
        ]
      },
    ],
  },
  // optimization: {
  //   usedExports: true,
  // },
});
