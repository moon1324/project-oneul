"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _passport = _interopRequireDefault(require("passport"));

var _user = require("../controller/user/user.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var userRouter = _express["default"].Router();

userRouter.post("/login", _user.loginUser);
userRouter.post("/checkEmail", _user.checkEmail);
userRouter.post("/checkMobile", _user.checkMobile);
userRouter.post("/checkNickname", _user.checkNickname);
userRouter.post("/signup", _user.signupUser);
userRouter.put("/update", _user.updateUser);
userRouter["delete"]("/delete", _user.deleteUser); // passport 추가

userRouter.post("/passportLogin", _user.passportLogin); // 추가로 인증 후 접근해야하는 fetch마다 authenticateLocal()을 심는다.

userRouter.post("/auth", _passport["default"].authenticate("jwt", {
  session: false
}), _user.authLocation);
var _default = userRouter;
exports["default"] = _default;