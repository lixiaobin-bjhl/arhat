/**
 * @fileOverview function purchase
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
    var notify_url = _config2.default.domain + '/purchase/notice';
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
        params.formId = data.prepay_id;
        var paymentRequest = {
            appId: appid,
            timeStamp: timeStamp,
            nonceStr: nonce_str,
            package: pack,
            signType: signType,
            paySign: paySign,
            success: function success(res) {
                // 发送一个支付成功消息
                message.sendPaySuccessMessage(params);
                wx.navigateTo({
                    url: 'order'
                });
            },
            fail: function fail(res) {
                params.errMsg = res.errMsg;
                // 支付失败消息
                message.sendPayFailMessage(params);
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

var _message = require('./../service/message.js');

var message = _interopRequireWildcard(_message);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1cmNoYXNlLmpzIl0sIm5hbWVzIjpbInBhcmFtcyIsIm5vbmNlX3N0ciIsIm1jaF9pZCIsIm1jaElkIiwiYXR0YWNoIiwiaWQiLCJrZXkiLCJzcGJpbGxfY3JlYXRlX2lwIiwiaXAiLCJ0b3RhbF9mZWUiLCJ0b3RhbEZlZSIsInNpZ25UeXBlIiwib3BlbmlkIiwiZ2V0T3BlbklkIiwib3V0X3RyYWRlX25vIiwib3V0VHJhZGVObyIsIm5vdGlmeV91cmwiLCJkb21haW4iLCJ0cmFkZV90eXBlIiwiYm9keSIsInRpdGxlIiwiYXBwaWQiLCJhcHBJZCIsInRpbWVTdGFtcCIsImNvbnNvbGUiLCJsb2ciLCJ0aGVuIiwicmVzIiwiZGF0YSIsInhtbCIsInBhY2siLCJwcmVwYXlfaWQiLCJPYmplY3QiLCJhc3NpZ24iLCJwYWNrYWdlIiwicGF5U2lnbiIsImZvcm1JZCIsInBheW1lbnRSZXF1ZXN0Iiwibm9uY2VTdHIiLCJzdWNjZXNzIiwibWVzc2FnZSIsInNlbmRQYXlTdWNjZXNzTWVzc2FnZSIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsImZhaWwiLCJlcnJNc2ciLCJzZW5kUGF5RmFpbE1lc3NhZ2UiLCJjb21wbGV0ZSIsInJlcXVlc3RQYXltZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFLQTs7Ozs7O2tCQVdlLFVBQVVBLE1BQVYsRUFBa0I7O0FBRTdCLFFBQUlDLFlBQVksK0JBQWhCO0FBQ0EsUUFBSUMsU0FBU0YsT0FBT0csS0FBcEI7QUFDQSxRQUFJQyxTQUFTSixPQUFPSyxFQUFwQjtBQUNBLFFBQUlDLE1BQU0saUJBQU9BLEdBQWpCO0FBQ0EsUUFBSUMsbUJBQW1CLGlCQUFPQyxFQUE5QjtBQUNBLFFBQUlDLFlBQVlULE9BQU9VLFFBQXZCO0FBQ0EsUUFBSUMsV0FBVyxLQUFmO0FBQ0EsUUFBSUMsU0FBUyxtQkFBU0MsU0FBVCxFQUFiO0FBQ0EsUUFBSUMsZUFBZWQsT0FBT2UsVUFBMUI7QUFDQSxRQUFJQyxhQUFhLGlCQUFPQyxNQUFQLEdBQWdCLGtCQUFqQztBQUNBLFFBQUlDLGFBQWEsT0FBakI7QUFDQSxRQUFJQyxPQUFPbkIsT0FBT29CLEtBQWxCO0FBQ0EsUUFBSUMsUUFBUSxpQkFBT0MsS0FBbkI7QUFDQSxRQUFJQyxZQUFZLGdDQUFoQjtBQUNBLFFBQUl2QixTQUFTO0FBQ1RxQixvQkFEUztBQUVUakIsc0JBRlM7QUFHVGUsa0JBSFM7QUFJVGIsZ0JBSlM7QUFLVEosc0JBTFM7QUFNVEQsNEJBTlM7QUFPVGUsOEJBUFM7QUFRVEosc0JBUlM7QUFTVEUsa0NBVFM7QUFVVFAsMENBVlM7QUFXVEUsNEJBWFM7QUFZVFM7QUFaUyxLQUFiO0FBY0FNLFlBQVFDLEdBQVIsQ0FBWXpCLE1BQVo7O0FBRUEsK0JBQVlBLE1BQVosRUFDSzBCLElBREwsQ0FDVSxVQUFDQyxHQUFELEVBQVE7QUFDVixZQUFJQyxPQUFPRCxJQUFJRSxHQUFmO0FBQ0EsWUFBSUMsT0FBTyxlQUFlRixLQUFLRyxTQUEvQjtBQUNBQyxlQUFPQyxNQUFQLENBQWNMLElBQWQsRUFBb0I7QUFDaEJaLGtDQURnQjtBQUVoQkwsOEJBRmdCO0FBR2hCTCxvQkFIZ0I7QUFJaEJMLGdDQUpnQjtBQUtoQmlDLHFCQUFTSixJQUxPO0FBTWhCUDtBQU5nQixTQUFwQjtBQVFBLFlBQUlZLFVBQVUsNkJBQWNQLElBQWQsQ0FBZDtBQUNBNUIsZUFBT29DLE1BQVAsR0FBZ0JSLEtBQUtHLFNBQXJCO0FBQ0EsWUFBSU0saUJBQWlCO0FBQ2pCZixtQkFBT0QsS0FEVTtBQUVqQkUsdUJBQVdBLFNBRk07QUFHakJlLHNCQUFVckMsU0FITztBQUlqQmlDLHFCQUFTSixJQUpRO0FBS2pCbkIsc0JBQVVBLFFBTE87QUFNakJ3QixxQkFBU0EsT0FOUTtBQU9qQkkscUJBQVMsaUJBQVNaLEdBQVQsRUFBYztBQUNuQjtBQUNBYSx3QkFBUUMscUJBQVIsQ0FBOEJ6QyxNQUE5QjtBQUNBMEMsbUJBQUdDLFVBQUgsQ0FBYztBQUNWQyx5QkFBSztBQURLLGlCQUFkO0FBR0gsYUFiZ0I7QUFjakJDLGtCQUFNLGNBQVNsQixHQUFULEVBQWM7QUFDaEIzQix1QkFBTzhDLE1BQVAsR0FBZ0JuQixJQUFJbUIsTUFBcEI7QUFDQTtBQUNBTix3QkFBUU8sa0JBQVIsQ0FBMkIvQyxNQUEzQjtBQUNILGFBbEJnQjtBQW1CakJnRCxzQkFBVSxrQkFBU3JCLEdBQVQsRUFBYztBQUNwQkgsd0JBQVFDLEdBQVIsQ0FBWSxVQUFaO0FBQ0g7QUFyQmdCLFNBQXJCO0FBdUJBaUIsV0FBR08sY0FBSCxDQUFrQlosY0FBbEI7QUFDSCxLQXRDTDtBQXdDSCxDOztBQWpGRDs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7SUFBWUcsTyIsImZpbGUiOiJwdXJjaGFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVPdmVydmlldyBmdW5jdGlvbiBwdXJjaGFzZVxuICogQGF1dGhvciBYaWFvQmluIExpKGxpeGlhb2Jpbjg4NzhAZ21haWwuY29tKVxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGNyZWF0ZU5vbmNlU3RyIGZyb20gJy4vY3JlYXRlTm9uY2VTdHInO1xuaW1wb3J0IGNyZWF0ZVRpbWVTdGFtcCBmcm9tICcuL2NyZWF0ZVRpbWVTdGFtcCc7XG5pbXBvcnQgZ2V0TWQ1UGF5U2lnbiBmcm9tICcuL2dldE1kNVBheVNpZ24nO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgZ2V0UHJlcGF5SWQgfSBmcm9tICcuLi9zZXJ2aWNlL3B1cmNoYXNlJztcbmltcG9ydCB1c2VySW5mbyBmcm9tICcuLi9wbHVnaW4vdXNlckluZm8nO1xuaW1wb3J0IGNyZWF0ZU9yZGVyTnVtYmVyIGZyb20gJy4vY3JlYXRlT3JkZXJOdW1iZXInO1xuaW1wb3J0ICogYXMgbWVzc2FnZSBmcm9tICcuLi9zZXJ2aWNlL21lc3NhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocGFyYW1zKSB7XG5cbiAgICB2YXIgbm9uY2Vfc3RyID0gY3JlYXRlTm9uY2VTdHIoKTtcbiAgICB2YXIgbWNoX2lkID0gcGFyYW1zLm1jaElkO1xuICAgIHZhciBhdHRhY2ggPSBwYXJhbXMuaWQ7XG4gICAgdmFyIGtleSA9IGNvbmZpZy5rZXk7XG4gICAgdmFyIHNwYmlsbF9jcmVhdGVfaXAgPSBjb25maWcuaXA7XG4gICAgdmFyIHRvdGFsX2ZlZSA9IHBhcmFtcy50b3RhbEZlZTtcbiAgICB2YXIgc2lnblR5cGUgPSAnTUQ1JztcbiAgICB2YXIgb3BlbmlkID0gdXNlckluZm8uZ2V0T3BlbklkKCk7XG4gICAgdmFyIG91dF90cmFkZV9ubyA9IHBhcmFtcy5vdXRUcmFkZU5vO1xuICAgIHZhciBub3RpZnlfdXJsID0gY29uZmlnLmRvbWFpbiArICcvcHVyY2hhc2Uvbm90aWNlJztcbiAgICB2YXIgdHJhZGVfdHlwZSA9ICdKU0FQSSc7XG4gICAgdmFyIGJvZHkgPSBwYXJhbXMudGl0bGU7XG4gICAgdmFyIGFwcGlkID0gY29uZmlnLmFwcElkO1xuICAgIHZhciB0aW1lU3RhbXAgPSBjcmVhdGVUaW1lU3RhbXAoKTtcbiAgICB2YXIgcGFyYW1zID0ge1xuICAgICAgICBhcHBpZCxcbiAgICAgICAgYXR0YWNoLFxuICAgICAgICBib2R5LFxuICAgICAgICBrZXksXG4gICAgICAgIG1jaF9pZCxcbiAgICAgICAgbm9uY2Vfc3RyLFxuICAgICAgICBub3RpZnlfdXJsLFxuICAgICAgICBvcGVuaWQsXG4gICAgICAgIG91dF90cmFkZV9ubyxcbiAgICAgICAgc3BiaWxsX2NyZWF0ZV9pcCxcbiAgICAgICAgdG90YWxfZmVlLFxuICAgICAgICB0cmFkZV90eXBlXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZyhwYXJhbXMpO1xuXG4gICAgZ2V0UHJlcGF5SWQocGFyYW1zKVxuICAgICAgICAudGhlbigocmVzKT0+IHtcbiAgICAgICAgICAgIHZhciBkYXRhID0gcmVzLnhtbDtcbiAgICAgICAgICAgIHZhciBwYWNrID0gJ3ByZXBheV9pZD0nICsgZGF0YS5wcmVwYXlfaWQ7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGRhdGEsIHtcbiAgICAgICAgICAgICAgICBub3RpZnlfdXJsLFxuICAgICAgICAgICAgICAgIHNpZ25UeXBlLFxuICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICBub25jZV9zdHIsXG4gICAgICAgICAgICAgICAgcGFja2FnZTogcGFjayxcbiAgICAgICAgICAgICAgICB0aW1lU3RhbXBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB2YXIgcGF5U2lnbiA9IGdldE1kNVBheVNpZ24oZGF0YSk7XG4gICAgICAgICAgICBwYXJhbXMuZm9ybUlkID0gZGF0YS5wcmVwYXlfaWQ7XG4gICAgICAgICAgICB2YXIgcGF5bWVudFJlcXVlc3QgPSB7XG4gICAgICAgICAgICAgICAgYXBwSWQ6IGFwcGlkLFxuICAgICAgICAgICAgICAgIHRpbWVTdGFtcDogdGltZVN0YW1wLFxuICAgICAgICAgICAgICAgIG5vbmNlU3RyOiBub25jZV9zdHIsXG4gICAgICAgICAgICAgICAgcGFja2FnZTogcGFjayxcbiAgICAgICAgICAgICAgICBzaWduVHlwZTogc2lnblR5cGUsXG4gICAgICAgICAgICAgICAgcGF5U2lnbjogcGF5U2lnbixcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5Y+R6YCB5LiA5Liq5pSv5LuY5oiQ5Yqf5raI5oGvXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uuc2VuZFBheVN1Y2Nlc3NNZXNzYWdlKHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnb3JkZXInXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcy5lcnJNc2cgPSByZXMuZXJyTXNnO1xuICAgICAgICAgICAgICAgICAgICAvLyDmlK/ku5jlpLHotKXmtojmga9cbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zZW5kUGF5RmFpbE1lc3NhZ2UocGFyYW1zKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbXBsZXRlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHd4LnJlcXVlc3RQYXltZW50KHBheW1lbnRSZXF1ZXN0KTtcbiAgICAgICAgfSk7XG5cbn0gIl19