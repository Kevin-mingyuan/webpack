let merge = require('webpack-merge');//合并dev和base两个文件对象
let baseConfig = require('./webpack.base.conf.js');
const path = require('path');

let env = process.env.NODE_ENV = 'development';

console.log(process.env.NODE_ENV ,'jincheng dev');

//配置开发模式
module.exports = merge(baseConfig,{
    mode:'development',
    devServer:{
        port:8080,
        hot:true,
        contentBase:path.resolve(__dirname,"dist"),
        proxy:{
            "/api":{
                target:"http://location:3000",
                changeOrigin:true,
                pathRewrite:{
                    "/api":"",
                }
            },
        },
    }
})