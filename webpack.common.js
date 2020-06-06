const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  entry: {
    // app: './src/index2.tsx',
    // app: './src/index.tsx',
    app: './src/index.js',
    // print: './src/print.js',
    // another: './src/another-lodash.js',
    // vendor: "./src/vendor.js"
  },
  module: {
    rules: [
      { // support font types
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
      { // support for csv...
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader',
        ],
      },
      { // support for xml
        test: /\.xml$/,
        use: [
          'xml-loader',
        ],
      },
      // { // support for typescript and jsx
      //   test: /\.tsx?$/,
      //   use: 'ts-loader',
      //   exclude: /node_modules/,
      // },
      // { // making sure we es linting before transpiling
      //   enforce: 'pre',
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   loader: 'eslint-loader',
      // },
      // { // support eslint
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   // use: ['babel-loader', 'eslint-loader'], // in case we use babel-loader(we want to check before transpiling)
      //   loader: 'eslint-loader',
      //   options: {
      //     // eslint options (if necessary)
      //   },
      // },
    ],
  },
  // plugins: [new StylelintPlugin({})], // support css lint
  // resolve: { // support for typescript and jsx
  //   extensions: [ '.tsx', '.ts', '.js' ],
  // },
};
