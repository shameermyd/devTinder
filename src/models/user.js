const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    emailId: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Please Provide Correct Email Id Format !!")
            }
        }
    },
    password: {
        type: String,
        validate(value){
            if(!validator.isStrongPassword(value)){
                throw new Error("Please Provide Strong Password !!")
            }
        }
    },
    age: {
        type: Number
    },
    photoUrl:{
        type : String,
        default: "This is default value set in userSchema"
    },
    gender: {
        type: String,
        validate(value){
            if(!["male","female","other"].includes(value)){
                throw new Error("Gender type is not Valid!!")
            }
        }
    },
    skills:{
        type: [String]
    },
    about:{
        type: String,
        default: "Default from userSchema"
    }
}, { timestamps: true, }
);

module.exports = mongoose.model("User", userSchema);