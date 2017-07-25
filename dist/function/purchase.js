/**
 * @fileOverview function initUser
 * @author XiaoBin Li(lixiaobin8878@gmail.com)
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (params) {

    var nonce_str = (0, _createNonceStr2.default)();
    var mch_id = params.mchId;
    var attach = params.mobile;
    var key = _config2.default.key;
    var spbill_create_ip = _config2.default.ip;
    var total_fee = params.totalFee;
    var signType = 'MD5';
    var openid = _userInfo2.default.getOpenId();
    var out_trade_no = params.outTradeNo;
    var notify_url = 'https://www.sheliguo.com/purchase/notice';
    var trade_type = 'JSAPI';
    var body = _config2.default.name + '定单';
    var appid = _config2.default.appId;
    var timeStamp = (0, _createTimeStamp2.default)();
    var params = {
        appid: appid,
        attach: attach,
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
    console.log(params);

    (0, _purchase.getPrepayId)(params).then(function (res) {
        var data = res.xml;
        var pack = 'prepay_id=' + data.prepay_id;
        Object.assign(data, {
            notify_url: notify_url,
            signType: signType,
            key: key,
            nonce_str: nonce_str,
            package: pack,
            timeStamp: timeStamp
        });
        var paySign = (0, _getMd5PaySign2.default)(data);
        var paymentRequest = {
            appId: appid,
            timeStamp: timeStamp,
            nonceStr: nonce_str,
            package: pack,
            signType: signType,
            paySign: paySign,
            success: function success(res) {
                console.log(1);
            },
            fail: function fail(res) {
                console.log(res);
            },
            complete: function complete(res) {
                console.log(3);
            }
        };
        console.log('paymentRequest', paymentRequest);
        wx.requestPayment(paymentRequest);
    });
};

var _createNonceStr = require('./createNonceStr.js');

var _createNonceStr2 = _interopRequireDefault(_createNonceStr);

var _createTimeStamp = require('./createTimeStamp.js');

var _createTimeStamp2 = _interopRequireDefault(_createTimeStamp);

var _getMd5PaySign = require('./getMd5PaySign.js');

var _getMd5PaySign2 = _interopRequireDefault(_getMd5PaySign);

var _config = require('./../config.js');

var _config2 = _interopRequireDefault(_config);

var _purchase = require('./../service/purchase.js');

var _userInfo = require('./../plugin/userInfo.js');

var _userInfo2 = _interopRequireDefault(_userInfo);

var _getOrderNumber = require('./getOrderNumber.js');

var _getOrderNumber2 = _interopRequireDefault(_getOrderNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1cmNoYXNlLmpzIl0sIm5hbWVzIjpbInBhcmFtcyIsIm5vbmNlX3N0ciIsIm1jaF9pZCIsIm1jaElkIiwiYXR0YWNoIiwibW9iaWxlIiwia2V5Iiwic3BiaWxsX2NyZWF0ZV9pcCIsImlwIiwidG90YWxfZmVlIiwidG90YWxGZWUiLCJzaWduVHlwZSIsIm9wZW5pZCIsImdldE9wZW5JZCIsIm91dF90cmFkZV9ubyIsIm91dFRyYWRlTm8iLCJub3RpZnlfdXJsIiwidHJhZGVfdHlwZSIsImJvZHkiLCJuYW1lIiwiYXBwaWQiLCJhcHBJZCIsInRpbWVTdGFtcCIsImNvbnNvbGUiLCJsb2ciLCJ0aGVuIiwicmVzIiwiZGF0YSIsInhtbCIsInBhY2siLCJwcmVwYXlfaWQiLCJPYmplY3QiLCJhc3NpZ24iLCJwYWNrYWdlIiwicGF5U2lnbiIsInBheW1lbnRSZXF1ZXN0Iiwibm9uY2VTdHIiLCJzdWNjZXNzIiwiZmFpbCIsImNvbXBsZXRlIiwid3giLCJyZXF1ZXN0UGF5bWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBS0E7Ozs7OztrQkFVZSxVQUFVQSxNQUFWLEVBQWtCOztBQUU3QixRQUFJQyxZQUFZLCtCQUFoQjtBQUNBLFFBQUlDLFNBQVNGLE9BQU9HLEtBQXBCO0FBQ0EsUUFBSUMsU0FBU0osT0FBT0ssTUFBcEI7QUFDQSxRQUFJQyxNQUFNLGlCQUFPQSxHQUFqQjtBQUNBLFFBQUlDLG1CQUFtQixpQkFBT0MsRUFBOUI7QUFDQSxRQUFJQyxZQUFZVCxPQUFPVSxRQUF2QjtBQUNBLFFBQUlDLFdBQVcsS0FBZjtBQUNBLFFBQUlDLFNBQVMsbUJBQVNDLFNBQVQsRUFBYjtBQUNBLFFBQUlDLGVBQWVkLE9BQU9lLFVBQTFCO0FBQ0EsUUFBSUMsYUFBYSwwQ0FBakI7QUFDQSxRQUFJQyxhQUFhLE9BQWpCO0FBQ0EsUUFBSUMsT0FBTyxpQkFBT0MsSUFBUCxHQUFjLElBQXpCO0FBQ0EsUUFBSUMsUUFBUSxpQkFBT0MsS0FBbkI7QUFDQSxRQUFJQyxZQUFZLGdDQUFoQjtBQUNBLFFBQUl0QixTQUFTO0FBQ1RvQixvQkFEUztBQUVUaEIsc0JBRlM7QUFHVGMsa0JBSFM7QUFJVFosZ0JBSlM7QUFLVEosc0JBTFM7QUFNVEQsNEJBTlM7QUFPVGUsOEJBUFM7QUFRVEosc0JBUlM7QUFTVEUsa0NBVFM7QUFVVFAsMENBVlM7QUFXVEUsNEJBWFM7QUFZVFE7QUFaUyxLQUFiO0FBY0FNLFlBQVFDLEdBQVIsQ0FBWXhCLE1BQVo7O0FBRUEsK0JBQVlBLE1BQVosRUFDS3lCLElBREwsQ0FDVSxVQUFDQyxHQUFELEVBQVE7QUFDVixZQUFJQyxPQUFPRCxJQUFJRSxHQUFmO0FBQ0EsWUFBSUMsT0FBTyxlQUFlRixLQUFLRyxTQUEvQjtBQUNBQyxlQUFPQyxNQUFQLENBQWNMLElBQWQsRUFBb0I7QUFDaEJYLGtDQURnQjtBQUVoQkwsOEJBRmdCO0FBR2hCTCxvQkFIZ0I7QUFJaEJMLGdDQUpnQjtBQUtoQmdDLHFCQUFTSixJQUxPO0FBTWhCUDtBQU5nQixTQUFwQjtBQVFBLFlBQUlZLFVBQVUsNkJBQWNQLElBQWQsQ0FBZDtBQUNBLFlBQUlRLGlCQUFpQjtBQUNqQmQsbUJBQU9ELEtBRFU7QUFFakJFLHVCQUFXQSxTQUZNO0FBR2pCYyxzQkFBVW5DLFNBSE87QUFJakJnQyxxQkFBU0osSUFKUTtBQUtqQmxCLHNCQUFVQSxRQUxPO0FBTWpCdUIscUJBQVNBLE9BTlE7QUFPakJHLHFCQUFTLGlCQUFTWCxHQUFULEVBQWM7QUFDbkJILHdCQUFRQyxHQUFSLENBQVksQ0FBWjtBQUNILGFBVGdCO0FBVWpCYyxrQkFBTSxjQUFTWixHQUFULEVBQWM7QUFDaEJILHdCQUFRQyxHQUFSLENBQVlFLEdBQVo7QUFDSCxhQVpnQjtBQWFqQmEsc0JBQVUsa0JBQVNiLEdBQVQsRUFBYztBQUNwQkgsd0JBQVFDLEdBQVIsQ0FBWSxDQUFaO0FBQ0g7QUFmZ0IsU0FBckI7QUFpQkFELGdCQUFRQyxHQUFSLENBQVksZ0JBQVosRUFBOEJXLGNBQTlCO0FBQ0FLLFdBQUdDLGNBQUgsQ0FBa0JOLGNBQWxCO0FBQ0gsS0FoQ0w7QUFrQ0gsQzs7QUExRUQ7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBIiwiZmlsZSI6InB1cmNoYXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IGZ1bmN0aW9uIGluaXRVc2VyXG4gKiBAYXV0aG9yIFhpYW9CaW4gTGkobGl4aWFvYmluODg3OEBnbWFpbC5jb20pXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgY3JlYXRlTm9uY2VTdHIgZnJvbSAnLi9jcmVhdGVOb25jZVN0cic7XG5pbXBvcnQgY3JlYXRlVGltZVN0YW1wIGZyb20gJy4vY3JlYXRlVGltZVN0YW1wJztcbmltcG9ydCBnZXRNZDVQYXlTaWduIGZyb20gJy4vZ2V0TWQ1UGF5U2lnbic7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBnZXRQcmVwYXlJZCB9IGZyb20gJy4uL3NlcnZpY2UvcHVyY2hhc2UnO1xuaW1wb3J0IHVzZXJJbmZvIGZyb20gJy4uL3BsdWdpbi91c2VySW5mbyc7XG5pbXBvcnQgZ2V0T3JkZXJOdW1iZXIgZnJvbSAnLi9nZXRPcmRlck51bWJlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwYXJhbXMpIHtcblxuICAgIHZhciBub25jZV9zdHIgPSBjcmVhdGVOb25jZVN0cigpO1xuICAgIHZhciBtY2hfaWQgPSBwYXJhbXMubWNoSWQ7XG4gICAgdmFyIGF0dGFjaCA9IHBhcmFtcy5tb2JpbGU7XG4gICAgdmFyIGtleSA9IGNvbmZpZy5rZXk7XG4gICAgdmFyIHNwYmlsbF9jcmVhdGVfaXAgPSBjb25maWcuaXA7XG4gICAgdmFyIHRvdGFsX2ZlZSA9IHBhcmFtcy50b3RhbEZlZTtcbiAgICB2YXIgc2lnblR5cGUgPSAnTUQ1JztcbiAgICB2YXIgb3BlbmlkID0gdXNlckluZm8uZ2V0T3BlbklkKCk7XG4gICAgdmFyIG91dF90cmFkZV9ubyA9IHBhcmFtcy5vdXRUcmFkZU5vO1xuICAgIHZhciBub3RpZnlfdXJsID0gJ2h0dHBzOi8vd3d3LnNoZWxpZ3VvLmNvbS9wdXJjaGFzZS9ub3RpY2UnO1xuICAgIHZhciB0cmFkZV90eXBlID0gJ0pTQVBJJztcbiAgICB2YXIgYm9keSA9IGNvbmZpZy5uYW1lICsgJ+WumuWNlScgO1xuICAgIHZhciBhcHBpZCA9IGNvbmZpZy5hcHBJZDtcbiAgICB2YXIgdGltZVN0YW1wID0gY3JlYXRlVGltZVN0YW1wKCk7XG4gICAgdmFyIHBhcmFtcyA9IHtcbiAgICAgICAgYXBwaWQsXG4gICAgICAgIGF0dGFjaCxcbiAgICAgICAgYm9keSxcbiAgICAgICAga2V5LFxuICAgICAgICBtY2hfaWQsXG4gICAgICAgIG5vbmNlX3N0cixcbiAgICAgICAgbm90aWZ5X3VybCxcbiAgICAgICAgb3BlbmlkLFxuICAgICAgICBvdXRfdHJhZGVfbm8sXG4gICAgICAgIHNwYmlsbF9jcmVhdGVfaXAsXG4gICAgICAgIHRvdGFsX2ZlZSxcbiAgICAgICAgdHJhZGVfdHlwZVxuICAgIH07XG4gICAgY29uc29sZS5sb2cocGFyYW1zKTtcblxuICAgIGdldFByZXBheUlkKHBhcmFtcylcbiAgICAgICAgLnRoZW4oKHJlcyk9PiB7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IHJlcy54bWw7XG4gICAgICAgICAgICB2YXIgcGFjayA9ICdwcmVwYXlfaWQ9JyArIGRhdGEucHJlcGF5X2lkO1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihkYXRhLCB7XG4gICAgICAgICAgICAgICAgbm90aWZ5X3VybCxcbiAgICAgICAgICAgICAgICBzaWduVHlwZSxcbiAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgbm9uY2Vfc3RyLFxuICAgICAgICAgICAgICAgIHBhY2thZ2U6IHBhY2ssXG4gICAgICAgICAgICAgICAgdGltZVN0YW1wXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdmFyIHBheVNpZ24gPSBnZXRNZDVQYXlTaWduKGRhdGEpO1xuICAgICAgICAgICAgdmFyIHBheW1lbnRSZXF1ZXN0ID0ge1xuICAgICAgICAgICAgICAgIGFwcElkOiBhcHBpZCxcbiAgICAgICAgICAgICAgICB0aW1lU3RhbXA6IHRpbWVTdGFtcCxcbiAgICAgICAgICAgICAgICBub25jZVN0cjogbm9uY2Vfc3RyLFxuICAgICAgICAgICAgICAgIHBhY2thZ2U6IHBhY2ssXG4gICAgICAgICAgICAgICAgc2lnblR5cGU6IHNpZ25UeXBlLFxuICAgICAgICAgICAgICAgIHBheVNpZ246IHBheVNpZ24sXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKDEpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coMyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwYXltZW50UmVxdWVzdCcsIHBheW1lbnRSZXF1ZXN0KTtcbiAgICAgICAgICAgIHd4LnJlcXVlc3RQYXltZW50KHBheW1lbnRSZXF1ZXN0KTtcbiAgICAgICAgfSk7XG5cbn0gIl19