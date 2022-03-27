const mongoose = require("mongoose");

const OtpSchema = new mongoose.Schema({
    email:{
        type:String,
        max:70,
        unique:true,
    },
    code:{
        type:String,
    },
   expireIn:Number
},
    {timestamps:true}
);

module.exports=mongoose.model("Otp",OtpSchema); 