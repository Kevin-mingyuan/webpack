const merge = require('webpack-merge'); //合并pord和base两个文件对象
const baseConfig = require('./webpack.base.conf.js');
const UglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");

let env = process.env.NODE_ENV = 'production';

console.log(process.env.NODE_ENV ,'jincheng pord');

//配置开发模式
module.exports = merge(baseConfig,{
    mode:'production',
    plugins:[

        new OptimizeCssAssetsWebpackPlugin({}),

        new CleanWebpackPlugin({}),
    ],
    //优化打包策略
    optimization:{
        minimizer:[
            new UglifyjsWebpackPlugin({
                cache:true,
            }),
        ]
    }
   
})