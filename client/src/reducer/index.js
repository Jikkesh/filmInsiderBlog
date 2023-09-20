import { combineReducers } from "redux";
import authReducer from "../reducer/Auth.js";
import blogReducer from "./blog.js";

export default combineReducers({
   auth: authReducer,
   blog: blogReducer
});