import express from "express";
import { postMyMind, getMyMind, updateMyMind, deleteMyMind, getCalendar, getTodayExistence} from "../controller/myMind/myMind.js";
import { authenticateToken } from "../controller/myMind/authenticateToken.js";

const myMindRouter = express.Router();

myMindRouter.post("/post", postMyMind);
myMindRouter.get("/getTodayExistence",authenticateToken,getTodayExistence);
myMindRouter.get("/getCalendar",authenticateToken,getCalendar);
myMindRouter.get("/getMyMind", authenticateToken,getMyMind);
myMindRouter.put("/update",authenticateToken, updateMyMind);
myMindRouter.delete("/delete", authenticateToken,deleteMyMind);
export default myMindRouter;
