"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authLocation = exports.passportLogin = exports.deleteUser = exports.updateUser = exports.signupUser = exports.checkNickname = exports.checkMobile = exports.checkEmail = exports.loginUser = void 0;

var _userSchema = _interopRequireDefault(require("../../models/userSchema.js"));

var _passport = _interopRequireDefault(require("passport"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

_dotenv["default"].config();

var SECRET_KEY = process.env.SECRET_KEY;

var loginUser = function loginUser(req, res) {
  var user, passwordMatch, userDatas, _userDatas$_doc, password, others;

  return regeneratorRuntime.async(function loginUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_userSchema["default"].findOne({
            email: req.body.email
          }));

        case 2:
          user = _context.sent;

          if (user) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("return", res.status(401).json({
            loginSuccess: false,
            message: "존재하지 않는 이메일입니다."
          }));

        case 7:
          // 비밀번호가 맞는지 확인
          passwordMatch = req.body.password === user.password;

          if (passwordMatch) {
            _context.next = 10;
            break;
          }

          return _context.abrupt("return", res.status(401).json({
            loginSuccess: false,
            message: "비밀번호를 확인해주세요."
          }));

        case 10:
          userDatas = _extends({}, user);
          _userDatas$_doc = userDatas._doc, password = _userDatas$_doc.password, others = _objectWithoutProperties(_userDatas$_doc, ["password"]);
          console.log(others);
          return _context.abrupt("return", res.status(200).json({
            user: others,
            // 최초 로그인시 유저정보
            loginSuccess: true,
            // 상태
            message: "로그인 성공!" // 메세지

          }));

        case 14:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.loginUser = loginUser;

var checkEmail = function checkEmail(req, res) {
  var user;
  return regeneratorRuntime.async(function checkEmail$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log(req.body);
          _context2.next = 3;
          return regeneratorRuntime.awrap(_userSchema["default"].findOne({
            email: req.body.email
          }));

        case 3:
          user = _context2.sent;

          if (!user) {
            _context2.next = 6;
            break;
          }

          return _context2.abrupt("return", res.status(200).json({
            message: "이미 사용중인 이메일입니다",
            duplicate: true
          }));

        case 6:
          return _context2.abrupt("return", res.status(200).json({
            message: "사용가능한 이메일입니다",
            duplicate: false
          }));

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.checkEmail = checkEmail;

var checkMobile = function checkMobile(req, res) {
  var user;
  return regeneratorRuntime.async(function checkMobile$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          console.log(req.body);
          _context3.next = 3;
          return regeneratorRuntime.awrap(_userSchema["default"].findOne({
            mobile: req.body.mobile
          }));

        case 3:
          user = _context3.sent;

          if (!user) {
            _context3.next = 6;
            break;
          }

          return _context3.abrupt("return", res.status(200).json({
            message: "이미 사용중인 전화번호입니다",
            duplicate: true
          }));

        case 6:
          return _context3.abrupt("return", res.status(200).json({
            message: "사용가능한 전화번호입니다",
            duplicate: false
          }));

        case 7:
        case "end":
          return _context3.stop();
      }
    }
  });
};

exports.checkMobile = checkMobile;

var checkNickname = function checkNickname(req, res) {
  var user;
  return regeneratorRuntime.async(function checkNickname$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          console.log(req.body);
          _context4.next = 3;
          return regeneratorRuntime.awrap(_userSchema["default"].findOne({
            nickname: req.body.nickname
          }));

        case 3:
          user = _context4.sent;

          if (!user) {
            _context4.next = 6;
            break;
          }

          return _context4.abrupt("return", res.status(200).json({
            message: "이미 사용중인 닉네임입니다",
            duplicate: true
          }));

        case 6:
          return _context4.abrupt("return", res.status(200).json({
            message: "사용가능한 닉네임입니다",
            duplicate: false
          }));

        case 7:
        case "end":
          return _context4.stop();
      }
    }
  });
};

exports.checkNickname = checkNickname;

var signupUser = function signupUser(req, res) {
  var register;
  return regeneratorRuntime.async(function signupUser$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          console.log(req.body);
          // 유저를 파싱
          register = {
            email: req.body.email,
            password: req.body.password,
            name: req.body.name,
            mobile: req.body.mobile,
            nickname: req.body.nickname,
            profileImg: req.body.profileImg,
            origin: req.body.origin,
            token: req.body.token,
            statusMessage: req.body.statusMessage
          }; // 유저를 등록

          _context5.next = 4;
          return regeneratorRuntime.awrap(_userSchema["default"].create(register));

        case 4:
          return _context5.abrupt("return", res.status(200).json({
            registerSuccess: true,
            message: "회원가입이 완료 되었습니다"
          }));

        case 5:
        case "end":
          return _context5.stop();
      }
    }
  });
};

