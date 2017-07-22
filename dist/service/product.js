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
exports.listByIds = listByIds;

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

/**
 * 根据商品ids获取商口列表
 * 
 * @param {string} params.products 产品及数量信息
 */
function listByIds(params) {
  return (0, _serviceUtil.post)('/api/product/l/', params);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QuanMiXSwibmFtZXMiOlsiZ2V0TGlzdCIsImdldERldGlhbCIsImxpc3RCeUlkcyIsInBpZCIsInBhcmFtcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBS0E7Ozs7O1FBT2dCQSxPLEdBQUFBLE87UUFTQUMsUyxHQUFBQSxTO1FBU0FDLFMsR0FBQUEsUzs7QUF2QmhCOztBQUVBOzs7QUFHTyxTQUFTRixPQUFULEdBQW9CO0FBQ3ZCLFNBQU8sc0JBQUksY0FBSixDQUFQO0FBQ0g7O0FBRUQ7Ozs7O0FBS08sU0FBU0MsU0FBVCxDQUFvQkUsR0FBcEIsRUFBeUI7QUFDNUIsU0FBTyxzQkFBSSxrQkFBa0JBLEdBQXRCLENBQVA7QUFDSDs7QUFFRDs7Ozs7QUFLTyxTQUFTRCxTQUFULENBQW9CRSxNQUFwQixFQUE0QjtBQUMvQixTQUFPLHVCQUFLLGlCQUFMLEVBQXdCQSxNQUF4QixDQUFQO0FBQ0giLCJmaWxlIjoicHJvZHVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVPdmVydmlldyBhcmhhdC1zZXJ2aWNlLXByb2R1Y3RcbiAqIEBhdXRob3IgWGlhb0JpbiBMaShsaXhpYW9iaW44ODc4QGdtYWlsLmNvbSkgXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgeyBnZXQsIHBvc3QgfSBmcm9tICcuLi9mdW5jdGlvbi9zZXJ2aWNlVXRpbCc7XG5cbi8qKlxuICog6I635Y+W5Lqn5ZOB5YiX6KGoIFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGlzdCAoKSB7XG4gICAgcmV0dXJuIGdldCgnL2FwaS9wcm9kdWN0JykgIFxufVxuXG4vKipcbiAqIOiOt+WPluS6p+WTgeWIl+ihqCBcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd9IHBpZCDkuqflk4FpZFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGV0aWFsIChwaWQpIHtcbiAgICByZXR1cm4gZ2V0KCcvYXBpL3Byb2R1Y3QvJyArIHBpZClcbn1cblxuLyoqXG4gKiDmoLnmja7llYblk4FpZHPojrflj5bllYblj6PliJfooahcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5wcm9kdWN0cyDkuqflk4Hlj4rmlbDph4/kv6Hmga9cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxpc3RCeUlkcyAocGFyYW1zKSB7XG4gICAgcmV0dXJuIHBvc3QoJy9hcGkvcHJvZHVjdC9sLycsIHBhcmFtcyk7XG59Il19