const webpack = require('webpack')


const path = require('path')
const ROOT_PATH = path.resolve(__dirname)
const WORK_PATH = path.resolve(ROOT_PATH, './works')
const WWW_PATH = path.resolve(ROOT_PATH, './www/js')
const MODULES_PATH = path.join(ROOT_PATH, './node_modules')


module.exports = {
  context: WORK_PATH,
  entry: {
    head: './head/main',
  },
  output: {
    filename: '[name].js',
    path: WWW_PATH,
    publicPath: '/assets/',
  },
  module: {
    loaders: [// style & css & less loader
      { test: /\.css$/, loader: "style-loader!css-loader" }, // babel loader
      // 转化ES6的语法
     {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
            presets: ['es2015']
        }
      },
      { test: /\.(woff|woff2|eot|ttf|otf)$/i, loader: "url-loader?limit=8192&name=[name].[ext]" },
      { test: /\.(jpe?g|png|gif|svg)$/i, loader: "url-loader?limit=8192&name=[name].[ext]" },
    ]
  },
  plugins: [
  ],
}