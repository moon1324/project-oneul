import { Schema, model, now } from "mongoose";


// post => user.id,
const ourTodaySchema = new Schema({
    userEmail : { type: String, ref: 'User'},
    userProfileImg : String,
    userNickname : String,
    content : String,
    heart : [{type: String}],
    like : [{type: String}],
    smile : [{type: String}],
    sad : [{type: String}],
    angry : [{ type: String}],
});


export default model("OurToday", ourTodaySchema, "ourToday");

