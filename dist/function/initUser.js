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
                    _userInfo2.default.setInfo(res);
                    console.log(res);
                    (0, _user.add)(res);
                    resolve(res);
                }).catch(reject);
            });
        });
    });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaXRVc2VyLmpzIl0sIm5hbWVzIjpbImluaXRVc2VyIiwiY29udGV4dCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidGhlbiIsInJlcyIsImNvZGUiLCJzZXRPcGVuSWQiLCJvcGVuaWQiLCIkaW52b2tlIiwic2V0U2Vzc2lvbktleSIsInNlc3Npb25fa2V5Iiwic2V0SW5mbyIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBS0E7Ozs7O2tCQU13QkEsUTs7QUFKeEI7O0FBQ0E7Ozs7QUFDQTs7OztBQUVlLFNBQVNBLFFBQVQsQ0FBbUJDLE9BQW5CLEVBQTRCO0FBQ3ZDLFdBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFvQjtBQUNuQyw2QkFDS0MsSUFETCxDQUNVLFVBQUNDLEdBQUQsRUFBUTtBQUNWLHdDQUFlQSxJQUFJQyxJQUFuQixFQUNLRixJQURMLENBQ1UsVUFBQ0MsR0FBRCxFQUFRO0FBQ1YsbUNBQVNFLFNBQVQsQ0FBbUJGLElBQUlHLE1BQXZCO0FBQ0FSLHdCQUFRUyxPQUFSLENBQWdCLFFBQWhCLEVBQTBCLG1CQUExQjtBQUNBLG1DQUFTQyxhQUFULENBQXVCTCxJQUFJTSxXQUEzQjtBQUNBLDJDQUNLUCxJQURMLENBQ1UsVUFBQ0MsR0FBRCxFQUFRO0FBQ1YsdUNBQVNPLE9BQVQsQ0FBaUJQLEdBQWpCO0FBQ0FRLDRCQUFRQyxHQUFSLENBQVlULEdBQVo7QUFDQSxtQ0FBSUEsR0FBSjtBQUNBSCw0QkFBUUcsR0FBUjtBQUNILGlCQU5MLEVBT0tVLEtBUEwsQ0FPV1osTUFQWDtBQVFILGFBYkw7QUFjSCxTQWhCTDtBQWlCSCxLQWxCTSxDQUFQO0FBbUJIIiwiZmlsZSI6ImluaXRVc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IGZ1bmN0aW9uIGluaXRVc2VyXG4gKiBAYXV0aG9yIFhpYW9CaW4gTGkobGl4aWFvYmluODg3OEBnbWFpbC5jb20pXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgeyBsb2dpbiwgZ2V0VXNlckluZm8sIGpzY29kZTJTZXNzaW9uIH0gZnJvbSAnLi4vc2VydmljZS9nbG9iYWwnO1xuaW1wb3J0IHVzZXJJbmZvIGZyb20gJy4uL3BsdWdpbi91c2VySW5mbyc7XG5pbXBvcnQgeyBhZGQgfSBmcm9tICcuLi9zZXJ2aWNlL3VzZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0VXNlciAoY29udGV4dCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+IHtcbiAgICAgICAgbG9naW4oKVxuICAgICAgICAgICAgLnRoZW4oKHJlcyk9PiB7XG4gICAgICAgICAgICAgICAganNjb2RlMlNlc3Npb24ocmVzLmNvZGUpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXMpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlckluZm8uc2V0T3BlbklkKHJlcy5vcGVuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC4kaW52b2tlKCdmb290ZXInLCAnZ2V0Q291bnRCeU9wZW5kSWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJbmZvLnNldFNlc3Npb25LZXkocmVzLnNlc3Npb25fa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFVzZXJJbmZvKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlckluZm8uc2V0SW5mbyhyZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGQocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKHJlamVjdCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KTtcbiAgICB9KTtcbn0iXX0=