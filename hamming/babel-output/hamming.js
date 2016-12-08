'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _default = (function () {
  function _default() {
    _classCallCheck(this, _default);
  }

  _createClass(_default, [{
    key: 'compute',
    value: function compute(a, b) {
      if (a.length != b.length) throw Error('DNA strands must be of equal length.');
      var ham = 0;
      var i = 0;
      for (i = 0; i < a.length; i++) {
        if (a[i] != b[i]) {
          ham++;
        }
      }
      return ham;
    }
  }]);

  return _default;
})();

exports['default'] = _default;
module.exports = exports['default'];