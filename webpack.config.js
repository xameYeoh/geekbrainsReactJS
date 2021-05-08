const path = require("path");
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        app: './index.jsx',
    },
    context: path.resolve(__dirname, "static_src"),
    output: {
        path: path.resolve(__dirname, "static", "build"),
        filename: 'app.js',
    },
    devServer: {
        publicPath: path.resolve(__dirname, "static", "build"),
        historyApiFallback: true,
    },
    watch: true,
    watchOptions: {
        ignored: '**/node_modules',
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            include: path.resolve(__dirname, "static_src"),
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                presets: ['@babel/env', '@babel/react'],
            }
        }, ],
    },
};