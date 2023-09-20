import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { editblog } from '../../Actions/index.js';
import "./EditBlog.css";
import { getBlogById } from '../../Api/index.js';


const EditBlog = () => {

const [oldTitle , setoldTitle] = useState("");
const [oldDescription , setoldDescription] = useState("");
const [newTitle , setNewTitle] = useState("");
const [newDescription , setNewDescription] = useState("");


const dispatch = useDispatch();
const navigate = useNavigate();

const {id} = useParams();
console.log(id);

useEffect(() => {
  async function fetchData() {
    
    const response = await getBlogById(id);
    console.log(response.data);
    setoldTitle(response.data.data.title);
    setoldDescription(response.data.data.description);
  }
  fetchData();
}, [id]);

console.log(oldDescription);
console.log(oldTitle);

useEffect(()=>{
setNewTitle(oldTitle);
setNewDescription(oldDescription);  
} , [oldTitle] , [oldDescription]);

const handleSubmit = (e)=>{
e.preventDefault();

if(newTitle !== null && newDescription !== null){

    dispatch(editblog(id,{newTitle,newDescription}));
    navigate("/");

}

}
  return (
    <div className='edit-blog'>
        <h2>Edit Blog:</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="filmTitle">Update Film Title:</label>
          <input
            type="text"
            id="filmTitle"
            name="filmTitle"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="filmDescription">Update Film Description:</label>
          <textarea
            id="filmDescription"
            name="filmDescription"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
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

export default EditBlog;