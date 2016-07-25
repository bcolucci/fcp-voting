'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _pug = require('pug');

var _pug2 = _interopRequireDefault(_pug);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _reactRedux = require('react-redux');

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _App3 = require('./components/App');

var _App4 = _interopRequireDefault(_App3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = (0, _express2.default)();

server.use('/components', _express2.default.static('bower_components'));

// react server-side rendering
server.use(function (req, res) {

  var store = _App2.default.createStore();
  var initialState = store.getState();

  var html = _pug2.default.render(_fs2.default.readFileSync('index.pug'), {
    initialState: initialState,
    app: (0, _server.renderToString)(_react2.default.createElement(
      _reactRedux.Provider,
      { store: store },
      _react2.default.createElement(_App4.default, null)
    ))
  });

  res.end(html);
});

exports.default = server;