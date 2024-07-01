"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// dotenv로 mongo uri 숨기기
_dotenv["default"].config();

var MONGO_URI = process.env.MONGO_URI;
var connect_url = MONGO_URI;

var connect = function connect() {
  if (process.env.NODE_ENV !== "production") {
    _mongoose["default"].set("debug", true);
  }

  console.log(connect_url);

  _mongoose["default"].connect(connect_url, {
    dbName: "oneul"
  }).then(function () {
    console.log("Connected to MongoDB");
  })["catch"](function (err) {
    console.error("Connection failed to MongoDB");
    console.log(err);
  });
};

var _default = connect;
exports["default"] = _default;