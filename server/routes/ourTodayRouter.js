import express from "express";
import { createPostOurToday, deleteOurTodayPost, getMyTodayPost, getOurTodayPost, updateOurTodayPost } from "../controller/ourTodayPost/ourToday.js";

const ourTodayRouter = express.Router();

ourTodayRouter.get("/checkPost", getOurTodayPost);
ourTodayRouter.get("/checkMyPost", getMyTodayPost);
// postRouter.get("", findPost);
ourTodayRouter.post("/write", createPostOurToday);
ourTodayRouter.put("/update", updateOurTodayPost);
ourTodayRouter.delete("/delete", deleteOurTodayPost);


export default ourTodayRouter;