const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const apiRoute = express.Router();

//加载指定目录静态资源
app.use(express.static(__dirname + '/dist'));

//配置任何请求都转到index.html，而index.html会根据React-Router规则去匹配任何一个route
// app.get('*', function (request, response){
// //     // response.sendFile(path.resolve(__dirname, '../dist', 'index.html'))
//     response.sendFile(path.resolve(__dirname, '../src', 'index.html'))
// });

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   //判断是主动导向404页面，还是传来的前端路由。
// 　　 //如果是前端路由则如下处理
 
//   fs.readFile(__dirname + '../dist/index.html', function(err, data){
//     if(err){
//       console.log(err);
//       res.send('后台错误');
//     } else {
//       res.writeHead(200, {
//         'Content-type': 'text/html',
//         'Connection':'keep-alive'
//       });
//       res.end(data);
//     }
//   })
// });


  apiRoute.get("/",(req,res)=>{
    res.send("success open /");
  });

  apiRoute.get("/home",(req,res)=>{
    res.send("success open home");
  });

  apiRoute.get("/home2",(req,res)=>{
    res.send("success open home2");
  });

app.use(apiRoute);

app.listen("3000", function () {
  console.log("server started on port " + 3000)
})