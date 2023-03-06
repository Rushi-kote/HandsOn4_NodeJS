const user = require("./../Models/UserModel");

exports.signUp = async(req,res)=>{
    
    const bodyObj = {...req.body};
    // console.log(bodyObj);
    // console.log("bodyObj===>  ",bodyObj);
    const nUser = new user(bodyObj);
    const savedUser = await nUser.save();
    // console.log("SavedUser===>  ",savedUser);
    res.status(201).json({
        status:"success",
        massage:"Logged in",
        password:nUser.password
    });
}

exports.checkUser = async(req,res,next)=>{
    const doseExist = await user.findOne({email:req.body.email});
    
    try {
        if(!doseExist){
            next();
        }else{
            // console.log(req.body.email);
            throw new Error("User with this emailID is already exist");
        }
    } catch (error) {
        console.log(error);
        res.status(409).json({
            status:"Fail",
            massage: "User with this emailID is already exist"
        });
    }
}