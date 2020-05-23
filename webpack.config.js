const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const uglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath:'/dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }, 
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    'style-loader', 
                    'css-loader', 
                    'postcss-loader', 
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new uglifyJsPlugin(),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'index.html')
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
};