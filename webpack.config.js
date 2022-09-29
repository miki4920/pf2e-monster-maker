const path = require('path');

module.exports = {
    mode: "production",
    entry: './src/index.ts',
    watch: true,
    watchOptions: {
        aggregateTimeout: 100,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};