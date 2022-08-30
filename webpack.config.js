const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  performance: {
    maxEntrypointSize: 1024000,
    maxAssetSize: 1024000,
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './public',
    compress: true,
    port: 3000,
    hot: true,
  },
};
