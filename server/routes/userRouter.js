import express from "express";
import { checkEmail, deleteUser, loginUser, signupUser, updateUser } from "../controller/user/user.js";

const userRouter = express.Router();

userRouter.post("/login", loginUser);
userRouter.post("/checkEmail", checkEmail);
userRouter.post("/signup", signupUser);
userRouter.put("/update", updateUser);
userRouter.delete("/delete", deleteUser);

export default userRouter;
