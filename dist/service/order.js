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
 * 创建订单
 * 
 * @param {string} params.openid 操作人
 * @param {Array} params.products 商品信息
 * @param {string} params.shippingAddress 帐号收件地址
 * @param {number} params.discountMoney 折扣信息
 * @param {number} params.status 支付状态 0 未支付  1支付成功 2 待发货 3 待收货 4交易完成
 * @param {string} params.message 留言
 * @param {string} params.mchId 商户mchId
 * @param {string} params.outTradeNo 系统订单
 * @param {string} params.mobile 商家手机号
 * @param {string} params.expressMoney 快递费用
 * @param {number} params.totalFee 订单金额 
 *
 * @return {Promise}
 */
function add(params) {
    Object.assign(params, {
        openid: _userInfo2.default.getOpenId()
    });
    return (0, _serviceUtil.post)('/api/order/', params);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLmpzIl0sIm5hbWVzIjpbImxpc3QiLCJhZGQiLCJvcGVuaWQiLCJnZXRPcGVuSWQiLCJwYXJhbXMiLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUtBOzs7OztRQVVnQkEsSSxHQUFBQSxJO1FBdUJBQyxHLEdBQUFBLEc7O0FBL0JoQjs7QUFDQTs7Ozs7O0FBRUE7Ozs7O0FBS08sU0FBU0QsSUFBVCxHQUFpQjtBQUNwQixXQUFPLHVCQUFLLG1CQUFMLEVBQTBCO0FBQzdCRSxnQkFBUSxtQkFBU0MsU0FBVDtBQURxQixLQUExQixDQUFQO0FBR0g7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJPLFNBQVNGLEdBQVQsQ0FBY0csTUFBZCxFQUFzQjtBQUN6QkMsV0FBT0MsTUFBUCxDQUFjRixNQUFkLEVBQXNCO0FBQ2xCRixnQkFBUSxtQkFBU0MsU0FBVDtBQURVLEtBQXRCO0FBR0EsV0FBTyx1QkFBSyxhQUFMLEVBQW9CQyxNQUFwQixDQUFQO0FBQ0giLCJmaWxlIjoib3JkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlT3ZlcnZpZXcgYXJoYXQtb3JkZXItc2VydmljZVxuICogQGF1dGhvciBYaWFvQmluIExpKGxpeGlhb2Jpbjg4NzhAZ21haWwuY29tKSBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7IHBvc3QsIGdldCwgcHV0LCBkZWx9IGZyb20gJy4uL2Z1bmN0aW9uL3NlcnZpY2VVdGlsJztcbmltcG9ydCB1c2VySW5mbyBmcm9tICcuLi9wbHVnaW4vdXNlckluZm8nO1xuXG4vKipcbiAqIOiOt+WPlumFjemAgeWcsOWdgOWIl+ihqCBcbiAqIFxuICogQHJldXRybiB7UHJvbWlzZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxpc3QgKCkge1xuICAgIHJldHVybiBwb3N0KCcvYXBpL29yZGVyL29wZW5pZCcsIHtcbiAgICAgICAgb3BlbmlkOiB1c2VySW5mby5nZXRPcGVuSWQoKVxuICAgIH0pO1xufVxuXG4vKipcbiAqIOWIm+W7uuiuouWNlVxuICogXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLm9wZW5pZCDmk43kvZzkurpcbiAqIEBwYXJhbSB7QXJyYXl9IHBhcmFtcy5wcm9kdWN0cyDllYblk4Hkv6Hmga9cbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuc2hpcHBpbmdBZGRyZXNzIOW4kOWPt+aUtuS7tuWcsOWdgFxuICogQHBhcmFtIHtudW1iZXJ9IHBhcmFtcy5kaXNjb3VudE1vbmV5IOaKmOaJo+S/oeaBr1xuICogQHBhcmFtIHtudW1iZXJ9IHBhcmFtcy5zdGF0dXMg5pSv5LuY54q25oCBIDAg5pyq5pSv5LuYICAx5pSv5LuY5oiQ5YqfIDIg5b6F5Y+R6LSnIDMg5b6F5pS26LSnIDTkuqTmmJPlrozmiJBcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMubWVzc2FnZSDnlZnoqIBcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMubWNoSWQg5ZWG5oi3bWNoSWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMub3V0VHJhZGVObyDns7vnu5/orqLljZVcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMubW9iaWxlIOWVhuWutuaJi+acuuWPt1xuICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5leHByZXNzTW9uZXkg5b+r6YCS6LS555SoXG4gKiBAcGFyYW0ge251bWJlcn0gcGFyYW1zLnRvdGFsRmVlIOiuouWNlemHkeminSBcbiAqXG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkIChwYXJhbXMpIHtcbiAgICBPYmplY3QuYXNzaWduKHBhcmFtcywge1xuICAgICAgICBvcGVuaWQ6IHVzZXJJbmZvLmdldE9wZW5JZCgpXG4gICAgfSk7XG4gICAgcmV0dXJuIHBvc3QoJy9hcGkvb3JkZXIvJywgcGFyYW1zKTtcbn0iXX0=