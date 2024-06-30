import mongoose, { Schema, model } from "mongoose";
import { getCurrentTime } from "../utils/utils.js";

const myMindSchema = new Schema({
    userId : { type: mongoose.Types.ObjectId,  ref: 'User' },
    userEmail:{type:String, unique: true},
    questions: { type: [String] },
    // createdAt : {type: String, default : getCurrentTime },//글을 쓴 시간
    createdAt : {type: String },
});

// model("객체명", 스키마, "컬렉션(테이블)명")
export default model("MyMind", myMindSchema, "myMind");
