//page: app.js
const express = require("express");
require("./config/database.js")
const app = express();


app.listen(3333,()=>{
    console.log("server port: 3333 running...");
});