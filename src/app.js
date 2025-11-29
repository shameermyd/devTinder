const express = require("express");

const app = express();

app.get("/user",(req,res)=>{
    res.send({ firstName: "Muhammed", lastName: "Shameer" })
})

app.post("/user",(req,res)=>{
    res.send("Data added Successfully Saved")
})

app.delete("/user",(req,res)=>{
    res.send("Deleted Successfully ")
})

app.use("/user",(req,res)=>{
    res.send("Hello from server")
})

// app.use("/hello/2",(req,res)=>{
//     console.log(res.send("Hello/2 route.."));
// })

// app.use("/hello",(req,res)=>{
//     console.log(res.send("Hello route.., You are from Server"));
// })

// app.use("/test",(req,res)=>{
//     console.log(res.send("Test route.. "))
// })

// app.use("/",(req,res)=>{
//     console.log(res.send("Main page "))
// })

app.listen(3333,()=>{
    console.log("server port: 3333 running...");
});