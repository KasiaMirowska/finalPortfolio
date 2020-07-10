const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  plugins: [
    new CopyWebpackPlugin([
      {
        from: './KasiaMirowskaResume.pdf',
        to: path.resolve(BUILD_PATH + "/KasiaMirowskaResume.pdf")
      }
    ])
  ]
}