exports.signupUser = signupUser;

var updateUser = function updateUser(req, res) {
  var user, updates, updatedUser;
  return regeneratorRuntime.async(function updateUser$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          console.log(req.body);
          _context6.prev = 1;
          _context6.next = 4;
          return regeneratorRuntime.awrap(_userSchema["default"].findOne({
            email: req.body.email
          }));

        case 4:
          user = _context6.sent;

          if (user) {
            _context6.next = 7;
            break;
          }

          return _context6.abrupt("return", res.status(404).json({
            updateSuccess: false,
            message: "User not found."
          }));

        case 7:
          // Update user information
          updates = {
            name: req.body.name,
            mobile: req.body.mobile,
            nickname: req.body.nickname,
            statusMessage: req.body.statusMessage
          }; // Check if there is a new profile image

          if (req.file) {
            updates.profileImg = req.file.path; // Assuming you store file paths
          } // Update the user's information in the database


          _context6.next = 11;
          return regeneratorRuntime.awrap(_userSchema["default"].updateOne({
            email: req.body.email
          }, {
            $set: updates
          }));

        case 11:
          _context6.next = 13;
          return regeneratorRuntime.awrap(_userSchema["default"].findOne({
            email: req.body.email
          }).select('password'));

        case 13:
          updatedUser = _context6.sent;
          return _context6.abrupt("return", res.status(200).json({
            updateSuccess: true,
            message: "User information updated successfully.",
            user: updatedUser
          }));

        case 17:
          _context6.prev = 17;
          _context6.t0 = _context6["catch"](1);
          console.error(_context6.t0);
          return _context6.abrupt("return", res.status(401).json({
            updateSuccess: false,
            message: "An error occurred while updating user information."
          }));

        case 21:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[1, 17]]);
};

exports.updateUser = updateUser;

var deleteUser = function deleteUser(req, res) {
  return regeneratorRuntime.async(function deleteUser$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
        case "end":
          return _context7.stop();
      }
    }
  });
}; // passport Login


exports.deleteUser = deleteUser;

var passportLogin = function passportLogin(req, res, next) {
  return regeneratorRuntime.async(function passportLogin$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          try {
            _passport["default"].authenticate("local", function (error, user, info) {
              if (error || !user) {
                res.status(400).json({
                  message: info.reason
                });
                return;
              }

              req.login(user, {
                session: false
              }, function _callee(loginError) {
                var token, loginUser, password, others;
                return regeneratorRuntime.async(function _callee$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        if (!loginError) {
                          _context8.next = 3;
                          break;
                        }

                        res.status(401).send(loginError);
                        return _context8.abrupt("return");

                      case 3:
                        // 여기에서 검증된 회원을 처리
                        // 검증된 회원에게 jwt토큰 생성 후 전달
                        token = _jsonwebtoken["default"].sign({
                          email: user.email,
                          issuer: "michael"
                        }, SECRET_KEY, {
                          expiresIn: "24h" // 유효시간 24시간

                        }); // 검증 (선택) 안해도 무관

                        _context8.next = 6;
                        return regeneratorRuntime.awrap(_userSchema["default"].findOne({
                          email: user.email
                        }).lean());

                      case 6:
                        loginUser = _context8.sent;
                        console.log(loginUser); // 민감한 정보를 제거 후
                        // 유저와 토큰을 발급해서 화면으로 보낸다

                        password = loginUser.password, others = _objectWithoutProperties(loginUser, ["password"]);
                        res.status(200).json({
                          user: others,
                          token: token
                        });

                      case 10:
                      case "end":
                        return _context8.stop();
                    }
                  }
                });
              }); // console.log("authenticate", error, user, info);
            })(req, res, next);
          } catch (error) {
            console.error(error);
            next(error);
          }

        case 1:
        case "end":
          return _context9.stop();
      }
    }
  });
}; // 토큰을 이용해서 인증받은 라우팅


exports.passportLogin = passportLogin;

var authLocation = function authLocation(req, res) {
  var _req$user, password, others;

  return regeneratorRuntime.async(function authLocation$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          try {
            // 인가가 완료된 유저는 req.user에 담긴다
            console.log("authLocation", req.user);
            _req$user = req.user, password = _req$user.password, others = _objectWithoutProperties(_req$user, ["password"]);
            res.status(200).json(_objectSpread({
              message: "자동 로그인 성공"
            }, others._doc));
          } catch (error) {
            console.error(error);
            next(error);
          }

        case 1:
        case "end":
          return _context10.stop();
      }
    }
  });
};

exports.authLocation = authLocation;