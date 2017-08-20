/**
 * @fileOverview arhat-productSubject-service
 * @author XiaoBin Li(lixiaobin8878@gmail.com) 
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getList = getList;

var _serviceUtil = require('./../function/serviceUtil.js');

/**
 * 获取产品列表 
 * 
 * @return {Promise}
 */
function getList() {
  return (0, _serviceUtil.get)('/api/productSubject');
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RTdWJqZWN0LmpzIl0sIm5hbWVzIjpbImdldExpc3QiXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUtBOzs7OztRQVNnQkEsTyxHQUFBQSxPOztBQVBoQjs7QUFFQTs7Ozs7QUFLTyxTQUFTQSxPQUFULEdBQW9CO0FBQ3ZCLFNBQU8sc0JBQUkscUJBQUosQ0FBUDtBQUNIIiwiZmlsZSI6InByb2R1Y3RTdWJqZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IGFyaGF0LXByb2R1Y3RTdWJqZWN0LXNlcnZpY2VcbiAqIEBhdXRob3IgWGlhb0JpbiBMaShsaXhpYW9iaW44ODc4QGdtYWlsLmNvbSkgXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgeyBnZXQsIHBvc3QgfSBmcm9tICcuLi9mdW5jdGlvbi9zZXJ2aWNlVXRpbCc7XG5cbi8qKlxuICog6I635Y+W5Lqn5ZOB5YiX6KGoIFxuICogXG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGlzdCAoKSB7XG4gICAgcmV0dXJuIGdldCgnL2FwaS9wcm9kdWN0U3ViamVjdCcpO1xufSJdfQ==