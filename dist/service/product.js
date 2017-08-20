/**
 * @fileOverview arhat-product-service
 * @author XiaoBin Li(lixiaobin8878@gmail.com) 
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getList = getList;
exports.getDetial = getDetial;
exports.listByIds = listByIds;

var _serviceUtil = require('./../function/serviceUtil.js');

/**
 * 获取产品列表 
 * 
 * @return {Promise}
 */
function getList() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


  return (0, _serviceUtil.get)('/api/product?productSubjectId=' + (params.subjectId || ''));
}

/**
 * 获取产品列表 
 * 
 * @param {string} pid 产品id
 * 
 * @return {Promise}
 */
function getDetial(pid) {
  return (0, _serviceUtil.get)('/api/product/' + pid);
}

/**
 * 根据商品ids获取商口列表
 * 
 * @param {string} params.products 产品及数量信息
 * 
 * @return {Promise}
 */
function listByIds(params) {
  return (0, _serviceUtil.post)('/api/product/l/', params);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QuanMiXSwibmFtZXMiOlsiZ2V0TGlzdCIsImdldERldGlhbCIsImxpc3RCeUlkcyIsInBhcmFtcyIsInN1YmplY3RJZCIsInBpZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBS0E7Ozs7O1FBU2dCQSxPLEdBQUFBLE87UUFZQUMsUyxHQUFBQSxTO1FBV0FDLFMsR0FBQUEsUzs7QUE5QmhCOztBQUVBOzs7OztBQUtPLFNBQVNGLE9BQVQsR0FBK0I7QUFBQSxNQUFiRyxNQUFhLHVFQUFKLEVBQUk7OztBQUVsQyxTQUFPLHNCQUFJLG9DQUFvQ0EsT0FBT0MsU0FBUCxJQUFvQixFQUF4RCxDQUFKLENBQVA7QUFDSDs7QUFFRDs7Ozs7OztBQU9PLFNBQVNILFNBQVQsQ0FBb0JJLEdBQXBCLEVBQXlCO0FBQzVCLFNBQU8sc0JBQUksa0JBQWtCQSxHQUF0QixDQUFQO0FBQ0g7O0FBRUQ7Ozs7Ozs7QUFPTyxTQUFTSCxTQUFULENBQW9CQyxNQUFwQixFQUE0QjtBQUMvQixTQUFPLHVCQUFLLGlCQUFMLEVBQXdCQSxNQUF4QixDQUFQO0FBQ0giLCJmaWxlIjoicHJvZHVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVPdmVydmlldyBhcmhhdC1wcm9kdWN0LXNlcnZpY2VcbiAqIEBhdXRob3IgWGlhb0JpbiBMaShsaXhpYW9iaW44ODc4QGdtYWlsLmNvbSkgXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgeyBnZXQsIHBvc3QgfSBmcm9tICcuLi9mdW5jdGlvbi9zZXJ2aWNlVXRpbCc7XG5cbi8qKlxuICog6I635Y+W5Lqn5ZOB5YiX6KGoIFxuICogXG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGlzdCAocGFyYW1zID0ge30pIHtcblxuICAgIHJldHVybiBnZXQoJy9hcGkvcHJvZHVjdD9wcm9kdWN0U3ViamVjdElkPScgKyAocGFyYW1zLnN1YmplY3RJZCB8fCAnJykpOyAgXG59XG5cbi8qKlxuICog6I635Y+W5Lqn5ZOB5YiX6KGoIFxuICogXG4gKiBAcGFyYW0ge3N0cmluZ30gcGlkIOS6p+WTgWlkXG4gKiBcbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREZXRpYWwgKHBpZCkge1xuICAgIHJldHVybiBnZXQoJy9hcGkvcHJvZHVjdC8nICsgcGlkKVxufVxuXG4vKipcbiAqIOagueaNruWVhuWTgWlkc+iOt+WPluWVhuWPo+WIl+ihqFxuICogXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLnByb2R1Y3RzIOS6p+WTgeWPiuaVsOmHj+S/oeaBr1xuICogXG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gbGlzdEJ5SWRzIChwYXJhbXMpIHtcbiAgICByZXR1cm4gcG9zdCgnL2FwaS9wcm9kdWN0L2wvJywgcGFyYW1zKTtcbn0iXX0=