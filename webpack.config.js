const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
let config ={
    entry:path.resolve(__dirname,'./src/index.js'),
    output:{
        path:path.resolve(__dirname,'./dist'),//出口文件路径
        filename:'bundle.js'
    },
    devServer:{
        contentBase:'dist',
        inline:true,
        port:8073
    },
    module:{
        
        loaders:[
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins:[
       new HtmlWebpackPlugin({
           title:'js2d 游戏开发',
           template:'./src/index.html'
       })
    ]
}

module.exports = config