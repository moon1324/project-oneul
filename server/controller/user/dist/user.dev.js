"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initializePassport = exports.configureJwtStrategy = exports.isAuthenticated = exports.getUserProfile = exports.authLocation = exports.passportLogin = exports.deleteUser = exports.updateUser = exports.signupUser = exports.uploadProfileImg = exports.checkNickname = exports.checkMobile = exports.checkEmail = exports.logoutUser = exports.loginUser = void 0;

var _userSchema = _interopRequireDefault(require("../../models/userSchema.js"));

var _expressSession = _interopRequireDefault(require("express-session"));

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
  var user, passwordMatch, token, userDatas, _userDatas$_doc, password, others;

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
          req.session.userId = user._id;
          token = _jsonwebtoken["default"].sign({
            id: user._id
          }, jwtOptions.secretOrKey, {
            expiresIn: '24h'
          });
          userDatas = _extends({}, user);
          _userDatas$_doc = userDatas._doc, password = _userDatas$_doc.password, others = _objectWithoutProperties(_userDatas$_doc, ["password"]);
          console.log(others);
          return _context.abrupt("return", res.status(200).json({
            user: others,
            // 최초 로그인시 유저정보
            loginSuccess: true,
            // 상태
            message: "로그인 성공!",
            // 메세지
            userId: user._id,
            token: token
          }));

        case 16:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.loginUser = loginUser;

var logoutUser = function logoutUser(req, res) {
  return regeneratorRuntime.async(function logoutUser$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (req.session) {
            req.session.destroy(function (err) {
              if (err) {
                console.error('Failed to destroy session:', err);
                res.status(500).send('Failed to logout');
                return next(err);
              } else {
                res.clearCookie('connect.sid'); // 세션 쿠키 삭제

                res.send('Logout successful');
              }
            });
          } else {
            res.status(400).send('No active session');
          }

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.logoutUser = logoutUser;

var isAuthenticated = function isAuthenticated(req, res, next) {
  if (req.session && req.session.userId) {
    return next();
  } else {
    return res.status(401).json({
      message: "로그인이 필요합니다."
    });
  }
};

exports.isAuthenticated = isAuthenticated;

var checkEmail = function checkEmail(req, res) {
  var user;
  return regeneratorRuntime.async(function checkEmail$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          console.log(req.body);
          _context3.next = 3;
          return regeneratorRuntime.awrap(_userSchema["default"].findOne({
            email: req.body.email
          }));

        case 3:
          user = _context3.sent;

          if (!user) {
            _context3.next = 6;
            break;
          }

          return _context3.abrupt("return", res.status(200).json({
            message: "이미 사용중인 이메일입니다",
            duplicate: true
          }));

        case 6:
          return _context3.abrupt("return", res.status(200).json({
            message: "사용가능한 이메일입니다",
            duplicate: false
          }));

        case 7:
        case "end":
          return _context3.stop();
      }
    }
  });
};

exports.checkEmail = checkEmail;

var checkMobile = function checkMobile(req, res) {
  var user;
  return regeneratorRuntime.async(function checkMobile$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          console.log(req.body);
          _context4.next = 3;
          return regeneratorRuntime.awrap(_userSchema["default"].findOne({
            mobile: req.body.mobile
          }));

        case 3:
          user = _context4.sent;

          if (!user) {
            _context4.next = 6;
            break;
          }

          return _context4.abrupt("return", res.status(200).json({
            message: "이미 사용중인 전화번호입니다",
            duplicate: true
          }));

        case 6:
          return _context4.abrupt("return", res.status(200).json({
            message: "사용가능한 전화번호입니다",
            duplicate: false
          }));

        case 7:
        case "end":
          return _context4.stop();
      }
    }
  });
};

exports.checkMobile = checkMobile;

var checkNickname = function checkNickname(req, res) {
  var user;
  return regeneratorRuntime.async(function checkNickname$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          console.log(req.body);
          _context5.next = 3;
          return regeneratorRuntime.awrap(_userSchema["default"].findOne({
            nickname: req.body.nickname
          }));

        case 3:
          user = _context5.sent;

          if (!user) {
            _context5.next = 6;
            break;
          }

          return _context5.abrupt("return", res.status(200).json({
            message: "이미 사용중인 닉네임입니다",
            duplicate: true
          }));

        case 6:
          return _context5.abrupt("return", res.status(200).json({
            message: "사용가능한 닉네임입니다",
            duplicate: false
          }));

        case 7:
        case "end":
          return _context5.stop();
      }
    }
  });
}; // 이미지 업로드 라우트


