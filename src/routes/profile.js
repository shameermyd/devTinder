const express = require("express");
const jwt = require("jsonwebtoken");
const { userAuth } = require("../middlewares/auth");
const profileRouter = express.Router();

profileRouter.get('/profile',userAuth,async (req,res)=>{

    try {

        const userData = req.user; //from userAuth //middleware
        res.send(userData);
        
    } catch (error) {
        res.status(400).send(`User Not Found!!`)
    }

});

module.exports = profileRouter;