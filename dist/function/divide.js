/**
 * @file 除法
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

  return a / b;
};

var _decimalLength = require('./decimalLength.js');

var _decimalLength2 = _interopRequireDefault(_decimalLength);

var _float2Int = require('./float2Int.js');

var _float2Int2 = _interopRequireDefault(_float2Int);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;

/**
 * 除法
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpdmlkZS5qcyJdLCJuYW1lcyI6WyJhIiwiYiIsImxlbmd0aCIsIk1hdGgiLCJtYXgiXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUtBOzs7Ozs7a0JBWWUsVUFBVUEsQ0FBVixFQUFhQyxDQUFiLEVBQWdCOztBQUUzQixNQUFJQyxTQUFTQyxLQUFLQyxHQUFMLENBQ0csNkJBQWNKLENBQWQsQ0FESCxFQUVHLDZCQUFjQyxDQUFkLENBRkgsQ0FBYjs7QUFLQUQsTUFBSSx5QkFBVUEsQ0FBVixFQUFhRSxNQUFiLENBQUo7QUFDQUQsTUFBSSx5QkFBVUEsQ0FBVixFQUFhQyxNQUFiLENBQUo7O0FBRUEsU0FBT0YsSUFBSUMsQ0FBWDtBQUVILEM7O0FBdEJEOzs7O0FBQ0E7Ozs7OztBQXFCQzs7QUFuQkQiLCJmaWxlIjoiZGl2aWRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZSDpmaTms5VcbiAqIEBhdXRob3IgWGlhb0JpbiBMaShsaXhpYW9iaW44ODc4QGdtYWlsLmNvbSkgXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgZGVjaW1hbExlbmd0aCBmcm9tICcuL2RlY2ltYWxMZW5ndGgnO1xuaW1wb3J0IGZsb2F0MkludCBmcm9tICcuL2Zsb2F0MkludCc7XG5cbi8qKlxuICog6Zmk5rOVXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBiXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChhLCBiKSB7XG5cbiAgICB2YXIgbGVuZ3RoID0gTWF0aC5tYXgoXG4gICAgICAgICAgICAgICAgICAgIGRlY2ltYWxMZW5ndGgoYSksXG4gICAgICAgICAgICAgICAgICAgIGRlY2ltYWxMZW5ndGgoYilcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgYSA9IGZsb2F0MkludChhLCBsZW5ndGgpO1xuICAgIGIgPSBmbG9hdDJJbnQoYiwgbGVuZ3RoKTtcblxuICAgIHJldHVybiBhIC8gYjtcblxufTtcblxuIl19