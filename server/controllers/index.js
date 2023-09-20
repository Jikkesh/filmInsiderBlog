import  jwt  from "jsonwebtoken"
import bcrypt from "bcryptjs"
import user  from "../models/auth.js"
import blogs from "../models/blog.js"

export const signup = async(req,res)=>{
    const {name , email , password } = req.body;
    try
    {
        const oldUser = await user.findOne({email});
        if(oldUser){ 
            return res.status(404).json({message: "User Already Found"}) ;
        }
        const hashedPassword = await bcrypt.hash(password , 12);
        const newUser = await user.create({name , email , password: hashedPassword});

        const token = jwt.sign({ email:newUser.email , id:newUser._id} ,"test", {expiresIn:"1h"});

        res.status(200).json({data:name});
    }
    catch(error)
    {
        console.error(error);
        res.status(500).json({message:"Something went wrong on server"});
    }
}

export const signin = async(req , res)=>{
    const {email , password} = req.body;

    try{
        const oldUser = await user.findOne({email});
        if(!oldUser){ 
            return res.status(404).json({message: "User not Found"}); 
        }

        const comparePassword = await bcrypt.compare(password , oldUser.password);

        if(!comparePassword){
          return res.status(400).json({message:"Invalid Password"});
        }
        const token = jwt.sign({email: oldUser.email , id:oldUser._id} ,"test", {expiresIn:"1h"});
        const {name} = oldUser;
        res.status(200).json({data:name})
    }
    catch{
        res.status(500).json({message:"Something went wrong on server"});
    }
};

export const addblog = async(req,res)=>{
try {
     const {title,description ,userName} = req.body;
     console.log(title + "In controllers" + userName);
    const addBlog = await blogs.create({title:title , description:description , postedBy: userName});
    console.log({title,userName} + "added successfully")

    res.status(200).json({result:addBlog});

} catch (error) {
    res.status(500).json();
}
   
}

export const getblog = async(req,res)=>{

try {
const getBlogs = await blogs.find();
console.log("Got the data");
res.status(200).json(getBlogs)

} catch (error) {
    res.status(500).json({message:"Error in getting blogs"})
}
}


export const getblogbyId = async(req,res)=>{
    const {id:_id} = req.params;
try {
    const askedData = await blogs.findById(_id);
    res.status(200).json({ data: askedData});

} catch (error) {
    console.log(_id , error);
}
}

export const deleteblog = async(req , res)=>{
try {
    const { id:_id }= req.params;
    console.log(_id + "Got the id but something happening here")
    const deleteBlog = await blogs.findByIdAndRemove(_id);
    console.log(`deleted the blog ${_id}`);

    res.status(200).json({message:`Deleted the blog: ${deleteBlog}`});
} catch (error) {
    res.status(500).json({message:"Server error"});
}
}

export const editblog = async (req,res)=>{
    
try {
    const {id:_id} = req.params;
    console.log(_id);
    const {newTitle , newDescription} = req.body;
    console.log(newTitle);
    const idCheck = await blogs.findById(_id);

    if(!idCheck){
        console.log("Id not found");
    }

    await blogs.findByIdAndUpdate(_id , 
        { title: newTitle ,
         description: newDescription,} , 
         {new:true});

        console.log("Updated successfully" + newTitle);
    res.status(200).json({message:"Updated successfull"}); 
    

} catch (error) {
    res.status(500).json({message:"Innternal server error"});
}
}

export const addcom = async (req,res)=>{
    
    const {id, newComment,userName} = req.body;
    console.log("comment adding on" + id + newComment + userName);
    try {
        const _id = id;
        const text = newComment
        const blog = await blogs.findById(_id);
        if (!blog) {
            return res.status(404).json({ message: "Blog comment not found" });
        }
        const comment = {
            text: text,
            commentedBy: userName,
        };
        blog.comments.push(comment);
        await blog.save();
        res.status(200).json({ message: "Comment added successfully", data: blog });

    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}

export const deletecom = async (req,res)=>{
    const { blogId,commentIndex } = req.body;
    const _id = blogId;
    const index = commentIndex;
    console.log(_id + "Yeah it got here" + index);
    try {
        const blog = await blogs.findById(_id);
        console.log("Found the blog" + blog);
        if (!blog) { 
            return res.status(404).json({ message: "Blog not found" });
        }
        blog.comments.splice(index,1);
        await blog.save();
        console.log("Data removed Success");

        res.status(200).json({ message: "Comment deleted successfully", data: blog });

    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}

export const editcom = async (req,res)=>{
    const { blogId, commentIndex, updatedComment} = req.body;
    const _id = blogId;
    try {
        const blog = await blogs.findById(_id);
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }
        blog.comments[commentIndex].text = updatedComment;
        
        await blog.save();
        
        res.status(200).json({ message: "Comment edited successfully", data: blog });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}