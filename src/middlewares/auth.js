const adminAuth = (req,res,next)=>{
    console.log("admin Auth import");
    
    const token = "xyz";
    const isAdminAuthentication = token === "xyz";
    if(!isAdminAuthentication) {
        res.status(401).send("Admin Authentication check(token) Failed");
    }else{
        next();
    }
};

const userAuth = (req,res,next)=>{
    const token = "abc";
    const isUserAuthentication = (token === "abc");
    if(!isUserAuthentication){
        res.status(401).send("User Authentication check(token) Failed");
    }else{
        next();
    }
};

module.exports = {adminAuth,userAuth}