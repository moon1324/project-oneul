"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _theme = _interopRequireDefault(require("../../global/theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n        width: 320px;\n        height: 320px;\n        margin: 0 auto;\n        padding: 24px;\n        border-radius: 20px;\n        overflow-y: scroll;\n        background-color: ", ";\n\n        & p {\n            line-height: 1.5;\n        }\n    "]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n            width: 100%;\n            text-align: center;\n            padding: 0 0 4rem 0;\n        "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n            width: 100%;\n            padding: 0 0 1.25rem 0;\n            \n            & p { \n                padding: 0 0 0.5rem 0;\n            }\n\n            & input{\n                width: 100%;\n            }\n        "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n            width: 100%;\n            padding: 2.5rem 50px;\n        "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n            text-align: center;\n            padding: 2.5rem 0;\n\n            & h2 {\n                font-family: 'NanumSquareRound';\n                font-size: ", ";\n            }\n        "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n        width: 100%;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        padding: 1rem ;\n        border-top: 1px solid ", ";\n        border-bottom: 1px solid ", ";\n\n        & .secession { \n            color: ", ";\n        }\n        & svg{\n            font-size: 1.5rem;\n            & path{\n                color: #fff;\n            }\n        }\n    "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n        width: 100%;\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n        display: flex;\n        justify-content: space-evenly;\n        align-items: center;\n        border-radius: 1.25rem;\n        background-color: ", ";\n        box-shadow: 0px 4px 7px 0px rgba(0,0,0,0.25);\n        \n        & > div{\n            padding: 1.125rem;\n            text-align: center;\n\n            & p{\n                font-size: ", ";\n                padding: 0 0 1.875rem 0;\n            }\n\n            & h3 { \n                font-size: ", ";\n                font-weight: bold;\n                padding: 0 0 1.25rem 0;\n            }\n        }\n        \n        & .border{\n            height: 100%;\n            padding: 1px;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n\n            & div{\n                width: 2px;\n                height: 100px;\n                background-color: #eee;\n            }\n        }\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n        text-align: center;\n        padding: 0 0 1.25rem 0;\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n        text-align: center;\n        padding: 1.25rem 0;\n\n        & h3 {\n            font-size: ", ";\n            font-weight: bold;\n        }\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n        display: flex;\n        justify-content: center;\n\n        & .pictureBox{\n            width: 100px;\n            height: 100px;\n            border-radius:50%;\n            overflow: hidden;\n\n            & img {\n                width:100%;\n                height: 100%;\n                object-fit: cover;\n            }\n        }\n    "]);

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
  var data = _taggedTemplateLiteral(["\n        padding: 0.5rem;\n        text-align: right;\n         \n        & svg {\n            font-size: 1.5rem;\n        }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var S = {};
/* MyPageMain.js */

S.MypageNav = _styledComponents["default"].nav(_templateObject());
S.ProfileContaier = _styledComponents["default"].div(_templateObject2());
S.ProfilePictureWrapper = _styledComponents["default"].div(_templateObject3());
S.ProfileNameWrapper = _styledComponents["default"].div(_templateObject4(), _theme["default"].FONT_SIZE.h3);
S.ProfileStatusWrapper = _styledComponents["default"].div(_templateObject5());
S.ProfileContentsWrapper = _styledComponents["default"].div(_templateObject6(), _theme["default"].PALETTE.white, _theme["default"].FONT_SIZE.p, _theme["default"].FONT_SIZE.h3);
S.ServiceContainer = _styledComponents["default"].div(_templateObject7());
S.ServiceWrapper = _styledComponents["default"].div(_templateObject8(), _theme["default"].PALETTE.white, _theme["default"].PALETTE.white, _theme["default"].PALETTE.error.red);
/* MyPageEdit.js */

S.PageTitle = _styledComponents["default"].div(_templateObject9(), _theme["default"].FONT_SIZE.h2);
S.InputContainer = _styledComponents["default"].div(_templateObject10());
S.InputWrapper = _styledComponents["default"].div(_templateObject11());
S.buttonWrapper = _styledComponents["default"].div(_templateObject12());
/* termsOfUse.js */

S.ScrollContainer = _styledComponents["default"].div(_templateObject13(), _theme["default"].PALETTE.white);
var _default = S;
exports["default"] = _default;