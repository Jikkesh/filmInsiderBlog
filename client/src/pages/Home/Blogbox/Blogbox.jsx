import React from 'react';
import './Blogbox.css';
import { useState } from 'react';
import {useNavigate} from "react-router-dom"
import {useSelector , useDispatch} from "react-redux";
import { useEffect } from 'react';
import { Card, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import image from '../assets/background-image.jpg';
import {getblog ,deleteblog, addcomment ,deletecomment} from "../../../Actions/index.js";
const { Meta } = Card;

const Blogbox = () => {

  const dispatch = useDispatch();
const navigate = useNavigate();


useEffect(()=>{
  dispatch(getblog());
}, [dispatch]);

const blogData = useSelector((state)=>state.blog.blogs);

const currentUser = useSelector((state) => state.auth.user);
const [userName, setUserName] = useState(currentUser?.data);

const [newComment , setNewComment] = useState("");


console.log(blogData);

console.log(userName);


const add = () =>{
  if(userName === null || userName === undefined){
    alert("Log in to add your Blog");
    navigate("/Auth");
  }
  else{
      navigate("/AddBlog");
  }
}

const editBlog = (id) => {
  if (userName === null || userName === undefined) {
    alert("Log in to edit your Blog");
    navigate("/Auth");
  } else {

    const blog = blogData.find((blogItem) => blogItem._id === id);
    if (blog && blog.postedBy === userName) {
      navigate(`/EditBlog/${id}`);
    } else {
      alert("You can only edit your own posts.");
    }
  }
};
const deleteBlog =(id)=>{
  if(userName === null || userName === undefined){
    alert("Log in to add your Blog");
    navigate("/Auth");
  }
  if(id){
    dispatch(deleteblog(id) , navigate)
  }
}

const addComment =(e,id) => {
  e.preventDefault();

  if(userName === null || userName === undefined ){
    alert("Login to add comments");
    navigate("/Auth");
  }
  else{
if(newComment !== null){
    console.log(newComment ,id);
   dispatch(addcomment({id , newComment , userName}, navigate));
   setNewComment("");
}else{
  console.log("Comment not added");
}
}
}

const handleDelete = (blogId , commentIndex)=>{

console.log(blogId,commentIndex);
if(userName === null || userName === undefined ){
  alert("Login to add comments");
  navigate("/Auth");
}
dispatch(deletecomment({blogId,commentIndex}));
navigate("/");
}

const handleEdit = (blogId, commentIndex) => {
  if(userName === null || userName === undefined ){
    alert("Login to add comments");
    navigate("/Auth");
  }
  const blog = blogData.find((blogItem) => blogItem._id === blogId);

  console.log(blog);
  const comment = blog?.comments[commentIndex];

  if (comment && comment.commentedBy === userName) {
    navigate(`/EditComment/${blogId}/${commentIndex}`);
  } else {
    alert("You can only edit your own comments.");
    navigate("/");
  }
};

console.log(blogData);

  return (
    <div className='blog-box'>

      <Button onClick={add}  className='add-btn' type='primary' icon={<PlusOutlined/>}>
        Create
      </Button>

      {blogData === null ? ( <h1>Loading...</h1>)
      :(
      <>
      {blogData.map((blogItem,index) => (
        <div className='blogItem' key={blogItem._id}>

        <Card
        style={{
          width: 600,
        }}
        cover={
          <img alt='example' src={image} />
        }
        actions={[
          <Button onClick={() => editBlog(blogItem._id)} type='text' className='read-more-btn'>
          Edit
        </Button>,
        <Button onClick={()=> deleteBlog(blogItem._id)} type='text' className='read-more-btn'>
        Delete
      </Button>,
        ]}
      >
        <Meta
          className='card-text'
          title={blogItem.title ? blogItem.title : "Loading"}
          description={blogItem.description ? blogItem.description : "Loading"}
          style={{
            background: 'rgba(0, 0, 0, 6)',
            color: 'white',
            padding: '16px',
          }}
        />
        <p>Posted By:{blogItem.postedBy} </p>
      </Card>
          
        <div className='all-comments'>
          <h2 className='comments-title'>Comments:</h2>
          <h5 className='comments-length'>Number of Comments:{blogItem.comments.length}</h5>
          {blogItem.comments?.map((comment,index)=>(
            <div key={index} className='comment-item'>
              <h6 className='comment-text'>{comment.text}</h6>
              <p className='comment-user'>Commented By: {comment.commentedBy}</p>
              <button onClick={()=>handleEdit(blogItem._id , index ) } className='comments-btn'>Edit</button>
              <button onClick={()=>handleDelete(blogItem._id , index)} className='comments-btn'>Delete</button>
          </div>
          ))}
         
          <div className='for-edit'> </div>
        </div>

        <div className='comment-card'>
        <form onSubmit={(e) => addComment(e, blogItem._id)}>
      <input 
      className='comments-section' 
      type='text'
      id='comment'
      name='comment'
      value={newComment || ""}
      onChange={(e)=> setNewComment(e.target.value)}
      /> 
      <button type='submit'>Comment</button>
      </form>
      </div>


      </div>
      ))}
      </>
        )}
      </div>
      )
};
export default Blogbox;