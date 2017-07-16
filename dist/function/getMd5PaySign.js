/**
 * @file 获取微信小程序支付md5格式签名
 * @author XiaoBin Li(lixiaobin8878@gmail.com) 
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (params) {

  var stringA = 'appId=' + params.appid + '&nonceStr=' + params.nonce_str + '&package=' + params.package + '&signType=' + params.signType + '&timeStamp=' + params.timeStamp;

  var stringSignTemp = stringA + '&key=' + params.key;
  console.log('stringSignTemp', stringSignTemp);

  return (0, _md2.default)(stringSignTemp).toUpperCase();
};

var _md = require('./md5.js');

var _md2 = _interopRequireDefault(_md);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdldE1kNVBheVNpZ24uanMiXSwibmFtZXMiOlsicGFyYW1zIiwic3RyaW5nQSIsImFwcGlkIiwibm9uY2Vfc3RyIiwicGFja2FnZSIsInNpZ25UeXBlIiwidGltZVN0YW1wIiwic3RyaW5nU2lnblRlbXAiLCJrZXkiLCJjb25zb2xlIiwibG9nIiwidG9VcHBlckNhc2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUtBOzs7Ozs7a0JBSWUsVUFBVUEsTUFBVixFQUFrQjs7QUFFNUIsTUFBSUMsVUFBVSxXQUFXRCxPQUFPRSxLQUFsQixHQUNULFlBRFMsR0FFVEYsT0FBT0csU0FGRSxHQUdULFdBSFMsR0FJVEgsT0FBT0ksT0FKRSxHQUtULFlBTFMsR0FNVEosT0FBT0ssUUFORSxHQU9ULGFBUFMsR0FRVEwsT0FBT00sU0FSWjs7QUFVRCxNQUFJQyxpQkFBaUJOLFVBQVUsT0FBVixHQUFvQkQsT0FBT1EsR0FBaEQ7QUFDQUMsVUFBUUMsR0FBUixDQUFZLGdCQUFaLEVBQThCSCxjQUE5Qjs7QUFFQSxTQUFPLGtCQUFJQSxjQUFKLEVBQW9CSSxXQUFwQixFQUFQO0FBRUgsQzs7QUFuQkQiLCJmaWxlIjoiZ2V0TWQ1UGF5U2lnbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGUg6I635Y+W5b6u5L+h5bCP56iL5bqP5pSv5LuYbWQ15qC85byP562+5ZCNXG4gKiBAYXV0aG9yIFhpYW9CaW4gTGkobGl4aWFvYmluODg3OEBnbWFpbC5jb20pIFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IG1kNSBmcm9tICcuL21kNSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwYXJhbXMpIHtcblxuICAgICB2YXIgc3RyaW5nQSA9ICdhcHBJZD0nICsgcGFyYW1zLmFwcGlkIFxuICAgICAgICArICcmbm9uY2VTdHI9J1xuICAgICAgICArIHBhcmFtcy5ub25jZV9zdHJcbiAgICAgICAgKyAnJnBhY2thZ2U9JyBcbiAgICAgICAgKyBwYXJhbXMucGFja2FnZVxuICAgICAgICArICcmc2lnblR5cGU9JyBcbiAgICAgICAgKyBwYXJhbXMuc2lnblR5cGVcbiAgICAgICAgKyAnJnRpbWVTdGFtcD0nXG4gICAgICAgICsgcGFyYW1zLnRpbWVTdGFtcFxuXG4gICAgdmFyIHN0cmluZ1NpZ25UZW1wID0gc3RyaW5nQSArICcma2V5PScgKyBwYXJhbXMua2V5O1xuICAgIGNvbnNvbGUubG9nKCdzdHJpbmdTaWduVGVtcCcsIHN0cmluZ1NpZ25UZW1wKTtcbiAgICBcbiAgICByZXR1cm4gbWQ1KHN0cmluZ1NpZ25UZW1wKS50b1VwcGVyQ2FzZSgpO1xuXG59XG4iXX0=