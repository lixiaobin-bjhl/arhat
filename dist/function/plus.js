/**
 * @file 加法
 * @author XiaoBin Li(lixiaobin8878@gmail.com) 
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a, b) {

  var length = Math.max((0, _decimalLength2.default)(a), (0, _decimalLength2.default)(b));

  a = (0, _float2Int2.default)(a, length);
  b = (0, _float2Int2.default)(b, length);

  return (a + b) / Math.pow(10, length);
};

var _decimalLength = require('./decimalLength.js');

var _decimalLength2 = _interopRequireDefault(_decimalLength);

var _float2Int = require('./float2Int.js');

var _float2Int2 = _interopRequireDefault(_float2Int);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;

/**
 * 加法
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsdXMuanMiXSwibmFtZXMiOlsiYSIsImIiLCJsZW5ndGgiLCJNYXRoIiwibWF4IiwicG93Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFLQTs7Ozs7O2tCQVllLFVBQVVBLENBQVYsRUFBYUMsQ0FBYixFQUFnQjs7QUFFM0IsTUFBSUMsU0FBU0MsS0FBS0MsR0FBTCxDQUNHLDZCQUFjSixDQUFkLENBREgsRUFFRyw2QkFBY0MsQ0FBZCxDQUZILENBQWI7O0FBS0FELE1BQUkseUJBQVVBLENBQVYsRUFBYUUsTUFBYixDQUFKO0FBQ0FELE1BQUkseUJBQVVBLENBQVYsRUFBYUMsTUFBYixDQUFKOztBQUVBLFNBQU8sQ0FBQ0YsSUFBSUMsQ0FBTCxJQUFVRSxLQUFLRSxHQUFMLENBQVMsRUFBVCxFQUFhSCxNQUFiLENBQWpCO0FBRUgsQzs7QUF0QkQ7Ozs7QUFDQTs7Ozs7O0FBcUJDOztBQW5CRCIsImZpbGUiOiJwbHVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZSDliqDms5VcbiAqIEBhdXRob3IgWGlhb0JpbiBMaShsaXhpYW9iaW44ODc4QGdtYWlsLmNvbSkgXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgZGVjaW1hbExlbmd0aCBmcm9tICcuL2RlY2ltYWxMZW5ndGgnO1xuaW1wb3J0IGZsb2F0MkludCBmcm9tICcuL2Zsb2F0MkludCc7XG5cbi8qKlxuICog5Yqg5rOVXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBiXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChhLCBiKSB7XG5cbiAgICB2YXIgbGVuZ3RoID0gTWF0aC5tYXgoXG4gICAgICAgICAgICAgICAgICAgIGRlY2ltYWxMZW5ndGgoYSksXG4gICAgICAgICAgICAgICAgICAgIGRlY2ltYWxMZW5ndGgoYilcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgYSA9IGZsb2F0MkludChhLCBsZW5ndGgpO1xuICAgIGIgPSBmbG9hdDJJbnQoYiwgbGVuZ3RoKTtcblxuICAgIHJldHVybiAoYSArIGIpIC8gTWF0aC5wb3coMTAsIGxlbmd0aCk7XG5cbn07XG4iXX0=