exports.checkNickname = checkNickname;

var uploadProfileImg = function uploadProfileImg(req, res) {
  if (!req.file) {
    return res.status(400).json({
      message: "파일 업로드에 실패했습니다"
    });
  }

  var profileImgPath = "images/profile/".concat(req.file.filename);
  return res.status(200).json({
    profileImg: profileImgPath
  });
};

exports.uploadProfileImg = uploadProfileImg;

var signupUser = function signupUser(req, res) {
  var register;
  return regeneratorRuntime.async(function signupUser$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
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

          _context6.next = 4;
          return regeneratorRuntime.awrap(_userSchema["default"].create(register));

        case 4:
          return _context6.abrupt("return", res.status(200).json({
            registerSuccess: true,
            message: "회원가입이 완료 되었습니다"
          }));

        case 5:
        case "end":
          return _context6.stop();
      }
    }
  });
};

exports.signupUser = signupUser;

var updateUser = function updateUser(req, res) {
  var user, updates, updatedUser;
  return regeneratorRuntime.async(function updateUser$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return regeneratorRuntime.awrap(_userSchema["default"].findOne({
            email: req.body.email
          }));

        case 3:
          user = _context7.sent;

          if (user) {
            _context7.next = 6;
            break;
          }

          return _context7.abrupt("return", res.status(404).json({
            updateSuccess: false,
            message: "User not found."
          }));

        case 6:
          // Update user information
          updates = {
            password: req.body.password,
            mobile: req.body.mobile,
            name: req.body.name,
            nickname: req.body.nickname,
            profileImg: req.body.profileImg,
            statusMessage: req.body.statusMessage
          }; // Check if there is a new profile image

          if (req.file) {
            updates.profileImg = req.file.path; // Assuming you store file paths
          } // Update the user's information in the database


          _context7.next = 10;
          return regeneratorRuntime.awrap(_userSchema["default"].updateOne({
            email: req.body.email
          }, {
            $set: updates
          }));

        case 10:
          _context7.next = 12;
          return regeneratorRuntime.awrap(_userSchema["default"].findOne({
            email: req.body.email
          }).select('password'));

        case 12:
          updatedUser = _context7.sent;
          return _context7.abrupt("return", res.status(200).json({
            updateSuccess: true,
            message: "User information updated successfully.",
            user: updatedUser
          }));

        case 17:
          _context7.prev = 17;
          _context7.t0 = _context7["catch"](0);
          console.error(_context7.t0);
          return _context7.abrupt("return", res.status(401).json({
            updateSuccess: false,
            message: "An error occurred while updating user information."
          }));

        case 21:
        case "end":
          return _context7.stop();
      }
    }
  }, null, null, [[0, 17]]);
}; // JWT 회원탈퇴


exports.updateUser = updateUser;

var deleteUser = function deleteUser(req, res) {
  var authenticateUser;
  return regeneratorRuntime.async(function deleteUser$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          authenticateUser = req.user;
          console.log(authenticateUser);
          _context8.next = 4;
          return regeneratorRuntime.awrap(_userSchema["default"].deleteOne(authenticateUser));

        case 4:
          res.status(200).json({
            message: "회원 탈퇴가 완료되었습니다."
          });

        case 5:
        case "end":
          return _context8.stop();
      }
    }
  });
}; // JWT Strategy : HTTP Authorization 헤더에서 JWT를 추출하여 


exports.deleteUser = deleteUser;

var configureJwtStrategy = function configureJwtStrategy() {
  return new Promise(function (resolve, reject) {
    var jwtOptions = {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: SECRET_KEY
    };
    var strategy = new JwtStrategy(jwtOptions, function _callee(jwtPayload, done) {
      var user;
      return regeneratorRuntime.async(function _callee$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.prev = 0;
              _context9.next = 3;
              return regeneratorRuntime.awrap(_userSchema["default"].findById(jwtPayload.sub));

            case 3:
              user = _context9.sent;

              if (!user) {
                _context9.next = 8;
                break;
              }

              return _context9.abrupt("return", done(null, user));

            case 8:
              return _context9.abrupt("return", done(null, false));

            case 9:
              _context9.next = 14;
              break;

            case 11:
              _context9.prev = 11;
              _context9.t0 = _context9["catch"](0);
              return _context9.abrupt("return", done(_context9.t0, false));

            case 14:
            case "end":
              return _context9.stop();
          }
        }
      }, null, null, [[0, 11]]);
    });

    _passport["default"].use(strategy);

    resolve();
  });
}; // Passport 초기화 및 JWT Strategy 설정


