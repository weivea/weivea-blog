var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: "./blog-front/index.js",
  output: {
    path: 'public/js/blog-front',
    filename: 'index.js',
    chunkFilename: "[id].chunk.js",
    publicPath: 'public/js/blog-front/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.(js)$/,
        loader: 'babel' ,
        /*query: {
          presets: ["es2015", 'stage-0']
        },*/
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      },
      {
        test: /\.less/,
        loader: 'style-loader!css-loader!postcss-loader!less-loader'
      },
      {
        test: /\.(png|jpg|gif|woff|woff2)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  },
  vue: {
    loaders: {
      js: 'babel'
    }
  },
  babel: {
    presets: ['es2015', 'stage-0'],
    plugins: ['transform-runtime','transform-vue-jsx']
  },
  postcss: function () {
    return [];
  }

};