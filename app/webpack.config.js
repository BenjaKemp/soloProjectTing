const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { VuetifyLoaderPlugin } = require('vuetify-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
                 loader: 'vue-loader',
                 options: {
                   loaders: {
                     js: 'babel-loader'
                   }
                 }
               },
               {
                 test: /\.js$/,
                 exclude: /(node_modules|bower_components)\/|.[sS]pec\.js$/,
                 use: {
                   loader: 'babel-loader'
                 }
               },
               {
                 test: /\.scss$/,
                 use: [
                   MiniCssExtractPlugin.loader,
                   {
                     loader: 'css-loader',
                     options: {
                       sourceMap: true,
                     }
                   },
                   {
                     loader: 'postcss-loader',
                     options: {
                       sourceMap: true,
                       plugins: [
                         require('autoprefixer')()
                       ]
                     }
                   },
                   {
                     loader: 'resolve-url-loader'
                   },
                   {
                     loader: 'sass-loader',
                     options: {
                       sourceMap: true,
                       sourceMapContents: true,
                     }
                   }
                 ]
               },
               {
                 test: /\.(graphql|gql)$/,
                 exclude: /node_modules/,
                 loader: 'graphql-tag/loader'
               },
               {
                 test: /\.(woff|woff2|eot|ttf|otf)$/,
                 loader: 'file-loader',
               },
               {
                 test: /\.(gif|png|jpe?g|svg)$/i,
                 loader: 'file-loader',
               },
               {
                 test: /\.css$/,
                 use: ['vue-style-loader', 'style-loader', 'css-loader']
               }
             ]
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