exports.configureJwtStrategy = configureJwtStrategy;

var initializePassport = function initializePassport() {
  return regeneratorRuntime.async(function initializePassport$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return regeneratorRuntime.awrap(configureJwtStrategy());

        case 2:
          app.use(_passport["default"].initialize());

        case 3:
        case "end":
          return _context10.stop();
      }
    }
  });
}; // passport Login


exports.initializePassport = initializePassport;

var passportLogin = function passportLogin(req, res, next) {
  return regeneratorRuntime.async(function passportLogin$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          try {
            _passport["default"].authenticate("local", function (error, user, info) {
              if (error) {
                return res.status(500).json({
                  message: '서버 오류 발생'
                });
              }

              if (!user) {
                return res.status(400).json({
                  message: info ? info.reason : '로그인에 실패했습니다.'
                });
              }

              req.login(user, {
                session: false
              }, function _callee2(loginError) {
                var token, loginUser, password, others;
                return regeneratorRuntime.async(function _callee2$(_context11) {
                  while (1) {
                    switch (_context11.prev = _context11.next) {
                      case 0:
                        if (!loginError) {
                          _context11.next = 2;
                          break;
                        }

                        return _context11.abrupt("return", res.status(401).send(loginError));

                      case 2:
                        // 검증된 회원에게 jwt토큰 생성 후 전달
                        token = _jsonwebtoken["default"].sign({
                          id: user._id,
                          // id를 포함하는 것이 더 일반적임
                          email: user.email,
                          issuer: "michael"
                        }, SECRET_KEY, {
                          expiresIn: "24h" // 유효시간 24시간

                        }); // 검증 (선택) 안해도 무관

                        _context11.next = 5;
                        return regeneratorRuntime.awrap(_userSchema["default"].findById(user._id).lean());

                      case 5:
                        loginUser = _context11.sent;
                        console.log(loginUser); // 민감한 정보를 제거 후
                        // 유저와 토큰을 발급해서 화면으로 보낸다

                        password = loginUser.password, others = _objectWithoutProperties(loginUser, ["password"]);
                        res.status(200).json({
                          user: others,
                          token: token
                        });

                      case 9:
                      case "end":
                        return _context11.stop();
                    }
                  }
                });
              });
            })(req, res, next);
          } catch (error) {
            console.error('로그인 처리 오류:', error);
            next(error);
          }

        case 1:
        case "end":
          return _context12.stop();
      }
    }
  });
}; // 토큰을 이용해서 인증받은 라우팅


exports.passportLogin = passportLogin;

var authLocation = function authLocation(req, res) {
  var _req$user, password, others;

  return regeneratorRuntime.async(function authLocation$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
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
          return _context13.stop();
      }
    }
  });
};

exports.authLocation = authLocation;

var getUserProfile = function getUserProfile(req, res) {
  var email, user;
  return regeneratorRuntime.async(function getUserProfile$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          email = req.params.email;
          _context14.prev = 1;
          _context14.next = 4;
          return regeneratorRuntime.awrap(_userSchema["default"].findOne({
            email: email
          }).exec());

        case 4:
          user = _context14.sent;

          if (user) {
            _context14.next = 7;
            break;
          }

          return _context14.abrupt("return", res.status(404).json({
            message: "User not found"
          }));

        case 7:
          res.json({
            profileImg: "http://localhost:8000/".concat(user.profileImg)
          });
          _context14.next = 13;
          break;

        case 10:
          _context14.prev = 10;
          _context14.t0 = _context14["catch"](1);
          res.status(500).json({
            message: "Server error"
          });

        case 13:
        case "end":
          return _context14.stop();
      }
    }
  }, null, null, [[1, 10]]);
};

exports.getUserProfile = getUserProfile;