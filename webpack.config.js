const path = require('path');

module.exports = {
  entry: './lib/index.js',
  output: {
      path: path.join(__dirname, 'public'),
      publicPath: "/public/",
      filename: 'bundle.js'
  },
  devtool: 'cheap-source-map'
};
