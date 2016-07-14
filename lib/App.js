'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _redux = require('redux');

var _State = require('./State');

var _State2 = _interopRequireDefault(_State);

var _User = require('./User');

var _User2 = _interopRequireDefault(_User);

var _Action = require('./Action');

var _Action2 = _interopRequireDefault(_Action);

var _AddUser = require('./actions/AddUser');

var _AddUser2 = _interopRequireDefault(_AddUser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO actions are of type 'any' because of redux (cannot fix a type)

var reduce = function reduce() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? new _State2.default() : arguments[0];
  var action = arguments[1];

  function _ref(_id) {
    if (!(_id instanceof _State2.default)) {
      throw new TypeError('Function return value violates contract.\n\nExpected:\nState\n\nGot:\n' + _inspect(_id));
    }

    return _id;
  }

  if (!(state === undefined || state instanceof _State2.default)) {
    throw new TypeError('Value of optional argument "state" violates contract.\n\nExpected:\nState\n\nGot:\n' + _inspect(state));
  }

  var newState = state.set('actions', state.actions.push(action));
  if ('AddUser' === action.type) return _ref(addUser(newState, action));
  return _ref(newState);
};

var addUser = function addUser(state, action) {
  if (!(state instanceof _State2.default)) {
    throw new TypeError('Value of argument "state" violates contract.\n\nExpected:\nState\n\nGot:\n' + _inspect(state));
  }

  if (state.hasUser(action.login)) return state;
  return state.set('users', state.users.push(new _User2.default(action.login)));
};

exports.default = {
  reduce: reduce,
  createStore: function createStore() {
    return (0, _redux.createStore)(reduce);
  }
};

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