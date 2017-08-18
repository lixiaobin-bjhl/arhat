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
        user: _userInfo2.default.getUserid(),
        openid: _userInfo2.default.getOpenid(),
        mobile: _config2.default.mobile
    });
}

/**
 * 获取购物车信息
 * 
 * @return {Promise}
 */
function getCardByOpenid() {
    var openid = _userInfo2.default.getOpenid();
    if (!openid) {
        return;
    }
    return (0, _serviceUtil.get)('/api/card/openid/' + _userInfo2.default.getOpenid());
}

/**
 * 获取购物车的数量 
 */
function getCountByOpendId() {
    var openid = _userInfo2.default.getOpenid();
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
    var openid = _userInfo2.default.getOpenid();
    return (0, _serviceUtil.del)('/api/card/pids/' + openid, {
        pids: pids
    });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuanMiXSwibmFtZXMiOlsiYWRkVG9DYXJkIiwiZ2V0Q2FyZEJ5T3BlbmlkIiwiZ2V0Q291bnRCeU9wZW5kSWQiLCJyZW1vdmUiLCJyZW1vdmVCeVBpZHMiLCJwYXJhbXMiLCJwcm9kdWN0IiwiY291bnQiLCJ1c2VyIiwiZ2V0VXNlcmlkIiwib3BlbmlkIiwiZ2V0T3BlbmlkIiwibW9iaWxlIiwiaWQiLCJwaWRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFLQTs7Ozs7UUFXZ0JBLFMsR0FBQUEsUztRQWVBQyxlLEdBQUFBLGU7UUFXQUMsaUIsR0FBQUEsaUI7UUFjQUMsTSxHQUFBQSxNO1FBV0FDLFksR0FBQUEsWTs7QUE1RGhCOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBOzs7OztBQUtPLFNBQVNKLFNBQVQsQ0FBb0JLLE1BQXBCLEVBQTRCO0FBQy9CLFdBQU8sdUJBQUssV0FBTCxFQUFrQjtBQUNyQkMsaUJBQVNELE9BQU9DLE9BREs7QUFFckJDLGVBQU9GLE9BQU9FLEtBRk87QUFHckJDLGNBQU0sbUJBQVNDLFNBQVQsRUFIZTtBQUlyQkMsZ0JBQVEsbUJBQVNDLFNBQVQsRUFKYTtBQUtyQkMsZ0JBQVEsaUJBQU9BO0FBTE0sS0FBbEIsQ0FBUDtBQU9IOztBQUVEOzs7OztBQUtPLFNBQVNYLGVBQVQsR0FBNEI7QUFDL0IsUUFBSVMsU0FBUyxtQkFBU0MsU0FBVCxFQUFiO0FBQ0EsUUFBSSxDQUFDRCxNQUFMLEVBQWE7QUFDVDtBQUNIO0FBQ0QsV0FBTyxzQkFBSSxzQkFBc0IsbUJBQVNDLFNBQVQsRUFBMUIsQ0FBUDtBQUNIOztBQUVEOzs7QUFHTyxTQUFTVCxpQkFBVCxHQUE4QjtBQUNqQyxRQUFJUSxTQUFTLG1CQUFTQyxTQUFULEVBQWI7QUFDQSxRQUFJLENBQUNELE1BQUwsRUFBYTtBQUNUO0FBQ0g7QUFDRCxXQUFPLHNCQUFJLHFCQUFxQkEsTUFBekIsQ0FBUDtBQUNIOztBQUVEOzs7Ozs7QUFNTyxTQUFTUCxNQUFULENBQWlCVSxFQUFqQixFQUFxQjtBQUN4QixXQUFPLHNCQUFJLGVBQWVBLEVBQW5CLENBQVA7QUFDSDs7QUFFRDs7Ozs7OztBQU9PLFNBQVNULFlBQVQsQ0FBdUJVLElBQXZCLEVBQTZCO0FBQ2hDLFFBQUlKLFNBQVMsbUJBQVNDLFNBQVQsRUFBYjtBQUNBLFdBQU8sc0JBQUksb0JBQW9CRCxNQUF4QixFQUFnQztBQUNuQ0ksY0FBTUE7QUFENkIsS0FBaEMsQ0FBUDtBQUdIIiwiZmlsZSI6ImNhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlT3ZlcnZpZXcgYXJoYXQtY2FyZC1zZXJ2aWNlXG4gKiBAYXV0aG9yIFhpYW9CaW4gTGkobGl4aWFvYmluODg3OEBnbWFpbC5jb20pIFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHsgZ2V0LCBwb3N0LCBkZWwgfSBmcm9tICcuLi9mdW5jdGlvbi9zZXJ2aWNlVXRpbCc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgdXNlckluZm8gZnJvbSAnLi4vcGx1Z2luL3VzZXJJbmZvJztcblxuLyoqXG4gKiDmt7vliqDliLDotK3nianovaZcbiAqIFxuICogIEByZXR1cm4ge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRUb0NhcmQgKHBhcmFtcykge1xuICAgIHJldHVybiBwb3N0KCcvYXBpL2NhcmQnLCB7XG4gICAgICAgIHByb2R1Y3Q6IHBhcmFtcy5wcm9kdWN0LFxuICAgICAgICBjb3VudDogcGFyYW1zLmNvdW50LFxuICAgICAgICB1c2VyOiB1c2VySW5mby5nZXRVc2VyaWQoKSxcbiAgICAgICAgb3BlbmlkOiB1c2VySW5mby5nZXRPcGVuaWQoKSxcbiAgICAgICAgbW9iaWxlOiBjb25maWcubW9iaWxlXG4gICAgfSlcbn1cblxuLyoqXG4gKiDojrflj5botK3nianovabkv6Hmga9cbiAqIFxuICogQHJldHVybiB7UHJvbWlzZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENhcmRCeU9wZW5pZCAoKSB7XG4gICAgdmFyIG9wZW5pZCA9IHVzZXJJbmZvLmdldE9wZW5pZCgpO1xuICAgIGlmICghb3BlbmlkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIGdldCgnL2FwaS9jYXJkL29wZW5pZC8nICsgdXNlckluZm8uZ2V0T3BlbmlkKCkpO1xufVxuXG4vKipcbiAqIOiOt+WPlui0reeJqei9pueahOaVsOmHjyBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENvdW50QnlPcGVuZElkICgpIHtcbiAgICB2YXIgb3BlbmlkID0gdXNlckluZm8uZ2V0T3BlbmlkKCk7XG4gICAgaWYgKCFvcGVuaWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0KCcvYXBpL2NhcmQvY291bnQvJyArIG9wZW5pZCk7XG59XG5cbi8qKlxuICog5bCG5ZWG5ZOB5LuO6LSt54mp6L2m5Lit56e76ZmkIFxuICogQHBhcmFtIHtzdHJpbmd9IGlkIOi0reeJqei9pmlkXG4gKlxuICogQHJldHVybiB7UHJvbWlzZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZSAoaWQpIHtcbiAgICByZXR1cm4gZGVsKCcvYXBpL2NhcmQvJyArIGlkKTtcbn1cblxuLyoqXG4gKiDliKDpmaTotK3nianovabkuK3nmoTllYblk4Hkv6Hmga9cbiAqIFxuICogQHBhcmFtIHtBcnJheX0gcGlkcyDkuqflk4FpZHNcbiAqIFxuICogQHJldHVybiB7UHJvbWlzZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUJ5UGlkcyAocGlkcykge1xuICAgIHZhciBvcGVuaWQgPSB1c2VySW5mby5nZXRPcGVuaWQoKTtcbiAgICByZXR1cm4gZGVsKCcvYXBpL2NhcmQvcGlkcy8nICsgb3BlbmlkLCB7XG4gICAgICAgIHBpZHM6IHBpZHNcbiAgICB9KTtcbn0iXX0=