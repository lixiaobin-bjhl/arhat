/**
 * @fileOverview arhat-order-service
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
    return (0, _serviceUtil.post)('/api/order/openid', {
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
    return (0, _serviceUtil.post)('/api/order/', params);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLmpzIl0sIm5hbWVzIjpbImxpc3QiLCJhZGQiLCJ1cGRhdGUiLCJzaG93IiwicmVtb3ZlIiwic2V0RGVmYXVsdCIsIm9wZW5pZCIsImdldE9wZW5JZCIsInBhcmFtcyIsIk9iamVjdCIsImFzc2lnbiIsImlkIiwibmFtZSIsIm1vYmlsZSIsInJlZ2lvbiIsImFkZHJlc3MiLCJpc0RlZmF1bHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUtBOzs7OztRQVVnQkEsSSxHQUFBQSxJO1FBZ0JBQyxHLEdBQUFBLEc7UUFrQkFDLE0sR0FBQUEsTTtRQVlBQyxJLEdBQUFBLEk7UUFRQUMsTSxHQUFBQSxNO1FBWUFDLFUsR0FBQUEsVTs7QUExRWhCOztBQUNBOzs7Ozs7QUFFQTs7Ozs7QUFLTyxTQUFTTCxJQUFULEdBQWlCO0FBQ3BCLFdBQU8sdUJBQUssbUJBQUwsRUFBMEI7QUFDN0JNLGdCQUFRLG1CQUFTQyxTQUFUO0FBRHFCLEtBQTFCLENBQVA7QUFHSDs7QUFFRDs7Ozs7Ozs7OztBQVVPLFNBQVNOLEdBQVQsQ0FBY08sTUFBZCxFQUFzQjtBQUN6QkMsV0FBT0MsTUFBUCxDQUFjRixNQUFkLEVBQXNCO0FBQ2xCRixnQkFBUSxtQkFBU0MsU0FBVDtBQURVLEtBQXRCO0FBR0EsV0FBTyx1QkFBSyxhQUFMLEVBQW9CQyxNQUFwQixDQUFQO0FBQ0g7O0FBRUQ7Ozs7Ozs7Ozs7O0FBV08sU0FBU04sTUFBVCxDQUFpQlMsRUFBakIsRUFBcUJULE1BQXJCLEVBQTZCO0FBQ2hDLFdBQU8sc0JBQUksMEJBQTBCUyxFQUE5QixFQUFrQztBQUNyQ0MsY0FBTVYsT0FBT1UsSUFEd0I7QUFFckNDLGdCQUFRWCxPQUFPVyxNQUZzQjtBQUdyQ0MsZ0JBQVFaLE9BQU9ZLE1BSHNCO0FBSXJDQyxpQkFBU2IsT0FBT2E7QUFKcUIsS0FBbEMsQ0FBUDtBQU1IOztBQUVEOzs7QUFHTyxTQUFTWixJQUFULENBQWVRLEVBQWYsRUFBbUI7QUFDdEIsV0FBTyxzQkFBSSwwQkFBMEJBLEVBQTlCLENBQVA7QUFDSDs7QUFFRDs7OztBQUlPLFNBQVNQLE1BQVQsQ0FBaUJPLEVBQWpCLEVBQXFCO0FBQ3hCLFdBQU8sc0JBQUksMEJBQTBCQSxFQUE5QixDQUFQO0FBQ0g7O0FBRUQ7Ozs7Ozs7O0FBUU8sU0FBU04sVUFBVCxDQUFxQk0sRUFBckIsRUFBeUJLLFNBQXpCLEVBQW9DO0FBQ3ZDLFdBQU8sc0JBQUksMEJBQTBCTCxFQUE5QixFQUFrQztBQUNyQ0ssbUJBQVdBO0FBRDBCLEtBQWxDLENBQVA7QUFHSCIsImZpbGUiOiJvcmRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVPdmVydmlldyBhcmhhdC1vcmRlci1zZXJ2aWNlXG4gKiBAYXV0aG9yIFhpYW9CaW4gTGkobGl4aWFvYmluODg3OEBnbWFpbC5jb20pIFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHsgcG9zdCwgZ2V0LCBwdXQsIGRlbH0gZnJvbSAnLi4vZnVuY3Rpb24vc2VydmljZVV0aWwnO1xuaW1wb3J0IHVzZXJJbmZvIGZyb20gJy4uL3BsdWdpbi91c2VySW5mbyc7XG5cbi8qKlxuICog6I635Y+W6YWN6YCB5Zyw5Z2A5YiX6KGoIFxuICogXG4gKiBAcmV1dHJuIHtQcm9taXNlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gbGlzdCAoKSB7XG4gICAgcmV0dXJuIHBvc3QoJy9hcGkvb3JkZXIvb3BlbmlkJywge1xuICAgICAgICBvcGVuaWQ6IHVzZXJJbmZvLmdldE9wZW5JZCgpXG4gICAgfSk7XG59XG5cbi8qKlxuICog5re75Yqg5pS26LSn5Zyw5Z2AXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5uYW1lIOaUtui0p+S6uuWnk+WQjVxuICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5tb2JpbGUg5pS26LSn5Lq65omL5py65Y+3XG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLmFkZHJlc3Mg5pS26LSn5Lq65Zyw5Z2AXG4gKiBAcGFyYW0ge0FycmF5fSBwYXJhbXMucmVnaW9uIOaUtui0p+S6uueahOWcsOWfn+S/oeaBr1xuICogXG4gKiBAcmV1dHJuIHtQcm9taXNlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkIChwYXJhbXMpIHtcbiAgICBPYmplY3QuYXNzaWduKHBhcmFtcywge1xuICAgICAgICBvcGVuaWQ6IHVzZXJJbmZvLmdldE9wZW5JZCgpXG4gICAgfSk7XG4gICAgcmV0dXJuIHBvc3QoJy9hcGkvb3JkZXIvJywgcGFyYW1zKTtcbn1cblxuLyoqXG4gKiDmm7TmlrDlnLDlnYDkv6Hmga9cbiAqIFxuICogQHBhcmFtIHtzdHJpbmd9IGlkIOWcsOWdgGlkXG4gKiBAcGFyYW0ge3N0cmluZ30gdXBkYXRlLm5hbWUg5Zyw5Z2A5ZCN56ewXG4gKiBAcGFyYW0ge3N0cmluZ30gdXBkYXRlLm1vYmlsZSDmlLbku7bmiYvmnLpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cGRhdGUucmVnaW9uIOaUtuS7tuWcsOWfn1xuICogQHBhcmFtIHtzdHJpbmd9IHVwZGF0ZS5hZGRyZXNzIOaUtuS7tuWcsOWdgFxuICogXG4gKiBAcmV1dHJuIHtQcm9taXNlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlIChpZCwgdXBkYXRlKSB7ICAgXG4gICAgcmV0dXJuIHB1dCgnL2FwaS9zaGlwcGluZ0FkZHJlc3MvJyArIGlkLCB7XG4gICAgICAgIG5hbWU6IHVwZGF0ZS5uYW1lLFxuICAgICAgICBtb2JpbGU6IHVwZGF0ZS5tb2JpbGUsXG4gICAgICAgIHJlZ2lvbjogdXBkYXRlLnJlZ2lvbixcbiAgICAgICAgYWRkcmVzczogdXBkYXRlLmFkZHJlc3NcbiAgICB9KTtcbn1cblxuLyoqXG4gKiDmoLnmja5pZOiOt+WPluWcsOWdgOS/oeaBryBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNob3cgKGlkKSB7XG4gICAgcmV0dXJuIGdldCgnL2FwaS9zaGlwcGluZ0FkZHJlc3MvJyArIGlkKTtcbn1cblxuLyoqXG4gKiDliKDpmaTlnLDlnYBcbiAqIEBwYXJhbSB7c3RyaW5nfSBpZCDlnLDlnYBpZFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlIChpZCkge1xuICAgIHJldHVybiBkZWwoJy9hcGkvc2hpcHBpbmdBZGRyZXNzLycgKyBpZCk7XG59XG5cbi8qKlxuICog6K6+572u6buY6K6k5pS26LSn5Zyw5Z2AIFxuICogXG4gKiBAcGFyYW0ge3N0cmluZ30gaWQgc2hpcHBpbmdBZGRyZXNzIGlkXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzRGVmYXVsdCDmmK/lkKborr7nva7pu5jorqRcbiAqIFxuICogQHJldXRybiB7UHJvbWlzZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHQgKGlkLCBpc0RlZmF1bHQpIHtcbiAgICByZXR1cm4gcHV0KCcvYXBpL3NoaXBwaW5nQWRkcmVzcy8nICsgaWQsIHtcbiAgICAgICAgaXNEZWZhdWx0OiBpc0RlZmF1bHRcbiAgICB9KTtcbn0iXX0=