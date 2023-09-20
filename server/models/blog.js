import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    text: { type: String, required: true },
    commentedBy:{type:String, required: true},
    
});

const blogSchema = mongoose.Schema({

    title: {type:String ,required : true},
    description: {type:String , required: true},
    postedBy: {type:String ,required: true},
    comments: [commentSchema],
});

export default mongoose.model("blogs" , blogSchema)