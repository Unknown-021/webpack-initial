const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    entry: {
        app:'./src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader"
            ]

        },{
            test: /\.scss$/,
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {sourceMap: true}
                }, {
                    loader: 'sass-loader',
                    options: {sourceMap: true}
                }
            ]

        }]
    },

    devServer: {
        overlay: true,
        port: 8080
    },

    plugins: [
        new MiniCssExtractPlugin({
          filename: '[name].css',
        })
      ]
};