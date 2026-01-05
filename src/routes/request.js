const express = require("express");
const requestRouter = express.Router();
const {userAuth} = require("../middlewares/auth")

requestRouter.get("/sendConnection", userAuth ,async (req, res) => {
    try {
        const user = req.user;
        res.send(user.firstName + "🤜🏻 sending Connection Request!!");
    } catch (error) {
        res.status(400).send("Something went wrong ‼️");
    }

});

module.exports = requestRouter;