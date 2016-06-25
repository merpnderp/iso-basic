var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {app:'./client/index.js'},
    output: {path: __dirname, filename: path.join('public/','[name].js')},
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
