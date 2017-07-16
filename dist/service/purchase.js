/**
 * @fileOverview arhat-service-product
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
 */
function getPrepayId(params) {
  return (0, _serviceUtil.post)('/purchase/prepayid', params);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1cmNoYXNlLmpzIl0sIm5hbWVzIjpbImdldFByZXBheUlkIiwicGFyYW1zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFLQTs7Ozs7UUFPZ0JBLFcsR0FBQUEsVzs7QUFMaEI7O0FBRUE7OztBQUdPLFNBQVNBLFdBQVQsQ0FBc0JDLE1BQXRCLEVBQThCO0FBQ2pDLFNBQU8sdUJBQUssb0JBQUwsRUFBMkJBLE1BQTNCLENBQVA7QUFDSCIsImZpbGUiOiJwdXJjaGFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVPdmVydmlldyBhcmhhdC1zZXJ2aWNlLXByb2R1Y3RcbiAqIEBhdXRob3IgWGlhb0JpbiBMaShsaXhpYW9iaW44ODc4QGdtYWlsLmNvbSkgXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgeyBnZXQsIHBvc3QgfSBmcm9tICcuLi9mdW5jdGlvbi9zZXJ2aWNlVXRpbCc7XG5cbi8qKlxuICog6I635Y+WcHJlcGF5aWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFByZXBheUlkIChwYXJhbXMpIHtcbiAgICByZXR1cm4gcG9zdCgnL3B1cmNoYXNlL3ByZXBheWlkJywgcGFyYW1zKSAgXG59Il19