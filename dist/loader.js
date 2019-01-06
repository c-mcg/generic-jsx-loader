"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _loaderUtils = _interopRequireDefault(require("loader-utils"));

var _schemaUtils = _interopRequireDefault(require("schema-utils"));

var _genericJsxTranspiler = require("generic-jsx-transpiler");

var _options = _interopRequireDefault(require("./options.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import path from 'path';
function loader(source) {
  if (!source) {
    return "";
  }

  var options = _loaderUtils.default.getOptions(this) || {};
  (0, _schemaUtils.default)(_options.default, options, 'Generic JSX Loader');

  if (!options.serialize || !(options.serialize instanceof Function)) {
    throw new Error("You must provide a serialize function as an option! (generic-jsx-loader)");
  }

  var serialize = options.serialize;
  var serializer = {
    serialize: serialize
  };
  var parser = new _genericJsxTranspiler.Parser({
    serializer: serializer
  });
  return parser.parse({
    source: source
  }); //TODO support inputPath & outputPath
}

var _default = loader;
exports.default = _default;