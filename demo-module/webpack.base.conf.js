const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

console.log(process.env.NODE_ENV ,'jincheng base');

module.exports = {
    entry:"./src/index.js",
    output:{
        filename:"js/[name].[hash:8].js",
        path:path.resolve(__dirname,"dist")
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                use:[
                    {loader:"babel-loader"}
                ],
                exclude:/node_modules/,
            },
            {
                test:/\.(c|sa|le)ss$/,
                use:[
                    {loader:MiniCssExtractPlugin.loader},
                    // {loader:"style-loader"},
                    {loader:"css-loader"},
                    {loader:"sass-loader"},
                    {loader:"postcss-loader"}
                ]
            },
            {
                test:/\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader:"url-loader",
                options:{
                    limit:10000,
                }
            }
        ]
    },
    resolve:{
        extensions:['.js','.jsx','.css','.scss','.json'], //补全后缀
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:"webapck config",
            filename:"index.html",
            template:"./index.html",
            inject:'body'
        }),
       
        new MiniCssExtractPlugin({
            filename:"css/[name].[hash:8].css",
            chunkFilename:'[id].css',
        }),

        new CopyWebpackPlugin([
            {from:"./static",to:"./static"}
        ]),
    ]
}