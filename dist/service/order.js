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
exports.detail = detail;

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
        openid: _userInfo2.default.getOpenid()
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
        openid: _userInfo2.default.getOpenid(),
        user: _userInfo2.default.getUserid()
    });
    return (0, _serviceUtil.post)('/api/order/', params);
}

/**
 * 查看订单详情
 */
function detail(id) {
    return (0, _serviceUtil.get)('/api/order/' + id);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLmpzIl0sIm5hbWVzIjpbImxpc3QiLCJhZGQiLCJkZXRhaWwiLCJvcGVuaWQiLCJnZXRPcGVuaWQiLCJwYXJhbXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ1c2VyIiwiZ2V0VXNlcmlkIiwiaWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUtBOzs7OztRQVVnQkEsSSxHQUFBQSxJO1FBdUJBQyxHLEdBQUFBLEc7UUFXQUMsTSxHQUFBQSxNOztBQTFDaEI7O0FBQ0E7Ozs7OztBQUVBOzs7OztBQUtPLFNBQVNGLElBQVQsR0FBaUI7QUFDcEIsV0FBTyx1QkFBSyxtQkFBTCxFQUEwQjtBQUM3QkcsZ0JBQVEsbUJBQVNDLFNBQVQ7QUFEcUIsS0FBMUIsQ0FBUDtBQUdIOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCTyxTQUFTSCxHQUFULENBQWNJLE1BQWQsRUFBc0I7QUFDekJDLFdBQU9DLE1BQVAsQ0FBY0YsTUFBZCxFQUFzQjtBQUNsQkYsZ0JBQVEsbUJBQVNDLFNBQVQsRUFEVTtBQUVsQkksY0FBTSxtQkFBU0MsU0FBVDtBQUZZLEtBQXRCO0FBSUEsV0FBTyx1QkFBSyxhQUFMLEVBQW9CSixNQUFwQixDQUFQO0FBQ0g7O0FBRUQ7OztBQUdPLFNBQVNILE1BQVQsQ0FBaUJRLEVBQWpCLEVBQXFCO0FBQ3hCLFdBQU8sc0JBQUksZ0JBQWdCQSxFQUFwQixDQUFQO0FBQ0giLCJmaWxlIjoib3JkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlT3ZlcnZpZXcgYXJoYXQtb3JkZXItc2VydmljZVxuICogQGF1dGhvciBYaWFvQmluIExpKGxpeGlhb2Jpbjg4NzhAZ21haWwuY29tKSBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7IHBvc3QsIGdldCwgcHV0LCBkZWx9IGZyb20gJy4uL2Z1bmN0aW9uL3NlcnZpY2VVdGlsJztcbmltcG9ydCB1c2VySW5mbyBmcm9tICcuLi9wbHVnaW4vdXNlckluZm8nO1xuXG4vKipcbiAqIOiOt+WPlumFjemAgeWcsOWdgOWIl+ihqCBcbiAqIFxuICogQHJldXRybiB7UHJvbWlzZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxpc3QgKCkge1xuICAgIHJldHVybiBwb3N0KCcvYXBpL29yZGVyL29wZW5pZCcsIHtcbiAgICAgICAgb3BlbmlkOiB1c2VySW5mby5nZXRPcGVuaWQoKVxuICAgIH0pO1xufVxuXG4vKipcbiAqIOWIm+W7uuiuouWNlVxuICogXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLm9wZW5pZCDmk43kvZzkurpcbiAqIEBwYXJhbSB7QXJyYXl9IHBhcmFtcy5wcm9kdWN0cyDllYblk4Hkv6Hmga9cbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuc2hpcHBpbmdBZGRyZXNzIOW4kOWPt+aUtuS7tuWcsOWdgFxuICogQHBhcmFtIHtudW1iZXJ9IHBhcmFtcy5kaXNjb3VudE1vbmV5IOaKmOaJo+S/oeaBr1xuICogQHBhcmFtIHtudW1iZXJ9IHBhcmFtcy5zdGF0dXMg5pSv5LuY54q25oCBIDAg5pyq5pSv5LuYICAx5pSv5LuY5oiQ5YqfIDIg5b6F5Y+R6LSnIDMg5b6F5pS26LSnIDTkuqTmmJPlrozmiJBcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMubWVzc2FnZSDnlZnoqIBcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMubWNoSWQg5ZWG5oi3bWNoSWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMub3V0VHJhZGVObyDns7vnu5/orqLljZVcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMubW9iaWxlIOWVhuWutuaJi+acuuWPt1xuICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5leHByZXNzTW9uZXkg5b+r6YCS6LS555SoXG4gKiBAcGFyYW0ge251bWJlcn0gcGFyYW1zLnRvdGFsRmVlIOiuouWNlemHkeminSBcbiAqXG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkIChwYXJhbXMpIHtcbiAgICBPYmplY3QuYXNzaWduKHBhcmFtcywge1xuICAgICAgICBvcGVuaWQ6IHVzZXJJbmZvLmdldE9wZW5pZCgpLFxuICAgICAgICB1c2VyOiB1c2VySW5mby5nZXRVc2VyaWQoKVxuICAgIH0pO1xuICAgIHJldHVybiBwb3N0KCcvYXBpL29yZGVyLycsIHBhcmFtcyk7XG59XG5cbi8qKlxuICog5p+l55yL6K6i5Y2V6K+m5oOFXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXRhaWwgKGlkKSB7XG4gICAgcmV0dXJuIGdldCgnL2FwaS9vcmRlci8nICsgaWQpO1xufSJdfQ==