//page: app.js
const express = require("express");
const { connectDB } = require("./config/database.js");
const app = express();


connectDB()
    .then(() => {
        console.log("DB Connected Success ✅");
        app.listen(3333, () => {
            console.log("server port: 3333 running...🚀");
        });
    })
    .catch((err) => {
        console.log("DB Failed to Connect ❌");
    });

