const path = require('path');

module.exports = {
  entry: './lib/index.js',
  output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
};
