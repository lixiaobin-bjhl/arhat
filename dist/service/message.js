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
        }
    }, params.formId);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2UuanMiXSwibmFtZXMiOlsic2VuZENyZWF0ZU9yZGVyTWVzc2FnZSIsInNlbmRQYXlTdWNjZXNzTWVzc2FnZSIsInNlbmRQYXlGYWlsTWVzc2FnZSIsInBvc3RNZXNzYWdlIiwidG91c2VyIiwidGVtcGxhdGVJZCIsImRhdGEiLCJmb3JtSWQiLCJhcHBJZCIsImFwcFNlY3JldCIsIm1vYmlsZSIsInBhcmFtcyIsIm1hc3Rlck9wZW5pZCIsInRlbXBsYXRlcyIsImNyZWF0ZU9yZGVyIiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwidG90YWxGZWUiLCJ0aXRsZSIsImlkIiwicGF5U3VjY2VzcyIsImJvZHkiLCJhdHRhY2giLCJ0b3RhbF9mZWUiLCJwYXlGYWlsIiwiZXJyTXNnIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFLQTs7Ozs7UUFrQ2dCQSxzQixHQUFBQSxzQjtRQTJCQUMscUIsR0FBQUEscUI7UUEyQkFDLGtCLEdBQUFBLGtCOztBQXRGaEI7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQTs7Ozs7QUFLQSxTQUFTQyxXQUFULENBQXNCQyxNQUF0QixFQUE4QkMsVUFBOUIsRUFBMENDLElBQTFDLEVBQWdEQyxNQUFoRCxFQUF3RDtBQUNwRCxXQUFPLHVCQUFLLGNBQUwsRUFBcUI7QUFDeEJILGdCQUFRQSxNQURnQjtBQUV4QkksZUFBTyxpQkFBT0EsS0FGVTtBQUd4QkMsbUJBQVcsaUJBQU9BLFNBSE07QUFJeEJDLGdCQUFRLGlCQUFPQSxNQUpTO0FBS3hCTCxvQkFBWUEsVUFMWTtBQU14QkMsY0FBTUEsSUFOa0I7QUFPeEJDLGdCQUFRQTtBQVBnQixLQUFyQixDQUFQO0FBU0g7O0FBRUQ7Ozs7Ozs7Ozs7QUFVTyxTQUFTUCxzQkFBVCxDQUFpQ1csTUFBakMsRUFBeUM7QUFDNUMsV0FBT1IsWUFDSCxpQkFBT1MsWUFESixFQUVILGlCQUFPQyxTQUFQLENBQWlCQyxXQUZkLEVBR0g7QUFDSSxvQkFBWTtBQUNSLHFCQUFTLElBQUlDLElBQUosR0FBV0MsY0FBWDtBQURELFNBRGhCO0FBSUksb0JBQVk7QUFDUixxQkFBUyxzQkFBT0wsT0FBT00sUUFBZCxFQUF3QixHQUF4QixJQUErQjtBQURoQyxTQUpoQjtBQU9JLG9CQUFZO0FBQ1IscUJBQVNOLE9BQU9PO0FBRFIsU0FQaEI7QUFVSSxvQkFBWTtBQUNSLHFCQUFTUCxPQUFPUTtBQURSO0FBVmhCLEtBSEcsRUFpQkhSLE9BQU9KLE1BakJKLENBQVA7QUFtQkg7O0FBRUQ7Ozs7O0FBS08sU0FBU04scUJBQVQsQ0FBZ0NVLE1BQWhDLEVBQXdDO0FBQzNDLFdBQU9SLFlBQ0gsaUJBQU9TLFlBREosRUFFSCxpQkFBT0MsU0FBUCxDQUFpQk8sVUFGZCxFQUdIO0FBQ0ksb0JBQVk7QUFDUixxQkFBUyxJQUFJTCxJQUFKLEdBQVdDLGNBQVg7QUFERCxTQURoQjtBQUlJLG9CQUFZO0FBQ1IscUJBQVNMLE9BQU9VO0FBRFIsU0FKaEI7QUFPSSxvQkFBWTtBQUNSLHFCQUFTVixPQUFPVztBQURSLFNBUGhCO0FBVUksb0JBQVk7QUFDUixxQkFBUyxzQkFBT1gsT0FBT1ksU0FBZCxFQUF5QixHQUF6QixJQUFnQztBQURqQztBQVZoQixLQUhHLEVBaUJIWixPQUFPSixNQWpCSixDQUFQO0FBbUJIOztBQUVEOzs7OztBQUtPLFNBQVNMLGtCQUFULENBQTZCUyxNQUE3QixFQUFxQztBQUN4QyxXQUFPUixZQUNILGlCQUFPUyxZQURKLEVBRUgsaUJBQU9DLFNBQVAsQ0FBaUJXLE9BRmQsRUFHSDtBQUNJLG9CQUFZO0FBQ1IscUJBQVNiLE9BQU9jO0FBRFIsU0FEaEI7QUFJSSxvQkFBWTtBQUNSLHFCQUFTZCxPQUFPVztBQURSLFNBSmhCO0FBT0ksb0JBQVk7QUFDUixxQkFBU1gsT0FBT1U7QUFEUixTQVBoQjtBQVVJLG9CQUFZO0FBQ1IscUJBQVMsc0JBQU9WLE9BQU9ZLFNBQWQsRUFBeUIsR0FBekIsSUFBZ0M7QUFEakM7QUFWaEIsS0FIRyxFQWlCSFosT0FBT0osTUFqQkosQ0FBUDtBQW1CSCIsImZpbGUiOiJtZXNzYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IGFyaGF0LW1lc3NhZ2Utc2VydmljZVxuICogQGF1dGhvciBYaWFvQmluIExpKGxpeGlhb2Jpbjg4NzhAZ21haWwuY29tKSBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7IHBvc3QsIGdldCwgcHV0LCBkZWx9IGZyb20gJy4uL2Z1bmN0aW9uL3NlcnZpY2VVdGlsJztcbmltcG9ydCB1c2VySW5mbyBmcm9tICcuLi9wbHVnaW4vdXNlckluZm8nO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IGRpdmlkZSBmcm9tICcuLi9mdW5jdGlvbi9kaXZpZGUnO1xuXG4vKipcbiAqIOWPkemAgeaooeadv+a2iOaBryBcbiAqIFxuICogQHJldHVybiB7UHJvbWlzZX1cbiAqL1xuZnVuY3Rpb24gcG9zdE1lc3NhZ2UgKHRvdXNlciwgdGVtcGxhdGVJZCwgZGF0YSwgZm9ybUlkKSB7XG4gICAgcmV0dXJuIHBvc3QoJy9hcGkvbWVzc2FnZScsIHtcbiAgICAgICAgdG91c2VyOiB0b3VzZXIsXG4gICAgICAgIGFwcElkOiBjb25maWcuYXBwSWQsXG4gICAgICAgIGFwcFNlY3JldDogY29uZmlnLmFwcFNlY3JldCxcbiAgICAgICAgbW9iaWxlOiBjb25maWcubW9iaWxlLFxuICAgICAgICB0ZW1wbGF0ZUlkOiB0ZW1wbGF0ZUlkLFxuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICBmb3JtSWQ6IGZvcm1JZFxuICAgIH0pO1xufVxuXG4vKipcbiAqIOWPkemAgeWIm+W7uuiuouWNlee7meWVhuWutueuoeeQhuWRmFxuICogXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLmZvcm1JZCDmj5DkuqTnmoRmb3JtSWRcbiAqIEBwYXJhbSB7bnVtYmVyfSBwYXJhbXMudG90YWxGZWUg5Lqk5piT6YeR6aKdXG4gKiBAcGFyYW0ge251bWJlcn0gcGFyYW1zLnRpdGxlIOS6pOaYk+WGheWuuVxuICogQHBhcmFtIHtudW1iZXJ9IHBhcmFtcy5pZCDorqLljZVpZFxuICogXG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2VuZENyZWF0ZU9yZGVyTWVzc2FnZSAocGFyYW1zKSB7XG4gICAgcmV0dXJuIHBvc3RNZXNzYWdlKFxuICAgICAgICBjb25maWcubWFzdGVyT3BlbmlkLFxuICAgICAgICBjb25maWcudGVtcGxhdGVzLmNyZWF0ZU9yZGVyLFxuICAgICAgICB7XG4gICAgICAgICAgICBcImtleXdvcmQxXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKVxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICBcImtleXdvcmQyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGRpdmlkZShwYXJhbXMudG90YWxGZWUsIDEwMCkgKyAn5YWDJ1xuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICBcImtleXdvcmQzXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHBhcmFtcy50aXRsZVxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICBcImtleXdvcmQ0XCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHBhcmFtcy5pZFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBwYXJhbXMuZm9ybUlkXG4gICAgKTtcbn1cblxuLyoqXG4gKiDlj5HpgIHkuIDkuKrmlK/ku5jmiJDlip/mtojmga8gXG4gKiBcbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZW5kUGF5U3VjY2Vzc01lc3NhZ2UgKHBhcmFtcykge1xuICAgIHJldHVybiBwb3N0TWVzc2FnZShcbiAgICAgICAgY29uZmlnLm1hc3Rlck9wZW5pZCxcbiAgICAgICAgY29uZmlnLnRlbXBsYXRlcy5wYXlTdWNjZXNzLFxuICAgICAgICB7XG4gICAgICAgICAgICBcImtleXdvcmQxXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKVxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICBcImtleXdvcmQyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHBhcmFtcy5ib2R5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJrZXl3b3JkM1wiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBwYXJhbXMuYXR0YWNoXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJrZXl3b3JkNFwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBkaXZpZGUocGFyYW1zLnRvdGFsX2ZlZSwgMTAwKSArICflhYMnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHBhcmFtcy5mb3JtSWRcbiAgICApO1xufVxuXG4vKipcbiAqIOWPkemAgeS4gOS4quaUr+S7mOWksei0pea2iOaBryBcbiAqIFxuICogQHJldHVybiB7UHJvbWlzZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlbmRQYXlGYWlsTWVzc2FnZSAocGFyYW1zKSB7XG4gICAgcmV0dXJuIHBvc3RNZXNzYWdlKFxuICAgICAgICBjb25maWcubWFzdGVyT3BlbmlkLFxuICAgICAgICBjb25maWcudGVtcGxhdGVzLnBheUZhaWwsXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwia2V5d29yZDFcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogcGFyYW1zLmVyck1zZ1xuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICBcImtleXdvcmQyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHBhcmFtcy5hdHRhY2hcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImtleXdvcmQzXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHBhcmFtcy5ib2R5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJrZXl3b3JkNFwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBkaXZpZGUocGFyYW1zLnRvdGFsX2ZlZSwgMTAwKSArICflhYMnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHBhcmFtcy5mb3JtSWRcbiAgICApO1xufVxuIl19