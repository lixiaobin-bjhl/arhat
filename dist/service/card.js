/**
 * @fileOverview arhat-service-card
 * @author XiaoBin Li(lixiaobin8878@gmail.com) 
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addToCard = addToCard;

var _serviceUtil = require('./../function/serviceUtil.js');

var _config = require('./../config.js');

var _config2 = _interopRequireDefault(_config);

var _userInfo = require('./../plugin/userInfo.js');

var _userInfo2 = _interopRequireDefault(_userInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 添加到购物车
 */
function addToCard(params) {
  return (0, _serviceUtil.post)('/api/card', {
    product: params.product,
    openid: _userInfo2.default.getOpenId(),
    mobile: _config2.default.mobile
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuanMiXSwibmFtZXMiOlsiYWRkVG9DYXJkIiwicGFyYW1zIiwicHJvZHVjdCIsIm9wZW5pZCIsImdldE9wZW5JZCIsIm1vYmlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBS0E7Ozs7O1FBU2dCQSxTLEdBQUFBLFM7O0FBUGhCOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBOzs7QUFHTyxTQUFTQSxTQUFULENBQW9CQyxNQUFwQixFQUE0QjtBQUMvQixTQUFPLHVCQUFLLFdBQUwsRUFBa0I7QUFDckJDLGFBQVNELE9BQU9DLE9BREs7QUFFckJDLFlBQVEsbUJBQVNDLFNBQVQsRUFGYTtBQUdyQkMsWUFBUSxpQkFBT0E7QUFITSxHQUFsQixDQUFQO0FBS0giLCJmaWxlIjoiY2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVPdmVydmlldyBhcmhhdC1zZXJ2aWNlLWNhcmRcbiAqIEBhdXRob3IgWGlhb0JpbiBMaShsaXhpYW9iaW44ODc4QGdtYWlsLmNvbSkgXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgeyBnZXQsIHBvc3QgfSBmcm9tICcuLi9mdW5jdGlvbi9zZXJ2aWNlVXRpbCc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgdXNlckluZm8gZnJvbSAnLi4vcGx1Z2luL3VzZXJJbmZvJztcblxuLyoqXG4gKiDmt7vliqDliLDotK3nianovaZcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvQ2FyZCAocGFyYW1zKSB7XG4gICAgcmV0dXJuIHBvc3QoJy9hcGkvY2FyZCcsIHtcbiAgICAgICAgcHJvZHVjdDogcGFyYW1zLnByb2R1Y3QsXG4gICAgICAgIG9wZW5pZDogdXNlckluZm8uZ2V0T3BlbklkKCksXG4gICAgICAgIG1vYmlsZTogY29uZmlnLm1vYmlsZVxuICAgIH0pXG59Il19