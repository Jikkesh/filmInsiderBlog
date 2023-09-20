import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addblog } from '../../Actions/index.js';
import { UseSelector} from "react-redux";
import "./AddBlog.css";


const AddBlog = () => {

const [title , setTitle] = useState("");
const [description , setDescription] = useState("")

const dispatch = useDispatch();
const navigate = useNavigate();

const currentUser = useSelector((state) => state.auth.user);
const [userName, setUserName] = useState(currentUser?.data);


const handleSubmit = (e)=>{
e.preventDefault();

if(title !== null && description !== null){

  dispatch(addblog({title,description,userName} , navigate));

}
setTitle("")
setDescription("")

}
  return (
    <div className='add-blog'>
        <h2>Add a New Film Blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="filmTitle">Film Title:</label>
          <input
            type="text"
            id="filmTitle"
            name="filmTitle"
            value={title !== null ? title:""}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="filmDescription">Film Description:</label>
          <textarea
            id="filmDescription"
            name="filmDescription"
            value={description !== null ? description : ""}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <button type="submit" >Submit</button>
        </div>

      </form>
    </div>
  )
}

export default AddBlog