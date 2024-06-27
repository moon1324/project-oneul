import express from "express";
import { createPostOurToday } from "../controller/ourTodayPost/ourToday.js";

const ourTodayRouter = express.Router();

// postRouter.get("/checkPost", findPost);
// postRouter.get("", findPost);
ourTodayRouter.post("/write", createPostOurToday);
// postRouter.put("/update", updatePost);
// postRouter.delete("/delete", deletePost);


export default ourTodayRouter;