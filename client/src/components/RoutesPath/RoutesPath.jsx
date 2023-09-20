import React from "react";
import {Route} from "react-router-dom";
import  {Routes} from "react-router-dom";
import Home from "../../pages/Home/Home";
import Auth from "../../pages/Auth/Auth";

import Community from "../../pages/Community/Community";

import AddBlog from "../../pages/AddBlog/AddBlog";
import EditBlog from "../../pages/EditBlog/EditBlog";
import EditComment from "../../pages/EditComment/EditComment";

const RoutesPath = ()=>{
    return(
    <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/Auth" element={<Auth/>}/>
        <Route path="/Community" element={<Community/>}/>
        <Route path="/AddBlog" element={<AddBlog/>}/>
        <Route path="/EditBlog/:id" element={<EditBlog/>}/>
        <Route path="/EditComment/:blogId/:commentIndex" element={<EditComment/>}/>
    </Routes>
    );
}

export default RoutesPath;