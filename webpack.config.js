const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log(__dirname);

module.exports = {
    entry: './src/app.js',
    // entry: './src/playground/counter-example.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(css)$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    // mode: 'production',
    // devtool: 'source-map',
    devServer: {

    }
}