/**
 * @file 乘法
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

  var factor = Math.pow(10, length);

  return a * b / (factor * factor);
};

var _decimalLength = require('./decimalLength.js');

var _decimalLength2 = _interopRequireDefault(_decimalLength);

var _float2Int = require('./float2Int.js');

var _float2Int2 = _interopRequireDefault(_float2Int);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;

/**
 * 乘法
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm11bHRpcGx5LmpzIl0sIm5hbWVzIjpbImEiLCJiIiwibGVuZ3RoIiwiTWF0aCIsIm1heCIsImZhY3RvciIsInBvdyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBTUE7Ozs7OztrQkFZZSxVQUFVQSxDQUFWLEVBQWFDLENBQWIsRUFBZ0I7O0FBRTNCLE1BQUlDLFNBQVNDLEtBQUtDLEdBQUwsQ0FDRyw2QkFBY0osQ0FBZCxDQURILEVBRUcsNkJBQWNDLENBQWQsQ0FGSCxDQUFiOztBQUtBRCxNQUFJLHlCQUFVQSxDQUFWLEVBQWFFLE1BQWIsQ0FBSjtBQUNBRCxNQUFJLHlCQUFVQSxDQUFWLEVBQWFDLE1BQWIsQ0FBSjs7QUFFQSxNQUFJRyxTQUFTRixLQUFLRyxHQUFMLENBQVMsRUFBVCxFQUFhSixNQUFiLENBQWI7O0FBRUEsU0FBUUYsSUFBSUMsQ0FBTCxJQUFXSSxTQUFTQSxNQUFwQixDQUFQO0FBRUgsQzs7QUF4QkQ7Ozs7QUFDQTs7Ozs7O0FBdUJDOztBQXJCRCIsImZpbGUiOiJtdWx0aXBseS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGUg5LmY5rOVXG4gKiBAYXV0aG9yIFhpYW9CaW4gTGkobGl4aWFvYmluODg3OEBnbWFpbC5jb20pIFxuICovXG5cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgZGVjaW1hbExlbmd0aCBmcm9tICcuL2RlY2ltYWxMZW5ndGgnO1xuaW1wb3J0IGZsb2F0MkludCBmcm9tICcuL2Zsb2F0MkludCc7XG5cbi8qKlxuICog5LmY5rOVXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBiXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChhLCBiKSB7XG5cbiAgICB2YXIgbGVuZ3RoID0gTWF0aC5tYXgoXG4gICAgICAgICAgICAgICAgICAgIGRlY2ltYWxMZW5ndGgoYSksXG4gICAgICAgICAgICAgICAgICAgIGRlY2ltYWxMZW5ndGgoYilcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgYSA9IGZsb2F0MkludChhLCBsZW5ndGgpO1xuICAgIGIgPSBmbG9hdDJJbnQoYiwgbGVuZ3RoKTtcblxuICAgIHZhciBmYWN0b3IgPSBNYXRoLnBvdygxMCwgbGVuZ3RoKTtcblxuICAgIHJldHVybiAoYSAqIGIpIC8gKGZhY3RvciAqIGZhY3Rvcik7XG5cbn07XG4iXX0=