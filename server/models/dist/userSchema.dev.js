"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var _utils = require("../utils/utils.js");

var userSchema = new _mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  mobile: {
    type: String
  },
  nickname: {
    type: String
  },
  profileImg: {
    type: String
  },
  origin: {
    type: [String]
  },
  token: {
    type: String
  },
  statusMessage: {
    type: String
  }
}); // model("객체명", 스키마, "컬렉션(테이블)명")

var _default = (0, _mongoose.model)("User", userSchema, "user");

exports["default"] = _default;