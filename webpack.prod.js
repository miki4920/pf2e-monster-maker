const { merge } = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.config.js');

module.exports = merge(baseConfig, {
    mode: 'production',
    devtool: 'hidden-source-map',
    watch: false,
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
});