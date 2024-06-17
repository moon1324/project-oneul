import express from "express";
import { checkEmail, checkMobile, checkNickname, deleteUser, loginUser, signupUser, updateUser } from "../controller/user/user.js";

const userRouter = express.Router();

userRouter.post("/login", loginUser);
userRouter.post("/checkEmail", checkEmail);
userRouter.post("/checkMobile", checkMobile);
userRouter.post("/checkNickname", checkNickname);
userRouter.post("/signup", signupUser);
userRouter.put("/update", updateUser);
userRouter.delete("/delete", deleteUser);

export default userRouter;
