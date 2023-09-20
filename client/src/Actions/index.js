
import * as api from "../Api";

export const signin = (authData , navigate) => async (dispatch)=> {

    try {
        const response = await api.signIn(authData);
        console.log(response)
        dispatch({ type:"AUTH", data:response.data});
        navigate("/");
    } catch (error) {
        console.log(error.message);
    }
};

export const signup = (authData , navigate) =>async (dispatch)=> {
    try {
        const response = await api.signUp(authData)
        console.log(response)
        dispatch({type:"AUTH", data:response.data});
        navigate("/");
    } catch (error) {
        console.log(error.message);
    }
};
 

export const addblog = (blogData , navigate) => async (dispatch)=>{

    try {
        console.log(JSON.stringify(blogData) + "In actions");
        const {data} = await api.addBlog(blogData);
        console.log(data)
        dispatch( {type: "ADD_BLOG" ,data} );
        navigate("/");

    } catch (error) {
        console.log(error);
    }
}
export const getblog = () => async(dispatch)=>{
try {
    const  response = api.getBlog();

    if((await response).status === 200){
    dispatch({type:"GOT_BLOG" ,data:(await response).data})
}
else{
    console.log("error getting blog data")
}
} catch (error) {
    console.log(error);
}
}


export const getblogbyid = (id) => async(dispatch)=>{
    try {
        const response = api.getBlogById(id);
        if((await response).status === 200 ){
            dispatch({type: "GOT_ID_DATA" , data: (await response).data})
        }
    } catch (error) {
        console.log(error)
    }
}


export const deleteblog = (id) => async(dispatch , navigate)=>{
console.log(`delete this ${id} actions passed to server`);

try {
    await api.deleteBlog(id);
    
    dispatch(getblog()); 
    navigate("/");
    console.log("Successfully deleted" + id)
}
catch (error) {
    console.log(error);
}
}

export const editblog = (id,editData) => async(dispatch , navigate)=>{
try {
    await api.editBlog(id,editData);
    dispatch(getblog());
    navigate("/");
    console.log("Updated Successful");
} catch (error) {
    console.log(error + "at actions")
}
}

export const addcomment = (commentData , navigate) => async(dispatch ) =>{

    try {
        console.log(commentData);
       await api.addComment(commentData);
         dispatch(getblog());
         navigate("/");
    } catch (error) {
        console.log(error);
    }
}

export const editcomment = (commentData) => async( dispatch , navigate) =>{

    try {
        console.log(`${commentData} received in actions`);
        await api.editComment(commentData);
        dispatch(getblog());
         navigate("/");
    } catch (error) {
        console.log(error);
    }

}

export const deletecomment = (ids)=> async (dispatch)=>{

    try {
        await api.deleteComment(ids);
        dispatch(getblog());
    } catch (error) {
        console.log(error);
    }
}