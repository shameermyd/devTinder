const express = require("express");
const jwt = require("jsonwebtoken");
const { userAuth } = require("../middlewares/auth");
const profileRouter = express.Router();
const { validateProfileEditData } = require("../utils/validation")

profileRouter.get('/profile/view',userAuth,async (req,res)=>{

    try {

        const userData = req.user; //from userAuth //middleware
        res.send(userData);
        
    } catch (error) {
        res.status(400).send(`User Not Found!!`)
    }

});

profileRouter.patch('/profile/edit',userAuth, async(req,res) => {
    try {
        
        const isAllowedUpdate = validateProfileEditData(req);
        if(!isAllowedUpdate){
            throw new Error('try to update Unallowed fields!!');
        }
        const loggedInUser = req.user;
        Object.keys(req.body).forEach( (key) => (loggedInUser[key] = req.body[key]) );
        await loggedInUser.save();
        
        res.json({
            message: `${loggedInUser.firstName} , Successfully Updated your profile`,
            data : loggedInUser
        });
    } catch (error) {
        res.status(400).send('Error in profile update: '+error.message);
    }
})

module.exports = profileRouter;