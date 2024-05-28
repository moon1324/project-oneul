"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _theme = _interopRequireDefault(require("../../global/theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n        & h4, p { \n            font-weight: bold;\n        }\n        & .header p{\n            font-size: ", "\n        }\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n        text-align: center;\n\n        & p {\n            text-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);\n        }\n\n        & p:first-child{\n            padding: 0 0 1rem 0;\n        }\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n        text-align: right;\n\n        & svg{\n                & path{\n                    color : ", ";\n                    }\n            }\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n        text-align: left;\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n        background-image: url('/images/main/background_star.svg');\n        \n        & .header {\n            padding: 1rem;\n            border-bottom: 1px solid #fff;\n        }\n        \n        & .body {\n            padding: 1.5rem;\n        }\n\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        position: relative;\n        border-radius: 1.25rem;\n        background: linear-gradient(#5587D3, #C080BC);\n        font-family:  'NanumSquareRound';\n        color: ", ";\n        box-shadow: 0px 4px 7px 0px rgba(0,0,0,0.25);\n        \n        & p {\n                color: ", ";\n            }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        width: 100%;\n        padding: 0 1.25rem;\n        margin: 2.5rem 0;\n\n        & div {\n            width: 100%;\n\n            & .header{\n                width: 100%;\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n            }\n\n            & .body{\n                width: 100%;\n            }\n\n\n        }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var S = {};
S.Wrapper = _styledComponents["default"].div(_templateObject()); // Box writing mymind

S.BoxWritingMymind = _styledComponents["default"].div(_templateObject2(), _theme["default"].PALETTE.white, _theme["default"].PALETTE.white);
S.Contents = _styledComponents["default"].div(_templateObject3());
S.DateBox = _styledComponents["default"].div(_templateObject4());
S.IconBox = _styledComponents["default"].div(_templateObject5(), _theme["default"].PALETTE.white);
S.DialogBox = _styledComponents["default"].div(_templateObject6()); //box for our today

S.BoxForOurToday = _styledComponents["default"].div(_templateObject7(), _theme["default"].FONT_SIZE.p);
var _default = S;
exports["default"] = _default;