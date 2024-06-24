import express from "express";
import { postMyMind, getMyMind, updateMyMind, deleteMyMind, getMyMindsCalendar } from "../controller/myMind/myMind.js";
// import { readMyMind } from "../controller/myMind/myMind.js";

const myMindRouter = express.Router();

myMindRouter.post("/post", postMyMind);
myMindRouter.get("/getCalendar",getMyMindsCalendar);
myMindRouter.get("/get", getMyMind);
myMindRouter.put("/update", updateMyMind);
myMindRouter.delete("/delete", deleteMyMind);
export default myMindRouter;
