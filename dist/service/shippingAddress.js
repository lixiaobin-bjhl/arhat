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
        openid: _userInfo2.default.getOpenId()
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
        openid: _userInfo2.default.getOpenId()
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
 */
function show(id) {
    return (0, _serviceUtil.get)('/api/shippingAddress/' + id);
}

/**
 * 删除地址
 * @param {string} id 地址id
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoaXBwaW5nQWRkcmVzcy5qcyJdLCJuYW1lcyI6WyJsaXN0IiwiYWRkIiwidXBkYXRlIiwic2hvdyIsInJlbW92ZSIsInNldERlZmF1bHQiLCJvcGVuaWQiLCJnZXRPcGVuSWQiLCJwYXJhbXMiLCJPYmplY3QiLCJhc3NpZ24iLCJtb2JpbGUiLCJpZCIsIm5hbWUiLCJjb250YWN0TnVtYmVyIiwicmVnaW9uIiwiYWRkcmVzcyIsImlzRGVmYXVsdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBS0E7Ozs7O1FBV2dCQSxJLEdBQUFBLEk7UUFnQkFDLEcsR0FBQUEsRztRQW1CQUMsTSxHQUFBQSxNO1FBWUFDLEksR0FBQUEsSTtRQVFBQyxNLEdBQUFBLE07UUFZQUMsVSxHQUFBQSxVOztBQTVFaEI7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUE7Ozs7O0FBS08sU0FBU0wsSUFBVCxHQUFpQjtBQUNwQixXQUFPLHVCQUFLLDZCQUFMLEVBQW9DO0FBQ3ZDTSxnQkFBUSxtQkFBU0MsU0FBVDtBQUQrQixLQUFwQyxDQUFQO0FBR0g7O0FBRUQ7Ozs7Ozs7Ozs7QUFVTyxTQUFTTixHQUFULENBQWNPLE1BQWQsRUFBc0I7QUFDekJDLFdBQU9DLE1BQVAsQ0FBY0YsTUFBZCxFQUFzQjtBQUNsQkcsZ0JBQVEsaUJBQU9BLE1BREc7QUFFbEJMLGdCQUFRLG1CQUFTQyxTQUFUO0FBRlUsS0FBdEI7QUFJQSxXQUFPLHVCQUFLLHVCQUFMLEVBQThCQyxNQUE5QixDQUFQO0FBQ0g7O0FBRUQ7Ozs7Ozs7Ozs7O0FBV08sU0FBU04sTUFBVCxDQUFpQlUsRUFBakIsRUFBcUJWLE1BQXJCLEVBQTZCO0FBQ2hDLFdBQU8sc0JBQUksMEJBQTBCVSxFQUE5QixFQUFrQztBQUNyQ0MsY0FBTVgsT0FBT1csSUFEd0I7QUFFckNDLHVCQUFlWixPQUFPWSxhQUZlO0FBR3JDQyxnQkFBUWIsT0FBT2EsTUFIc0I7QUFJckNDLGlCQUFTZCxPQUFPYztBQUpxQixLQUFsQyxDQUFQO0FBTUg7O0FBRUQ7OztBQUdPLFNBQVNiLElBQVQsQ0FBZVMsRUFBZixFQUFtQjtBQUN0QixXQUFPLHNCQUFJLDBCQUEwQkEsRUFBOUIsQ0FBUDtBQUNIOztBQUVEOzs7O0FBSU8sU0FBU1IsTUFBVCxDQUFpQlEsRUFBakIsRUFBcUI7QUFDeEIsV0FBTyxzQkFBSSwwQkFBMEJBLEVBQTlCLENBQVA7QUFDSDs7QUFFRDs7Ozs7Ozs7QUFRTyxTQUFTUCxVQUFULENBQXFCTyxFQUFyQixFQUF5QkssU0FBekIsRUFBb0M7QUFDdkMsV0FBTyxzQkFBSSwwQkFBMEJMLEVBQTlCLEVBQWtDO0FBQ3JDSyxtQkFBV0E7QUFEMEIsS0FBbEMsQ0FBUDtBQUdIIiwiZmlsZSI6InNoaXBwaW5nQWRkcmVzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVPdmVydmlldyBhcmhhdC1zaGlwcGluZ0FkZHJlc3Mtc2VydmljZVxuICogQGF1dGhvciBYaWFvQmluIExpKGxpeGlhb2Jpbjg4NzhAZ21haWwuY29tKSBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7IHBvc3QsIGdldCwgcHV0LCBkZWx9IGZyb20gJy4uL2Z1bmN0aW9uL3NlcnZpY2VVdGlsJztcbmltcG9ydCB1c2VySW5mbyBmcm9tICcuLi9wbHVnaW4vdXNlckluZm8nO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnO1xuXG4vKipcbiAqIOiOt+WPlumFjemAgeWcsOWdgOWIl+ihqCBcbiAqIFxuICogQHJldXRybiB7UHJvbWlzZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxpc3QgKCkge1xuICAgIHJldHVybiBwb3N0KCcvYXBpL3NoaXBwaW5nQWRkcmVzcy9vcGVuaWQnLCB7XG4gICAgICAgIG9wZW5pZDogdXNlckluZm8uZ2V0T3BlbklkKClcbiAgICB9KTtcbn1cblxuLyoqXG4gKiDmt7vliqDmlLbotKflnLDlnYBcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLm5hbWUg5pS26LSn5Lq65aeT5ZCNXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLm1vYmlsZSDmlLbotKfkurrmiYvmnLrlj7dcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuYWRkcmVzcyDmlLbotKfkurrlnLDlnYBcbiAqIEBwYXJhbSB7QXJyYXl9IHBhcmFtcy5yZWdpb24g5pS26LSn5Lq655qE5Zyw5Z+f5L+h5oGvXG4gKiBcbiAqIEByZXV0cm4ge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGQgKHBhcmFtcykge1xuICAgIE9iamVjdC5hc3NpZ24ocGFyYW1zLCB7XG4gICAgICAgIG1vYmlsZTogY29uZmlnLm1vYmlsZSxcbiAgICAgICAgb3BlbmlkOiB1c2VySW5mby5nZXRPcGVuSWQoKVxuICAgIH0pO1xuICAgIHJldHVybiBwb3N0KCcvYXBpL3NoaXBwaW5nQWRkcmVzcy8nLCBwYXJhbXMpO1xufVxuXG4vKipcbiAqIOabtOaWsOWcsOWdgOS/oeaBr1xuICogXG4gKiBAcGFyYW0ge3N0cmluZ30gaWQg5Zyw5Z2AaWRcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cGRhdGUubmFtZSDlnLDlnYDlkI3np7BcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cGRhdGUubW9iaWxlIOaUtuS7tuaJi+aculxuICogQHBhcmFtIHtzdHJpbmd9IHVwZGF0ZS5yZWdpb24g5pS25Lu25Zyw5Z+fXG4gKiBAcGFyYW0ge3N0cmluZ30gdXBkYXRlLmFkZHJlc3Mg5pS25Lu25Zyw5Z2AXG4gKiBcbiAqIEByZXV0cm4ge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGUgKGlkLCB1cGRhdGUpIHsgXG4gICAgcmV0dXJuIHB1dCgnL2FwaS9zaGlwcGluZ0FkZHJlc3MvJyArIGlkLCB7XG4gICAgICAgIG5hbWU6IHVwZGF0ZS5uYW1lLFxuICAgICAgICBjb250YWN0TnVtYmVyOiB1cGRhdGUuY29udGFjdE51bWJlcixcbiAgICAgICAgcmVnaW9uOiB1cGRhdGUucmVnaW9uLFxuICAgICAgICBhZGRyZXNzOiB1cGRhdGUuYWRkcmVzc1xuICAgIH0pO1xufVxuXG4vKipcbiAqIOagueaNrmlk6I635Y+W5Zyw5Z2A5L+h5oGvIFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2hvdyAoaWQpIHtcbiAgICByZXR1cm4gZ2V0KCcvYXBpL3NoaXBwaW5nQWRkcmVzcy8nICsgaWQpO1xufVxuXG4vKipcbiAqIOWIoOmZpOWcsOWdgFxuICogQHBhcmFtIHtzdHJpbmd9IGlkIOWcsOWdgGlkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmUgKGlkKSB7XG4gICAgcmV0dXJuIGRlbCgnL2FwaS9zaGlwcGluZ0FkZHJlc3MvJyArIGlkKTtcbn1cblxuLyoqXG4gKiDorr7nva7pu5jorqTmlLbotKflnLDlnYAgXG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfSBpZCBzaGlwcGluZ0FkZHJlc3MgaWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNEZWZhdWx0IOaYr+WQpuiuvue9rum7mOiupFxuICogXG4gKiBAcmV1dHJuIHtQcm9taXNlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdCAoaWQsIGlzRGVmYXVsdCkge1xuICAgIHJldHVybiBwdXQoJy9hcGkvc2hpcHBpbmdBZGRyZXNzLycgKyBpZCwge1xuICAgICAgICBpc0RlZmF1bHQ6IGlzRGVmYXVsdFxuICAgIH0pO1xufVxuXG5cbiJdfQ==