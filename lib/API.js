'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var router = _express2.default.Router();

app.set('view engine', 'pug');

app.use('/', _express2.default.static('public'));
app.use('/externals', _express2.default.static('bower_components'));

app.use(router);

router.get('/', function (req, res) {
  res.render('index');
});

exports.default = app;