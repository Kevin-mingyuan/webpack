const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry:"./src/index.js",
    output:{
        filename:"[name].[hash:8].js",
        path:path.resoleve(__dirname,"dist")
    }
}