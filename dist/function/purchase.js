/**
 * @fileOverview function initUser
 * @author XiaoBin Li(lixiaobin8878@gmail.com)
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (productId) {
    // var nonce_str = createNonceStr();
    var nonce_str = '4iesqz63ryfdx3z';
    var mch_id = 1483041862;
    var key = 'q5yB94rRFxWd3TPhdeenSBpScyTesf67';
    var spbill_create_ip = '114.115.158.88';
    var total_fee = 1;
    var openid = _userInfo2.default.getOpenId();
    // var out_trade_no = getOrderNumber();
    var out_trade_no = 1498491070589;
    var notify_url = 'https://www.sheliguo.com/purchase/notice';
    var trade_type = 'JSAPI';
    var body = 'test';
    var appid = _config2.default.appId;

    var params = {
        appid: appid,
        body: body,
        key: key,
        mch_id: mch_id,
        nonce_str: nonce_str,
        notify_url: notify_url,
        openid: openid,
        out_trade_no: out_trade_no,
        spbill_create_ip: spbill_create_ip,
        total_fee: total_fee,
        trade_type: trade_type
    };

    (0, _purchase.getPrepayId)(params);
    var sign = (0, _getMd5Sign2.default)(params);
    console.log(sign);
};

var _createNonceStr = require('./createNonceStr.js');

var _createNonceStr2 = _interopRequireDefault(_createNonceStr);

var _getMd5Sign = require('./getMd5Sign.js');

var _getMd5Sign2 = _interopRequireDefault(_getMd5Sign);

var _config = require('./../config.js');

var _config2 = _interopRequireDefault(_config);

var _purchase = require('./../service/purchase.js');

var _userInfo = require('./../plugin/userInfo.js');

var _userInfo2 = _interopRequireDefault(_userInfo);

var _getOrderNumber = require('./getOrderNumber.js');

var _getOrderNumber2 = _interopRequireDefault(_getOrderNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1cmNoYXNlLmpzIl0sIm5hbWVzIjpbInByb2R1Y3RJZCIsIm5vbmNlX3N0ciIsIm1jaF9pZCIsImtleSIsInNwYmlsbF9jcmVhdGVfaXAiLCJ0b3RhbF9mZWUiLCJvcGVuaWQiLCJnZXRPcGVuSWQiLCJvdXRfdHJhZGVfbm8iLCJub3RpZnlfdXJsIiwidHJhZGVfdHlwZSIsImJvZHkiLCJhcHBpZCIsImFwcElkIiwicGFyYW1zIiwic2lnbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUtBOzs7Ozs7a0JBU2UsVUFBVUEsU0FBVixFQUFxQjtBQUNoQztBQUNBLFFBQUlDLFlBQVksaUJBQWhCO0FBQ0EsUUFBSUMsU0FBUyxVQUFiO0FBQ0EsUUFBSUMsTUFBTSxrQ0FBVjtBQUNBLFFBQUlDLG1CQUFtQixnQkFBdkI7QUFDQSxRQUFJQyxZQUFZLENBQWhCO0FBQ0EsUUFBSUMsU0FBUyxtQkFBU0MsU0FBVCxFQUFiO0FBQ0E7QUFDQSxRQUFJQyxlQUFlLGFBQW5CO0FBQ0EsUUFBSUMsYUFBYSwwQ0FBakI7QUFDQSxRQUFJQyxhQUFhLE9BQWpCO0FBQ0EsUUFBSUMsT0FBTyxNQUFYO0FBQ0EsUUFBSUMsUUFBUSxpQkFBT0MsS0FBbkI7O0FBRUEsUUFBSUMsU0FBUztBQUNURixvQkFEUztBQUVURCxrQkFGUztBQUdUUixnQkFIUztBQUlURCxzQkFKUztBQUtURCw0QkFMUztBQU1UUSw4QkFOUztBQU9USCxzQkFQUztBQVFURSxrQ0FSUztBQVNUSiwwQ0FUUztBQVVUQyw0QkFWUztBQVdUSztBQVhTLEtBQWI7O0FBY0EsK0JBQVlJLE1BQVo7QUFDQSxRQUFJQyxPQUFPLDBCQUFXRCxNQUFYLENBQVg7QUFDQUUsWUFBUUMsR0FBUixDQUFZRixJQUFaO0FBRUgsQzs7QUF4Q0Q7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQSIsImZpbGUiOiJwdXJjaGFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVPdmVydmlldyBmdW5jdGlvbiBpbml0VXNlclxuICogQGF1dGhvciBYaWFvQmluIExpKGxpeGlhb2Jpbjg4NzhAZ21haWwuY29tKVxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGNyZWF0ZU5vbmNlU3RyIGZyb20gJy4vY3JlYXRlTm9uY2VTdHInO1xuaW1wb3J0IGdldE1kNVNpZ24gZnJvbSAnLi9nZXRNZDVTaWduJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7IGdldFByZXBheUlkIH0gZnJvbSAnLi4vc2VydmljZS9wdXJjaGFzZSc7XG5pbXBvcnQgdXNlckluZm8gZnJvbSAnLi4vcGx1Z2luL3VzZXJJbmZvJztcbmltcG9ydCBnZXRPcmRlck51bWJlciBmcm9tICcuL2dldE9yZGVyTnVtYmVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb2R1Y3RJZCkge1xuICAgIC8vIHZhciBub25jZV9zdHIgPSBjcmVhdGVOb25jZVN0cigpO1xuICAgIHZhciBub25jZV9zdHIgPSAnNGllc3F6NjNyeWZkeDN6JztcbiAgICB2YXIgbWNoX2lkID0gMTQ4MzA0MTg2MjtcbiAgICB2YXIga2V5ID0gJ3E1eUI5NHJSRnhXZDNUUGhkZWVuU0JwU2N5VGVzZjY3JztcbiAgICB2YXIgc3BiaWxsX2NyZWF0ZV9pcCA9ICcxMTQuMTE1LjE1OC44OCc7XG4gICAgdmFyIHRvdGFsX2ZlZSA9IDE7XG4gICAgdmFyIG9wZW5pZCA9IHVzZXJJbmZvLmdldE9wZW5JZCgpO1xuICAgIC8vIHZhciBvdXRfdHJhZGVfbm8gPSBnZXRPcmRlck51bWJlcigpO1xuICAgIHZhciBvdXRfdHJhZGVfbm8gPSAxNDk4NDkxMDcwNTg5O1xuICAgIHZhciBub3RpZnlfdXJsID0gJ2h0dHBzOi8vd3d3LnNoZWxpZ3VvLmNvbS9wdXJjaGFzZS9ub3RpY2UnO1xuICAgIHZhciB0cmFkZV90eXBlID0gJ0pTQVBJJztcbiAgICB2YXIgYm9keSA9ICd0ZXN0JztcbiAgICB2YXIgYXBwaWQgPSBjb25maWcuYXBwSWQ7XG5cbiAgICB2YXIgcGFyYW1zID0ge1xuICAgICAgICBhcHBpZCxcbiAgICAgICAgYm9keSxcbiAgICAgICAga2V5LFxuICAgICAgICBtY2hfaWQsXG4gICAgICAgIG5vbmNlX3N0cixcbiAgICAgICAgbm90aWZ5X3VybCxcbiAgICAgICAgb3BlbmlkLFxuICAgICAgICBvdXRfdHJhZGVfbm8sXG4gICAgICAgIHNwYmlsbF9jcmVhdGVfaXAsXG4gICAgICAgIHRvdGFsX2ZlZSxcbiAgICAgICAgdHJhZGVfdHlwZVxuICAgIH1cblxuICAgIGdldFByZXBheUlkKHBhcmFtcyk7XG4gICAgdmFyIHNpZ24gPSBnZXRNZDVTaWduKHBhcmFtcyk7XG4gICAgY29uc29sZS5sb2coc2lnbik7XG5cbn0gIl19