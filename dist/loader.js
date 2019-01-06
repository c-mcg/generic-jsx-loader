"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loader;

var _loaderUtils = _interopRequireDefault(require("loader-utils"));

var _schemaUtils = _interopRequireDefault(require("schema-utils"));

var _genericJsxTranspiler = require("generic-jsx-transpiler");

var _options = _interopRequireDefault(require("./options.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function loader(source) {
  if (!source) {
    return "";
  }

  var options = _loaderUtils.default.getOptions(this) || {};
  (0, _schemaUtils.default)(_options.default, options, 'Generic JSX Loader');

  if (!options.serialize || !(options.serialize instanceof Function)) {
    throw new Error("You must provide a serialize function as an option!");
  }

  var parser = new _genericJsxTranspiler.Parser(_objectSpread({}, options));
  return parser.parse({
    source: source
  }); //TODO support inputPath & outputPath
}