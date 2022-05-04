const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema.Types
const PostSchema = new mongoose.Schema({
    userId: {
        type:String,
        required:true,
    },
    desc:{
        type:String,
        max:500,
    },
    category:{
        type:String,
        required:true,
    },
    img:{
        type:String,
    },
    likes:{
        type:Array,
        default:[],
    },
    comments:[{
        text:String,
        postedBy:{type:ObjectId,ref:"User"}
    }],
    hostel:{
        type:String,
        required:true,
        max:70,
    }
},
{ timestamps:true}
);

module.exports=mongoose.model("Post",PostSchema); 
