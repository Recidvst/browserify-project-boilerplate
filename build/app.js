(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var utils = require('./utils.js');

console.log(utils);

},{"./utils.js":2}],2:[function(require,module,exports){
"use strict";

// object test
var isObject = function isObject(a) {
  return !!a && a.constructor === Object;
}; // array test


var isArray = function isArray(a) {
  return !!a && a.constructor === Array;
}; // boolean test


var isBool = function isBool(a) {
  return typeof a === 'boolean';
};

module.exports = {
  isObject: isObject,
  isArray: isArray,
  isBool: isBool
};

},{}]},{},[1]);
