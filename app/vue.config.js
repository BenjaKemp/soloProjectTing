const webpack = require('webpack');

module.exports = {
  "lintOnSave": false,
  "transpileDependencies": [
    "vuetify"
  ],
  "configureWebpack": {
    "plugins": [
      new webpack.LoaderOptionsPlugin({
        "test": /\.graphql$/,
        "loader": 'graphql-tag/loader',
      }),
    ],
  },
}