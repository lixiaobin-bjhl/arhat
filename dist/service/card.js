/**
 * @fileOverview arhat-card-service
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
exports.removeByPids = removeByPids;

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
        user: wx.getStorageSync('userId'),
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

/**
 * 删除购物车中的商品信息
 * 
 * @param {Array} pids 产品ids
 * 
 * @return {Promise}
 */
function removeByPids(pids) {
    var openid = _userInfo2.default.getOpenId();
    return (0, _serviceUtil.del)('/api/card/pids/' + openid, {
        pids: pids
    });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuanMiXSwibmFtZXMiOlsiYWRkVG9DYXJkIiwiZ2V0Q2FyZEJ5T3BlbmlkIiwiZ2V0Q291bnRCeU9wZW5kSWQiLCJyZW1vdmUiLCJyZW1vdmVCeVBpZHMiLCJwYXJhbXMiLCJwcm9kdWN0IiwiY291bnQiLCJ1c2VyIiwid3giLCJnZXRTdG9yYWdlU3luYyIsIm9wZW5pZCIsImdldE9wZW5JZCIsIm1vYmlsZSIsImlkIiwicGlkcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBS0E7Ozs7O1FBV2dCQSxTLEdBQUFBLFM7UUFlQUMsZSxHQUFBQSxlO1FBT0FDLGlCLEdBQUFBLGlCO1FBY0FDLE0sR0FBQUEsTTtRQVdBQyxZLEdBQUFBLFk7O0FBeERoQjs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQTs7Ozs7QUFLTyxTQUFTSixTQUFULENBQW9CSyxNQUFwQixFQUE0QjtBQUMvQixXQUFPLHVCQUFLLFdBQUwsRUFBa0I7QUFDckJDLGlCQUFTRCxPQUFPQyxPQURLO0FBRXJCQyxlQUFPRixPQUFPRSxLQUZPO0FBR3JCQyxjQUFNQyxHQUFHQyxjQUFILENBQWtCLFFBQWxCLENBSGU7QUFJckJDLGdCQUFRLG1CQUFTQyxTQUFULEVBSmE7QUFLckJDLGdCQUFRLGlCQUFPQTtBQUxNLEtBQWxCLENBQVA7QUFPSDs7QUFFRDs7Ozs7QUFLTyxTQUFTWixlQUFULEdBQTRCO0FBQy9CLFdBQU8sc0JBQUksc0JBQXNCLG1CQUFTVyxTQUFULEVBQTFCLENBQVA7QUFDSDs7QUFFRDs7O0FBR08sU0FBU1YsaUJBQVQsR0FBOEI7QUFDakMsUUFBSVMsU0FBUyxtQkFBU0MsU0FBVCxFQUFiO0FBQ0EsUUFBSSxDQUFDRCxNQUFMLEVBQWE7QUFDVDtBQUNIO0FBQ0QsV0FBTyxzQkFBSSxxQkFBcUJBLE1BQXpCLENBQVA7QUFDSDs7QUFFRDs7Ozs7O0FBTU8sU0FBU1IsTUFBVCxDQUFpQlcsRUFBakIsRUFBcUI7QUFDeEIsV0FBTyxzQkFBSSxlQUFlQSxFQUFuQixDQUFQO0FBQ0g7O0FBRUQ7Ozs7Ozs7QUFPTyxTQUFTVixZQUFULENBQXVCVyxJQUF2QixFQUE2QjtBQUNoQyxRQUFJSixTQUFTLG1CQUFTQyxTQUFULEVBQWI7QUFDQSxXQUFPLHNCQUFJLG9CQUFvQkQsTUFBeEIsRUFBZ0M7QUFDbkNJLGNBQU1BO0FBRDZCLEtBQWhDLENBQVA7QUFHSCIsImZpbGUiOiJjYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IGFyaGF0LWNhcmQtc2VydmljZVxuICogQGF1dGhvciBYaWFvQmluIExpKGxpeGlhb2Jpbjg4NzhAZ21haWwuY29tKSBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7IGdldCwgcG9zdCwgZGVsIH0gZnJvbSAnLi4vZnVuY3Rpb24vc2VydmljZVV0aWwnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHVzZXJJbmZvIGZyb20gJy4uL3BsdWdpbi91c2VySW5mbyc7XG5cbi8qKlxuICog5re75Yqg5Yiw6LSt54mp6L2mXG4gKiBcbiAqICBAcmV0dXJuIHtQcm9taXNlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkVG9DYXJkIChwYXJhbXMpIHtcbiAgICByZXR1cm4gcG9zdCgnL2FwaS9jYXJkJywge1xuICAgICAgICBwcm9kdWN0OiBwYXJhbXMucHJvZHVjdCxcbiAgICAgICAgY291bnQ6IHBhcmFtcy5jb3VudCxcbiAgICAgICAgdXNlcjogd3guZ2V0U3RvcmFnZVN5bmMoJ3VzZXJJZCcpLFxuICAgICAgICBvcGVuaWQ6IHVzZXJJbmZvLmdldE9wZW5JZCgpLFxuICAgICAgICBtb2JpbGU6IGNvbmZpZy5tb2JpbGVcbiAgICB9KVxufVxuXG4vKipcbiAqIOiOt+WPlui0reeJqei9puS/oeaBr1xuICogXG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2FyZEJ5T3BlbmlkICgpIHtcbiAgICByZXR1cm4gZ2V0KCcvYXBpL2NhcmQvb3BlbmlkLycgKyB1c2VySW5mby5nZXRPcGVuSWQoKSk7XG59XG5cbi8qKlxuICog6I635Y+W6LSt54mp6L2m55qE5pWw6YePIFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q291bnRCeU9wZW5kSWQgKCkge1xuICAgIHZhciBvcGVuaWQgPSB1c2VySW5mby5nZXRPcGVuSWQoKTtcbiAgICBpZiAoIW9wZW5pZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiBnZXQoJy9hcGkvY2FyZC9jb3VudC8nICsgb3BlbmlkKTtcbn1cblxuLyoqXG4gKiDlsIbllYblk4Hku47otK3nianovabkuK3np7vpmaQgXG4gKiBAcGFyYW0ge3N0cmluZ30gaWQg6LSt54mp6L2maWRcbiAqXG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlIChpZCkge1xuICAgIHJldHVybiBkZWwoJy9hcGkvY2FyZC8nICsgaWQpO1xufVxuXG4vKipcbiAqIOWIoOmZpOi0reeJqei9puS4reeahOWVhuWTgeS/oeaBr1xuICogXG4gKiBAcGFyYW0ge0FycmF5fSBwaWRzIOS6p+WTgWlkc1xuICogXG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQnlQaWRzIChwaWRzKSB7XG4gICAgdmFyIG9wZW5pZCA9IHVzZXJJbmZvLmdldE9wZW5JZCgpO1xuICAgIHJldHVybiBkZWwoJy9hcGkvY2FyZC9waWRzLycgKyBvcGVuaWQsIHtcbiAgICAgICAgcGlkczogcGlkc1xuICAgIH0pO1xufSJdfQ==