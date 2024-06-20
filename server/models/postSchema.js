import mongoose, { Schema, model } from "mongoose";
import { getCurrentTime } from "../utils/utils.js";
import User from "./userSchema.js";


// post => user.id,
const postSchema = new Schema({
    postProfileImg : String,
    postNickname : String,
    content : String,
    heart : {
        heartUsers : [ { type: mongoose.Schema.Types.ObjectId,  ref: 'User' } ],
        heartCount : Number,
    },
    like : {
        thumbsUpUsers : [ { type: mongoose.Types.ObjectId,  ref: 'User' } ],
        thumbsUpCount : Number,
    },
    smile : {
        smileUsers : [ { type: mongoose.Types.ObjectId,  ref: 'User' } ],
        smileCount : Number,
    },
    sad : {
        sadUsers : [ { type: mongoose.Types.ObjectId,  ref: 'User' } ],
        sadCount : Number,
    },
    angry : {
        angryUsers : [ { type: mongoose.Types.ObjectId,  ref: 'User' } ],
        angryCount : Number,
    },
    comment : [ {
        commentUser : { type: mongoose.Types.ObjectId,  ref: 'User' },
        commentProfileImg : String,
        commentText : String,
        createdAt : {type: String, default: getCurrentTime},
    } ]
});

// model("객체명", 스키마, "컬렉션(테이블)명")
export default model("Post", postSchema, "post");
