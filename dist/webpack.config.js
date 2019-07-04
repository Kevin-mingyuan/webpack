const path = require('path');
const webpack = require('webpack');
console.log(__dirname);
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //设置css 抽离为一个单独的css
// const devMode = process.env.NODE_ENV !== 'production'; // 判断当前环境是开发环境还是 部署环境，主要是 mode属性的设置值。
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'); //压缩css
// const autoprefixer = require('autoprefixer'); //postcss压缩
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); //js压缩
const HtmlWebpackPlugin = require('html-webpack-plugin'); //创建inxde.html 模板
const CleanWebpackPlugin = require('clean-webpack-plugin'); //每次打包清除上次打包的文件

module.exports = {
    mode: 'production', // development ||  production
    entry: './src/index.js',
    output: {
        filename:"[name][hash].js",
        path: path.resolve(__dirname, './dist')
    },
    //模式加载器
    module: {
        rules: [
            {
                test:/\.(js|jsx)$/,    //这是配置加载文件的规则 值是正则表达式 这里写的意思是.js .jsx结尾的文件加载loader
                loader:"babel-loader",
                exclude:/node_modules/,        //这个目录不需要加载loader
                query:{
                    presets:["es2015","react"]        //加载loader的presets
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
        　　 　　    { loader:"css-loader" },
                    {loader :"sass-loader"}
                    // {
                    //     loader: 'postcss-loader',
                    //     options: {
                    //         ident: 'postcss',
                    //         plugins: loader => [autoprefixer({ browsers: ['> 0.15% in CN'] })]
                    //     }
                    // },
                ]
            }
        ]
    },
    //插件
    plugins: [
        // new MiniCssExtractPlugin({ //判断生产模式/开发模式
        //   filename: devMode ? '[name].css' : '[name].[hash].css', // 设置最终输出的文件名
        //   chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
        // })
       
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': JSON.stringify('production')
        // }),

        //清除每次打包的dist重复文件
        new CleanWebpackPlugin(),

        new HtmlWebpackPlugin({ //index.html模板  在index.html 写入节点 <div id="root"></div>
            title:"hello world",
            // template:path.resolve(__dirname,"./dist/index.html"),
            template:"index.html", //需要在根目录下的index.html 写入节点<div id="root"></div>
            inject: 'body', //inject，默认值是true，参数有 true || 'head' || 'body' || false
            // showErrors: true,
            // hash: true,
            // minify: {
            //     removeAttributeQuotes: true
            // }
        }),

        new MiniCssExtractPlugin({  //抽离一个单个css 
            filename: '[name][hash].css',
            chunkFilename: '[id][hash].css'
        })

    ],
    // 自定义一些优化打包策略。
    optimization: {
        // minimize默认为true，效果就是压缩js代码。
        minimizer: [
            new OptimizeCSSAssetsPlugin({}), // 压缩css
            new UglifyJsPlugin({ //压缩js
                cache: true,
                parallel: true,
                sourceMap: true // set to true if you want JS source maps
            })
        ]
    },
    //热更新
    devServer:{
        contentBase: "./dist", //监听打包后文件夹 自动找寻html文件
        hot:true, //不用刷新也可以更替
        compress: true, //是否启用压缩
        open:true,
        port: 3000,
        // historyApiFallback: true, //解决页面刷新路由找不到问题
    }
};



