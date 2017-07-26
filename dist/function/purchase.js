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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1cmNoYXNlLmpzIl0sIm5hbWVzIjpbInBhcmFtcyIsIm5vbmNlX3N0ciIsIm1jaF9pZCIsIm1jaElkIiwiYXR0YWNoIiwibW9iaWxlIiwia2V5Iiwic3BiaWxsX2NyZWF0ZV9pcCIsImlwIiwidG90YWxfZmVlIiwidG90YWxGZWUiLCJzaWduVHlwZSIsIm9wZW5pZCIsImdldE9wZW5JZCIsIm91dF90cmFkZV9ubyIsIm91dFRyYWRlTm8iLCJub3RpZnlfdXJsIiwidHJhZGVfdHlwZSIsImJvZHkiLCJ0aXRsZSIsImFwcGlkIiwiYXBwSWQiLCJ0aW1lU3RhbXAiLCJjb25zb2xlIiwibG9nIiwidGhlbiIsInJlcyIsImRhdGEiLCJ4bWwiLCJwYWNrIiwicHJlcGF5X2lkIiwiT2JqZWN0IiwiYXNzaWduIiwicGFja2FnZSIsInBheVNpZ24iLCJwYXltZW50UmVxdWVzdCIsIm5vbmNlU3RyIiwic3VjY2VzcyIsImZhaWwiLCJjb21wbGV0ZSIsInd4IiwicmVxdWVzdFBheW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUtBOzs7Ozs7a0JBVWUsVUFBVUEsTUFBVixFQUFrQjs7QUFFN0IsUUFBSUMsWUFBWSwrQkFBaEI7QUFDQSxRQUFJQyxTQUFTRixPQUFPRyxLQUFwQjtBQUNBLFFBQUlDLFNBQVNKLE9BQU9LLE1BQXBCO0FBQ0EsUUFBSUMsTUFBTSxpQkFBT0EsR0FBakI7QUFDQSxRQUFJQyxtQkFBbUIsaUJBQU9DLEVBQTlCO0FBQ0EsUUFBSUMsWUFBWVQsT0FBT1UsUUFBdkI7QUFDQSxRQUFJQyxXQUFXLEtBQWY7QUFDQSxRQUFJQyxTQUFTLG1CQUFTQyxTQUFULEVBQWI7QUFDQSxRQUFJQyxlQUFlZCxPQUFPZSxVQUExQjtBQUNBLFFBQUlDLGFBQWEsMENBQWpCO0FBQ0EsUUFBSUMsYUFBYSxPQUFqQjtBQUNBLFFBQUlDLE9BQU9sQixPQUFPbUIsS0FBbEI7QUFDQSxRQUFJQyxRQUFRLGlCQUFPQyxLQUFuQjtBQUNBLFFBQUlDLFlBQVksZ0NBQWhCO0FBQ0EsUUFBSXRCLFNBQVM7QUFDVG9CLG9CQURTO0FBRVRoQixzQkFGUztBQUdUYyxrQkFIUztBQUlUWixnQkFKUztBQUtUSixzQkFMUztBQU1URCw0QkFOUztBQU9UZSw4QkFQUztBQVFUSixzQkFSUztBQVNURSxrQ0FUUztBQVVUUCwwQ0FWUztBQVdURSw0QkFYUztBQVlUUTtBQVpTLEtBQWI7QUFjQU0sWUFBUUMsR0FBUixDQUFZeEIsTUFBWjs7QUFFQSwrQkFBWUEsTUFBWixFQUNLeUIsSUFETCxDQUNVLFVBQUNDLEdBQUQsRUFBUTtBQUNWLFlBQUlDLE9BQU9ELElBQUlFLEdBQWY7QUFDQSxZQUFJQyxPQUFPLGVBQWVGLEtBQUtHLFNBQS9CO0FBQ0FDLGVBQU9DLE1BQVAsQ0FBY0wsSUFBZCxFQUFvQjtBQUNoQlgsa0NBRGdCO0FBRWhCTCw4QkFGZ0I7QUFHaEJMLG9CQUhnQjtBQUloQkwsZ0NBSmdCO0FBS2hCZ0MscUJBQVNKLElBTE87QUFNaEJQO0FBTmdCLFNBQXBCO0FBUUEsWUFBSVksVUFBVSw2QkFBY1AsSUFBZCxDQUFkO0FBQ0EsWUFBSVEsaUJBQWlCO0FBQ2pCZCxtQkFBT0QsS0FEVTtBQUVqQkUsdUJBQVdBLFNBRk07QUFHakJjLHNCQUFVbkMsU0FITztBQUlqQmdDLHFCQUFTSixJQUpRO0FBS2pCbEIsc0JBQVVBLFFBTE87QUFNakJ1QixxQkFBU0EsT0FOUTtBQU9qQkcscUJBQVMsaUJBQVNYLEdBQVQsRUFBYztBQUNuQkgsd0JBQVFDLEdBQVIsQ0FBWSxDQUFaO0FBQ0gsYUFUZ0I7QUFVakJjLGtCQUFNLGNBQVNaLEdBQVQsRUFBYztBQUNoQkgsd0JBQVFDLEdBQVIsQ0FBWUUsR0FBWjtBQUNILGFBWmdCO0FBYWpCYSxzQkFBVSxrQkFBU2IsR0FBVCxFQUFjO0FBQ3BCSCx3QkFBUUMsR0FBUixDQUFZLENBQVo7QUFDSDtBQWZnQixTQUFyQjtBQWlCQUQsZ0JBQVFDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QlcsY0FBOUI7QUFDQUssV0FBR0MsY0FBSCxDQUFrQk4sY0FBbEI7QUFDSCxLQWhDTDtBQWtDSCxDOztBQTFFRDs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0EiLCJmaWxlIjoicHVyY2hhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlT3ZlcnZpZXcgZnVuY3Rpb24gaW5pdFVzZXJcbiAqIEBhdXRob3IgWGlhb0JpbiBMaShsaXhpYW9iaW44ODc4QGdtYWlsLmNvbSlcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCBjcmVhdGVOb25jZVN0ciBmcm9tICcuL2NyZWF0ZU5vbmNlU3RyJztcbmltcG9ydCBjcmVhdGVUaW1lU3RhbXAgZnJvbSAnLi9jcmVhdGVUaW1lU3RhbXAnO1xuaW1wb3J0IGdldE1kNVBheVNpZ24gZnJvbSAnLi9nZXRNZDVQYXlTaWduJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7IGdldFByZXBheUlkIH0gZnJvbSAnLi4vc2VydmljZS9wdXJjaGFzZSc7XG5pbXBvcnQgdXNlckluZm8gZnJvbSAnLi4vcGx1Z2luL3VzZXJJbmZvJztcbmltcG9ydCBnZXRPcmRlck51bWJlciBmcm9tICcuL2dldE9yZGVyTnVtYmVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHBhcmFtcykge1xuXG4gICAgdmFyIG5vbmNlX3N0ciA9IGNyZWF0ZU5vbmNlU3RyKCk7XG4gICAgdmFyIG1jaF9pZCA9IHBhcmFtcy5tY2hJZDtcbiAgICB2YXIgYXR0YWNoID0gcGFyYW1zLm1vYmlsZTtcbiAgICB2YXIga2V5ID0gY29uZmlnLmtleTtcbiAgICB2YXIgc3BiaWxsX2NyZWF0ZV9pcCA9IGNvbmZpZy5pcDtcbiAgICB2YXIgdG90YWxfZmVlID0gcGFyYW1zLnRvdGFsRmVlO1xuICAgIHZhciBzaWduVHlwZSA9ICdNRDUnO1xuICAgIHZhciBvcGVuaWQgPSB1c2VySW5mby5nZXRPcGVuSWQoKTtcbiAgICB2YXIgb3V0X3RyYWRlX25vID0gcGFyYW1zLm91dFRyYWRlTm87XG4gICAgdmFyIG5vdGlmeV91cmwgPSAnaHR0cHM6Ly93d3cuc2hlbGlndW8uY29tL3B1cmNoYXNlL25vdGljZSc7XG4gICAgdmFyIHRyYWRlX3R5cGUgPSAnSlNBUEknO1xuICAgIHZhciBib2R5ID0gcGFyYW1zLnRpdGxlO1xuICAgIHZhciBhcHBpZCA9IGNvbmZpZy5hcHBJZDtcbiAgICB2YXIgdGltZVN0YW1wID0gY3JlYXRlVGltZVN0YW1wKCk7XG4gICAgdmFyIHBhcmFtcyA9IHtcbiAgICAgICAgYXBwaWQsXG4gICAgICAgIGF0dGFjaCxcbiAgICAgICAgYm9keSxcbiAgICAgICAga2V5LFxuICAgICAgICBtY2hfaWQsXG4gICAgICAgIG5vbmNlX3N0cixcbiAgICAgICAgbm90aWZ5X3VybCxcbiAgICAgICAgb3BlbmlkLFxuICAgICAgICBvdXRfdHJhZGVfbm8sXG4gICAgICAgIHNwYmlsbF9jcmVhdGVfaXAsXG4gICAgICAgIHRvdGFsX2ZlZSxcbiAgICAgICAgdHJhZGVfdHlwZVxuICAgIH07XG4gICAgY29uc29sZS5sb2cocGFyYW1zKTtcblxuICAgIGdldFByZXBheUlkKHBhcmFtcylcbiAgICAgICAgLnRoZW4oKHJlcyk9PiB7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IHJlcy54bWw7XG4gICAgICAgICAgICB2YXIgcGFjayA9ICdwcmVwYXlfaWQ9JyArIGRhdGEucHJlcGF5X2lkO1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihkYXRhLCB7XG4gICAgICAgICAgICAgICAgbm90aWZ5X3VybCxcbiAgICAgICAgICAgICAgICBzaWduVHlwZSxcbiAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgbm9uY2Vfc3RyLFxuICAgICAgICAgICAgICAgIHBhY2thZ2U6IHBhY2ssXG4gICAgICAgICAgICAgICAgdGltZVN0YW1wXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdmFyIHBheVNpZ24gPSBnZXRNZDVQYXlTaWduKGRhdGEpO1xuICAgICAgICAgICAgdmFyIHBheW1lbnRSZXF1ZXN0ID0ge1xuICAgICAgICAgICAgICAgIGFwcElkOiBhcHBpZCxcbiAgICAgICAgICAgICAgICB0aW1lU3RhbXA6IHRpbWVTdGFtcCxcbiAgICAgICAgICAgICAgICBub25jZVN0cjogbm9uY2Vfc3RyLFxuICAgICAgICAgICAgICAgIHBhY2thZ2U6IHBhY2ssXG4gICAgICAgICAgICAgICAgc2lnblR5cGU6IHNpZ25UeXBlLFxuICAgICAgICAgICAgICAgIHBheVNpZ246IHBheVNpZ24sXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKDEpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coMyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwYXltZW50UmVxdWVzdCcsIHBheW1lbnRSZXF1ZXN0KTtcbiAgICAgICAgICAgIHd4LnJlcXVlc3RQYXltZW50KHBheW1lbnRSZXF1ZXN0KTtcbiAgICAgICAgfSk7XG5cbn0gIl19