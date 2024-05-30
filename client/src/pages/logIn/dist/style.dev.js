"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _theme = _interopRequireDefault(require("../../global/theme"));

var _common = require("../../global/common");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    margin: 56px 50px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    font-size: 12px;\n    color: ", ";\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 22px;\n    background-color: transparent;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    /* margin-bottom: 22px; */\n    & p {\n        margin-left: 4px;\n        margin-bottom: 4px;\n        color: ", ";\n        font-weight: 100;\n    }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 274px;\n    ", "\n    /* margin between password input and login button */\n    & button {\n        margin-top: 34px;\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    width: 120px;\n    height: 90px;\n    ", "\n    margin-top: 60px;\n    margin-bottom: 82px;\n    margin-left: 34px;\n    & img {\n        width: 100%;\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    width: 360px;\n    height: 640px;\n    background-image: url(", "/global/images/background.png);\n    ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 100vh;\n    background-color: ", ";\n    ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var S = {};
S.Background = _styledComponents["default"].div(_templateObject(), _theme["default"].PALETTE.white, _common.flexCenter);
S.Wrapper = _styledComponents["default"].div(_templateObject2(), process.env.PUBLIC_URL, _common.flexCenterColumn);
S.LogoWrapper = _styledComponents["default"].div(_templateObject3(), _common.flexCenter);
S.LoginForm = _styledComponents["default"].form(_templateObject4(), _common.flexCenterColumn);
S.LoginLabel = _styledComponents["default"].label(_templateObject5(), _theme["default"].PALETTE.white);
S.ConfirmMessageWrapper = _styledComponents["default"].div(_templateObject6());
S.ConfirmMessage = _styledComponents["default"].span(_templateObject7(), _theme["default"].PALETTE.error.red);
S.ToSignUp = _styledComponents["default"].div(_templateObject8());
var _default = S;
exports["default"] = _default;