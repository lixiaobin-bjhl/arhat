/**
 * @fileOverview arhat-product-service
 * @author XiaoBin Li(lixiaobin8878@gmail.com) 
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPrepayId = getPrepayId;

var _serviceUtil = require('./../function/serviceUtil.js');

/**
 * 获取prepayid
 * 
 * @return {Promise}
 */
function getPrepayId() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return (0, _serviceUtil.post)('/purchase/prepayid', params);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1cmNoYXNlLmpzIl0sIm5hbWVzIjpbImdldFByZXBheUlkIiwicGFyYW1zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFLQTs7Ozs7UUFTZ0JBLFcsR0FBQUEsVzs7QUFQaEI7O0FBRUE7Ozs7O0FBS08sU0FBU0EsV0FBVCxHQUFvQztBQUFBLE1BQWRDLE1BQWMsdUVBQUwsRUFBSzs7QUFDdkMsU0FBTyx1QkFBSyxvQkFBTCxFQUEyQkEsTUFBM0IsQ0FBUDtBQUNIIiwiZmlsZSI6InB1cmNoYXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IGFyaGF0LXByb2R1Y3Qtc2VydmljZVxuICogQGF1dGhvciBYaWFvQmluIExpKGxpeGlhb2Jpbjg4NzhAZ21haWwuY29tKSBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7IGdldCwgcG9zdCB9IGZyb20gJy4uL2Z1bmN0aW9uL3NlcnZpY2VVdGlsJztcblxuLyoqXG4gKiDojrflj5ZwcmVwYXlpZFxuICogXG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJlcGF5SWQgKHBhcmFtcyA9IHt9ICkge1xuICAgIHJldHVybiBwb3N0KCcvcHVyY2hhc2UvcHJlcGF5aWQnLCBwYXJhbXMpICBcbn0iXX0=