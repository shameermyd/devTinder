//page: app.js
const express = require("express");
const { connectDB } = require("./config/database");
const User = require("./models/user")
const app = express();

app.use(express.json());

app.post("/signUp", async (req, res) => {
    const user = new User(req.body);

    try {
        await user.save();
        res.send("User Data Added Successfully ✅")
    } catch (err) {
        res.status(400).send("Failed to Save: ‼️" + err.message);
    }

});

app.get("/user", async (req, res) => {
    try {
        const user = await User.find({ emailId: req.body.emailId });
        if (user.length === 0) {
            res.status(400).send("Email is not found ‼️")
        } else {
            res.send(user)
        }

    } catch (error) {
        res.status(400).send("Something went wrong ‼️");
    }

});
//all users
app.get("/feed", async (req, res) => {
    try {
        const users = await User.find({});
        if (users.length === 0) {
            res.status(400).send("No user Found ‼️")
        } else {
            res.send(users)
        }
    } catch (error) {
        res.status(400).send("Something went wrong ‼️")
    }
});

app.delete("/user", async (req, res) => {
    const userId = req.body.userId;
    try {
        console.log(userId);
        const user = await User.findByIdAndDelete(userId);
        res.send("User Deleted Successfully ✅")
    } catch (error) {
        res.status(400).send("Something Went Wrong ‼️")
    }
})

app.patch("/user/:userId", async (req, res) => {
    // const userId = req.body.userId;
    const userId = req.params?.userId
    const data = req.body;

    try {
        const ALLOWED_TO_UPDATES = ["userId", "age", "photoUrl", "gender", "skills", "about"];
        const isUpdateAllowed = Object.keys(data).every((key) => ALLOWED_TO_UPDATES.includes(key));

        if (!isUpdateAllowed) {
            throw new Error("Fields Don't allowed to Update")
        }

        if(data.skills.length > 5){
            throw new Error("Less than 5 Skills Allowed to Add");
        }
        const user = await User.findByIdAndUpdate(userId, data, { new: true, runValidators: true });
        if (!user) {
            res.status(400).send("User Not Found!!")
        } else {
            res.send("Updated Successfully..✅")
        }
    } catch (error) {
        res.status(400).send("‼️ UPDATED FAILED : "+ error.message)
    }
})


connectDB()
    .then(() => {
        console.log("DB Connected Success ✅");
        app.listen(3333, () => {
            console.log("server port: 3333 running...⏳🚀");
        });
    })
    .catch((err) => {
        console.log("DB Failed to Connect ❌");
    });

