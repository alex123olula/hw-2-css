const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry       : {
        app: Path.resolve(__dirname, '../src/scripts/index.js')
    },
    output      : {
        path    : Path.join(__dirname, '../build'),
        filename: 'js/[name].js'
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            name  : false
        }
    },
    plugins     : [
        new HtmlWebpackPlugin({
            template: Path.resolve(__dirname, '../src/index.html')
        })
    ],
    resolve     : {
        alias: {
            'assets': Path.resolve(__dirname, '../src/assets')
        }
    },
    module      : {
        rules: [
            {
                test  : /\.html$/i,
                loader: 'html-loader'
            },
            {
                test   : /\.mjs$/,
                include: /node_modules/,
                type   : 'javascript/auto'
            },
            {
                test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
                use : {
                    loader : 'file-loader',
                    options: {
                        name: '[path][name].[ext]'
                    }
                }
            }
        ]
    }
};
