const { resolve } = require('path');

const config = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
  },
};

module.exports = config;
