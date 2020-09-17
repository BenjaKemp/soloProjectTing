const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { VuetifyLoaderPlugin } = require('vuetify-loader')

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        alias: {
            Components: path.resolve(__dirname, 'src/components/'),
        }
    },
    module: {
        rules: [{
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
        ]
      },
    {
        test: /\.vue$/,
        loader: 'vue-loader'
    },
      {
        test: /\.s[ac]ss$/i,
        use: [
            'vue-style-loader',
            'css-loader',
            'sass-loader' 
        ]
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
                'file-loader',
            ],
        },
        {
            test: /\.graphql?$/,
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
            test: /\.xml$/,
            use: [
                'xml-loader',
            ],
        }],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Management',
        }),
        new VueLoaderPlugin(),
        new VuetifyLoaderPlugin()
    ],
};