/**
 * @fileOverview function initUser
 * @author XiaoBin Li(lixiaobin8878@gmail.com)
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (productId) {
    var nonce_str = (0, _createNonceStr2.default)();
    var mch_id = _config2.default.mchId;
    var attach = _config2.default.mobile;
    var key = 'q5yB94rRFxWd3TPhdeenSBpScyTesf67';
    var spbill_create_ip = '114.115.158.88';
    var total_fee = 1;
    var signType = 'MD5';
    var openid = _userInfo2.default.getOpenId();
    var out_trade_no = (0, _getOrderNumber2.default)();
    var notify_url = 'https://www.sheliguo.com/purchase/notice';
    var trade_type = 'JSAPI';
    var body = 'test';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1cmNoYXNlLmpzIl0sIm5hbWVzIjpbInByb2R1Y3RJZCIsIm5vbmNlX3N0ciIsIm1jaF9pZCIsIm1jaElkIiwiYXR0YWNoIiwibW9iaWxlIiwia2V5Iiwic3BiaWxsX2NyZWF0ZV9pcCIsInRvdGFsX2ZlZSIsInNpZ25UeXBlIiwib3BlbmlkIiwiZ2V0T3BlbklkIiwib3V0X3RyYWRlX25vIiwibm90aWZ5X3VybCIsInRyYWRlX3R5cGUiLCJib2R5IiwiYXBwaWQiLCJhcHBJZCIsInRpbWVTdGFtcCIsInBhcmFtcyIsInRoZW4iLCJyZXMiLCJkYXRhIiwieG1sIiwicGFjayIsInByZXBheV9pZCIsIk9iamVjdCIsImFzc2lnbiIsInBhY2thZ2UiLCJwYXlTaWduIiwicGF5bWVudFJlcXVlc3QiLCJub25jZVN0ciIsInN1Y2Nlc3MiLCJjb25zb2xlIiwibG9nIiwiZmFpbCIsImNvbXBsZXRlIiwid3giLCJyZXF1ZXN0UGF5bWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBS0E7Ozs7OztrQkFVZSxVQUFVQSxTQUFWLEVBQXFCO0FBQ2hDLFFBQUlDLFlBQVksK0JBQWhCO0FBQ0EsUUFBSUMsU0FBUyxpQkFBT0MsS0FBcEI7QUFDQSxRQUFJQyxTQUFTLGlCQUFPQyxNQUFwQjtBQUNBLFFBQUlDLE1BQU0sa0NBQVY7QUFDQSxRQUFJQyxtQkFBbUIsZ0JBQXZCO0FBQ0EsUUFBSUMsWUFBWSxDQUFoQjtBQUNBLFFBQUlDLFdBQVcsS0FBZjtBQUNBLFFBQUlDLFNBQVMsbUJBQVNDLFNBQVQsRUFBYjtBQUNBLFFBQUlDLGVBQWUsK0JBQW5CO0FBQ0EsUUFBSUMsYUFBYSwwQ0FBakI7QUFDQSxRQUFJQyxhQUFhLE9BQWpCO0FBQ0EsUUFBSUMsT0FBTyxNQUFYO0FBQ0EsUUFBSUMsUUFBUSxpQkFBT0MsS0FBbkI7QUFDQSxRQUFJQyxZQUFZLGdDQUFoQjtBQUNBLFFBQUlDLFNBQVM7QUFDVEgsb0JBRFM7QUFFVFosc0JBRlM7QUFHVFcsa0JBSFM7QUFJVFQsZ0JBSlM7QUFLVEosc0JBTFM7QUFNVEQsNEJBTlM7QUFPVFksOEJBUFM7QUFRVEgsc0JBUlM7QUFTVEUsa0NBVFM7QUFVVEwsMENBVlM7QUFXVEMsNEJBWFM7QUFZVE07QUFaUyxLQUFiO0FBY0EsK0JBQVlLLE1BQVosRUFDS0MsSUFETCxDQUNVLFVBQUNDLEdBQUQsRUFBUTtBQUNWLFlBQUlDLE9BQU9ELElBQUlFLEdBQWY7O0FBRUEsWUFBSUMsT0FBTyxlQUFlRixLQUFLRyxTQUEvQjs7QUFFQUMsZUFBT0MsTUFBUCxDQUFjTCxJQUFkLEVBQW9CO0FBQ2hCVCxrQ0FEZ0I7QUFFaEJKLDhCQUZnQjtBQUdoQkgsb0JBSGdCO0FBSWhCTCxnQ0FKZ0I7QUFLaEIyQixxQkFBU0osSUFMTztBQU1oQk47QUFOZ0IsU0FBcEI7QUFRQSxZQUFJVyxVQUFVLDZCQUFjUCxJQUFkLENBQWQ7QUFDQSxZQUFJUSxpQkFBaUI7QUFDakJiLG1CQUFPRCxLQURVO0FBRWpCRSx1QkFBV0EsU0FGTTtBQUdqQmEsc0JBQVU5QixTQUhPO0FBSWpCMkIscUJBQVNKLElBSlE7QUFLakJmLHNCQUFVQSxRQUxPO0FBTWpCb0IscUJBQVNBLE9BTlE7QUFPakJHLHFCQUFTLGlCQUFTWCxHQUFULEVBQWM7QUFDbkJZLHdCQUFRQyxHQUFSLENBQVksQ0FBWjtBQUNILGFBVGdCO0FBVWpCQyxrQkFBTSxjQUFTZCxHQUFULEVBQWM7QUFDaEJZLHdCQUFRQyxHQUFSLENBQVliLEdBQVo7QUFDSCxhQVpnQjtBQWFqQmUsc0JBQVUsa0JBQVNmLEdBQVQsRUFBYztBQUNwQlksd0JBQVFDLEdBQVIsQ0FBWSxDQUFaO0FBQ0g7QUFmZ0IsU0FBckI7QUFpQkFELGdCQUFRQyxHQUFSLENBQVksZ0JBQVosRUFBOEJKLGNBQTlCO0FBQ0FPLFdBQUdDLGNBQUgsQ0FBa0JSLGNBQWxCO0FBQ0gsS0FsQ0w7QUFvQ0gsQzs7QUF6RUQ7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBIiwiZmlsZSI6InB1cmNoYXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IGZ1bmN0aW9uIGluaXRVc2VyXG4gKiBAYXV0aG9yIFhpYW9CaW4gTGkobGl4aWFvYmluODg3OEBnbWFpbC5jb20pXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgY3JlYXRlTm9uY2VTdHIgZnJvbSAnLi9jcmVhdGVOb25jZVN0cic7XG5pbXBvcnQgY3JlYXRlVGltZVN0YW1wIGZyb20gJy4vY3JlYXRlVGltZVN0YW1wJztcbmltcG9ydCBnZXRNZDVQYXlTaWduIGZyb20gJy4vZ2V0TWQ1UGF5U2lnbic7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBnZXRQcmVwYXlJZCB9IGZyb20gJy4uL3NlcnZpY2UvcHVyY2hhc2UnO1xuaW1wb3J0IHVzZXJJbmZvIGZyb20gJy4uL3BsdWdpbi91c2VySW5mbyc7XG5pbXBvcnQgZ2V0T3JkZXJOdW1iZXIgZnJvbSAnLi9nZXRPcmRlck51bWJlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwcm9kdWN0SWQpIHtcbiAgICB2YXIgbm9uY2Vfc3RyID0gY3JlYXRlTm9uY2VTdHIoKTtcbiAgICB2YXIgbWNoX2lkID0gY29uZmlnLm1jaElkO1xuICAgIHZhciBhdHRhY2ggPSBjb25maWcubW9iaWxlO1xuICAgIHZhciBrZXkgPSAncTV5Qjk0clJGeFdkM1RQaGRlZW5TQnBTY3lUZXNmNjcnO1xuICAgIHZhciBzcGJpbGxfY3JlYXRlX2lwID0gJzExNC4xMTUuMTU4Ljg4JztcbiAgICB2YXIgdG90YWxfZmVlID0gMTtcbiAgICB2YXIgc2lnblR5cGUgPSAnTUQ1JztcbiAgICB2YXIgb3BlbmlkID0gdXNlckluZm8uZ2V0T3BlbklkKCk7XG4gICAgdmFyIG91dF90cmFkZV9ubyA9IGdldE9yZGVyTnVtYmVyKCk7XG4gICAgdmFyIG5vdGlmeV91cmwgPSAnaHR0cHM6Ly93d3cuc2hlbGlndW8uY29tL3B1cmNoYXNlL25vdGljZSc7XG4gICAgdmFyIHRyYWRlX3R5cGUgPSAnSlNBUEknO1xuICAgIHZhciBib2R5ID0gJ3Rlc3QnO1xuICAgIHZhciBhcHBpZCA9IGNvbmZpZy5hcHBJZDtcbiAgICB2YXIgdGltZVN0YW1wID0gY3JlYXRlVGltZVN0YW1wKCk7XG4gICAgdmFyIHBhcmFtcyA9IHtcbiAgICAgICAgYXBwaWQsXG4gICAgICAgIGF0dGFjaCxcbiAgICAgICAgYm9keSxcbiAgICAgICAga2V5LFxuICAgICAgICBtY2hfaWQsXG4gICAgICAgIG5vbmNlX3N0cixcbiAgICAgICAgbm90aWZ5X3VybCxcbiAgICAgICAgb3BlbmlkLFxuICAgICAgICBvdXRfdHJhZGVfbm8sXG4gICAgICAgIHNwYmlsbF9jcmVhdGVfaXAsXG4gICAgICAgIHRvdGFsX2ZlZSxcbiAgICAgICAgdHJhZGVfdHlwZVxuICAgIH1cbiAgICBnZXRQcmVwYXlJZChwYXJhbXMpXG4gICAgICAgIC50aGVuKChyZXMpPT4ge1xuICAgICAgICAgICAgdmFyIGRhdGEgPSByZXMueG1sO1xuXG4gICAgICAgICAgICB2YXIgcGFjayA9ICdwcmVwYXlfaWQ9JyArIGRhdGEucHJlcGF5X2lkO1xuXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGRhdGEsIHtcbiAgICAgICAgICAgICAgICBub3RpZnlfdXJsLFxuICAgICAgICAgICAgICAgIHNpZ25UeXBlLFxuICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICBub25jZV9zdHIsXG4gICAgICAgICAgICAgICAgcGFja2FnZTogcGFjayxcbiAgICAgICAgICAgICAgICB0aW1lU3RhbXBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB2YXIgcGF5U2lnbiA9IGdldE1kNVBheVNpZ24oZGF0YSk7XG4gICAgICAgICAgICB2YXIgcGF5bWVudFJlcXVlc3QgPSB7XG4gICAgICAgICAgICAgICAgYXBwSWQ6IGFwcGlkLFxuICAgICAgICAgICAgICAgIHRpbWVTdGFtcDogdGltZVN0YW1wLFxuICAgICAgICAgICAgICAgIG5vbmNlU3RyOiBub25jZV9zdHIsXG4gICAgICAgICAgICAgICAgcGFja2FnZTogcGFjayxcbiAgICAgICAgICAgICAgICBzaWduVHlwZTogc2lnblR5cGUsXG4gICAgICAgICAgICAgICAgcGF5U2lnbjogcGF5U2lnbixcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coMSlcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3BheW1lbnRSZXF1ZXN0JywgcGF5bWVudFJlcXVlc3QpO1xuICAgICAgICAgICAgd3gucmVxdWVzdFBheW1lbnQocGF5bWVudFJlcXVlc3QpO1xuICAgICAgICB9KTtcblxufSAiXX0=