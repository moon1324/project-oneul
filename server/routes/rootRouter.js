import express from "express";
import userRouter from "./userRouter.js";
import { index } from "../controller/index.js";
import postRouter from "./postRouter.js";

const rootRouter = express.Router();

rootRouter.get("/", index);
rootRouter.use("/user", userRouter);
rootRouter.use("/post", postRouter);

export default rootRouter;
