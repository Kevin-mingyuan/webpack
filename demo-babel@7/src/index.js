let aa = require("./aa.js");
const rem = require("./lib/rem.js");
const css = require("./common/common.css");
// const scss = require("./common/common.scss");
let ab = () =>{
    console.log('i am haha')
}
ab();
import './common/common.css';
console.log(aa);
console.log(process.env);
console.log($, 'jquery123123');

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/Home.jsx';

ReactDOM.render(<App />, document.getElementById('app'));