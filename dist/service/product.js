/**
 * @fileOverview arhat-service-product
 * @author XiaoBin Li(lixiaobin8878@gmail.com) 
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getList = getList;
exports.getDetial = getDetial;

var _serviceUtil = require('./../function/serviceUtil.js');

/**
 * 获取产品列表 
 */
function getList() {
  return (0, _serviceUtil.get)('/api/product');
}

/**
 * 获取产品列表 
 * 
 * @param {string} pid 产品id
 */
function getDetial(pid) {
  return (0, _serviceUtil.get)('/api/product/' + pid);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QuanMiXSwibmFtZXMiOlsiZ2V0TGlzdCIsImdldERldGlhbCIsInBpZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBS0E7Ozs7O1FBT2dCQSxPLEdBQUFBLE87UUFTQUMsUyxHQUFBQSxTOztBQWRoQjs7QUFFQTs7O0FBR08sU0FBU0QsT0FBVCxHQUFvQjtBQUN2QixTQUFPLHNCQUFJLGNBQUosQ0FBUDtBQUNIOztBQUVEOzs7OztBQUtPLFNBQVNDLFNBQVQsQ0FBb0JDLEdBQXBCLEVBQXlCO0FBQzVCLFNBQU8sc0JBQUksa0JBQWtCQSxHQUF0QixDQUFQO0FBQ0giLCJmaWxlIjoicHJvZHVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVPdmVydmlldyBhcmhhdC1zZXJ2aWNlLXByb2R1Y3RcbiAqIEBhdXRob3IgWGlhb0JpbiBMaShsaXhpYW9iaW44ODc4QGdtYWlsLmNvbSkgXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgeyBnZXQgfSBmcm9tICcuLi9mdW5jdGlvbi9zZXJ2aWNlVXRpbCc7XG5cbi8qKlxuICog6I635Y+W5Lqn5ZOB5YiX6KGoIFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGlzdCAoKSB7XG4gICAgcmV0dXJuIGdldCgnL2FwaS9wcm9kdWN0JykgIFxufVxuXG4vKipcbiAqIOiOt+WPluS6p+WTgeWIl+ihqCBcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd9IHBpZCDkuqflk4FpZFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGV0aWFsIChwaWQpIHtcbiAgICByZXR1cm4gZ2V0KCcvYXBpL3Byb2R1Y3QvJyArIHBpZClcbn0iXX0=