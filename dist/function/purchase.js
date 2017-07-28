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

var _createOrderNumber = require('./createOrderNumber.js');

var _createOrderNumber2 = _interopRequireDefault(_createOrderNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1cmNoYXNlLmpzIl0sIm5hbWVzIjpbInBhcmFtcyIsIm5vbmNlX3N0ciIsIm1jaF9pZCIsIm1jaElkIiwiYXR0YWNoIiwiaWQiLCJrZXkiLCJzcGJpbGxfY3JlYXRlX2lwIiwiaXAiLCJ0b3RhbF9mZWUiLCJ0b3RhbEZlZSIsInNpZ25UeXBlIiwib3BlbmlkIiwiZ2V0T3BlbklkIiwib3V0X3RyYWRlX25vIiwib3V0VHJhZGVObyIsIm5vdGlmeV91cmwiLCJ0cmFkZV90eXBlIiwiYm9keSIsInRpdGxlIiwiYXBwaWQiLCJhcHBJZCIsInRpbWVTdGFtcCIsImNvbnNvbGUiLCJsb2ciLCJ0aGVuIiwicmVzIiwiZGF0YSIsInhtbCIsInBhY2siLCJwcmVwYXlfaWQiLCJPYmplY3QiLCJhc3NpZ24iLCJwYWNrYWdlIiwicGF5U2lnbiIsInBheW1lbnRSZXF1ZXN0Iiwibm9uY2VTdHIiLCJzdWNjZXNzIiwiZmFpbCIsImNvbXBsZXRlIiwid3giLCJyZXF1ZXN0UGF5bWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBS0E7Ozs7OztrQkFVZSxVQUFVQSxNQUFWLEVBQWtCOztBQUU3QixRQUFJQyxZQUFZLCtCQUFoQjtBQUNBLFFBQUlDLFNBQVNGLE9BQU9HLEtBQXBCO0FBQ0EsUUFBSUMsU0FBU0osT0FBT0ssRUFBcEI7QUFDQSxRQUFJQyxNQUFNLGlCQUFPQSxHQUFqQjtBQUNBLFFBQUlDLG1CQUFtQixpQkFBT0MsRUFBOUI7QUFDQSxRQUFJQyxZQUFZVCxPQUFPVSxRQUF2QjtBQUNBLFFBQUlDLFdBQVcsS0FBZjtBQUNBLFFBQUlDLFNBQVMsbUJBQVNDLFNBQVQsRUFBYjtBQUNBLFFBQUlDLGVBQWVkLE9BQU9lLFVBQTFCO0FBQ0EsUUFBSUMsYUFBYSwwQ0FBakI7QUFDQSxRQUFJQyxhQUFhLE9BQWpCO0FBQ0EsUUFBSUMsT0FBT2xCLE9BQU9tQixLQUFsQjtBQUNBLFFBQUlDLFFBQVEsaUJBQU9DLEtBQW5CO0FBQ0EsUUFBSUMsWUFBWSxnQ0FBaEI7QUFDQSxRQUFJdEIsU0FBUztBQUNUb0Isb0JBRFM7QUFFVGhCLHNCQUZTO0FBR1RjLGtCQUhTO0FBSVRaLGdCQUpTO0FBS1RKLHNCQUxTO0FBTVRELDRCQU5TO0FBT1RlLDhCQVBTO0FBUVRKLHNCQVJTO0FBU1RFLGtDQVRTO0FBVVRQLDBDQVZTO0FBV1RFLDRCQVhTO0FBWVRRO0FBWlMsS0FBYjtBQWNBTSxZQUFRQyxHQUFSLENBQVl4QixNQUFaOztBQUVBLCtCQUFZQSxNQUFaLEVBQ0t5QixJQURMLENBQ1UsVUFBQ0MsR0FBRCxFQUFRO0FBQ1YsWUFBSUMsT0FBT0QsSUFBSUUsR0FBZjtBQUNBLFlBQUlDLE9BQU8sZUFBZUYsS0FBS0csU0FBL0I7QUFDQUMsZUFBT0MsTUFBUCxDQUFjTCxJQUFkLEVBQW9CO0FBQ2hCWCxrQ0FEZ0I7QUFFaEJMLDhCQUZnQjtBQUdoQkwsb0JBSGdCO0FBSWhCTCxnQ0FKZ0I7QUFLaEJnQyxxQkFBU0osSUFMTztBQU1oQlA7QUFOZ0IsU0FBcEI7QUFRQSxZQUFJWSxVQUFVLDZCQUFjUCxJQUFkLENBQWQ7QUFDQSxZQUFJUSxpQkFBaUI7QUFDakJkLG1CQUFPRCxLQURVO0FBRWpCRSx1QkFBV0EsU0FGTTtBQUdqQmMsc0JBQVVuQyxTQUhPO0FBSWpCZ0MscUJBQVNKLElBSlE7QUFLakJsQixzQkFBVUEsUUFMTztBQU1qQnVCLHFCQUFTQSxPQU5RO0FBT2pCRyxxQkFBUyxpQkFBU1gsR0FBVCxFQUFjO0FBQ25CSCx3QkFBUUMsR0FBUixDQUFZLENBQVo7QUFDSCxhQVRnQjtBQVVqQmMsa0JBQU0sY0FBU1osR0FBVCxFQUFjO0FBQ2hCSCx3QkFBUUMsR0FBUixDQUFZRSxHQUFaO0FBQ0gsYUFaZ0I7QUFhakJhLHNCQUFVLGtCQUFTYixHQUFULEVBQWM7QUFDcEJILHdCQUFRQyxHQUFSLENBQVksQ0FBWjtBQUNIO0FBZmdCLFNBQXJCO0FBaUJBRCxnQkFBUUMsR0FBUixDQUFZLGdCQUFaLEVBQThCVyxjQUE5QjtBQUNBSyxXQUFHQyxjQUFILENBQWtCTixjQUFsQjtBQUNILEtBaENMO0FBa0NILEM7O0FBMUVEOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQSIsImZpbGUiOiJwdXJjaGFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVPdmVydmlldyBmdW5jdGlvbiBpbml0VXNlclxuICogQGF1dGhvciBYaWFvQmluIExpKGxpeGlhb2Jpbjg4NzhAZ21haWwuY29tKVxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGNyZWF0ZU5vbmNlU3RyIGZyb20gJy4vY3JlYXRlTm9uY2VTdHInO1xuaW1wb3J0IGNyZWF0ZVRpbWVTdGFtcCBmcm9tICcuL2NyZWF0ZVRpbWVTdGFtcCc7XG5pbXBvcnQgZ2V0TWQ1UGF5U2lnbiBmcm9tICcuL2dldE1kNVBheVNpZ24nO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgZ2V0UHJlcGF5SWQgfSBmcm9tICcuLi9zZXJ2aWNlL3B1cmNoYXNlJztcbmltcG9ydCB1c2VySW5mbyBmcm9tICcuLi9wbHVnaW4vdXNlckluZm8nO1xuaW1wb3J0IGNyZWF0ZU9yZGVyTnVtYmVyIGZyb20gJy4vY3JlYXRlT3JkZXJOdW1iZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocGFyYW1zKSB7XG5cbiAgICB2YXIgbm9uY2Vfc3RyID0gY3JlYXRlTm9uY2VTdHIoKTtcbiAgICB2YXIgbWNoX2lkID0gcGFyYW1zLm1jaElkO1xuICAgIHZhciBhdHRhY2ggPSBwYXJhbXMuaWQ7XG4gICAgdmFyIGtleSA9IGNvbmZpZy5rZXk7XG4gICAgdmFyIHNwYmlsbF9jcmVhdGVfaXAgPSBjb25maWcuaXA7XG4gICAgdmFyIHRvdGFsX2ZlZSA9IHBhcmFtcy50b3RhbEZlZTtcbiAgICB2YXIgc2lnblR5cGUgPSAnTUQ1JztcbiAgICB2YXIgb3BlbmlkID0gdXNlckluZm8uZ2V0T3BlbklkKCk7XG4gICAgdmFyIG91dF90cmFkZV9ubyA9IHBhcmFtcy5vdXRUcmFkZU5vO1xuICAgIHZhciBub3RpZnlfdXJsID0gJ2h0dHBzOi8vd3d3LnNoZWxpZ3VvLmNvbS9wdXJjaGFzZS9ub3RpY2UnO1xuICAgIHZhciB0cmFkZV90eXBlID0gJ0pTQVBJJztcbiAgICB2YXIgYm9keSA9IHBhcmFtcy50aXRsZTtcbiAgICB2YXIgYXBwaWQgPSBjb25maWcuYXBwSWQ7XG4gICAgdmFyIHRpbWVTdGFtcCA9IGNyZWF0ZVRpbWVTdGFtcCgpO1xuICAgIHZhciBwYXJhbXMgPSB7XG4gICAgICAgIGFwcGlkLFxuICAgICAgICBhdHRhY2gsXG4gICAgICAgIGJvZHksXG4gICAgICAgIGtleSxcbiAgICAgICAgbWNoX2lkLFxuICAgICAgICBub25jZV9zdHIsXG4gICAgICAgIG5vdGlmeV91cmwsXG4gICAgICAgIG9wZW5pZCxcbiAgICAgICAgb3V0X3RyYWRlX25vLFxuICAgICAgICBzcGJpbGxfY3JlYXRlX2lwLFxuICAgICAgICB0b3RhbF9mZWUsXG4gICAgICAgIHRyYWRlX3R5cGVcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKHBhcmFtcyk7XG5cbiAgICBnZXRQcmVwYXlJZChwYXJhbXMpXG4gICAgICAgIC50aGVuKChyZXMpPT4ge1xuICAgICAgICAgICAgdmFyIGRhdGEgPSByZXMueG1sO1xuICAgICAgICAgICAgdmFyIHBhY2sgPSAncHJlcGF5X2lkPScgKyBkYXRhLnByZXBheV9pZDtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oZGF0YSwge1xuICAgICAgICAgICAgICAgIG5vdGlmeV91cmwsXG4gICAgICAgICAgICAgICAgc2lnblR5cGUsXG4gICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgIG5vbmNlX3N0cixcbiAgICAgICAgICAgICAgICBwYWNrYWdlOiBwYWNrLFxuICAgICAgICAgICAgICAgIHRpbWVTdGFtcFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHZhciBwYXlTaWduID0gZ2V0TWQ1UGF5U2lnbihkYXRhKTtcbiAgICAgICAgICAgIHZhciBwYXltZW50UmVxdWVzdCA9IHtcbiAgICAgICAgICAgICAgICBhcHBJZDogYXBwaWQsXG4gICAgICAgICAgICAgICAgdGltZVN0YW1wOiB0aW1lU3RhbXAsXG4gICAgICAgICAgICAgICAgbm9uY2VTdHI6IG5vbmNlX3N0cixcbiAgICAgICAgICAgICAgICBwYWNrYWdlOiBwYWNrLFxuICAgICAgICAgICAgICAgIHNpZ25UeXBlOiBzaWduVHlwZSxcbiAgICAgICAgICAgICAgICBwYXlTaWduOiBwYXlTaWduLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygxKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKDMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncGF5bWVudFJlcXVlc3QnLCBwYXltZW50UmVxdWVzdCk7XG4gICAgICAgICAgICB3eC5yZXF1ZXN0UGF5bWVudChwYXltZW50UmVxdWVzdCk7XG4gICAgICAgIH0pO1xuXG59ICJdfQ==