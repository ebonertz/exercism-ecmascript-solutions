"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isLeapYear = function isLeapYear(year) {
  return year % 400 == 0 || year % 4 == 0 && year % 100 != 0;
};

exports["default"] = isLeapYear;
module.exports = exports["default"];