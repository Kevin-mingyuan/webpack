
const webpack = require('webpack');
const path = require('path');

//html模板插件
const HtmlWebpackPlugin = require("html-webpack-plugin");

//清除hash重复文件
const { CleanWebpackPlugin }  = require("clean-webpack-plugin");

//抽离css样式
const miniCssExtractPlugin = require("mini-css-extract-plugin");

//压缩css样式 
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");

//压缩js
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

//赋值静态资源 文件
const copyWebpackPlugin = require("copy-webpack-plugin");

console.log(process.env.NODE_ENV);

module.exports = {
    mode:process.env.NODE_ENV, //devalopment || production
    entry:"./src/index.js",
    output:{
        filename:"js/bundle.[hash:8].js",
        path:path.resolve(__dirname,"dist"),
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                use:[{ 
                    loader:"babel-loader",
                    // options:{
                    //     // presets: ['@babel/preset-es2015',"@babel/preset-react"]
                    // }
                }],
                exclude:/node_modules/, //不加载这个文件
            },
            {
                test:/\.(c|sa|le)ss$/,
                use:[
                    miniCssExtractPlugin.loader, //使用插件loader 不需要再配置style-loader
                    // {
                    //     loader:"style-loader" // 将 JS 字符串生成为 style 节点
                    // },
                    {
                        loader:"css-loader" // 将 CSS 转化成 CommonJS 模块
                    },
                    {
                        loader: "sass-loader" // 将 Sass 编译成 CSS
                    },
                    {
                        loader:"postcss-loader" //为浏览器添加前缀 配合 autoprefixer 插件使用
                    }
                ]
            }
        ]
    },
    devServer:{
        port:3000,
        hot:true,
        contentBase:path.join(__dirname,"dist"), //监听路径
        proxy:{
            "/api":{
                target:"http://location:3000",
                changeOrigin:true,
                pathRewrite:{
                    "/api":"",
                }
            },
        }
    },
    plugins:[

        //默认全局变量使用
        new webpack.ProvidePlugin({
            $:"jquery",
        }),

        //模板html插件
        new HtmlWebpackPlugin({
            title:"test App", //模板头部名字
            filename:"index.html", //模板名字
            template:"./index.html", //模板路径
            inject: 'body' //打包到body底部
        }),

        //压缩css
        new OptimizeCssAssetsWebpackPlugin({}),

        //抽离单独css
        new miniCssExtractPlugin({
            filename:'css/[name].[hash:8].css',
            chunkFilename: '[id].css',
        }),

        //复制静态资源
        new copyWebpackPlugin([
            {from:"./static" ,to:"./static"}
        ]),

        //清除每次hash打包重复
        new CleanWebpackPlugin({})
    ],
    //优化打包策略
    optimization:{
        //压缩代码
        minimizer:[
            //压缩js
            new UglifyjsWebpackPlugin({
                cache:true,
            })
        ]
    }
}