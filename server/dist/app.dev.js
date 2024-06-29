"use strict";

var _express = _interopRequireDefault(require("express"));

var _connect = _interopRequireDefault(require("./connect/connect.js"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _rootRouter = _interopRequireDefault(require("./routes/rootRouter.js"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// .env 파일에서 환경변수 불러오기
_dotenv["default"].config();

var PORT = process.env.PORT; // MongoDB 연결

(0, _connect["default"])();
var app = (0, _express["default"])();
var port = PORT || 8000; // bodyparser

app.use(_bodyParser["default"].json()); // app.use(express.json())
// cors 설정
// app.use() : 미들웨어로서, 어떤 요청이든 지정된 로직보다 먼저 작업한다, 즉 전처리이다.
// yarn add cors 필요

app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _cors["default"])({
  origin: "*",
  method: ["GET", "POST", "DELETE", "PUT"],
  credential: true
})); // 라우팅 처리

app.use("/", _rootRouter["default"]); // 서버 실행

app.listen(port, function () {
  console.log("Server is on ".concat(port, " port!"));
});