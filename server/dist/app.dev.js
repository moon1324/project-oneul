"use strict";

var _express = _interopRequireDefault(require("express"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _connect = _interopRequireDefault(require("./connect/connect.js"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _rootRouter = _interopRequireDefault(require("./routes/rootRouter.js"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _passport = _interopRequireDefault(require("passport"));

var _auth = require("./auth/auth.js");

var _morgan = _interopRequireDefault(require("morgan"));

var _passportJwt = require("passport-jwt");

var _passportLocal = require("passport-local");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// .env 파일에서 환경변수 불러오기
_dotenv["default"].config();

var PORT = process.env.PORT;
var SECRET_KEY = process.env.SECRET_KEY; // MongoDB 연결

(0, _connect["default"])();
var app = (0, _express["default"])();
var port = PORT || 8000; // bodyparser

app.use(_bodyParser["default"].json()); // app.use(express.json())
//서버에서 CORS 헤더를 직접 설정

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
}); // cors 설정
// app.use() : 미들웨어로서, 어떤 요청이든 지정된 로직보다 먼저 작업한다, 즉 전처리이다.
// yarn add cors 필요

app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _cors["default"])({
  origin: "*",
  methods: ["GET", "POST", "DELETE", "PUT"],
  credentials: true
})); //로그아웃 미들웨어 설정

app.use((0, _expressSession["default"])({
  secret: SECRET_KEY,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: true,
    httpOnly: true,
    samSite: 'lax'
  }
}));
app.use((0, _morgan["default"])('dev')); // 개발 환경에서 간단한 포맷 사용
// 라우트 설정

app.get('/user', function (req, res) {
  console.log('GET /user 요청 수신'); // 로직 처리

  res.send('사용자 정보');
}); // passport 로직 추가

app.use(_passport["default"].initialize());
(0, _auth.initializePassport)(); // 정적 파일 제공

app.use("/images", _express["default"]["static"]("images"));
var jwtOptions = {
  jwtFromRequest: _passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_KEY
};

_passport["default"].use(new _passportJwt.Strategy(jwtOptions, function _callee(jwtPayload, done) {
  var user;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(User.findById(jwtPayload.id));

        case 3:
          user = _context.sent;

          if (user) {
            _context.next = 6;
            break;
          }

          return _context.abrupt("return", done(null, false));

        case 6:
          return _context.abrupt("return", done(null, user));

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", done(_context.t0, false));

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 9]]);
})); // Local Strategy 설정


_passport["default"].use(new _passportLocal.Strategy({
  usernameField: 'email',
  // 사용자명 필드 (기본값은 'username')
  passwordField: 'password' // 비밀번호 필드 (기본값은 'password')

}, function _callee2(email, password, done) {
  var user, isValidPassword;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(User.findOne({
            email: email
          }));

        case 3:
          user = _context2.sent;

          if (user) {
            _context2.next = 6;
            break;
          }

          return _context2.abrupt("return", done(null, false, {
            message: 'Incorrect email.'
          }));

        case 6:
          _context2.next = 8;
          return regeneratorRuntime.awrap(user.isValidPassword(password));

        case 8:
          isValidPassword = _context2.sent;

          if (isValidPassword) {
            _context2.next = 11;
            break;
          }

          return _context2.abrupt("return", done(null, false, {
            message: 'Incorrect password.'
          }));

        case 11:
          return _context2.abrupt("return", done(null, user));

        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", done(_context2.t0));

        case 17:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 14]]);
}));

app.use(_passport["default"].initialize()); // 라우팅 처리

app.use("/", _rootRouter["default"]); // 서버 실행 함수

var startServer = function startServer() {
  try {
    (0, _auth.initializePassport)();
    var _PORT = 8000;
    app.listen(_PORT, function () {
      console.log("\uC11C\uBC84\uAC00 \uD3EC\uD2B8 ".concat(_PORT, "\uC5D0\uC11C \uC2E4\uD589 \uC911\uC785\uB2C8\uB2E4."));
    });
  } catch (err) {
    console.error('서버 실행 중 오류 발생:', err);
  }
}; // 서버 실행


startServer();