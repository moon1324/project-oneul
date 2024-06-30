import { Schema, model, now } from "mongoose";


// post => user.id,
const ourTodaySchema = new Schema({
    userEmail : { type: String, ref: 'User'},
    userProfileImg : String,
    userNickname : String,
    content : String,
    heart : {
        heartUsers : [{type: String, default:""}],
        heartCount : {type : Number, default: 0 },
    },
    like : {
        thumbsUpUsers : [{type: String, default:""}],
        thumbsUpCount : {type : Number, default: 0 },
    },
    smile : {
        smileUsers : [{type: String, default:""}],
        smileCount : {type : Number, default: 0 },
    },
    sad : {
        sadUsers : [{type: String, default: ""}],
        sadCount : {type : Number, default: 0 },
    },
    angry : {
        angryUsers : [ { type: String,  default: "" } ],
        angryCount : {type : Number, default: 0 },
    },
});


export default model("OurToday", ourTodaySchema, "ourToday");

