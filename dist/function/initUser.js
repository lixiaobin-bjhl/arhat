/**
 * @fileOverview function initUser
 * @author XiaoBin Li(lixiaobin8878@gmail.com)
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = initUser;

var _global = require('./../service/global.js');

var _userInfo = require('./../plugin/userInfo.js');

var _userInfo2 = _interopRequireDefault(_userInfo);

var _user = require('./../service/user.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function initUser(context) {
    return new Promise(function (resolve, reject) {
        (0, _global.login)().then(function (res) {
            (0, _global.jscode2Session)(res.code).then(function (res) {
                _userInfo2.default.setOpenId(res.openid);
                context.$invoke('footer', 'getCountByOpendId');
                _userInfo2.default.setSessionKey(res.session_key);
                (0, _global.getUserInfo)().then(function (res) {
                    // userInfo.setInfo(res);
                    (0, _user.add)(res);
                    resolve(res);
                }).catch(reject);
            });
        });
    });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaXRVc2VyLmpzIl0sIm5hbWVzIjpbImluaXRVc2VyIiwiY29udGV4dCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidGhlbiIsInJlcyIsImNvZGUiLCJzZXRPcGVuSWQiLCJvcGVuaWQiLCIkaW52b2tlIiwic2V0U2Vzc2lvbktleSIsInNlc3Npb25fa2V5IiwiY2F0Y2giXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUtBOzs7OztrQkFNd0JBLFE7O0FBSnhCOztBQUNBOzs7O0FBQ0E7Ozs7QUFFZSxTQUFTQSxRQUFULENBQW1CQyxPQUFuQixFQUE0QjtBQUN2QyxXQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBb0I7QUFDbkMsNkJBQ0tDLElBREwsQ0FDVSxVQUFDQyxHQUFELEVBQVE7QUFDVix3Q0FBZUEsSUFBSUMsSUFBbkIsRUFDS0YsSUFETCxDQUNVLFVBQUNDLEdBQUQsRUFBUTtBQUNWLG1DQUFTRSxTQUFULENBQW1CRixJQUFJRyxNQUF2QjtBQUNBUix3QkFBUVMsT0FBUixDQUFnQixRQUFoQixFQUEwQixtQkFBMUI7QUFDQSxtQ0FBU0MsYUFBVCxDQUF1QkwsSUFBSU0sV0FBM0I7QUFDQSwyQ0FDS1AsSUFETCxDQUNVLFVBQUNDLEdBQUQsRUFBUTtBQUNWO0FBQ0EsbUNBQUlBLEdBQUo7QUFDQUgsNEJBQVFHLEdBQVI7QUFDSCxpQkFMTCxFQU1LTyxLQU5MLENBTVdULE1BTlg7QUFPSCxhQVpMO0FBYUgsU0FmTDtBQWdCSCxLQWpCTSxDQUFQO0FBa0JIIiwiZmlsZSI6ImluaXRVc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IGZ1bmN0aW9uIGluaXRVc2VyXG4gKiBAYXV0aG9yIFhpYW9CaW4gTGkobGl4aWFvYmluODg3OEBnbWFpbC5jb20pXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgeyBsb2dpbiwgZ2V0VXNlckluZm8sIGpzY29kZTJTZXNzaW9uIH0gZnJvbSAnLi4vc2VydmljZS9nbG9iYWwnO1xuaW1wb3J0IHVzZXJJbmZvIGZyb20gJy4uL3BsdWdpbi91c2VySW5mbyc7XG5pbXBvcnQgeyBhZGQgfSBmcm9tICcuLi9zZXJ2aWNlL3VzZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0VXNlciAoY29udGV4dCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+IHtcbiAgICAgICAgbG9naW4oKVxuICAgICAgICAgICAgLnRoZW4oKHJlcyk9PiB7XG4gICAgICAgICAgICAgICAganNjb2RlMlNlc3Npb24ocmVzLmNvZGUpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXMpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlckluZm8uc2V0T3BlbklkKHJlcy5vcGVuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC4kaW52b2tlKCdmb290ZXInLCAnZ2V0Q291bnRCeU9wZW5kSWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJbmZvLnNldFNlc3Npb25LZXkocmVzLnNlc3Npb25fa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFVzZXJJbmZvKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdXNlckluZm8uc2V0SW5mbyhyZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGQocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKHJlamVjdCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KTtcbiAgICB9KTtcbn0iXX0=