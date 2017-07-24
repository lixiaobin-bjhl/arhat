/**
 * @fileOverview arhat-service-shipping
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
        mobile: update.mobile,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoaXBwaW5nQWRkcmVzcy5qcyJdLCJuYW1lcyI6WyJsaXN0IiwiYWRkIiwidXBkYXRlIiwic2hvdyIsInJlbW92ZSIsInNldERlZmF1bHQiLCJvcGVuaWQiLCJnZXRPcGVuSWQiLCJwYXJhbXMiLCJPYmplY3QiLCJhc3NpZ24iLCJpZCIsIm5hbWUiLCJtb2JpbGUiLCJyZWdpb24iLCJhZGRyZXNzIiwiaXNEZWZhdWx0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFLQTs7Ozs7UUFVZ0JBLEksR0FBQUEsSTtRQWdCQUMsRyxHQUFBQSxHO1FBa0JBQyxNLEdBQUFBLE07UUFZQUMsSSxHQUFBQSxJO1FBUUFDLE0sR0FBQUEsTTtRQVlBQyxVLEdBQUFBLFU7O0FBMUVoQjs7QUFDQTs7Ozs7O0FBRUE7Ozs7O0FBS08sU0FBU0wsSUFBVCxHQUFpQjtBQUNwQixXQUFPLHVCQUFLLDZCQUFMLEVBQW9DO0FBQ3ZDTSxnQkFBUSxtQkFBU0MsU0FBVDtBQUQrQixLQUFwQyxDQUFQO0FBR0g7O0FBRUQ7Ozs7Ozs7Ozs7QUFVTyxTQUFTTixHQUFULENBQWNPLE1BQWQsRUFBc0I7QUFDekJDLFdBQU9DLE1BQVAsQ0FBY0YsTUFBZCxFQUFzQjtBQUNsQkYsZ0JBQVEsbUJBQVNDLFNBQVQ7QUFEVSxLQUF0QjtBQUdBLFdBQU8sdUJBQUssdUJBQUwsRUFBOEJDLE1BQTlCLENBQVA7QUFDSDs7QUFFRDs7Ozs7Ozs7Ozs7QUFXTyxTQUFTTixNQUFULENBQWlCUyxFQUFqQixFQUFxQlQsTUFBckIsRUFBNkI7QUFDaEMsV0FBTyxzQkFBSSwwQkFBMEJTLEVBQTlCLEVBQWtDO0FBQ3JDQyxjQUFNVixPQUFPVSxJQUR3QjtBQUVyQ0MsZ0JBQVFYLE9BQU9XLE1BRnNCO0FBR3JDQyxnQkFBUVosT0FBT1ksTUFIc0I7QUFJckNDLGlCQUFTYixPQUFPYTtBQUpxQixLQUFsQyxDQUFQO0FBTUg7O0FBRUQ7OztBQUdPLFNBQVNaLElBQVQsQ0FBZVEsRUFBZixFQUFtQjtBQUN0QixXQUFPLHNCQUFJLDBCQUEwQkEsRUFBOUIsQ0FBUDtBQUNIOztBQUVEOzs7O0FBSU8sU0FBU1AsTUFBVCxDQUFpQk8sRUFBakIsRUFBcUI7QUFDeEIsV0FBTyxzQkFBSSwwQkFBMEJBLEVBQTlCLENBQVA7QUFDSDs7QUFFRDs7Ozs7Ozs7QUFRTyxTQUFTTixVQUFULENBQXFCTSxFQUFyQixFQUF5QkssU0FBekIsRUFBb0M7QUFDdkMsV0FBTyxzQkFBSSwwQkFBMEJMLEVBQTlCLEVBQWtDO0FBQ3JDSyxtQkFBV0E7QUFEMEIsS0FBbEMsQ0FBUDtBQUdIIiwiZmlsZSI6InNoaXBwaW5nQWRkcmVzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVPdmVydmlldyBhcmhhdC1zZXJ2aWNlLXNoaXBwaW5nXG4gKiBAYXV0aG9yIFhpYW9CaW4gTGkobGl4aWFvYmluODg3OEBnbWFpbC5jb20pIFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHsgcG9zdCwgZ2V0LCBwdXQsIGRlbH0gZnJvbSAnLi4vZnVuY3Rpb24vc2VydmljZVV0aWwnO1xuaW1wb3J0IHVzZXJJbmZvIGZyb20gJy4uL3BsdWdpbi91c2VySW5mbyc7XG5cbi8qKlxuICog6I635Y+W6YWN6YCB5Zyw5Z2A5YiX6KGoIFxuICogXG4gKiBAcmV1dHJuIHtQcm9taXNlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gbGlzdCAoKSB7XG4gICAgcmV0dXJuIHBvc3QoJy9hcGkvc2hpcHBpbmdBZGRyZXNzL29wZW5pZCcsIHtcbiAgICAgICAgb3BlbmlkOiB1c2VySW5mby5nZXRPcGVuSWQoKVxuICAgIH0pO1xufVxuXG4vKipcbiAqIOa3u+WKoOaUtui0p+WcsOWdgFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMubmFtZSDmlLbotKfkurrlp5PlkI1cbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMubW9iaWxlIOaUtui0p+S6uuaJi+acuuWPt1xuICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5hZGRyZXNzIOaUtui0p+S6uuWcsOWdgFxuICogQHBhcmFtIHtBcnJheX0gcGFyYW1zLnJlZ2lvbiDmlLbotKfkurrnmoTlnLDln5/kv6Hmga9cbiAqIFxuICogQHJldXRybiB7UHJvbWlzZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZCAocGFyYW1zKSB7XG4gICAgT2JqZWN0LmFzc2lnbihwYXJhbXMsIHtcbiAgICAgICAgb3BlbmlkOiB1c2VySW5mby5nZXRPcGVuSWQoKVxuICAgIH0pO1xuICAgIHJldHVybiBwb3N0KCcvYXBpL3NoaXBwaW5nQWRkcmVzcy8nLCBwYXJhbXMpO1xufVxuXG4vKipcbiAqIOabtOaWsOWcsOWdgOS/oeaBr1xuICogXG4gKiBAcGFyYW0ge3N0cmluZ30gaWQg5Zyw5Z2AaWRcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cGRhdGUubmFtZSDlnLDlnYDlkI3np7BcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cGRhdGUubW9iaWxlIOaUtuS7tuaJi+aculxuICogQHBhcmFtIHtzdHJpbmd9IHVwZGF0ZS5yZWdpb24g5pS25Lu25Zyw5Z+fXG4gKiBAcGFyYW0ge3N0cmluZ30gdXBkYXRlLmFkZHJlc3Mg5pS25Lu25Zyw5Z2AXG4gKiBcbiAqIEByZXV0cm4ge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGUgKGlkLCB1cGRhdGUpIHsgICBcbiAgICByZXR1cm4gcHV0KCcvYXBpL3NoaXBwaW5nQWRkcmVzcy8nICsgaWQsIHtcbiAgICAgICAgbmFtZTogdXBkYXRlLm5hbWUsXG4gICAgICAgIG1vYmlsZTogdXBkYXRlLm1vYmlsZSxcbiAgICAgICAgcmVnaW9uOiB1cGRhdGUucmVnaW9uLFxuICAgICAgICBhZGRyZXNzOiB1cGRhdGUuYWRkcmVzc1xuICAgIH0pO1xufVxuXG4vKipcbiAqIOagueaNrmlk6I635Y+W5Zyw5Z2A5L+h5oGvIFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2hvdyAoaWQpIHtcbiAgICByZXR1cm4gZ2V0KCcvYXBpL3NoaXBwaW5nQWRkcmVzcy8nICsgaWQpO1xufVxuXG4vKipcbiAqIOWIoOmZpOWcsOWdgFxuICogQHBhcmFtIHtzdHJpbmd9IGlkIOWcsOWdgGlkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmUgKGlkKSB7XG4gICAgcmV0dXJuIGRlbCgnL2FwaS9zaGlwcGluZ0FkZHJlc3MvJyArIGlkKTtcbn1cblxuLyoqXG4gKiDorr7nva7pu5jorqTmlLbotKflnLDlnYAgXG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfSBpZCBzaGlwcGluZ0FkZHJlc3MgaWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNEZWZhdWx0IOaYr+WQpuiuvue9rum7mOiupFxuICogXG4gKiBAcmV1dHJuIHtQcm9taXNlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdCAoaWQsIGlzRGVmYXVsdCkge1xuICAgIHJldHVybiBwdXQoJy9hcGkvc2hpcHBpbmdBZGRyZXNzLycgKyBpZCwge1xuICAgICAgICBpc0RlZmF1bHQ6IGlzRGVmYXVsdFxuICAgIH0pO1xufVxuXG5cbiJdfQ==