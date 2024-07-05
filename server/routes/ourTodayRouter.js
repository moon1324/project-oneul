import express from "express";
import { createCommentOurToday, createPostOurToday, deleteOurTodayComment, deleteOurTodayPost, deleteOurTodayPostLikeReaction, getOurTodayComment, getOurTodayPost, updateOurTodayComment, updateOurTodayPost, updateOurTodayPostLikeReaction } from "../controller/ourTodayPost/ourToday.js";

const ourTodayRouter = express.Router();

ourTodayRouter.get("/checkPost", getOurTodayPost);
// postRouter.get("", findPost);
ourTodayRouter.post("/write", createPostOurToday);
ourTodayRouter.put("/update", updateOurTodayPost);
ourTodayRouter.delete("/delete", deleteOurTodayPost);
ourTodayRouter.put("/plusPostLikeReaction", updateOurTodayPostLikeReaction);
ourTodayRouter.put("/minusPostLikeReaction", deleteOurTodayPostLikeReaction);
ourTodayRouter.post("/writeComment", createCommentOurToday);
ourTodayRouter.get("/checkPostComment", getOurTodayComment)
ourTodayRouter.put("/updateComment", updateOurTodayComment);
ourTodayRouter.delete("/deleteComment", deleteOurTodayComment);

// ourTodayRouter.get("/checkPostComment/:postId", getOurTodayComment)

export default ourTodayRouter;