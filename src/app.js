const express = require("express");

const app = express();

app.use("/hello",(req,res)=>{
    console.log(res.send("Hello route.., You are from Server"));
})

app.use("/test",(req,res)=>{
    console.log(res.send("Test route.. "))
})

app.listen(3333,()=>{
    console.log("server port: 3333 running...");
});