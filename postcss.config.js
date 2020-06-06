module.exports = {
  plugins: [
    require('precss'), // Sass-like markup and staged CSS features in CSS
    require('autoprefixer'),  // adding prefix from can I use
    require('postcss-nested') // nestin selectors like scss
    // 'postcss-import': {},
    // 'postcss-preset-env': {},
    // 'cssnano': {}
  ]
}
