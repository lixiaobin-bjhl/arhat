/**
 * @fileOverview arhat-service-card
 * @author XiaoBin Li(lixiaobin8878@gmail.com) 
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addToCard = addToCard;
exports.getCardByOpenid = getCardByOpenid;
exports.getCountByOpendId = getCountByOpendId;
exports.remove = remove;

var _serviceUtil = require('./../function/serviceUtil.js');

var _config = require('./../config.js');

var _config2 = _interopRequireDefault(_config);

var _userInfo = require('./../plugin/userInfo.js');

var _userInfo2 = _interopRequireDefault(_userInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 添加到购物车
 * 
 *  @return {Promise}
 */
function addToCard(params) {
    return (0, _serviceUtil.post)('/api/card', {
        product: params.product,
        count: params.count,
        openid: _userInfo2.default.getOpenId(),
        mobile: _config2.default.mobile
    });
}

/**
 * 获取购物车信息
 * 
 * @return {Promise}
 */
function getCardByOpenid() {
    return (0, _serviceUtil.get)('/api/card/openid/' + _userInfo2.default.getOpenId());
}

/**
 * 获取购物车的数量 
 */
function getCountByOpendId() {
    var openid = _userInfo2.default.getOpenId();
    if (!openid) {
        return;
    }
    return (0, _serviceUtil.get)('/api/card/count/' + openid);
}

/**
 * 将商品从购物车中移除 
 * @param {string} id 购物车id
 *
 * @return {Promise}
 */
function remove(id) {
    return (0, _serviceUtil.del)('/api/card/' + id);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuanMiXSwibmFtZXMiOlsiYWRkVG9DYXJkIiwiZ2V0Q2FyZEJ5T3BlbmlkIiwiZ2V0Q291bnRCeU9wZW5kSWQiLCJyZW1vdmUiLCJwYXJhbXMiLCJwcm9kdWN0IiwiY291bnQiLCJvcGVuaWQiLCJnZXRPcGVuSWQiLCJtb2JpbGUiLCJpZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBS0E7Ozs7O1FBV2dCQSxTLEdBQUFBLFM7UUFjQUMsZSxHQUFBQSxlO1FBT0FDLGlCLEdBQUFBLGlCO1FBY0FDLE0sR0FBQUEsTTs7QUE1Q2hCOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBOzs7OztBQUtPLFNBQVNILFNBQVQsQ0FBb0JJLE1BQXBCLEVBQTRCO0FBQy9CLFdBQU8sdUJBQUssV0FBTCxFQUFrQjtBQUNyQkMsaUJBQVNELE9BQU9DLE9BREs7QUFFckJDLGVBQU9GLE9BQU9FLEtBRk87QUFHckJDLGdCQUFRLG1CQUFTQyxTQUFULEVBSGE7QUFJckJDLGdCQUFRLGlCQUFPQTtBQUpNLEtBQWxCLENBQVA7QUFNSDs7QUFFRDs7Ozs7QUFLTyxTQUFTUixlQUFULEdBQTRCO0FBQy9CLFdBQU8sc0JBQUksc0JBQXNCLG1CQUFTTyxTQUFULEVBQTFCLENBQVA7QUFDSDs7QUFFRDs7O0FBR08sU0FBU04saUJBQVQsR0FBOEI7QUFDakMsUUFBSUssU0FBUyxtQkFBU0MsU0FBVCxFQUFiO0FBQ0EsUUFBSSxDQUFDRCxNQUFMLEVBQWE7QUFDVDtBQUNIO0FBQ0QsV0FBTyxzQkFBSSxxQkFBcUJBLE1BQXpCLENBQVA7QUFDSDs7QUFFRDs7Ozs7O0FBTU8sU0FBU0osTUFBVCxDQUFpQk8sRUFBakIsRUFBcUI7QUFDeEIsV0FBTyxzQkFBSSxlQUFlQSxFQUFuQixDQUFQO0FBQ0giLCJmaWxlIjoiY2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVPdmVydmlldyBhcmhhdC1zZXJ2aWNlLWNhcmRcbiAqIEBhdXRob3IgWGlhb0JpbiBMaShsaXhpYW9iaW44ODc4QGdtYWlsLmNvbSkgXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgeyBnZXQsIHBvc3QsIGRlbCB9IGZyb20gJy4uL2Z1bmN0aW9uL3NlcnZpY2VVdGlsJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB1c2VySW5mbyBmcm9tICcuLi9wbHVnaW4vdXNlckluZm8nO1xuXG4vKipcbiAqIOa3u+WKoOWIsOi0reeJqei9plxuICogXG4gKiAgQHJldHVybiB7UHJvbWlzZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvQ2FyZCAocGFyYW1zKSB7XG4gICAgcmV0dXJuIHBvc3QoJy9hcGkvY2FyZCcsIHtcbiAgICAgICAgcHJvZHVjdDogcGFyYW1zLnByb2R1Y3QsXG4gICAgICAgIGNvdW50OiBwYXJhbXMuY291bnQsXG4gICAgICAgIG9wZW5pZDogdXNlckluZm8uZ2V0T3BlbklkKCksXG4gICAgICAgIG1vYmlsZTogY29uZmlnLm1vYmlsZVxuICAgIH0pXG59XG5cbi8qKlxuICog6I635Y+W6LSt54mp6L2m5L+h5oGvXG4gKiBcbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRDYXJkQnlPcGVuaWQgKCkge1xuICAgIHJldHVybiBnZXQoJy9hcGkvY2FyZC9vcGVuaWQvJyArIHVzZXJJbmZvLmdldE9wZW5JZCgpKTtcbn1cblxuLyoqXG4gKiDojrflj5botK3nianovabnmoTmlbDph48gXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb3VudEJ5T3BlbmRJZCAoKSB7XG4gICAgdmFyIG9wZW5pZCA9IHVzZXJJbmZvLmdldE9wZW5JZCgpO1xuICAgIGlmICghb3BlbmlkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIGdldCgnL2FwaS9jYXJkL2NvdW50LycgKyBvcGVuaWQpO1xufVxuXG4vKipcbiAqIOWwhuWVhuWTgeS7jui0reeJqei9puS4reenu+mZpCBcbiAqIEBwYXJhbSB7c3RyaW5nfSBpZCDotK3nianovaZpZFxuICpcbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmUgKGlkKSB7XG4gICAgcmV0dXJuIGRlbCgnL2FwaS9jYXJkLycgKyBpZCk7XG59Il19