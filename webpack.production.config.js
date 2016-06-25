var path = require('path');
var webpack = require('webpack');

var plugin = new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"production"'
})

module.exports = {
    plugins: [plugin],
    entry: {app:'./client/index.js'},
    output: {path: __dirname, filename: './public/[name].js'},
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query:{
                    presets: ['es2015', 'react'],
                    plugins: ['transform-object-rest-spread']
                }
            }
        ]
    }
}
