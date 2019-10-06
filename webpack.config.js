const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        index: ['./index.js']
    },
    target: 'web',
    stats: 'errors-only',
    output: {
        path: path.resolve(__dirname, './docs'),
        filename: '[name].js',
        publicPath: '/'
    },
    devtool: 'eval-source-map',
    watch: true,

    plugins: [
        new CopyPlugin([
            { from: './index.html', to: './' },
            { from: './index.css', to: './' },
            { from: './resource', to: './resource' },
          ]),
    ]
};
