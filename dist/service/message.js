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
 * 
 * @return {Promise}
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
 * 
 * @return {Promise}
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
        },
        "keyword5": {
            "value": _userInfo2.default.getUserName()
        }
    }, params.formId);
}

/**
 * 发送一个支付成功消息 
 * 
 * @return {Promise}
 */
function sendPaySuccessMessage(params) {
    return postMessage(_config2.default.masterOpenid, _config2.default.templates.paySuccess, {
        "keyword1": {
            "value": params.attach
        },
        "keyword2": {
            "value": (0, _divide2.default)(params.total_fee, 100) + '元'
        },
        "keyword3": {
            "value": params.body
        },
        "keyword4": {
            "value": new Date().toLocaleString()
        },
        "keyword5": {
            "value": _userInfo2.default.getUserName()
        }
    }, params.formId);
}

/**
 * 发送一个支付失败消息 
 * 
 * @return {Promise}
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
        },
        "keyword5": {
            "value": _userInfo2.default.getUserName()
        }
    }, params.formId);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2UuanMiXSwibmFtZXMiOlsic2VuZENyZWF0ZU9yZGVyTWVzc2FnZSIsInNlbmRQYXlTdWNjZXNzTWVzc2FnZSIsInNlbmRQYXlGYWlsTWVzc2FnZSIsInBvc3RNZXNzYWdlIiwidG91c2VyIiwidGVtcGxhdGVJZCIsImRhdGEiLCJmb3JtSWQiLCJhcHBJZCIsImFwcFNlY3JldCIsIm1vYmlsZSIsInBhcmFtcyIsIm1hc3Rlck9wZW5pZCIsInRlbXBsYXRlcyIsImNyZWF0ZU9yZGVyIiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwidG90YWxGZWUiLCJ0aXRsZSIsImlkIiwiZ2V0VXNlck5hbWUiLCJwYXlTdWNjZXNzIiwiYXR0YWNoIiwidG90YWxfZmVlIiwiYm9keSIsInBheUZhaWwiLCJlcnJNc2ciXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUtBOzs7OztRQWtDZ0JBLHNCLEdBQUFBLHNCO1FBOEJBQyxxQixHQUFBQSxxQjtRQThCQUMsa0IsR0FBQUEsa0I7O0FBNUZoQjs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBOzs7OztBQUtBLFNBQVNDLFdBQVQsQ0FBc0JDLE1BQXRCLEVBQThCQyxVQUE5QixFQUEwQ0MsSUFBMUMsRUFBZ0RDLE1BQWhELEVBQXdEO0FBQ3BELFdBQU8sdUJBQUssY0FBTCxFQUFxQjtBQUN4QkgsZ0JBQVFBLE1BRGdCO0FBRXhCSSxlQUFPLGlCQUFPQSxLQUZVO0FBR3hCQyxtQkFBVyxpQkFBT0EsU0FITTtBQUl4QkMsZ0JBQVEsaUJBQU9BLE1BSlM7QUFLeEJMLG9CQUFZQSxVQUxZO0FBTXhCQyxjQUFNQSxJQU5rQjtBQU94QkMsZ0JBQVFBO0FBUGdCLEtBQXJCLENBQVA7QUFTSDs7QUFFRDs7Ozs7Ozs7OztBQVVPLFNBQVNQLHNCQUFULENBQWlDVyxNQUFqQyxFQUF5QztBQUM1QyxXQUFPUixZQUNILGlCQUFPUyxZQURKLEVBRUgsaUJBQU9DLFNBQVAsQ0FBaUJDLFdBRmQsRUFHSDtBQUNJLG9CQUFZO0FBQ1IscUJBQVMsSUFBSUMsSUFBSixHQUFXQyxjQUFYO0FBREQsU0FEaEI7QUFJSSxvQkFBWTtBQUNSLHFCQUFTLHNCQUFPTCxPQUFPTSxRQUFkLEVBQXdCLEdBQXhCLElBQStCO0FBRGhDLFNBSmhCO0FBT0ksb0JBQVk7QUFDUixxQkFBU04sT0FBT087QUFEUixTQVBoQjtBQVVJLG9CQUFZO0FBQ1IscUJBQVNQLE9BQU9RO0FBRFIsU0FWaEI7QUFhSSxvQkFBWTtBQUNSLHFCQUFTLG1CQUFTQyxXQUFUO0FBREQ7QUFiaEIsS0FIRyxFQW9CSFQsT0FBT0osTUFwQkosQ0FBUDtBQXNCSDs7QUFFRDs7Ozs7QUFLTyxTQUFTTixxQkFBVCxDQUFnQ1UsTUFBaEMsRUFBd0M7QUFDM0MsV0FBT1IsWUFDSCxpQkFBT1MsWUFESixFQUVILGlCQUFPQyxTQUFQLENBQWlCUSxVQUZkLEVBR0g7QUFDSSxvQkFBWTtBQUNSLHFCQUFTVixPQUFPVztBQURSLFNBRGhCO0FBSUksb0JBQVk7QUFDUixxQkFBUyxzQkFBT1gsT0FBT1ksU0FBZCxFQUF5QixHQUF6QixJQUFnQztBQURqQyxTQUpoQjtBQU9JLG9CQUFZO0FBQ1IscUJBQVNaLE9BQU9hO0FBRFIsU0FQaEI7QUFVSSxvQkFBWTtBQUNSLHFCQUFTLElBQUlULElBQUosR0FBV0MsY0FBWDtBQURELFNBVmhCO0FBYUksb0JBQVk7QUFDUixxQkFBUyxtQkFBU0ksV0FBVDtBQUREO0FBYmhCLEtBSEcsRUFvQkhULE9BQU9KLE1BcEJKLENBQVA7QUFzQkg7O0FBRUQ7Ozs7O0FBS08sU0FBU0wsa0JBQVQsQ0FBNkJTLE1BQTdCLEVBQXFDO0FBQ3hDLFdBQU9SLFlBQ0gsaUJBQU9TLFlBREosRUFFSCxpQkFBT0MsU0FBUCxDQUFpQlksT0FGZCxFQUdIO0FBQ0ksb0JBQVk7QUFDUixxQkFBU2QsT0FBT2U7QUFEUixTQURoQjtBQUlJLG9CQUFZO0FBQ1IscUJBQVNmLE9BQU9XO0FBRFIsU0FKaEI7QUFPSSxvQkFBWTtBQUNSLHFCQUFTWCxPQUFPYTtBQURSLFNBUGhCO0FBVUksb0JBQVk7QUFDUixxQkFBUyxzQkFBT2IsT0FBT1ksU0FBZCxFQUF5QixHQUF6QixJQUFnQztBQURqQyxTQVZoQjtBQWFJLG9CQUFZO0FBQ1IscUJBQVMsbUJBQVNILFdBQVQ7QUFERDtBQWJoQixLQUhHLEVBb0JIVCxPQUFPSixNQXBCSixDQUFQO0FBc0JIIiwiZmlsZSI6Im1lc3NhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlT3ZlcnZpZXcgYXJoYXQtbWVzc2FnZS1zZXJ2aWNlXG4gKiBAYXV0aG9yIFhpYW9CaW4gTGkobGl4aWFvYmluODg3OEBnbWFpbC5jb20pIFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHsgcG9zdCwgZ2V0LCBwdXQsIGRlbH0gZnJvbSAnLi4vZnVuY3Rpb24vc2VydmljZVV0aWwnO1xuaW1wb3J0IHVzZXJJbmZvIGZyb20gJy4uL3BsdWdpbi91c2VySW5mbyc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgZGl2aWRlIGZyb20gJy4uL2Z1bmN0aW9uL2RpdmlkZSc7XG5cbi8qKlxuICog5Y+R6YCB5qih5p2/5raI5oGvIFxuICogXG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICovXG5mdW5jdGlvbiBwb3N0TWVzc2FnZSAodG91c2VyLCB0ZW1wbGF0ZUlkLCBkYXRhLCBmb3JtSWQpIHtcbiAgICByZXR1cm4gcG9zdCgnL2FwaS9tZXNzYWdlJywge1xuICAgICAgICB0b3VzZXI6IHRvdXNlcixcbiAgICAgICAgYXBwSWQ6IGNvbmZpZy5hcHBJZCxcbiAgICAgICAgYXBwU2VjcmV0OiBjb25maWcuYXBwU2VjcmV0LFxuICAgICAgICBtb2JpbGU6IGNvbmZpZy5tb2JpbGUsXG4gICAgICAgIHRlbXBsYXRlSWQ6IHRlbXBsYXRlSWQsXG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIGZvcm1JZDogZm9ybUlkXG4gICAgfSk7XG59XG5cbi8qKlxuICog5Y+R6YCB5Yib5bu66K6i5Y2V57uZ5ZWG5a62566h55CG5ZGYXG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuZm9ybUlkIOaPkOS6pOeahGZvcm1JZFxuICogQHBhcmFtIHtudW1iZXJ9IHBhcmFtcy50b3RhbEZlZSDkuqTmmJPph5Hpop1cbiAqIEBwYXJhbSB7bnVtYmVyfSBwYXJhbXMudGl0bGUg5Lqk5piT5YaF5a65XG4gKiBAcGFyYW0ge251bWJlcn0gcGFyYW1zLmlkIOiuouWNlWlkXG4gKiBcbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZW5kQ3JlYXRlT3JkZXJNZXNzYWdlIChwYXJhbXMpIHtcbiAgICByZXR1cm4gcG9zdE1lc3NhZ2UoXG4gICAgICAgIGNvbmZpZy5tYXN0ZXJPcGVuaWQsXG4gICAgICAgIGNvbmZpZy50ZW1wbGF0ZXMuY3JlYXRlT3JkZXIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwia2V5d29yZDFcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpXG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIFwia2V5d29yZDJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZGl2aWRlKHBhcmFtcy50b3RhbEZlZSwgMTAwKSArICflhYMnXG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIFwia2V5d29yZDNcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogcGFyYW1zLnRpdGxlXG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIFwia2V5d29yZDRcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogcGFyYW1zLmlkXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJrZXl3b3JkNVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB1c2VySW5mby5nZXRVc2VyTmFtZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHBhcmFtcy5mb3JtSWRcbiAgICApO1xufVxuXG4vKipcbiAqIOWPkemAgeS4gOS4quaUr+S7mOaIkOWKn+a2iOaBryBcbiAqIFxuICogQHJldHVybiB7UHJvbWlzZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlbmRQYXlTdWNjZXNzTWVzc2FnZSAocGFyYW1zKSB7XG4gICAgcmV0dXJuIHBvc3RNZXNzYWdlKFxuICAgICAgICBjb25maWcubWFzdGVyT3BlbmlkLFxuICAgICAgICBjb25maWcudGVtcGxhdGVzLnBheVN1Y2Nlc3MsXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwia2V5d29yZDFcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogcGFyYW1zLmF0dGFjaFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwia2V5d29yZDJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZGl2aWRlKHBhcmFtcy50b3RhbF9mZWUsIDEwMCkgKyAn5YWDJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwia2V5d29yZDNcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogcGFyYW1zLmJvZHlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImtleXdvcmQ0XCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwia2V5d29yZDVcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdXNlckluZm8uZ2V0VXNlck5hbWUoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBwYXJhbXMuZm9ybUlkXG4gICAgKTtcbn1cblxuLyoqXG4gKiDlj5HpgIHkuIDkuKrmlK/ku5jlpLHotKXmtojmga8gXG4gKiBcbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZW5kUGF5RmFpbE1lc3NhZ2UgKHBhcmFtcykge1xuICAgIHJldHVybiBwb3N0TWVzc2FnZShcbiAgICAgICAgY29uZmlnLm1hc3Rlck9wZW5pZCxcbiAgICAgICAgY29uZmlnLnRlbXBsYXRlcy5wYXlGYWlsLFxuICAgICAgICB7XG4gICAgICAgICAgICBcImtleXdvcmQxXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHBhcmFtcy5lcnJNc2dcbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgXCJrZXl3b3JkMlwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBwYXJhbXMuYXR0YWNoXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJrZXl3b3JkM1wiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBwYXJhbXMuYm9keVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwia2V5d29yZDRcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZGl2aWRlKHBhcmFtcy50b3RhbF9mZWUsIDEwMCkgKyAn5YWDJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwia2V5d29yZDVcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdXNlckluZm8uZ2V0VXNlck5hbWUoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBwYXJhbXMuZm9ybUlkXG4gICAgKTtcbn1cbiJdfQ==