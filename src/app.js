const express = require("express");

const app = express();

app.get("/user",(req,res)=>{
    res.send({ firstName: "Muhammed", lastName: "Shameer" })
})

app.get("/user/:userId", (req,res)=>{
    res.send(req.params);
});

app.post("/user",(req,res)=>{
    res.send("Data added Successfully Saved")
})

app.delete("/user",(req,res)=>{
    res.send("Deleted Successfully ")
})

app.use("/user",(req,res)=>{
    res.send("Hello from server")
})


app.listen(3333,()=>{
    console.log("server port: 3333 running...");
});