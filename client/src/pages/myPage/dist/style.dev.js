"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n        display: flex;\n        justify-content: center;\n\n        & .pictureBox{\n            width: 100px;\n            height: 100px;\n            border-radius:50%;\n        }\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        width: 100%;\n        padding: 1.5rem 1.25rem;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        padding: 0.5rem;\n        text-align: right;\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var S = {};
S.MypageNav = _styledComponents["default"].nav(_templateObject());
S.ProfileContaier = _styledComponents["default"].div(_templateObject2());
S.ProfilePictureWrapper = _styledComponents["default"].div(_templateObject3());
var _default = S;
exports["default"] = _default;