module.exports = {
    plugins:[
        require("autoprefixer"),
        require("postcss-pxtorem")({
            rootValue: 15, //设置iphone6下html节点字体大小是15px 比如元素宽375px,最终页面会换算成 25rem (测量px/25 = ? rem)
            propList: ['*']
        })
    ]
}