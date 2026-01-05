const validator = require("validator");

const validateSignUpData = (req) => {
    const { firstName, lastName, emailId, password } = req.body;

    if (!firstName || !lastName) {
        throw new Error("Name Should not be Empty !")
    } else if (!validator.isEmail(emailId)) {
        throw new Error("Email is not valid !")
    } else if (!validator.isStrongPassword(password)) {
        throw new Error("password is not Strong!!")
    }
}

const validateProfileEditData = (req) => {
    try {
        const allowedFields = ["firstName", "lastName", "emailId", "photoUrl", "gender", "about"];
        const isAllowed = Object.keys(req.body).every((key) => allowedFields.includes(key));
        return isAllowed;

    } catch (error) {
        console.log("Error : " + error);
    }

}

module.exports = {
    validateSignUpData,
    validateProfileEditData
}