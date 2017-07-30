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
    var attach = params.id;
    var key = _config2.default.key;
    var spbill_create_ip = _config2.default.ip;
    var total_fee = params.totalFee;
    var signType = 'MD5';
    var openid = _userInfo2.default.getOpenId();
    var out_trade_no = params.outTradeNo;
    var notify_url = 'https://www.sheliguo.com/purchase/notice';
    var trade_type = 'JSAPI';
    var body = params.title;
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
                wx.navigateTo({
                    url: 'order'
                });
            },
            fail: function fail(res) {
                console.log(res);
            },
            complete: function complete(res) {
                console.log('complete');
            }
        };
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

var _createOrderNumber = require('./createOrderNumber.js');

var _createOrderNumber2 = _interopRequireDefault(_createOrderNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1cmNoYXNlLmpzIl0sIm5hbWVzIjpbInBhcmFtcyIsIm5vbmNlX3N0ciIsIm1jaF9pZCIsIm1jaElkIiwiYXR0YWNoIiwiaWQiLCJrZXkiLCJzcGJpbGxfY3JlYXRlX2lwIiwiaXAiLCJ0b3RhbF9mZWUiLCJ0b3RhbEZlZSIsInNpZ25UeXBlIiwib3BlbmlkIiwiZ2V0T3BlbklkIiwib3V0X3RyYWRlX25vIiwib3V0VHJhZGVObyIsIm5vdGlmeV91cmwiLCJ0cmFkZV90eXBlIiwiYm9keSIsInRpdGxlIiwiYXBwaWQiLCJhcHBJZCIsInRpbWVTdGFtcCIsImNvbnNvbGUiLCJsb2ciLCJ0aGVuIiwicmVzIiwiZGF0YSIsInhtbCIsInBhY2siLCJwcmVwYXlfaWQiLCJPYmplY3QiLCJhc3NpZ24iLCJwYWNrYWdlIiwicGF5U2lnbiIsInBheW1lbnRSZXF1ZXN0Iiwibm9uY2VTdHIiLCJzdWNjZXNzIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwiZmFpbCIsImNvbXBsZXRlIiwicmVxdWVzdFBheW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUtBOzs7Ozs7a0JBVWUsVUFBVUEsTUFBVixFQUFrQjs7QUFFN0IsUUFBSUMsWUFBWSwrQkFBaEI7QUFDQSxRQUFJQyxTQUFTRixPQUFPRyxLQUFwQjtBQUNBLFFBQUlDLFNBQVNKLE9BQU9LLEVBQXBCO0FBQ0EsUUFBSUMsTUFBTSxpQkFBT0EsR0FBakI7QUFDQSxRQUFJQyxtQkFBbUIsaUJBQU9DLEVBQTlCO0FBQ0EsUUFBSUMsWUFBWVQsT0FBT1UsUUFBdkI7QUFDQSxRQUFJQyxXQUFXLEtBQWY7QUFDQSxRQUFJQyxTQUFTLG1CQUFTQyxTQUFULEVBQWI7QUFDQSxRQUFJQyxlQUFlZCxPQUFPZSxVQUExQjtBQUNBLFFBQUlDLGFBQWEsMENBQWpCO0FBQ0EsUUFBSUMsYUFBYSxPQUFqQjtBQUNBLFFBQUlDLE9BQU9sQixPQUFPbUIsS0FBbEI7QUFDQSxRQUFJQyxRQUFRLGlCQUFPQyxLQUFuQjtBQUNBLFFBQUlDLFlBQVksZ0NBQWhCO0FBQ0EsUUFBSXRCLFNBQVM7QUFDVG9CLG9CQURTO0FBRVRoQixzQkFGUztBQUdUYyxrQkFIUztBQUlUWixnQkFKUztBQUtUSixzQkFMUztBQU1URCw0QkFOUztBQU9UZSw4QkFQUztBQVFUSixzQkFSUztBQVNURSxrQ0FUUztBQVVUUCwwQ0FWUztBQVdURSw0QkFYUztBQVlUUTtBQVpTLEtBQWI7QUFjQU0sWUFBUUMsR0FBUixDQUFZeEIsTUFBWjs7QUFFQSwrQkFBWUEsTUFBWixFQUNLeUIsSUFETCxDQUNVLFVBQUNDLEdBQUQsRUFBUTtBQUNWLFlBQUlDLE9BQU9ELElBQUlFLEdBQWY7QUFDQSxZQUFJQyxPQUFPLGVBQWVGLEtBQUtHLFNBQS9CO0FBQ0FDLGVBQU9DLE1BQVAsQ0FBY0wsSUFBZCxFQUFvQjtBQUNoQlgsa0NBRGdCO0FBRWhCTCw4QkFGZ0I7QUFHaEJMLG9CQUhnQjtBQUloQkwsZ0NBSmdCO0FBS2hCZ0MscUJBQVNKLElBTE87QUFNaEJQO0FBTmdCLFNBQXBCO0FBUUEsWUFBSVksVUFBVSw2QkFBY1AsSUFBZCxDQUFkO0FBQ0EsWUFBSVEsaUJBQWlCO0FBQ2pCZCxtQkFBT0QsS0FEVTtBQUVqQkUsdUJBQVdBLFNBRk07QUFHakJjLHNCQUFVbkMsU0FITztBQUlqQmdDLHFCQUFTSixJQUpRO0FBS2pCbEIsc0JBQVVBLFFBTE87QUFNakJ1QixxQkFBU0EsT0FOUTtBQU9qQkcscUJBQVMsaUJBQVNYLEdBQVQsRUFBYztBQUNuQlksbUJBQUdDLFVBQUgsQ0FBYztBQUNWQyx5QkFBSztBQURLLGlCQUFkO0FBR0gsYUFYZ0I7QUFZakJDLGtCQUFNLGNBQVNmLEdBQVQsRUFBYztBQUNoQkgsd0JBQVFDLEdBQVIsQ0FBWUUsR0FBWjtBQUNILGFBZGdCO0FBZWpCZ0Isc0JBQVUsa0JBQVNoQixHQUFULEVBQWM7QUFDcEJILHdCQUFRQyxHQUFSLENBQVksVUFBWjtBQUNIO0FBakJnQixTQUFyQjtBQW1CQWMsV0FBR0ssY0FBSCxDQUFrQlIsY0FBbEI7QUFDSCxLQWpDTDtBQW1DSCxDOztBQTNFRDs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0EiLCJmaWxlIjoicHVyY2hhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlT3ZlcnZpZXcgZnVuY3Rpb24gaW5pdFVzZXJcbiAqIEBhdXRob3IgWGlhb0JpbiBMaShsaXhpYW9iaW44ODc4QGdtYWlsLmNvbSlcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCBjcmVhdGVOb25jZVN0ciBmcm9tICcuL2NyZWF0ZU5vbmNlU3RyJztcbmltcG9ydCBjcmVhdGVUaW1lU3RhbXAgZnJvbSAnLi9jcmVhdGVUaW1lU3RhbXAnO1xuaW1wb3J0IGdldE1kNVBheVNpZ24gZnJvbSAnLi9nZXRNZDVQYXlTaWduJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7IGdldFByZXBheUlkIH0gZnJvbSAnLi4vc2VydmljZS9wdXJjaGFzZSc7XG5pbXBvcnQgdXNlckluZm8gZnJvbSAnLi4vcGx1Z2luL3VzZXJJbmZvJztcbmltcG9ydCBjcmVhdGVPcmRlck51bWJlciBmcm9tICcuL2NyZWF0ZU9yZGVyTnVtYmVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHBhcmFtcykge1xuXG4gICAgdmFyIG5vbmNlX3N0ciA9IGNyZWF0ZU5vbmNlU3RyKCk7XG4gICAgdmFyIG1jaF9pZCA9IHBhcmFtcy5tY2hJZDtcbiAgICB2YXIgYXR0YWNoID0gcGFyYW1zLmlkO1xuICAgIHZhciBrZXkgPSBjb25maWcua2V5O1xuICAgIHZhciBzcGJpbGxfY3JlYXRlX2lwID0gY29uZmlnLmlwO1xuICAgIHZhciB0b3RhbF9mZWUgPSBwYXJhbXMudG90YWxGZWU7XG4gICAgdmFyIHNpZ25UeXBlID0gJ01ENSc7XG4gICAgdmFyIG9wZW5pZCA9IHVzZXJJbmZvLmdldE9wZW5JZCgpO1xuICAgIHZhciBvdXRfdHJhZGVfbm8gPSBwYXJhbXMub3V0VHJhZGVObztcbiAgICB2YXIgbm90aWZ5X3VybCA9ICdodHRwczovL3d3dy5zaGVsaWd1by5jb20vcHVyY2hhc2Uvbm90aWNlJztcbiAgICB2YXIgdHJhZGVfdHlwZSA9ICdKU0FQSSc7XG4gICAgdmFyIGJvZHkgPSBwYXJhbXMudGl0bGU7XG4gICAgdmFyIGFwcGlkID0gY29uZmlnLmFwcElkO1xuICAgIHZhciB0aW1lU3RhbXAgPSBjcmVhdGVUaW1lU3RhbXAoKTtcbiAgICB2YXIgcGFyYW1zID0ge1xuICAgICAgICBhcHBpZCxcbiAgICAgICAgYXR0YWNoLFxuICAgICAgICBib2R5LFxuICAgICAgICBrZXksXG4gICAgICAgIG1jaF9pZCxcbiAgICAgICAgbm9uY2Vfc3RyLFxuICAgICAgICBub3RpZnlfdXJsLFxuICAgICAgICBvcGVuaWQsXG4gICAgICAgIG91dF90cmFkZV9ubyxcbiAgICAgICAgc3BiaWxsX2NyZWF0ZV9pcCxcbiAgICAgICAgdG90YWxfZmVlLFxuICAgICAgICB0cmFkZV90eXBlXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZyhwYXJhbXMpO1xuXG4gICAgZ2V0UHJlcGF5SWQocGFyYW1zKVxuICAgICAgICAudGhlbigocmVzKT0+IHtcbiAgICAgICAgICAgIHZhciBkYXRhID0gcmVzLnhtbDtcbiAgICAgICAgICAgIHZhciBwYWNrID0gJ3ByZXBheV9pZD0nICsgZGF0YS5wcmVwYXlfaWQ7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGRhdGEsIHtcbiAgICAgICAgICAgICAgICBub3RpZnlfdXJsLFxuICAgICAgICAgICAgICAgIHNpZ25UeXBlLFxuICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICBub25jZV9zdHIsXG4gICAgICAgICAgICAgICAgcGFja2FnZTogcGFjayxcbiAgICAgICAgICAgICAgICB0aW1lU3RhbXBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB2YXIgcGF5U2lnbiA9IGdldE1kNVBheVNpZ24oZGF0YSk7XG4gICAgICAgICAgICB2YXIgcGF5bWVudFJlcXVlc3QgPSB7XG4gICAgICAgICAgICAgICAgYXBwSWQ6IGFwcGlkLFxuICAgICAgICAgICAgICAgIHRpbWVTdGFtcDogdGltZVN0YW1wLFxuICAgICAgICAgICAgICAgIG5vbmNlU3RyOiBub25jZV9zdHIsXG4gICAgICAgICAgICAgICAgcGFja2FnZTogcGFjayxcbiAgICAgICAgICAgICAgICBzaWduVHlwZTogc2lnblR5cGUsXG4gICAgICAgICAgICAgICAgcGF5U2lnbjogcGF5U2lnbixcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICdvcmRlcidcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbXBsZXRlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHd4LnJlcXVlc3RQYXltZW50KHBheW1lbnRSZXF1ZXN0KTtcbiAgICAgICAgfSk7XG5cbn0gIl19