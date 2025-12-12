const mongoose = require("mongoose");

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
        lowercase: true
    },
    password: {
        type: String
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
}, { timestamps: true, }
);

module.exports = mongoose.model("User", userSchema);