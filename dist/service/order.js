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
        user: wx.getStorageSync('userId')
    });
    return (0, _serviceUtil.post)('/api/order/', params);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLmpzIl0sIm5hbWVzIjpbImxpc3QiLCJhZGQiLCJvcGVuaWQiLCJnZXRPcGVuaWQiLCJwYXJhbXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ1c2VyIiwid3giLCJnZXRTdG9yYWdlU3luYyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBS0E7Ozs7O1FBVWdCQSxJLEdBQUFBLEk7UUF1QkFDLEcsR0FBQUEsRzs7QUEvQmhCOztBQUNBOzs7Ozs7QUFFQTs7Ozs7QUFLTyxTQUFTRCxJQUFULEdBQWlCO0FBQ3BCLFdBQU8sdUJBQUssbUJBQUwsRUFBMEI7QUFDN0JFLGdCQUFRLG1CQUFTQyxTQUFUO0FBRHFCLEtBQTFCLENBQVA7QUFHSDs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQk8sU0FBU0YsR0FBVCxDQUFjRyxNQUFkLEVBQXNCO0FBQ3pCQyxXQUFPQyxNQUFQLENBQWNGLE1BQWQsRUFBc0I7QUFDbEJGLGdCQUFRLG1CQUFTQyxTQUFULEVBRFU7QUFFbEJJLGNBQU1DLEdBQUdDLGNBQUgsQ0FBa0IsUUFBbEI7QUFGWSxLQUF0QjtBQUlBLFdBQU8sdUJBQUssYUFBTCxFQUFvQkwsTUFBcEIsQ0FBUDtBQUNIIiwiZmlsZSI6Im9yZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IGFyaGF0LW9yZGVyLXNlcnZpY2VcbiAqIEBhdXRob3IgWGlhb0JpbiBMaShsaXhpYW9iaW44ODc4QGdtYWlsLmNvbSkgXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgeyBwb3N0LCBnZXQsIHB1dCwgZGVsfSBmcm9tICcuLi9mdW5jdGlvbi9zZXJ2aWNlVXRpbCc7XG5pbXBvcnQgdXNlckluZm8gZnJvbSAnLi4vcGx1Z2luL3VzZXJJbmZvJztcblxuLyoqXG4gKiDojrflj5bphY3pgIHlnLDlnYDliJfooaggXG4gKiBcbiAqIEByZXV0cm4ge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsaXN0ICgpIHtcbiAgICByZXR1cm4gcG9zdCgnL2FwaS9vcmRlci9vcGVuaWQnLCB7XG4gICAgICAgIG9wZW5pZDogdXNlckluZm8uZ2V0T3BlbmlkKClcbiAgICB9KTtcbn1cblxuLyoqXG4gKiDliJvlu7rorqLljZVcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5vcGVuaWQg5pON5L2c5Lq6XG4gKiBAcGFyYW0ge0FycmF5fSBwYXJhbXMucHJvZHVjdHMg5ZWG5ZOB5L+h5oGvXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLnNoaXBwaW5nQWRkcmVzcyDluJDlj7fmlLbku7blnLDlnYBcbiAqIEBwYXJhbSB7bnVtYmVyfSBwYXJhbXMuZGlzY291bnRNb25leSDmipjmiaPkv6Hmga9cbiAqIEBwYXJhbSB7bnVtYmVyfSBwYXJhbXMuc3RhdHVzIOaUr+S7mOeKtuaAgSAwIOacquaUr+S7mCAgMeaUr+S7mOaIkOWKnyAyIOW+heWPkei0pyAzIOW+heaUtui0pyA05Lqk5piT5a6M5oiQXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLm1lc3NhZ2Ug55WZ6KiAXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLm1jaElkIOWVhuaIt21jaElkXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLm91dFRyYWRlTm8g57O757uf6K6i5Y2VXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLm1vYmlsZSDllYblrrbmiYvmnLrlj7dcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuZXhwcmVzc01vbmV5IOW/q+mAkui0ueeUqFxuICogQHBhcmFtIHtudW1iZXJ9IHBhcmFtcy50b3RhbEZlZSDorqLljZXph5Hpop0gXG4gKlxuICogQHJldHVybiB7UHJvbWlzZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZCAocGFyYW1zKSB7XG4gICAgT2JqZWN0LmFzc2lnbihwYXJhbXMsIHtcbiAgICAgICAgb3BlbmlkOiB1c2VySW5mby5nZXRPcGVuaWQoKSxcbiAgICAgICAgdXNlcjogd3guZ2V0U3RvcmFnZVN5bmMoJ3VzZXJJZCcpXG4gICAgfSk7XG4gICAgcmV0dXJuIHBvc3QoJy9hcGkvb3JkZXIvJywgcGFyYW1zKTtcbn0iXX0=