const webpack = require('webpack')
const path = require('path')

let watcherOpts = {
  aggregateTimeout: 300,
  poll: true
}

let webpackOpts = {
  context: path.resolve(__dirname, 'src'),
  // bundle configuration
  entry: {
    app: './index'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bin/[name].bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  module: {
    loaders: [
      {
        test: [/\.js$/, /\.jsx$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader'
      },
      {
        // loader for assets
        // the path is taken from the "output.path opt."
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file?name=fonts/[name].[ext]'
      },
      {
        // loader for assets
        test: /\.gif$/,
        loader: 'file?name=[name].[ext]'
      }
    ]
  }
}

let compiler = webpack(webpackOpts)

compiler.watch(watcherOpts, (err, stats) => {
  if (err) {
    console.log(err.message)
  } else {
    console.log(stats.toString({ minimal: true, colors: true }))
    console.log('Build Done. :)')
  }
})
