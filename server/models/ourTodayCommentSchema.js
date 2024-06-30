import { Schema, model } from "mongoose";
import { getCurrentTime } from "../utils/utils.js";

const commentSchema = new Schema({
    postId : { type:Schema.Types.ObjectId, ref: 'OurToday' },
    commentCount : { type: Schema.Types.ObjectId, default: 0 },
    commentUser : { type: Schema.Types.ObjectId,  ref: 'User' },
    commentProfileImg : String,
    commentText : String,
    createdAt : {type: String, default: getCurrentTime},
})

export default model("Comment", commentSchema, "comment");