/**
 * @fileOverview arhat-service-product
 * @author XiaoBin Li(lixiaobin8878@gmail.com) 
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getList = getList;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _config = require('./../config.js');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 获取产品列表 
 */
function getList() {
  return _wepy2.default.request(_config2.default.domain + 'api/product');
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QuanMiXSwibmFtZXMiOlsiZ2V0TGlzdCIsInJlcXVlc3QiLCJkb21haW4iXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUtBOzs7OztRQVFnQkEsTyxHQUFBQSxPOztBQU5oQjs7OztBQUNBOzs7Ozs7QUFFQTs7O0FBR08sU0FBU0EsT0FBVCxHQUFvQjtBQUN2QixTQUFPLGVBQUtDLE9BQUwsQ0FBYSxpQkFBT0MsTUFBUCxHQUFnQixhQUE3QixDQUFQO0FBQ0giLCJmaWxlIjoicHJvZHVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVPdmVydmlldyBhcmhhdC1zZXJ2aWNlLXByb2R1Y3RcbiAqIEBhdXRob3IgWGlhb0JpbiBMaShsaXhpYW9iaW44ODc4QGdtYWlsLmNvbSkgXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnXG5cbi8qKlxuICog6I635Y+W5Lqn5ZOB5YiX6KGoIFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGlzdCAoKSB7XG4gICAgcmV0dXJuIHdlcHkucmVxdWVzdChjb25maWcuZG9tYWluICsgJ2FwaS9wcm9kdWN0JykgIFxufSJdfQ==