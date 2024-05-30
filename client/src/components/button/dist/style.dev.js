"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n    ", "\n    ", "\n    ", "\n    ", "\n\n    cursor: pointer;\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n        color: #ee6161;\n    "]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n        color: #4d4e89;\n    "]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n        color: #5487d3;\n    "]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n        color: #fff;\n    "]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n        width: 260px;\n        height: 44px;\n    "]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n        width: 120px;\n        height: 44px;\n    "]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n        width: 100px;\n        height: 44px;\n    "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n        border: 2px #ee6161 solid;\n    "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n        border: 2px #4d4e89 solid;\n    "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n        border: 2px #5487d3 solid;\n    "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n        border: none;\n    "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n        background-color: ", ";\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n        background-color: ", ";\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n        background-color: ", ";\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n        background-color: ", ";\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n        background-color: ", ";\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        background-color: ", ";\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        background-color: ", ";\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var variantCSS = {
  skyblue: (0, _styledComponents.css)(_templateObject(), function (_ref) {
    var theme = _ref.theme;
    return theme.PALETTE.skyblue;
  }),
  indigo: (0, _styledComponents.css)(_templateObject2(), function (_ref2) {
    var theme = _ref2.theme;
    return theme.PALETTE.indigo;
  }),
  red: (0, _styledComponents.css)(_templateObject3(), function (_ref3) {
    var theme = _ref3.theme;
    return theme.PALETTE.error["red"];
  }),
  disabled: (0, _styledComponents.css)(_templateObject4(), function (_ref4) {
    var theme = _ref4.theme;
    return theme.PALETTE.disabled;
  }),
  hoverSkyblue: (0, _styledComponents.css)(_templateObject5(), function (_ref5) {
    var theme = _ref5.theme;
    return theme.PALETTE.hover["skyblue"];
  }),
  hoverIndigo: (0, _styledComponents.css)(_templateObject6(), function (_ref6) {
    var theme = _ref6.theme;
    return theme.PALETTE.hover["indigo"];
  }),
  hoverRed: (0, _styledComponents.css)(_templateObject7(), function (_ref7) {
    var theme = _ref7.theme;
    return theme.PALETTE.hover["red"];
  })
};
var borderCSS = {
  "default": (0, _styledComponents.css)(_templateObject8()),
  hoverSkyblue: (0, _styledComponents.css)(_templateObject9()),
  hoverIndigo: (0, _styledComponents.css)(_templateObject10()),
  hoverRed: (0, _styledComponents.css)(_templateObject11())
};
var sizeCSS = {
  small: (0, _styledComponents.css)(_templateObject12()),
  medium: (0, _styledComponents.css)(_templateObject13()),
  large: (0, _styledComponents.css)(_templateObject14())
};
var colorCSS = {
  white: (0, _styledComponents.css)(_templateObject15()),
  hoverSkyblue: (0, _styledComponents.css)(_templateObject16()),
  hoverIndigo: (0, _styledComponents.css)(_templateObject17()),
  hoverRed: (0, _styledComponents.css)(_templateObject18())
};

var Button = _styledComponents["default"].button(_templateObject19(), function (_ref8) {
  var variant = _ref8.variant;
  return variantCSS[variant];
}, function (_ref9) {
  var border = _ref9.border;
  return borderCSS[border];
}, function (_ref10) {
  var size = _ref10.size;
  return sizeCSS[size];
}, function (_ref11) {
  var color = _ref11.color;
  return colorCSS[color];
});

var _default = Button;
exports["default"] = _default;