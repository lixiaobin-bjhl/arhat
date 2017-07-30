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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoaXBwaW5nQWRkcmVzcy5qcyJdLCJuYW1lcyI6WyJsaXN0IiwiYWRkIiwidXBkYXRlIiwic2hvdyIsInJlbW92ZSIsInNldERlZmF1bHQiLCJvcGVuaWQiLCJnZXRPcGVuSWQiLCJwYXJhbXMiLCJPYmplY3QiLCJhc3NpZ24iLCJpZCIsIm5hbWUiLCJtb2JpbGUiLCJyZWdpb24iLCJhZGRyZXNzIiwiaXNEZWZhdWx0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFLQTs7Ozs7UUFVZ0JBLEksR0FBQUEsSTtRQWdCQUMsRyxHQUFBQSxHO1FBa0JBQyxNLEdBQUFBLE07UUFZQUMsSSxHQUFBQSxJO1FBUUFDLE0sR0FBQUEsTTtRQVlBQyxVLEdBQUFBLFU7O0FBMUVoQjs7QUFDQTs7Ozs7O0FBRUE7Ozs7O0FBS08sU0FBU0wsSUFBVCxHQUFpQjtBQUNwQixXQUFPLHVCQUFLLDZCQUFMLEVBQW9DO0FBQ3ZDTSxnQkFBUSxtQkFBU0MsU0FBVDtBQUQrQixLQUFwQyxDQUFQO0FBR0g7O0FBRUQ7Ozs7Ozs7Ozs7QUFVTyxTQUFTTixHQUFULENBQWNPLE1BQWQsRUFBc0I7QUFDekJDLFdBQU9DLE1BQVAsQ0FBY0YsTUFBZCxFQUFzQjtBQUNsQkYsZ0JBQVEsbUJBQVNDLFNBQVQ7QUFEVSxLQUF0QjtBQUdBLFdBQU8sdUJBQUssdUJBQUwsRUFBOEJDLE1BQTlCLENBQVA7QUFDSDs7QUFFRDs7Ozs7Ozs7Ozs7QUFXTyxTQUFTTixNQUFULENBQWlCUyxFQUFqQixFQUFxQlQsTUFBckIsRUFBNkI7QUFDaEMsV0FBTyxzQkFBSSwwQkFBMEJTLEVBQTlCLEVBQWtDO0FBQ3JDQyxjQUFNVixPQUFPVSxJQUR3QjtBQUVyQ0MsZ0JBQVFYLE9BQU9XLE1BRnNCO0FBR3JDQyxnQkFBUVosT0FBT1ksTUFIc0I7QUFJckNDLGlCQUFTYixPQUFPYTtBQUpxQixLQUFsQyxDQUFQO0FBTUg7O0FBRUQ7OztBQUdPLFNBQVNaLElBQVQsQ0FBZVEsRUFBZixFQUFtQjtBQUN0QixXQUFPLHNCQUFJLDBCQUEwQkEsRUFBOUIsQ0FBUDtBQUNIOztBQUVEOzs7O0FBSU8sU0FBU1AsTUFBVCxDQUFpQk8sRUFBakIsRUFBcUI7QUFDeEIsV0FBTyxzQkFBSSwwQkFBMEJBLEVBQTlCLENBQVA7QUFDSDs7QUFFRDs7Ozs7Ozs7QUFRTyxTQUFTTixVQUFULENBQXFCTSxFQUFyQixFQUF5QkssU0FBekIsRUFBb0M7QUFDdkMsV0FBTyxzQkFBSSwwQkFBMEJMLEVBQTlCLEVBQWtDO0FBQ3JDSyxtQkFBV0E7QUFEMEIsS0FBbEMsQ0FBUDtBQUdIIiwiZmlsZSI6InNoaXBwaW5nQWRkcmVzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVPdmVydmlldyBhcmhhdC1zaGlwcGluZ0FkZHJlc3Mtc2VydmljZVxuICogQGF1dGhvciBYaWFvQmluIExpKGxpeGlhb2Jpbjg4NzhAZ21haWwuY29tKSBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7IHBvc3QsIGdldCwgcHV0LCBkZWx9IGZyb20gJy4uL2Z1bmN0aW9uL3NlcnZpY2VVdGlsJztcbmltcG9ydCB1c2VySW5mbyBmcm9tICcuLi9wbHVnaW4vdXNlckluZm8nO1xuXG4vKipcbiAqIOiOt+WPlumFjemAgeWcsOWdgOWIl+ihqCBcbiAqIFxuICogQHJldXRybiB7UHJvbWlzZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxpc3QgKCkge1xuICAgIHJldHVybiBwb3N0KCcvYXBpL3NoaXBwaW5nQWRkcmVzcy9vcGVuaWQnLCB7XG4gICAgICAgIG9wZW5pZDogdXNlckluZm8uZ2V0T3BlbklkKClcbiAgICB9KTtcbn1cblxuLyoqXG4gKiDmt7vliqDmlLbotKflnLDlnYBcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLm5hbWUg5pS26LSn5Lq65aeT5ZCNXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLm1vYmlsZSDmlLbotKfkurrmiYvmnLrlj7dcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuYWRkcmVzcyDmlLbotKfkurrlnLDlnYBcbiAqIEBwYXJhbSB7QXJyYXl9IHBhcmFtcy5yZWdpb24g5pS26LSn5Lq655qE5Zyw5Z+f5L+h5oGvXG4gKiBcbiAqIEByZXV0cm4ge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGQgKHBhcmFtcykge1xuICAgIE9iamVjdC5hc3NpZ24ocGFyYW1zLCB7XG4gICAgICAgIG9wZW5pZDogdXNlckluZm8uZ2V0T3BlbklkKClcbiAgICB9KTtcbiAgICByZXR1cm4gcG9zdCgnL2FwaS9zaGlwcGluZ0FkZHJlc3MvJywgcGFyYW1zKTtcbn1cblxuLyoqXG4gKiDmm7TmlrDlnLDlnYDkv6Hmga9cbiAqIFxuICogQHBhcmFtIHtzdHJpbmd9IGlkIOWcsOWdgGlkXG4gKiBAcGFyYW0ge3N0cmluZ30gdXBkYXRlLm5hbWUg5Zyw5Z2A5ZCN56ewXG4gKiBAcGFyYW0ge3N0cmluZ30gdXBkYXRlLm1vYmlsZSDmlLbku7bmiYvmnLpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cGRhdGUucmVnaW9uIOaUtuS7tuWcsOWfn1xuICogQHBhcmFtIHtzdHJpbmd9IHVwZGF0ZS5hZGRyZXNzIOaUtuS7tuWcsOWdgFxuICogXG4gKiBAcmV1dHJuIHtQcm9taXNlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlIChpZCwgdXBkYXRlKSB7ICAgXG4gICAgcmV0dXJuIHB1dCgnL2FwaS9zaGlwcGluZ0FkZHJlc3MvJyArIGlkLCB7XG4gICAgICAgIG5hbWU6IHVwZGF0ZS5uYW1lLFxuICAgICAgICBtb2JpbGU6IHVwZGF0ZS5tb2JpbGUsXG4gICAgICAgIHJlZ2lvbjogdXBkYXRlLnJlZ2lvbixcbiAgICAgICAgYWRkcmVzczogdXBkYXRlLmFkZHJlc3NcbiAgICB9KTtcbn1cblxuLyoqXG4gKiDmoLnmja5pZOiOt+WPluWcsOWdgOS/oeaBryBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNob3cgKGlkKSB7XG4gICAgcmV0dXJuIGdldCgnL2FwaS9zaGlwcGluZ0FkZHJlc3MvJyArIGlkKTtcbn1cblxuLyoqXG4gKiDliKDpmaTlnLDlnYBcbiAqIEBwYXJhbSB7c3RyaW5nfSBpZCDlnLDlnYBpZFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlIChpZCkge1xuICAgIHJldHVybiBkZWwoJy9hcGkvc2hpcHBpbmdBZGRyZXNzLycgKyBpZCk7XG59XG5cbi8qKlxuICog6K6+572u6buY6K6k5pS26LSn5Zyw5Z2AIFxuICogXG4gKiBAcGFyYW0ge3N0cmluZ30gaWQgc2hpcHBpbmdBZGRyZXNzIGlkXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzRGVmYXVsdCDmmK/lkKborr7nva7pu5jorqRcbiAqIFxuICogQHJldXRybiB7UHJvbWlzZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHQgKGlkLCBpc0RlZmF1bHQpIHtcbiAgICByZXR1cm4gcHV0KCcvYXBpL3NoaXBwaW5nQWRkcmVzcy8nICsgaWQsIHtcbiAgICAgICAgaXNEZWZhdWx0OiBpc0RlZmF1bHRcbiAgICB9KTtcbn1cblxuXG4iXX0=