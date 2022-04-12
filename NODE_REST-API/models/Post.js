const mongoose = require("mongoose");

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
    comments:{
        type:Array,
        default:[],
    },
    hostel:{
        type:String,
        required:true,
        max:70,
    }
},
{ timestamps:true}
);

module.exports=mongoose.model("Post",PostSchema); 
