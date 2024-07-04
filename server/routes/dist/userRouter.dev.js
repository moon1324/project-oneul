"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _passport = _interopRequireDefault(require("passport"));

var _user = require("../controller/user/user.js");

var _multer = _interopRequireDefault(require("multer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Multer 설정
var storage = _multer["default"].diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, "images/profile");
  },
  filename: function filename(req, file, cb) {
    cb(null, "".concat(Date.now(), "-").concat(file.originalname));
  }
});

var upload = (0, _multer["default"])({
  storage: storage
});

var userRouter = _express["default"].Router();

userRouter.post("/login", _user.loginUser);
userRouter.post("/logout", _user.logoutUser);
userRouter.get("/protected-route", _user.isAuthenticated, function (req, res) {
  res.send('This is a protected route');
});
userRouter.post("/checkEmail", _user.checkEmail);
userRouter.post("/checkMobile", _user.checkMobile);
userRouter.post("/checkNickname", _user.checkNickname);
userRouter.post("/uploadProfileImg", upload.single("profileImg"), _user.uploadProfileImg);
userRouter.post("/signup", _user.signupUser);
userRouter.put("/update", _user.updateUser);
userRouter["delete"]('/delete', _passport["default"].authenticate("jwt", {
  session: false
}), _user.deleteUser); // passport 추가

userRouter.post("/passportLogin", _user.passportLogin); // 추가로 인증 후 접근해야하는 fetch마다 authenticateLocal()을 심는다.

userRouter.post("/auth", _passport["default"].authenticate("jwt", {
  session: false
}), _user.authLocation);
userRouter.get("/getProfile/:email", _user.getUserProfile);
var _default = userRouter;
exports["default"] = _default;