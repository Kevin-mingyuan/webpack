const express = require("express");
const app = express();
const appRoute = express.Router();

appRoute.get("/user",(req,res)=>{
    res.send("success");
})


app.listen(3000,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('open port 3000');
    }
})