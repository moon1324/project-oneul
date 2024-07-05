import { Schema, model } from "mongoose";
import { getCurrentTime } from "../utils/utils.js";

const commentSchema = new Schema({
    postId : { type:Schema.Types.ObjectId, ref: 'OurToday' },
    commentUser : { type: String,  ref: 'User' },
    commentUserNickName : { type: String, ref: 'User'},
    commentProfileImg : String,
    commentText : String,
    createdAt : {type: String, default: getCurrentTime},
})

export default model("Comment", commentSchema, "comment");