import axios from "axios";


const API = axios.create({ baseURL:'http://localhost:5000'});

export const signIn = (authData)=> API.post('/users/signin', authData);

export const signUp = (authData)=> API.post('/users/signup', authData);

export const addBlog = (blogData)=> API.post('/data/addblog' ,blogData);

export const getBlog = () => API.get("/data/blog");

export const getBlogById =(id) => API.get(`/data/blog/${id}`);

export const deleteBlog = (id)=> API.delete(`/data/deleteblog/${id}`);

export const editBlog = (id,editData) => API.patch(`/data/editblog/${id}`, editData);

export const addComment = (commentData) => API.patch(`/data/addcomment`,commentData);

export const deleteComment = (ids) => API.patch(`/data/deletecomment/`,ids);

export const editComment = (commentData) => API.patch(`/data/editcomment` ,commentData);