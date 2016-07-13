'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _User = require('./User');

var _User2 = _interopRequireDefault(_User);

var _Option = require('./Option');

var _Option2 = _interopRequireDefault(_Option);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Poll = function () {
  function Poll(name, creator) {
    var options = arguments.length <= 2 || arguments[2] === undefined ? _immutable2.default.List() : arguments[2];

    _classCallCheck(this, Poll);

    if (!(typeof name === 'string')) {
      throw new TypeError('Value of argument "name" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(name));
    }

    if (!(creator instanceof _User2.default)) {
      throw new TypeError('Value of argument "creator" violates contract.\n\nExpected:\nUser\n\nGot:\n' + _inspect(creator));
    }

    if (!(options === undefined || options instanceof _immutable2.default.List)) {
      throw new TypeError('Value of optional argument "options" violates contract.\n\nExpected:\nI.List<Option>\n\nGot:\n' + _inspect(options));
    }

    this.name = name;
    if (_User2.default.UNAUTHENTICATED() === creator.login) throw new Error('Unauthenticated user can not create a Poll.');
    this.creator = creator;
    this.options = options;
  }

  _createClass(Poll, [{
    key: 'optionsVotes',
    value: function optionsVotes() {
      function _ref(_id) {
        if (!(_id instanceof _immutable2.default.Map)) {
          throw new TypeError('Function return value violates contract.\n\nExpected:\nI.Map\n\nGot:\n' + _inspect(_id));
        }

        return _id;
      }

      return _ref(this.options.reduce(function (map, option) {
        return map.set(option.label, option.countVotes());
      }, _immutable2.default.Map()));
    }
  }]);

  return Poll;
}();

exports.default = Poll;
;

function _inspect(input, depth) {
  var maxDepth = 4;
  var maxKeys = 15;

  if (depth === undefined) {
    depth = 0;
  }

  depth += 1;

  if (input === null) {
    return 'null';
  } else if (input === undefined) {
    return 'void';
  } else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
    return typeof input === 'undefined' ? 'undefined' : _typeof(input);
  } else if (Array.isArray(input)) {
    if (input.length > 0) {
      var _ret = function () {
        if (depth > maxDepth) return {
            v: '[...]'
          };

        var first = _inspect(input[0], depth);

        if (input.every(function (item) {
          return _inspect(item, depth) === first;
        })) {
          return {
            v: first.trim() + '[]'
          };
        } else {
          return {
            v: '[' + input.slice(0, maxKeys).map(function (item) {
              return _inspect(item, depth);
            }).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']'
          };
        }
      }();

      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
    } else {
      return 'Array';
    }
  } else {
    var keys = Object.keys(input);

    if (!keys.length) {
      if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
        return input.constructor.name;
      } else {
        return 'Object';
      }
    }

    if (depth > maxDepth) return '{...}';
    var indent = '  '.repeat(depth - 1);
    var entries = keys.slice(0, maxKeys).map(function (key) {
      return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
    }).join('\n  ' + indent);

    if (keys.length >= maxKeys) {
      entries += '\n  ' + indent + '...';
    }

    if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
      return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
    } else {
      return '{\n  ' + indent + entries + '\n' + indent + '}';
    }
  }
}