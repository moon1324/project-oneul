import mongoose, { Schema, model } from "mongoose";

const myMindSchema = new Schema({
    userId : { type: mongoose.Types.ObjectId,  ref: 'User' },
    userEmail:{type:String, unique: true},
    questions: { type: [String] },
    createdAt : {type: String },
});

export default model("MyMind", myMindSchema, "myMind");
