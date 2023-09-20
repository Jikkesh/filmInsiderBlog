import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch} from "react-redux";
import { editcomment} from '../../Actions';
import "./EditComment.css";
import { getBlogById } from '../../Api';



const EditComment = () => {


const dispatch = useDispatch();
const navigate = useNavigate();

const [updatedComment, setUpdatedComment] = useState("");
const [oldComment , setOldComment] = useState(null);


const {blogId , commentIndex} = useParams();
console.log(blogId , commentIndex);

useEffect(()=>{
async function fetchData () {

 const response =  await getBlogById(blogId);
 console.log(response.data);
 console.log(response.data.data);
 console.log(response.data.data.comments[commentIndex]);
 setOldComment(response.data.data.comments[commentIndex].text);
}
 fetchData();

},[blogId], [commentIndex]);
console.log(oldComment);

useEffect(()=>{
  setUpdatedComment(oldComment);
} , [oldComment]);


const handleEditSubmit = (e) =>{
  e.preventDefault();
    if(updatedComment !== null){
        dispatch(editcomment({blogId , commentIndex , updatedComment} , navigate));
        console.log({blogId , commentIndex , updatedComment })
        navigate("/");
    }
}

  return (
    <div className='comment-update'>
      <div className='add-blog'>
        <h2>Update Comment:</h2>

      <form onSubmit={handleEditSubmit}>
     
        <div className="form-group">
          <label htmlFor="filmDescription">Comment:</label>
          <textarea
            id="updateComponent"
            name="updateComponent"
            value={updatedComment}
            onChange={(e) => setUpdatedComment(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <button type="submit" >Submit</button>
        </div>

      </form>

    </div>
     
    </div>
  );
};

export default EditComment;

