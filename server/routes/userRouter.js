import express from "express";
import { deleteUser, loginUser, signupUser, updateUser } from "../controller/user/user.js";

const userRouter = express.Router();

userRouter.post("/login", loginUser);
userRouter.post("/signup", signupUser);
userRouter.put("/update", updateUser);
userRouter.delete("/delete", deleteUser);

export default userRouter;
