const express = require("express");
const app = express();
// const {adminAuth,userAuth} = require("./middlewares/auth.js")

// app.use("/admin",adminAuth);

app.use("/",(err,req,res,next)=>{
    res.status(500).send("Something went wrong 1st!!")
});

app.get("/getData",(res,req)=>{        
    throw new Error("dddddd"); //created a manul error, while calling '/getData'
});

app.use("/",(err,req,res,next)=>{
    res.status(500).send("Something went wrong 2nd!!")
});



// app.get("/admin/profile",(req,res)=>{
//     res.send({ auth:"admin", firstName: "Muhammed", lastName: "Shameer" });
// });

// app.get("/user/profile",userAuth,(req,res)=>{
//     res.send({ auth:"user", firstName: "Muhammed", lastName: "Shameer" });
// });

app.listen(3333,()=>{
    console.log("server port: 3333 running...");
});