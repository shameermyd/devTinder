const adminAuth = (req,res,next)=>{
    console.log("admin Auth import");
    
    const token = "xyz";
    const isAdminAuthentication = token === "xyz";
    if(!isAdminAuthentication) {
        res.status(401).send("UnAutherized Admin (token)");
    }else{
        next();
    }
};

const userAuth = (req,res,next)=>{
    const token = "abc";
    const isUserAuthentication = (token === "abc");
    if(!isUserAuthentication){
        res.status(401).send("Unautherized User (token)");
    }else{
        next();
    }
};

module.exports = {adminAuth,userAuth}