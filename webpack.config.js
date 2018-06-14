const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const distDir = path.resolve(__dirname,'./dist')
console.log(distDir)
function resolve (dir) {
    return path.join(__dirname, dir);
}
let config ={
    devtool: '#source-map',
    entry:path.resolve(__dirname,'./src/index.js'),
    output:{
        path:distDir,//出口文件路径
        filename:'bundle.js'
    },
    devServer:{
        contentBase:distDir,
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
       
       new CopyWebpackPlugin([{
            from: "src/assets/",
            to: distDir+"/assets/"
        }],{
            ignore: [
                '.DS_Store'
            ]
        }),
        new HtmlWebpackPlugin({
            title:'js2d 游戏开发',
            template:'./src/index.html'
        })
    ],
    resolve: {
        extensions: ['.js'],
        alias:{
            '@':resolve('src'),
            //添加
            'assets': resolve('src/assets')
        }
    }
}

module.exports = config