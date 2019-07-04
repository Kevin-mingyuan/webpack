// import _ from 'lodash';

// import './style.css';
// import './style2.scss';

//   function createDomElement() {
//     let dom = document.createElement('div');
//     dom.innerHTML = _.join(['aicoder', '.com', ' wow'], '');
//     dom.className = 'hello';
//     dom.id = 'root';
//     return dom;
//   }

//   document.body.appendChild(createDomElement());
import React from 'react';
import ReactDOM from 'react-dom';
// console.log(process);
// import Home from "./components/home/home.jsx";
import App from "./App.jsx";

console.log(process)

ReactDOM.render(<App />, document.getElementById('root'));
