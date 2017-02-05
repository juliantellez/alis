import path from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

import config from 'scripts/config'

const client = path.resolve(config.SRC, 'scripts/client/main.js')

export default {
  entry: {
    client,
  },
  module: {
    preloaders: [
      { test: /\.scss$/,
        loader: 'import-glob',
      },
    ],
    loaders: [
      {
        include: config.SRC,
        loader: 'babel-loader',
        test: /\.js$/,
      },
      { test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style-loader', 'css-loader!autoprefixer-loader!sass-loader'),
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('[name].css', {allChunks: false}),
  ],
  node: {
    net: 'empty',
    tls: 'empty',
    dns: 'empty',
    fs: 'empty',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(config.DEST, 'static'),
  },
}
