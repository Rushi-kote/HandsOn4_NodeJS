const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    fName:{
        type:String,
        require:true
    },
    lName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    phoneNo:{
        type:Number,
        require:true
    },
    password:{
        type:String,
        require:true
    }
});


userSchema.pre("save",async function(next){
    try {
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(this.password,salt);
        this.password = hashed;
        // console.log("Hashed-Password==>")
        next();
    } catch (error) {
        console.log(error);
    }
})

const user = mongoose.model("user",userSchema);



module.exports = user;