/**
 * @fileOverview arhat-service-order
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLmpzIl0sIm5hbWVzIjpbImxpc3QiLCJhZGQiLCJ1cGRhdGUiLCJzaG93IiwicmVtb3ZlIiwic2V0RGVmYXVsdCIsIm9wZW5pZCIsImdldE9wZW5JZCIsInBhcmFtcyIsIk9iamVjdCIsImFzc2lnbiIsImlkIiwibmFtZSIsIm1vYmlsZSIsInJlZ2lvbiIsImFkZHJlc3MiLCJpc0RlZmF1bHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUtBOzs7OztRQVVnQkEsSSxHQUFBQSxJO1FBZ0JBQyxHLEdBQUFBLEc7UUFrQkFDLE0sR0FBQUEsTTtRQVlBQyxJLEdBQUFBLEk7UUFRQUMsTSxHQUFBQSxNO1FBWUFDLFUsR0FBQUEsVTs7QUExRWhCOztBQUNBOzs7Ozs7QUFFQTs7Ozs7QUFLTyxTQUFTTCxJQUFULEdBQWlCO0FBQ3BCLFdBQU8sdUJBQUssNkJBQUwsRUFBb0M7QUFDdkNNLGdCQUFRLG1CQUFTQyxTQUFUO0FBRCtCLEtBQXBDLENBQVA7QUFHSDs7QUFFRDs7Ozs7Ozs7OztBQVVPLFNBQVNOLEdBQVQsQ0FBY08sTUFBZCxFQUFzQjtBQUN6QkMsV0FBT0MsTUFBUCxDQUFjRixNQUFkLEVBQXNCO0FBQ2xCRixnQkFBUSxtQkFBU0MsU0FBVDtBQURVLEtBQXRCO0FBR0EsV0FBTyx1QkFBSyxhQUFMLEVBQW9CQyxNQUFwQixDQUFQO0FBQ0g7O0FBRUQ7Ozs7Ozs7Ozs7O0FBV08sU0FBU04sTUFBVCxDQUFpQlMsRUFBakIsRUFBcUJULE1BQXJCLEVBQTZCO0FBQ2hDLFdBQU8sc0JBQUksMEJBQTBCUyxFQUE5QixFQUFrQztBQUNyQ0MsY0FBTVYsT0FBT1UsSUFEd0I7QUFFckNDLGdCQUFRWCxPQUFPVyxNQUZzQjtBQUdyQ0MsZ0JBQVFaLE9BQU9ZLE1BSHNCO0FBSXJDQyxpQkFBU2IsT0FBT2E7QUFKcUIsS0FBbEMsQ0FBUDtBQU1IOztBQUVEOzs7QUFHTyxTQUFTWixJQUFULENBQWVRLEVBQWYsRUFBbUI7QUFDdEIsV0FBTyxzQkFBSSwwQkFBMEJBLEVBQTlCLENBQVA7QUFDSDs7QUFFRDs7OztBQUlPLFNBQVNQLE1BQVQsQ0FBaUJPLEVBQWpCLEVBQXFCO0FBQ3hCLFdBQU8sc0JBQUksMEJBQTBCQSxFQUE5QixDQUFQO0FBQ0g7O0FBRUQ7Ozs7Ozs7O0FBUU8sU0FBU04sVUFBVCxDQUFxQk0sRUFBckIsRUFBeUJLLFNBQXpCLEVBQW9DO0FBQ3ZDLFdBQU8sc0JBQUksMEJBQTBCTCxFQUE5QixFQUFrQztBQUNyQ0ssbUJBQVdBO0FBRDBCLEtBQWxDLENBQVA7QUFHSCIsImZpbGUiOiJvcmRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVPdmVydmlldyBhcmhhdC1zZXJ2aWNlLW9yZGVyXG4gKiBAYXV0aG9yIFhpYW9CaW4gTGkobGl4aWFvYmluODg3OEBnbWFpbC5jb20pIFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHsgcG9zdCwgZ2V0LCBwdXQsIGRlbH0gZnJvbSAnLi4vZnVuY3Rpb24vc2VydmljZVV0aWwnO1xuaW1wb3J0IHVzZXJJbmZvIGZyb20gJy4uL3BsdWdpbi91c2VySW5mbyc7XG5cbi8qKlxuICog6I635Y+W6YWN6YCB5Zyw5Z2A5YiX6KGoIFxuICogXG4gKiBAcmV1dHJuIHtQcm9taXNlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gbGlzdCAoKSB7XG4gICAgcmV0dXJuIHBvc3QoJy9hcGkvc2hpcHBpbmdBZGRyZXNzL29wZW5pZCcsIHtcbiAgICAgICAgb3BlbmlkOiB1c2VySW5mby5nZXRPcGVuSWQoKVxuICAgIH0pO1xufVxuXG4vKipcbiAqIOa3u+WKoOaUtui0p+WcsOWdgFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMubmFtZSDmlLbotKfkurrlp5PlkI1cbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMubW9iaWxlIOaUtui0p+S6uuaJi+acuuWPt1xuICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5hZGRyZXNzIOaUtui0p+S6uuWcsOWdgFxuICogQHBhcmFtIHtBcnJheX0gcGFyYW1zLnJlZ2lvbiDmlLbotKfkurrnmoTlnLDln5/kv6Hmga9cbiAqIFxuICogQHJldXRybiB7UHJvbWlzZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZCAocGFyYW1zKSB7XG4gICAgT2JqZWN0LmFzc2lnbihwYXJhbXMsIHtcbiAgICAgICAgb3BlbmlkOiB1c2VySW5mby5nZXRPcGVuSWQoKVxuICAgIH0pO1xuICAgIHJldHVybiBwb3N0KCcvYXBpL29yZGVyLycsIHBhcmFtcyk7XG59XG5cbi8qKlxuICog5pu05paw5Zyw5Z2A5L+h5oGvXG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfSBpZCDlnLDlnYBpZFxuICogQHBhcmFtIHtzdHJpbmd9IHVwZGF0ZS5uYW1lIOWcsOWdgOWQjeensFxuICogQHBhcmFtIHtzdHJpbmd9IHVwZGF0ZS5tb2JpbGUg5pS25Lu25omL5py6XG4gKiBAcGFyYW0ge3N0cmluZ30gdXBkYXRlLnJlZ2lvbiDmlLbku7blnLDln59cbiAqIEBwYXJhbSB7c3RyaW5nfSB1cGRhdGUuYWRkcmVzcyDmlLbku7blnLDlnYBcbiAqIFxuICogQHJldXRybiB7UHJvbWlzZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZSAoaWQsIHVwZGF0ZSkgeyAgIFxuICAgIHJldHVybiBwdXQoJy9hcGkvc2hpcHBpbmdBZGRyZXNzLycgKyBpZCwge1xuICAgICAgICBuYW1lOiB1cGRhdGUubmFtZSxcbiAgICAgICAgbW9iaWxlOiB1cGRhdGUubW9iaWxlLFxuICAgICAgICByZWdpb246IHVwZGF0ZS5yZWdpb24sXG4gICAgICAgIGFkZHJlc3M6IHVwZGF0ZS5hZGRyZXNzXG4gICAgfSk7XG59XG5cbi8qKlxuICog5qC55o2uaWTojrflj5blnLDlnYDkv6Hmga8gXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaG93IChpZCkge1xuICAgIHJldHVybiBnZXQoJy9hcGkvc2hpcHBpbmdBZGRyZXNzLycgKyBpZCk7XG59XG5cbi8qKlxuICog5Yig6Zmk5Zyw5Z2AXG4gKiBAcGFyYW0ge3N0cmluZ30gaWQg5Zyw5Z2AaWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZSAoaWQpIHtcbiAgICByZXR1cm4gZGVsKCcvYXBpL3NoaXBwaW5nQWRkcmVzcy8nICsgaWQpO1xufVxuXG4vKipcbiAqIOiuvue9rum7mOiupOaUtui0p+WcsOWdgCBcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd9IGlkIHNoaXBwaW5nQWRkcmVzcyBpZFxuICogQHBhcmFtIHtCb29sZWFufSBpc0RlZmF1bHQg5piv5ZCm6K6+572u6buY6K6kXG4gKiBcbiAqIEByZXV0cm4ge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0IChpZCwgaXNEZWZhdWx0KSB7XG4gICAgcmV0dXJuIHB1dCgnL2FwaS9zaGlwcGluZ0FkZHJlc3MvJyArIGlkLCB7XG4gICAgICAgIGlzRGVmYXVsdDogaXNEZWZhdWx0XG4gICAgfSk7XG59Il19