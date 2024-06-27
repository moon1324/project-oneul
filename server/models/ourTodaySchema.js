import { Schema, model } from "mongoose";
import { getCurrentTime } from "../utils/utils.js";

const commentSchema = new Schema({
    postId : { type:Schema.Types.ObjectId, ref: 'OurToday' },
    commentUser : { type: Schema.Types.ObjectId,  ref: 'User' },
    commentProfileImg : String,
    commentText : String,
    createdAt : {type: String, default: getCurrentTime},
})


// post => user.id,
const ourTodaySchema = new Schema({
    userEmail : { type: Schema.Types.ObjectId, ref: 'User'},
    userProfileImg : String,
    userNickname : String,
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
    commentsCount: { type: Number, default: 0 },
    comment : [ commentSchema ]
});

export const Comment = model("Comment", commentSchema, "comment");
export default model("OurToday", ourTodaySchema, "ourToday");

