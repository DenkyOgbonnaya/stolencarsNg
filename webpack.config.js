const webpack = require('webpack');
const Uglify = require("uglifyjs-webpack-plugin");


module.exports = {
    context: __dirname + '/src',
    entry: {
        index: './index.js',
        mail: './mail.js',
        removecar: './removecar.js',
        report: './report.js',
        review: './review.js',
        vindecode: './vindecode.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].min.bundle.js'
        },
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
            loader: 'babel-loader',
            options: {
            presets: ['env' ]
            }
            }
        }
        ]
            },
            plugins: [
                new Uglify()
            ]
}