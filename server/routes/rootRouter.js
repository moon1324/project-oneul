import express from "express";
import userRouter from "./userRouter.js";
import { index } from "../controller/index.js";
import myMindRouter from "./myMindRouter.js";

const rootRouter = express.Router();

rootRouter.get("/", index);
rootRouter.use("/user", userRouter);
rootRouter.use("/myMind", myMindRouter);

export default rootRouter;
