const express = require("express");
const {adminAuth,userAuth} = require("./middlewares/auth.js")
const app = express();

app.use("/admin",adminAuth);

app.get("/admin/profile",(req,res)=>{
    res.send({ auth:"admin", firstName: "Muhammed", lastName: "Shameer" });
});

app.get("/user/profile",userAuth,(req,res)=>{
    res.send({ auth:"user", firstName: "Muhammed", lastName: "Shameer" });
});

app.listen(3333,()=>{
    console.log("server port: 3333 running...");
});