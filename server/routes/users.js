
import express  from "express";
import { signin , signup ,addblog, getblog,deleteblog,editblog ,addcom,deletecom,editcom, getblogbyId } from "../controllers/index.js";


const router = express.Router();

router.post("/signin" , signin )
router.post("/signup" , signup )

router.post("/addblog" , addblog)
router.get("/blog" , getblog )
router.get("/blog/:id" , getblogbyId);
router.delete("/deleteblog/:id" , deleteblog )
router.patch("/editblog/:id" , editblog)

router.patch("/addcomment" , addcom)
router.patch("/deletecomment" , deletecom)
router.patch("/editcomment" , editcom)

export default router;