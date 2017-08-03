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

  return (0, _md2.default)(stringSignTemp).toUpperCase();
};

var _md = require('./md5.js');

var _md2 = _interopRequireDefault(_md);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdldE1kNVBheVNpZ24uanMiXSwibmFtZXMiOlsicGFyYW1zIiwic3RyaW5nQSIsImFwcGlkIiwibm9uY2Vfc3RyIiwicGFja2FnZSIsInNpZ25UeXBlIiwidGltZVN0YW1wIiwic3RyaW5nU2lnblRlbXAiLCJrZXkiLCJ0b1VwcGVyQ2FzZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBS0E7Ozs7OztrQkFJZSxVQUFVQSxNQUFWLEVBQWtCOztBQUU1QixNQUFJQyxVQUFVLFdBQVdELE9BQU9FLEtBQWxCLEdBQ1QsWUFEUyxHQUVURixPQUFPRyxTQUZFLEdBR1QsV0FIUyxHQUlUSCxPQUFPSSxPQUpFLEdBS1QsWUFMUyxHQU1USixPQUFPSyxRQU5FLEdBT1QsYUFQUyxHQVFUTCxPQUFPTSxTQVJaOztBQVVELE1BQUlDLGlCQUFpQk4sVUFBVSxPQUFWLEdBQW9CRCxPQUFPUSxHQUFoRDs7QUFFQSxTQUFPLGtCQUFJRCxjQUFKLEVBQW9CRSxXQUFwQixFQUFQO0FBRUgsQzs7QUFsQkQiLCJmaWxlIjoiZ2V0TWQ1UGF5U2lnbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGUg6I635Y+W5b6u5L+h5bCP56iL5bqP5pSv5LuYbWQ15qC85byP562+5ZCNXG4gKiBAYXV0aG9yIFhpYW9CaW4gTGkobGl4aWFvYmluODg3OEBnbWFpbC5jb20pIFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IG1kNSBmcm9tICcuL21kNSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwYXJhbXMpIHtcblxuICAgICB2YXIgc3RyaW5nQSA9ICdhcHBJZD0nICsgcGFyYW1zLmFwcGlkIFxuICAgICAgICArICcmbm9uY2VTdHI9J1xuICAgICAgICArIHBhcmFtcy5ub25jZV9zdHJcbiAgICAgICAgKyAnJnBhY2thZ2U9JyBcbiAgICAgICAgKyBwYXJhbXMucGFja2FnZVxuICAgICAgICArICcmc2lnblR5cGU9JyBcbiAgICAgICAgKyBwYXJhbXMuc2lnblR5cGVcbiAgICAgICAgKyAnJnRpbWVTdGFtcD0nXG4gICAgICAgICsgcGFyYW1zLnRpbWVTdGFtcFxuXG4gICAgdmFyIHN0cmluZ1NpZ25UZW1wID0gc3RyaW5nQSArICcma2V5PScgKyBwYXJhbXMua2V5O1xuICAgIFxuICAgIHJldHVybiBtZDUoc3RyaW5nU2lnblRlbXApLnRvVXBwZXJDYXNlKCk7XG5cbn1cbiJdfQ==