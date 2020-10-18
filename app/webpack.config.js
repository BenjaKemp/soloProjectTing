const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { VuetifyLoaderPlugin } = require('vuetify-loader')
const autoprefixer = require('autoprefixer');

module.exports = env => {
    return {
        entry: './src/main.js',
        devtool: 'inline-source-map',
        devServer: {
            contentBase: './dist',
        },
        output: {
            filename: '[name].[contenthash].js',
            path: path.resolve(__dirname, 'dist'),
        },
        resolve: {
            alias: {
                Components: path.resolve(__dirname, 'src/components/'),
            }
        },
        module: {
            rules: [{
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                  test: /\.s(c|a)ss$/,
                  use: [
                    'vue-style-loader',
                    'style-loader',
                    'css-loader',
                    {
                      loader: 'sass-loader',
                      // Requires sass-loader@^7.0.0
                      options: {
                        implementation: require('sass'),
                        fiber: require('fibers'),
                        indentedSyntax: true // optional
                      },
                      // Requires sass-loader@^8.0.0
                      options: {
                        implementation: require('sass'),
                        sassOptions: {
                          fiber: require('fibers'),
                          indentedSyntax: true // optional
                        },
                      },
                    },
                  ],
                },
                {
                  test: /.css$/,
                  use: [
                      'vue-style-loader',
                      'css-loader',
                  ]
                },
                {
                  test: /\.(woff|woff2|eot|ttf|otf)$/,
                  use: [
                      'file-loader',
                  ],
                },
                {
                  test: /\.(graphql|gql)$/,
                  loader: 'webpack-graphql-loader'
                },
                {
                  test: /\.(png|svg|jpg|gif)$/,
                  use: [
                      'file-loader',
                  ],
                },
                {
                  test: /\.(csv|tsv)$/,
                  use: [
                      'csv-loader',
                  ],
                },
                {
                  test: /\.html$/i,
                  loader: 'html-loader',
                },
                {
                  test: /\.m?js$/,
                  exclude: /(node_modules|bower_components)/,
                  use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env']
                    }
                  }
                },
                {
                  test: /\.xml$/,
                  use: [
                    'xml-loader',
                  ],
                }
            ],

        },
        plugins: [
            new CleanWebpackPlugin({
                cleanStaleWebpackAssets: false
            }),
            new HtmlWebpackPlugin({
                templateContent: `
                    <!doctype html>
                    <html>
                    <body>
                        <div id="app"></div>
                    </body>
                    </html>
                `
            }),
            new VueLoaderPlugin(),
            new VuetifyLoaderPlugin()
        ],
        optimization: {
            runtimeChunk: 'single',
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all',
                    },
                },
            },
        },
    }
};