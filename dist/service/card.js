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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuanMiXSwibmFtZXMiOlsiYWRkVG9DYXJkIiwiZ2V0Q2FyZEJ5T3BlbmlkIiwiZ2V0Q291bnRCeU9wZW5kSWQiLCJyZW1vdmUiLCJyZW1vdmVCeVBpZHMiLCJwYXJhbXMiLCJwcm9kdWN0IiwiY291bnQiLCJvcGVuaWQiLCJnZXRPcGVuSWQiLCJtb2JpbGUiLCJpZCIsInBpZHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUtBOzs7OztRQVdnQkEsUyxHQUFBQSxTO1FBY0FDLGUsR0FBQUEsZTtRQU9BQyxpQixHQUFBQSxpQjtRQWNBQyxNLEdBQUFBLE07UUFXQUMsWSxHQUFBQSxZOztBQXZEaEI7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUE7Ozs7O0FBS08sU0FBU0osU0FBVCxDQUFvQkssTUFBcEIsRUFBNEI7QUFDL0IsV0FBTyx1QkFBSyxXQUFMLEVBQWtCO0FBQ3JCQyxpQkFBU0QsT0FBT0MsT0FESztBQUVyQkMsZUFBT0YsT0FBT0UsS0FGTztBQUdyQkMsZ0JBQVEsbUJBQVNDLFNBQVQsRUFIYTtBQUlyQkMsZ0JBQVEsaUJBQU9BO0FBSk0sS0FBbEIsQ0FBUDtBQU1IOztBQUVEOzs7OztBQUtPLFNBQVNULGVBQVQsR0FBNEI7QUFDL0IsV0FBTyxzQkFBSSxzQkFBc0IsbUJBQVNRLFNBQVQsRUFBMUIsQ0FBUDtBQUNIOztBQUVEOzs7QUFHTyxTQUFTUCxpQkFBVCxHQUE4QjtBQUNqQyxRQUFJTSxTQUFTLG1CQUFTQyxTQUFULEVBQWI7QUFDQSxRQUFJLENBQUNELE1BQUwsRUFBYTtBQUNUO0FBQ0g7QUFDRCxXQUFPLHNCQUFJLHFCQUFxQkEsTUFBekIsQ0FBUDtBQUNIOztBQUVEOzs7Ozs7QUFNTyxTQUFTTCxNQUFULENBQWlCUSxFQUFqQixFQUFxQjtBQUN4QixXQUFPLHNCQUFJLGVBQWVBLEVBQW5CLENBQVA7QUFDSDs7QUFFRDs7Ozs7OztBQU9PLFNBQVNQLFlBQVQsQ0FBdUJRLElBQXZCLEVBQTZCO0FBQ2hDLFFBQUlKLFNBQVMsbUJBQVNDLFNBQVQsRUFBYjtBQUNBLFdBQU8sc0JBQUksb0JBQW9CRCxNQUF4QixFQUFnQztBQUNuQ0ksY0FBTUE7QUFENkIsS0FBaEMsQ0FBUDtBQUdIIiwiZmlsZSI6ImNhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlT3ZlcnZpZXcgYXJoYXQtc2VydmljZS1jYXJkXG4gKiBAYXV0aG9yIFhpYW9CaW4gTGkobGl4aWFvYmluODg3OEBnbWFpbC5jb20pIFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHsgZ2V0LCBwb3N0LCBkZWwgfSBmcm9tICcuLi9mdW5jdGlvbi9zZXJ2aWNlVXRpbCc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgdXNlckluZm8gZnJvbSAnLi4vcGx1Z2luL3VzZXJJbmZvJztcblxuLyoqXG4gKiDmt7vliqDliLDotK3nianovaZcbiAqIFxuICogIEByZXR1cm4ge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRUb0NhcmQgKHBhcmFtcykge1xuICAgIHJldHVybiBwb3N0KCcvYXBpL2NhcmQnLCB7XG4gICAgICAgIHByb2R1Y3Q6IHBhcmFtcy5wcm9kdWN0LFxuICAgICAgICBjb3VudDogcGFyYW1zLmNvdW50LFxuICAgICAgICBvcGVuaWQ6IHVzZXJJbmZvLmdldE9wZW5JZCgpLFxuICAgICAgICBtb2JpbGU6IGNvbmZpZy5tb2JpbGVcbiAgICB9KVxufVxuXG4vKipcbiAqIOiOt+WPlui0reeJqei9puS/oeaBr1xuICogXG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2FyZEJ5T3BlbmlkICgpIHtcbiAgICByZXR1cm4gZ2V0KCcvYXBpL2NhcmQvb3BlbmlkLycgKyB1c2VySW5mby5nZXRPcGVuSWQoKSk7XG59XG5cbi8qKlxuICog6I635Y+W6LSt54mp6L2m55qE5pWw6YePIFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q291bnRCeU9wZW5kSWQgKCkge1xuICAgIHZhciBvcGVuaWQgPSB1c2VySW5mby5nZXRPcGVuSWQoKTtcbiAgICBpZiAoIW9wZW5pZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiBnZXQoJy9hcGkvY2FyZC9jb3VudC8nICsgb3BlbmlkKTtcbn1cblxuLyoqXG4gKiDlsIbllYblk4Hku47otK3nianovabkuK3np7vpmaQgXG4gKiBAcGFyYW0ge3N0cmluZ30gaWQg6LSt54mp6L2maWRcbiAqXG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlIChpZCkge1xuICAgIHJldHVybiBkZWwoJy9hcGkvY2FyZC8nICsgaWQpO1xufVxuXG4vKipcbiAqIOWIoOmZpOi0reeJqei9puS4reeahOWVhuWTgeS/oeaBr1xuICogXG4gKiBAcGFyYW0ge0FycmF5fSBwaWRzIOS6p+WTgWlkc1xuICogXG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQnlQaWRzIChwaWRzKSB7XG4gICAgdmFyIG9wZW5pZCA9IHVzZXJJbmZvLmdldE9wZW5JZCgpO1xuICAgIHJldHVybiBkZWwoJy9hcGkvY2FyZC9waWRzLycgKyBvcGVuaWQsIHtcbiAgICAgICAgcGlkczogcGlkc1xuICAgIH0pO1xufSJdfQ==