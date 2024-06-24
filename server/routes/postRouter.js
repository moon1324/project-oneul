import express from "express";
import { createPost } from "../controller/ourTodayPost/post.js";

const postRouter = express.Router();

// postRouter.get("/checkPost", findPost);
// postRouter.get("", findPost);
postRouter.post("/write", createPost);
// postRouter.put("/update", updatePost);
// postRouter.delete("/delete", deletePost);


export default postRouter;