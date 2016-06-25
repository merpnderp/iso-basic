var path = require('path');
var webpack = require('webpack');
//var WatchIgnorePlugin = require('webpack').WatchIgnorePlugin;
/*
 plugins: [
 new  WatchIgnorePlugin([
 path.resolve(__dirname, './node_modules/')
 ])
 ],
 */
module.exports = {
    entry: {app:'./src/app.js'},
    output: {path: __dirname, filename: path.join('public/build','[name].js')},
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
