/**
 * @fileOverview arhat-shippingAddress-service
 * @author XiaoBin Li(lixiaobin8878@gmail.com) 
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.list = list;
exports.add = add;
exports.update = update;
exports.show = show;
exports.remove = remove;
exports.setDefault = setDefault;

var _serviceUtil = require('./../function/serviceUtil.js');

var _userInfo = require('./../plugin/userInfo.js');

var _userInfo2 = _interopRequireDefault(_userInfo);

var _config = require('./../config.js');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 获取配送地址列表 
 * 
 * @reutrn {Promise}
 */
function list() {
    return (0, _serviceUtil.post)('/api/shippingAddress/openid', {
        openid: _userInfo2.default.getOpenid()
    });
}

/**
 * 添加收货地址
 *
 * @param {string} params.name 收货人姓名
 * @param {string} params.mobile 收货人手机号
 * @param {string} params.address 收货人地址
 * @param {Array} params.region 收货人的地域信息
 * 
 * @reutrn {Promise}
 */
function add(params) {
    Object.assign(params, {
        mobile: _config2.default.mobile,
        user: _userInfo2.default.getUserid(),
        openid: _userInfo2.default.getOpenid()
    });
    return (0, _serviceUtil.post)('/api/shippingAddress/', params);
}

/**
 * 更新地址信息
 * 
 * @param {string} id 地址id
 * @param {string} update.name 地址名称
 * @param {string} update.mobile 收件手机
 * @param {string} update.region 收件地域
 * @param {string} update.address 收件地址
 * 
 * @reutrn {Promise}
 */
function update(id, update) {
    return (0, _serviceUtil.put)('/api/shippingAddress/' + id, {
        name: update.name,
        contactNumber: update.contactNumber,
        region: update.region,
        address: update.address
    });
}

/**
 * 根据id获取地址信息 
 * 
 * @return {Promise}
 */
function show(id) {
    return (0, _serviceUtil.get)('/api/shippingAddress/' + id);
}

/**
 * 删除地址
 * @param {string} id 地址id
 * 
 * @return {Promise}
 */
function remove(id) {
    return (0, _serviceUtil.del)('/api/shippingAddress/' + id);
}

/**
 * 设置默认收货地址 
 * 
 * @param {string} id shippingAddress id
 * @param {Boolean} isDefault 是否设置默认
 * 
 * @reutrn {Promise}
 */
