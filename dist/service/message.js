/**
 * @fileOverview arhat-message-service
 * @author XiaoBin Li(lixiaobin8878@gmail.com) 
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sendCreateOrderMessage = sendCreateOrderMessage;
exports.sendPaySuccessMessage = sendPaySuccessMessage;
exports.sendPayFailMessage = sendPayFailMessage;

var _serviceUtil = require('./../function/serviceUtil.js');

var _userInfo = require('./../plugin/userInfo.js');

var _userInfo2 = _interopRequireDefault(_userInfo);

var _config = require('./../config.js');

var _config2 = _interopRequireDefault(_config);

var _divide = require('./../function/divide.js');

var _divide2 = _interopRequireDefault(_divide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 发送模板消息 
 */
function postMessage(touser, templateId, data, formId) {
    return (0, _serviceUtil.post)('/api/message', {
        touser: touser,
        appId: _config2.default.appId,
        appSecret: _config2.default.appSecret,
        mobile: _config2.default.mobile,
        templateId: templateId,
        data: data,
        formId: formId
    });
}

/**
 * 发送创建订单给商家管理员
 * 
 * @param {string} params.formId 提交的formId
 * @param {number} params.totalFee 交易金额
 * @param {number} params.title 交易内容
 * @param {number} params.id 订单id
 */
function sendCreateOrderMessage(params) {
    return postMessage(_config2.default.masterOpenid, _config2.default.templates.createOrder, {
        "keyword1": {
            "value": new Date().toLocaleString()
        },
        "keyword2": {
            "value": (0, _divide2.default)(params.totalFee, 100) + '元'
        },
        "keyword3": {
            "value": params.title
        },
        "keyword4": {
            "value": params.id
        }
    }, params.formId);
}

/**
 * 发送一个支付成功消息 
 */
function sendPaySuccessMessage(params) {
    return postMessage(_config2.default.masterOpenid, _config2.default.templates.paySuccess, {
        "keyword1": {
            "value": new Date().toLocaleString()
        },
        "keyword2": {
            "value": params.body
        },
        "keyword3": {
            "value": params.attach
        },
        "keyword4": {
            "value": (0, _divide2.default)(params.total_fee, 100) + '元'
        }
    }, params.formId);
}

/**
 * 发送一个支付失败消息 
 */
