/*
 * main.js
 * Copyright (C) 2016 Sushil Chhetri <chhetrisushil@gmail.com>
 */
/*jshint esnext: true*/
/*globals console: true*/
"use strict"; //jshint ignore: line

var _module = require('./module.js');

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Main = function Main(str) {
  _classCallCheck(this, Main);

  console.log(str);
};

var main = new Main('hi');