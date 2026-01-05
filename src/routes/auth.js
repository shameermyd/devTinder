const express = require("express");
const authRouter = express.Router();
const bcrypt = require("bcrypt");
const { validateSignUpData } = require("../utils/validation");
const User = require("../models/user")

authRouter.post("/signUp", async (req, res) => {

    try {
        //Validation of Data (from req.body)
        validateSignUpData(req);
        const { firstName, lastName, emailId, password } = req.body;

        //Encryption password
        const passwordHash = await bcrypt.hash(password, 10);

        const user = new User({
            firstName,
            lastName,
            emailId,
            password: passwordHash
        });

        await user.save();
        res.send("User Data Added Successfully ✅");
    } catch (err) {
        res.status(400).send("Failed to Save: ‼️" + err.message);
    }
});

authRouter.post("/login", async (req, res) => {

    try {
        const { emailId, password } = req.body;

        const user = await User.findOne({ emailId: emailId });
        console.log(user);

        if (!user) {
            throw new Error("Invalid Credentials (username / password)!!");
        }
        const isPasswordValid = await user.validatePassword(password); //bcrypt.compare(password, user.password)

        if(isPasswordValid){

            const token = await user.getJWT(); //schema methods

            res.cookie("token",token,{expires: new Date(Date.now() + 1 * 3600000)}); //cookie creation
            res.send("Login Successfully !!!");
        }else{
            throw new Error("Invalid Credentials (password / username)!!");
        }
    } catch (error) {
        res.status(400).send("ERROR ‼️ : " + error.message);
    }

});

authRouter.post("/logOut",async(req, res)=>{
    try {
        res.cookie("token",null,{
            expires: new Date(Date.now())
        });
        res.send("Logout Successfully!!")
    } catch (error) {
        res.status(400).send("Error in Logout!")
    }
});

module.exports = authRouter;