function setDefault(id, isDefault) {
    return (0, _serviceUtil.put)('/api/shippingAddress/' + id, {
        isDefault: isDefault
    });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoaXBwaW5nQWRkcmVzcy5qcyJdLCJuYW1lcyI6WyJsaXN0IiwiYWRkIiwidXBkYXRlIiwic2hvdyIsInJlbW92ZSIsInNldERlZmF1bHQiLCJvcGVuaWQiLCJnZXRPcGVuaWQiLCJwYXJhbXMiLCJPYmplY3QiLCJhc3NpZ24iLCJtb2JpbGUiLCJ1c2VyIiwiZ2V0VXNlcmlkIiwiaWQiLCJuYW1lIiwiY29udGFjdE51bWJlciIsInJlZ2lvbiIsImFkZHJlc3MiLCJpc0RlZmF1bHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUtBOzs7OztRQVdnQkEsSSxHQUFBQSxJO1FBZ0JBQyxHLEdBQUFBLEc7UUFvQkFDLE0sR0FBQUEsTTtRQWNBQyxJLEdBQUFBLEk7UUFVQUMsTSxHQUFBQSxNO1FBWUFDLFUsR0FBQUEsVTs7QUFqRmhCOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBOzs7OztBQUtPLFNBQVNMLElBQVQsR0FBaUI7QUFDcEIsV0FBTyx1QkFBSyw2QkFBTCxFQUFvQztBQUN2Q00sZ0JBQVEsbUJBQVNDLFNBQVQ7QUFEK0IsS0FBcEMsQ0FBUDtBQUdIOztBQUVEOzs7Ozs7Ozs7O0FBVU8sU0FBU04sR0FBVCxDQUFjTyxNQUFkLEVBQXNCO0FBQ3pCQyxXQUFPQyxNQUFQLENBQWNGLE1BQWQsRUFBc0I7QUFDbEJHLGdCQUFRLGlCQUFPQSxNQURHO0FBRWxCQyxjQUFPLG1CQUFTQyxTQUFULEVBRlc7QUFHbEJQLGdCQUFRLG1CQUFTQyxTQUFUO0FBSFUsS0FBdEI7QUFLQSxXQUFPLHVCQUFLLHVCQUFMLEVBQThCQyxNQUE5QixDQUFQO0FBQ0g7O0FBRUQ7Ozs7Ozs7Ozs7O0FBV08sU0FBU04sTUFBVCxDQUFpQlksRUFBakIsRUFBcUJaLE1BQXJCLEVBQTZCO0FBQ2hDLFdBQU8sc0JBQUksMEJBQTBCWSxFQUE5QixFQUFrQztBQUNyQ0MsY0FBTWIsT0FBT2EsSUFEd0I7QUFFckNDLHVCQUFlZCxPQUFPYyxhQUZlO0FBR3JDQyxnQkFBUWYsT0FBT2UsTUFIc0I7QUFJckNDLGlCQUFTaEIsT0FBT2dCO0FBSnFCLEtBQWxDLENBQVA7QUFNSDs7QUFFRDs7Ozs7QUFLTyxTQUFTZixJQUFULENBQWVXLEVBQWYsRUFBbUI7QUFDdEIsV0FBTyxzQkFBSSwwQkFBMEJBLEVBQTlCLENBQVA7QUFDSDs7QUFFRDs7Ozs7O0FBTU8sU0FBU1YsTUFBVCxDQUFpQlUsRUFBakIsRUFBcUI7QUFDeEIsV0FBTyxzQkFBSSwwQkFBMEJBLEVBQTlCLENBQVA7QUFDSDs7QUFFRDs7Ozs7Ozs7QUFRTyxTQUFTVCxVQUFULENBQXFCUyxFQUFyQixFQUF5QkssU0FBekIsRUFBb0M7QUFDdkMsV0FBTyxzQkFBSSwwQkFBMEJMLEVBQTlCLEVBQWtDO0FBQ3JDSyxtQkFBV0E7QUFEMEIsS0FBbEMsQ0FBUDtBQUdIIiwiZmlsZSI6InNoaXBwaW5nQWRkcmVzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVPdmVydmlldyBhcmhhdC1zaGlwcGluZ0FkZHJlc3Mtc2VydmljZVxuICogQGF1dGhvciBYaWFvQmluIExpKGxpeGlhb2Jpbjg4NzhAZ21haWwuY29tKSBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7IHBvc3QsIGdldCwgcHV0LCBkZWx9IGZyb20gJy4uL2Z1bmN0aW9uL3NlcnZpY2VVdGlsJztcbmltcG9ydCB1c2VySW5mbyBmcm9tICcuLi9wbHVnaW4vdXNlckluZm8nO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnO1xuXG4vKipcbiAqIOiOt+WPlumFjemAgeWcsOWdgOWIl+ihqCBcbiAqIFxuICogQHJldXRybiB7UHJvbWlzZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxpc3QgKCkge1xuICAgIHJldHVybiBwb3N0KCcvYXBpL3NoaXBwaW5nQWRkcmVzcy9vcGVuaWQnLCB7XG4gICAgICAgIG9wZW5pZDogdXNlckluZm8uZ2V0T3BlbmlkKClcbiAgICB9KTtcbn1cblxuLyoqXG4gKiDmt7vliqDmlLbotKflnLDlnYBcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLm5hbWUg5pS26LSn5Lq65aeT5ZCNXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLm1vYmlsZSDmlLbotKfkurrmiYvmnLrlj7dcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuYWRkcmVzcyDmlLbotKfkurrlnLDlnYBcbiAqIEBwYXJhbSB7QXJyYXl9IHBhcmFtcy5yZWdpb24g5pS26LSn5Lq655qE5Zyw5Z+f5L+h5oGvXG4gKiBcbiAqIEByZXV0cm4ge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGQgKHBhcmFtcykge1xuICAgIE9iamVjdC5hc3NpZ24ocGFyYW1zLCB7XG4gICAgICAgIG1vYmlsZTogY29uZmlnLm1vYmlsZSxcbiAgICAgICAgdXNlcjogIHVzZXJJbmZvLmdldFVzZXJpZCgpLFxuICAgICAgICBvcGVuaWQ6IHVzZXJJbmZvLmdldE9wZW5pZCgpXG4gICAgfSk7XG4gICAgcmV0dXJuIHBvc3QoJy9hcGkvc2hpcHBpbmdBZGRyZXNzLycsIHBhcmFtcyk7XG59XG5cbi8qKlxuICog5pu05paw5Zyw5Z2A5L+h5oGvXG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfSBpZCDlnLDlnYBpZFxuICogQHBhcmFtIHtzdHJpbmd9IHVwZGF0ZS5uYW1lIOWcsOWdgOWQjeensFxuICogQHBhcmFtIHtzdHJpbmd9IHVwZGF0ZS5tb2JpbGUg5pS25Lu25omL5py6XG4gKiBAcGFyYW0ge3N0cmluZ30gdXBkYXRlLnJlZ2lvbiDmlLbku7blnLDln59cbiAqIEBwYXJhbSB7c3RyaW5nfSB1cGRhdGUuYWRkcmVzcyDmlLbku7blnLDlnYBcbiAqIFxuICogQHJldXRybiB7UHJvbWlzZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZSAoaWQsIHVwZGF0ZSkgeyBcbiAgICByZXR1cm4gcHV0KCcvYXBpL3NoaXBwaW5nQWRkcmVzcy8nICsgaWQsIHtcbiAgICAgICAgbmFtZTogdXBkYXRlLm5hbWUsXG4gICAgICAgIGNvbnRhY3ROdW1iZXI6IHVwZGF0ZS5jb250YWN0TnVtYmVyLFxuICAgICAgICByZWdpb246IHVwZGF0ZS5yZWdpb24sXG4gICAgICAgIGFkZHJlc3M6IHVwZGF0ZS5hZGRyZXNzXG4gICAgfSk7XG59XG5cbi8qKlxuICog5qC55o2uaWTojrflj5blnLDlnYDkv6Hmga8gXG4gKiBcbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaG93IChpZCkge1xuICAgIHJldHVybiBnZXQoJy9hcGkvc2hpcHBpbmdBZGRyZXNzLycgKyBpZCk7XG59XG5cbi8qKlxuICog5Yig6Zmk5Zyw5Z2AXG4gKiBAcGFyYW0ge3N0cmluZ30gaWQg5Zyw5Z2AaWRcbiAqIFxuICogQHJldHVybiB7UHJvbWlzZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZSAoaWQpIHtcbiAgICByZXR1cm4gZGVsKCcvYXBpL3NoaXBwaW5nQWRkcmVzcy8nICsgaWQpO1xufVxuXG4vKipcbiAqIOiuvue9rum7mOiupOaUtui0p+WcsOWdgCBcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd9IGlkIHNoaXBwaW5nQWRkcmVzcyBpZFxuICogQHBhcmFtIHtCb29sZWFufSBpc0RlZmF1bHQg5piv5ZCm6K6+572u6buY6K6kXG4gKiBcbiAqIEByZXV0cm4ge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0IChpZCwgaXNEZWZhdWx0KSB7XG4gICAgcmV0dXJuIHB1dCgnL2FwaS9zaGlwcGluZ0FkZHJlc3MvJyArIGlkLCB7XG4gICAgICAgIGlzRGVmYXVsdDogaXNEZWZhdWx0XG4gICAgfSk7XG59XG5cblxuIl19