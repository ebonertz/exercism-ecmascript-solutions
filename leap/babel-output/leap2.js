"use strict";

module.exports = function (year) {
  function isLeapYear() {
    return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
  }

  return { isLeapYear: isLeapYear };
};