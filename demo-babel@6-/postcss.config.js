module.exports = {
    plugins:[
        require("autoprefixer"),
        require("postcss-pxtorem")({
            rootValue: 15, //设计稿元素尺寸/16 比如元素宽375px,最终页面会换算成 25rem
            propList: ['*']
        })
    ]
}