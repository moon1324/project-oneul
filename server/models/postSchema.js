import { Schema, model } from "mongoose";
import { getCurrentTime } from "../utils/utils.js";

const commentSchema = new Schema({
    postId : { type:Schema.Types.ObjectId, ref: 'Post' },
    commentUser : { type: Schema.Types.ObjectId,  ref: 'User' },
    commentProfileImg : String,
    commentText : String,
    createdAt : {type: String, default: getCurrentTime},
})


// post => user.id,
const postSchema = new Schema({
    postProfileImg : String,
    postNickname : String,
    content : String,
    heart : {
        heartUsers : [ { type: Schema.Types.ObjectId,  ref: 'User' } ],
        heartCount : {type : Number, default: 0 },
    },
    like : {
        thumbsUpUsers : [ { type: Schema.Types.ObjectId,  ref: 'User' } ],
        thumbsUpCount : {type : Number, default: 0 },
    },
    smile : {
        smileUsers : [ { type: Schema.Types.ObjectId,  ref: 'User' } ],
        smileCount : {type : Number, default: 0 },
    },
    sad : {
        sadUsers : [ { type: Schema.Types.ObjectId,  ref: 'User' } ],
        sadCount : {type : Number, default: 0 },
    },
    angry : {
        angryUsers : [ { type: Schema.Types.ObjectId,  ref: 'User' } ],
        angryCount : {type : Number, default: 0 },
    },
    comment : [ commentSchema ]
});

const Post = model("Post", postSchema, "post");
const Comment = model("Comment", commentSchema, "comment");

// model("객체명", 스키마, "컬렉션(테이블)명")
export { Post, Comment };