function sendPayFailMessage(params) {
    return postMessage(_config2.default.masterOpenid, _config2.default.templates.payFail, {
        "keyword1": {
            "value": params.errMsg
        },
        "keyword2": {
            "value": params.attach
        },
        "keyword3": {
            "value": params.body
        },
        "keyword4": {
            "value": (0, _divide2.default)(params.total_fee, 100) + '元'
        }
    }, params.formId);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2UuanMiXSwibmFtZXMiOlsic2VuZENyZWF0ZU9yZGVyTWVzc2FnZSIsInNlbmRQYXlTdWNjZXNzTWVzc2FnZSIsInNlbmRQYXlGYWlsTWVzc2FnZSIsInBvc3RNZXNzYWdlIiwidG91c2VyIiwidGVtcGxhdGVJZCIsImRhdGEiLCJmb3JtSWQiLCJhcHBJZCIsImFwcFNlY3JldCIsIm1vYmlsZSIsInBhcmFtcyIsIm1hc3Rlck9wZW5pZCIsInRlbXBsYXRlcyIsImNyZWF0ZU9yZGVyIiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwidG90YWxGZWUiLCJ0aXRsZSIsImlkIiwicGF5U3VjY2VzcyIsImJvZHkiLCJhdHRhY2giLCJ0b3RhbF9mZWUiLCJwYXlGYWlsIiwiZXJyTXNnIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFLQTs7Ozs7UUE4QmdCQSxzQixHQUFBQSxzQjtRQXlCQUMscUIsR0FBQUEscUI7UUF5QkFDLGtCLEdBQUFBLGtCOztBQTlFaEI7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQTs7O0FBR0EsU0FBU0MsV0FBVCxDQUFzQkMsTUFBdEIsRUFBOEJDLFVBQTlCLEVBQTBDQyxJQUExQyxFQUFnREMsTUFBaEQsRUFBd0Q7QUFDcEQsV0FBTyx1QkFBSyxjQUFMLEVBQXFCO0FBQ3hCSCxnQkFBUUEsTUFEZ0I7QUFFeEJJLGVBQU8saUJBQU9BLEtBRlU7QUFHeEJDLG1CQUFXLGlCQUFPQSxTQUhNO0FBSXhCQyxnQkFBUSxpQkFBT0EsTUFKUztBQUt4Qkwsb0JBQVlBLFVBTFk7QUFNeEJDLGNBQU1BLElBTmtCO0FBT3hCQyxnQkFBUUE7QUFQZ0IsS0FBckIsQ0FBUDtBQVNIOztBQUVEOzs7Ozs7OztBQVFPLFNBQVNQLHNCQUFULENBQWlDVyxNQUFqQyxFQUF5QztBQUM1QyxXQUFPUixZQUNILGlCQUFPUyxZQURKLEVBRUgsaUJBQU9DLFNBQVAsQ0FBaUJDLFdBRmQsRUFHSDtBQUNJLG9CQUFZO0FBQ1IscUJBQVMsSUFBSUMsSUFBSixHQUFXQyxjQUFYO0FBREQsU0FEaEI7QUFJSSxvQkFBWTtBQUNSLHFCQUFTLHNCQUFPTCxPQUFPTSxRQUFkLEVBQXdCLEdBQXhCLElBQStCO0FBRGhDLFNBSmhCO0FBT0ksb0JBQVk7QUFDUixxQkFBU04sT0FBT087QUFEUixTQVBoQjtBQVVJLG9CQUFZO0FBQ1IscUJBQVNQLE9BQU9RO0FBRFI7QUFWaEIsS0FIRyxFQWlCSFIsT0FBT0osTUFqQkosQ0FBUDtBQW1CSDs7QUFFRDs7O0FBR08sU0FBU04scUJBQVQsQ0FBZ0NVLE1BQWhDLEVBQXdDO0FBQzNDLFdBQU9SLFlBQ0gsaUJBQU9TLFlBREosRUFFSCxpQkFBT0MsU0FBUCxDQUFpQk8sVUFGZCxFQUdIO0FBQ0ksb0JBQVk7QUFDUixxQkFBUyxJQUFJTCxJQUFKLEdBQVdDLGNBQVg7QUFERCxTQURoQjtBQUlJLG9CQUFZO0FBQ1IscUJBQVNMLE9BQU9VO0FBRFIsU0FKaEI7QUFPSSxvQkFBWTtBQUNSLHFCQUFTVixPQUFPVztBQURSLFNBUGhCO0FBVUksb0JBQVk7QUFDUixxQkFBUyxzQkFBT1gsT0FBT1ksU0FBZCxFQUF5QixHQUF6QixJQUFnQztBQURqQztBQVZoQixLQUhHLEVBaUJIWixPQUFPSixNQWpCSixDQUFQO0FBbUJIOztBQUVEOzs7QUFHTyxTQUFTTCxrQkFBVCxDQUE2QlMsTUFBN0IsRUFBcUM7QUFDeEMsV0FBT1IsWUFDSCxpQkFBT1MsWUFESixFQUVILGlCQUFPQyxTQUFQLENBQWlCVyxPQUZkLEVBR0g7QUFDSSxvQkFBWTtBQUNSLHFCQUFTYixPQUFPYztBQURSLFNBRGhCO0FBSUksb0JBQVk7QUFDUixxQkFBU2QsT0FBT1c7QUFEUixTQUpoQjtBQU9JLG9CQUFZO0FBQ1IscUJBQVNYLE9BQU9VO0FBRFIsU0FQaEI7QUFVSSxvQkFBWTtBQUNSLHFCQUFTLHNCQUFPVixPQUFPWSxTQUFkLEVBQXlCLEdBQXpCLElBQWdDO0FBRGpDO0FBVmhCLEtBSEcsRUFpQkhaLE9BQU9KLE1BakJKLENBQVA7QUFtQkgiLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVPdmVydmlldyBhcmhhdC1tZXNzYWdlLXNlcnZpY2VcbiAqIEBhdXRob3IgWGlhb0JpbiBMaShsaXhpYW9iaW44ODc4QGdtYWlsLmNvbSkgXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgeyBwb3N0LCBnZXQsIHB1dCwgZGVsfSBmcm9tICcuLi9mdW5jdGlvbi9zZXJ2aWNlVXRpbCc7XG5pbXBvcnQgdXNlckluZm8gZnJvbSAnLi4vcGx1Z2luL3VzZXJJbmZvJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCBkaXZpZGUgZnJvbSAnLi4vZnVuY3Rpb24vZGl2aWRlJztcblxuLyoqXG4gKiDlj5HpgIHmqKHmnb/mtojmga8gXG4gKi9cbmZ1bmN0aW9uIHBvc3RNZXNzYWdlICh0b3VzZXIsIHRlbXBsYXRlSWQsIGRhdGEsIGZvcm1JZCkge1xuICAgIHJldHVybiBwb3N0KCcvYXBpL21lc3NhZ2UnLCB7XG4gICAgICAgIHRvdXNlcjogdG91c2VyLFxuICAgICAgICBhcHBJZDogY29uZmlnLmFwcElkLFxuICAgICAgICBhcHBTZWNyZXQ6IGNvbmZpZy5hcHBTZWNyZXQsXG4gICAgICAgIG1vYmlsZTogY29uZmlnLm1vYmlsZSxcbiAgICAgICAgdGVtcGxhdGVJZDogdGVtcGxhdGVJZCxcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgZm9ybUlkOiBmb3JtSWRcbiAgICB9KTtcbn1cblxuLyoqXG4gKiDlj5HpgIHliJvlu7rorqLljZXnu5nllYblrrbnrqHnkIblkZhcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5mb3JtSWQg5o+Q5Lqk55qEZm9ybUlkXG4gKiBAcGFyYW0ge251bWJlcn0gcGFyYW1zLnRvdGFsRmVlIOS6pOaYk+mHkeminVxuICogQHBhcmFtIHtudW1iZXJ9IHBhcmFtcy50aXRsZSDkuqTmmJPlhoXlrrlcbiAqIEBwYXJhbSB7bnVtYmVyfSBwYXJhbXMuaWQg6K6i5Y2VaWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlbmRDcmVhdGVPcmRlck1lc3NhZ2UgKHBhcmFtcykge1xuICAgIHJldHVybiBwb3N0TWVzc2FnZShcbiAgICAgICAgY29uZmlnLm1hc3Rlck9wZW5pZCxcbiAgICAgICAgY29uZmlnLnRlbXBsYXRlcy5jcmVhdGVPcmRlcixcbiAgICAgICAge1xuICAgICAgICAgICAgXCJrZXl3b3JkMVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKClcbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgXCJrZXl3b3JkMlwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBkaXZpZGUocGFyYW1zLnRvdGFsRmVlLCAxMDApICsgJ+WFgydcbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgXCJrZXl3b3JkM1wiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBwYXJhbXMudGl0bGVcbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgXCJrZXl3b3JkNFwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBwYXJhbXMuaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcGFyYW1zLmZvcm1JZFxuICAgICk7XG59XG5cbi8qKlxuICog5Y+R6YCB5LiA5Liq5pSv5LuY5oiQ5Yqf5raI5oGvIFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2VuZFBheVN1Y2Nlc3NNZXNzYWdlIChwYXJhbXMpIHtcbiAgICByZXR1cm4gcG9zdE1lc3NhZ2UoXG4gICAgICAgIGNvbmZpZy5tYXN0ZXJPcGVuaWQsXG4gICAgICAgIGNvbmZpZy50ZW1wbGF0ZXMucGF5U3VjY2VzcyxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJrZXl3b3JkMVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKClcbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgXCJrZXl3b3JkMlwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBwYXJhbXMuYm9keVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwia2V5d29yZDNcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogcGFyYW1zLmF0dGFjaFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwia2V5d29yZDRcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZGl2aWRlKHBhcmFtcy50b3RhbF9mZWUsIDEwMCkgKyAn5YWDJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBwYXJhbXMuZm9ybUlkXG4gICAgKTtcbn1cblxuLyoqXG4gKiDlj5HpgIHkuIDkuKrmlK/ku5jlpLHotKXmtojmga8gXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZW5kUGF5RmFpbE1lc3NhZ2UgKHBhcmFtcykge1xuICAgIHJldHVybiBwb3N0TWVzc2FnZShcbiAgICAgICAgY29uZmlnLm1hc3Rlck9wZW5pZCxcbiAgICAgICAgY29uZmlnLnRlbXBsYXRlcy5wYXlGYWlsLFxuICAgICAgICB7XG4gICAgICAgICAgICBcImtleXdvcmQxXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHBhcmFtcy5lcnJNc2dcbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgXCJrZXl3b3JkMlwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBwYXJhbXMuYXR0YWNoXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJrZXl3b3JkM1wiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBwYXJhbXMuYm9keVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwia2V5d29yZDRcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZGl2aWRlKHBhcmFtcy50b3RhbF9mZWUsIDEwMCkgKyAn5YWDJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBwYXJhbXMuZm9ybUlkXG4gICAgKTtcbn1cbiJdfQ==