"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  type: 'object',
  properties: {
    serialize: {
      instanceof: 'Function'
    }
  },
  errorMessage: {
    serialize: "should be {String} or {Function} (https://github.com/nik-m2/generic-jsx-loader#serialize)"
  },
  additionalProperties: false
};
exports.default = _default;