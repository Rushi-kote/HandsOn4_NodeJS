const user = require("./../Models/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.login = async(req,res)=>{
    const reqObj = req.body;
    // console.log("reqObj==>  ",reqObj);
    const doseExist = await user.findOne({email:req.body.email});
    // console.log("doseExist==>  ",doseExist);
    
    if(!doseExist){
        return res.status(404).json({
            status:"fail",
            message:"User Dose not exist"
        });
    }else{ 
        const bool = await bcrypt.compare(req.body.pass,doseExist.password);  
        if(bool){
            try {
                const TOKEN = jwt.sign({email: req.body.email},process.env.SECREATE_KEY,(err,token)=>{
                    if(err){
                        throw new Error();
                    }
                    // console.log(token);
                    // res.token = TOKEN;
                    res.status(200).json({
                        status:"Success",
                        token,
                        data:{
                            message:"LoggedIn Successfully"
                        }
                    });
                })
            } catch (error) {
                console.log(err);
            }
        }else{
            res.status(404).json({
                status:"fail",
                message:"UserName or password is incorrect"
            });
        }
    }

}