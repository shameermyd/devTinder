//page : config/database.js
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://shameermyd:shameer007@shameerCluster.08t6wgy.mongodb.net/devTinder");
    } catch (error) {
        console.log(error,"Connection Error ‼️");
    }
};

module.exports= {connectDB}



// connectDB()
//     .then(() => { console.log("✅ DB Connected Successfully ") })
//     .catch((err) => { console.log("❌ DB ConnectionFailed!!") });