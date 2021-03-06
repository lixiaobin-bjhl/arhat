/**
 * @file 获取微信小程序支付md5格式签名
 * @author XiaoBin Li(lixiaobin8878@gmail.com) 
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (params) {

    var stringA = 'appid=' + params.appid + '&body=' + params.body + '&mch_id=' + params.mch_id + '&nonce_str=' + params.nonce_str + '&notify_url=' + params.notify_url + '&openid=' + params.openid + '&out_trade_no=' + params.out_trade_no + '&spbill_create_ip=' + params.spbill_create_ip + '&total_fee=' + params.total_fee + '&trade_type=' + params.trade_type;

    var stringSignTemp = stringA + '&key=' + params.key;
    return (0, _md2.default)(stringSignTemp).toUpperCase();
};

var _md = require('./md5.js');

var _md2 = _interopRequireDefault(_md);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdldE1kNVNpZ24uanMiXSwibmFtZXMiOlsicGFyYW1zIiwic3RyaW5nQSIsImFwcGlkIiwiYm9keSIsIm1jaF9pZCIsIm5vbmNlX3N0ciIsIm5vdGlmeV91cmwiLCJvcGVuaWQiLCJvdXRfdHJhZGVfbm8iLCJzcGJpbGxfY3JlYXRlX2lwIiwidG90YWxfZmVlIiwidHJhZGVfdHlwZSIsInN0cmluZ1NpZ25UZW1wIiwia2V5IiwidG9VcHBlckNhc2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUtBOzs7Ozs7a0JBSWUsVUFBVUEsTUFBVixFQUFrQjs7QUFFN0IsUUFBSUMsVUFBVSxXQUFXRCxPQUFPRSxLQUFsQixHQUNSLFFBRFEsR0FFUkYsT0FBT0csSUFGQyxHQUdSLFVBSFEsR0FJUkgsT0FBT0ksTUFKQyxHQUtSLGFBTFEsR0FNUkosT0FBT0ssU0FOQyxHQU9SLGNBUFEsR0FRUkwsT0FBT00sVUFSQyxHQVNSLFVBVFEsR0FVUk4sT0FBT08sTUFWQyxHQVdSLGdCQVhRLEdBWVJQLE9BQU9RLFlBWkMsR0FhUixvQkFiUSxHQWNSUixPQUFPUyxnQkFkQyxHQWVSLGFBZlEsR0FnQlJULE9BQU9VLFNBaEJDLEdBaUJSLGNBakJRLEdBa0JSVixPQUFPVyxVQWxCYjs7QUFvQkEsUUFBSUMsaUJBQWlCWCxVQUFVLE9BQVYsR0FBb0JELE9BQU9hLEdBQWhEO0FBQ0EsV0FBTyxrQkFBSUQsY0FBSixFQUFvQkUsV0FBcEIsRUFBUDtBQUVILEM7O0FBM0JEIiwiZmlsZSI6ImdldE1kNVNpZ24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlIOiOt+WPluW+ruS/oeWwj+eoi+W6j+aUr+S7mG1kNeagvOW8j+etvuWQjVxuICogQGF1dGhvciBYaWFvQmluIExpKGxpeGlhb2Jpbjg4NzhAZ21haWwuY29tKSBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCBtZDUgZnJvbSAnLi9tZDUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocGFyYW1zKSB7XG5cbiAgICB2YXIgc3RyaW5nQSA9ICdhcHBpZD0nICsgcGFyYW1zLmFwcGlkIFxuICAgICAgICArICcmYm9keT0nXG4gICAgICAgICsgcGFyYW1zLmJvZHlcbiAgICAgICAgKyAnJm1jaF9pZD0nXG4gICAgICAgICsgcGFyYW1zLm1jaF9pZFxuICAgICAgICArICcmbm9uY2Vfc3RyPSdcbiAgICAgICAgKyBwYXJhbXMubm9uY2Vfc3RyXG4gICAgICAgICsgJyZub3RpZnlfdXJsPSdcbiAgICAgICAgKyBwYXJhbXMubm90aWZ5X3VybFxuICAgICAgICArICcmb3BlbmlkPScgXG4gICAgICAgICsgcGFyYW1zLm9wZW5pZFxuICAgICAgICArICcmb3V0X3RyYWRlX25vPScgXG4gICAgICAgICsgcGFyYW1zLm91dF90cmFkZV9ub1xuICAgICAgICArICcmc3BiaWxsX2NyZWF0ZV9pcD0nXG4gICAgICAgICsgcGFyYW1zLnNwYmlsbF9jcmVhdGVfaXBcbiAgICAgICAgKyAnJnRvdGFsX2ZlZT0nIFxuICAgICAgICArIHBhcmFtcy50b3RhbF9mZWVcbiAgICAgICAgKyAnJnRyYWRlX3R5cGU9J1xuICAgICAgICArIHBhcmFtcy50cmFkZV90eXBlXG5cbiAgICB2YXIgc3RyaW5nU2lnblRlbXAgPSBzdHJpbmdBICsgJyZrZXk9JyArIHBhcmFtcy5rZXk7XG4gICAgcmV0dXJuIG1kNShzdHJpbmdTaWduVGVtcCkudG9VcHBlckNhc2UoKTtcblxufVxuIl19