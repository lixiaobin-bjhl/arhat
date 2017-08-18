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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoaXBwaW5nQWRkcmVzcy5qcyJdLCJuYW1lcyI6WyJsaXN0IiwiYWRkIiwidXBkYXRlIiwic2hvdyIsInJlbW92ZSIsInNldERlZmF1bHQiLCJvcGVuaWQiLCJnZXRPcGVuaWQiLCJwYXJhbXMiLCJPYmplY3QiLCJhc3NpZ24iLCJtb2JpbGUiLCJ1c2VyIiwiZ2V0VXNlcmlkIiwiaWQiLCJuYW1lIiwiY29udGFjdE51bWJlciIsInJlZ2lvbiIsImFkZHJlc3MiLCJpc0RlZmF1bHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUtBOzs7OztRQVdnQkEsSSxHQUFBQSxJO1FBZ0JBQyxHLEdBQUFBLEc7UUFvQkFDLE0sR0FBQUEsTTtRQVlBQyxJLEdBQUFBLEk7UUFRQUMsTSxHQUFBQSxNO1FBWUFDLFUsR0FBQUEsVTs7QUE3RWhCOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBOzs7OztBQUtPLFNBQVNMLElBQVQsR0FBaUI7QUFDcEIsV0FBTyx1QkFBSyw2QkFBTCxFQUFvQztBQUN2Q00sZ0JBQVEsbUJBQVNDLFNBQVQ7QUFEK0IsS0FBcEMsQ0FBUDtBQUdIOztBQUVEOzs7Ozs7Ozs7O0FBVU8sU0FBU04sR0FBVCxDQUFjTyxNQUFkLEVBQXNCO0FBQ3pCQyxXQUFPQyxNQUFQLENBQWNGLE1BQWQsRUFBc0I7QUFDbEJHLGdCQUFRLGlCQUFPQSxNQURHO0FBRWxCQyxjQUFPLG1CQUFTQyxTQUFULEVBRlc7QUFHbEJQLGdCQUFRLG1CQUFTQyxTQUFUO0FBSFUsS0FBdEI7QUFLQSxXQUFPLHVCQUFLLHVCQUFMLEVBQThCQyxNQUE5QixDQUFQO0FBQ0g7O0FBRUQ7Ozs7Ozs7Ozs7O0FBV08sU0FBU04sTUFBVCxDQUFpQlksRUFBakIsRUFBcUJaLE1BQXJCLEVBQTZCO0FBQ2hDLFdBQU8sc0JBQUksMEJBQTBCWSxFQUE5QixFQUFrQztBQUNyQ0MsY0FBTWIsT0FBT2EsSUFEd0I7QUFFckNDLHVCQUFlZCxPQUFPYyxhQUZlO0FBR3JDQyxnQkFBUWYsT0FBT2UsTUFIc0I7QUFJckNDLGlCQUFTaEIsT0FBT2dCO0FBSnFCLEtBQWxDLENBQVA7QUFNSDs7QUFFRDs7O0FBR08sU0FBU2YsSUFBVCxDQUFlVyxFQUFmLEVBQW1CO0FBQ3RCLFdBQU8sc0JBQUksMEJBQTBCQSxFQUE5QixDQUFQO0FBQ0g7O0FBRUQ7Ozs7QUFJTyxTQUFTVixNQUFULENBQWlCVSxFQUFqQixFQUFxQjtBQUN4QixXQUFPLHNCQUFJLDBCQUEwQkEsRUFBOUIsQ0FBUDtBQUNIOztBQUVEOzs7Ozs7OztBQVFPLFNBQVNULFVBQVQsQ0FBcUJTLEVBQXJCLEVBQXlCSyxTQUF6QixFQUFvQztBQUN2QyxXQUFPLHNCQUFJLDBCQUEwQkwsRUFBOUIsRUFBa0M7QUFDckNLLG1CQUFXQTtBQUQwQixLQUFsQyxDQUFQO0FBR0giLCJmaWxlIjoic2hpcHBpbmdBZGRyZXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IGFyaGF0LXNoaXBwaW5nQWRkcmVzcy1zZXJ2aWNlXG4gKiBAYXV0aG9yIFhpYW9CaW4gTGkobGl4aWFvYmluODg3OEBnbWFpbC5jb20pIFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHsgcG9zdCwgZ2V0LCBwdXQsIGRlbH0gZnJvbSAnLi4vZnVuY3Rpb24vc2VydmljZVV0aWwnO1xuaW1wb3J0IHVzZXJJbmZvIGZyb20gJy4uL3BsdWdpbi91c2VySW5mbyc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XG5cbi8qKlxuICog6I635Y+W6YWN6YCB5Zyw5Z2A5YiX6KGoIFxuICogXG4gKiBAcmV1dHJuIHtQcm9taXNlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gbGlzdCAoKSB7XG4gICAgcmV0dXJuIHBvc3QoJy9hcGkvc2hpcHBpbmdBZGRyZXNzL29wZW5pZCcsIHtcbiAgICAgICAgb3BlbmlkOiB1c2VySW5mby5nZXRPcGVuaWQoKVxuICAgIH0pO1xufVxuXG4vKipcbiAqIOa3u+WKoOaUtui0p+WcsOWdgFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMubmFtZSDmlLbotKfkurrlp5PlkI1cbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMubW9iaWxlIOaUtui0p+S6uuaJi+acuuWPt1xuICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5hZGRyZXNzIOaUtui0p+S6uuWcsOWdgFxuICogQHBhcmFtIHtBcnJheX0gcGFyYW1zLnJlZ2lvbiDmlLbotKfkurrnmoTlnLDln5/kv6Hmga9cbiAqIFxuICogQHJldXRybiB7UHJvbWlzZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZCAocGFyYW1zKSB7XG4gICAgT2JqZWN0LmFzc2lnbihwYXJhbXMsIHtcbiAgICAgICAgbW9iaWxlOiBjb25maWcubW9iaWxlLFxuICAgICAgICB1c2VyOiAgdXNlckluZm8uZ2V0VXNlcmlkKCksXG4gICAgICAgIG9wZW5pZDogdXNlckluZm8uZ2V0T3BlbmlkKClcbiAgICB9KTtcbiAgICByZXR1cm4gcG9zdCgnL2FwaS9zaGlwcGluZ0FkZHJlc3MvJywgcGFyYW1zKTtcbn1cblxuLyoqXG4gKiDmm7TmlrDlnLDlnYDkv6Hmga9cbiAqIFxuICogQHBhcmFtIHtzdHJpbmd9IGlkIOWcsOWdgGlkXG4gKiBAcGFyYW0ge3N0cmluZ30gdXBkYXRlLm5hbWUg5Zyw5Z2A5ZCN56ewXG4gKiBAcGFyYW0ge3N0cmluZ30gdXBkYXRlLm1vYmlsZSDmlLbku7bmiYvmnLpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cGRhdGUucmVnaW9uIOaUtuS7tuWcsOWfn1xuICogQHBhcmFtIHtzdHJpbmd9IHVwZGF0ZS5hZGRyZXNzIOaUtuS7tuWcsOWdgFxuICogXG4gKiBAcmV1dHJuIHtQcm9taXNlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlIChpZCwgdXBkYXRlKSB7IFxuICAgIHJldHVybiBwdXQoJy9hcGkvc2hpcHBpbmdBZGRyZXNzLycgKyBpZCwge1xuICAgICAgICBuYW1lOiB1cGRhdGUubmFtZSxcbiAgICAgICAgY29udGFjdE51bWJlcjogdXBkYXRlLmNvbnRhY3ROdW1iZXIsXG4gICAgICAgIHJlZ2lvbjogdXBkYXRlLnJlZ2lvbixcbiAgICAgICAgYWRkcmVzczogdXBkYXRlLmFkZHJlc3NcbiAgICB9KTtcbn1cblxuLyoqXG4gKiDmoLnmja5pZOiOt+WPluWcsOWdgOS/oeaBryBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNob3cgKGlkKSB7XG4gICAgcmV0dXJuIGdldCgnL2FwaS9zaGlwcGluZ0FkZHJlc3MvJyArIGlkKTtcbn1cblxuLyoqXG4gKiDliKDpmaTlnLDlnYBcbiAqIEBwYXJhbSB7c3RyaW5nfSBpZCDlnLDlnYBpZFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlIChpZCkge1xuICAgIHJldHVybiBkZWwoJy9hcGkvc2hpcHBpbmdBZGRyZXNzLycgKyBpZCk7XG59XG5cbi8qKlxuICog6K6+572u6buY6K6k5pS26LSn5Zyw5Z2AIFxuICogXG4gKiBAcGFyYW0ge3N0cmluZ30gaWQgc2hpcHBpbmdBZGRyZXNzIGlkXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzRGVmYXVsdCDmmK/lkKborr7nva7pu5jorqRcbiAqIFxuICogQHJldXRybiB7UHJvbWlzZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHQgKGlkLCBpc0RlZmF1bHQpIHtcbiAgICByZXR1cm4gcHV0KCcvYXBpL3NoaXBwaW5nQWRkcmVzcy8nICsgaWQsIHtcbiAgICAgICAgaXNEZWZhdWx0OiBpc0RlZmF1bHRcbiAgICB9KTtcbn1cblxuXG4iXX0=