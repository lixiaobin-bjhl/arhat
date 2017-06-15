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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function initUser() {
    return new Promise(function (resolve, reject) {
        (0, _global.login)().then(function (res) {
            (0, _global.jscode2Session)(res.code).then(function (res) {
                _userInfo2.default.setOpenId(res.openid);
                _userInfo2.default.setSessionKey(res.session_key);
                (0, _global.getUserInfo)().then(function (res) {
                    _userInfo2.default.setInfo(res);
                    resolve(res);
                }).catch(reject);
            });
        });
    });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaXRVc2VyLmpzIl0sIm5hbWVzIjpbImluaXRVc2VyIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ0aGVuIiwicmVzIiwiY29kZSIsInNldE9wZW5JZCIsIm9wZW5pZCIsInNldFNlc3Npb25LZXkiLCJzZXNzaW9uX2tleSIsInNldEluZm8iLCJjYXRjaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBS0E7Ozs7O2tCQUt3QkEsUTs7QUFIeEI7O0FBQ0E7Ozs7OztBQUVlLFNBQVNBLFFBQVQsR0FBcUI7QUFDaEMsV0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQW9CO0FBQ25DLDZCQUNLQyxJQURMLENBQ1UsVUFBQ0MsR0FBRCxFQUFRO0FBQ1Ysd0NBQWVBLElBQUlDLElBQW5CLEVBQ0tGLElBREwsQ0FDVSxVQUFDQyxHQUFELEVBQVE7QUFDVixtQ0FBU0UsU0FBVCxDQUFtQkYsSUFBSUcsTUFBdkI7QUFDQSxtQ0FBU0MsYUFBVCxDQUF1QkosSUFBSUssV0FBM0I7QUFDQSwyQ0FDS04sSUFETCxDQUNVLFVBQUNDLEdBQUQsRUFBUTtBQUNWLHVDQUFTTSxPQUFULENBQWlCTixHQUFqQjtBQUNBSCw0QkFBUUcsR0FBUjtBQUNILGlCQUpMLEVBS0tPLEtBTEwsQ0FLV1QsTUFMWDtBQU1ILGFBVkw7QUFXSCxTQWJMO0FBY0gsS0FmTSxDQUFQO0FBZ0JIIiwiZmlsZSI6ImluaXRVc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IGZ1bmN0aW9uIGluaXRVc2VyXG4gKiBAYXV0aG9yIFhpYW9CaW4gTGkobGl4aWFvYmluODg3OEBnbWFpbC5jb20pXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgeyBsb2dpbiwgZ2V0VXNlckluZm8sIGpzY29kZTJTZXNzaW9uIH0gZnJvbSAnLi4vc2VydmljZS9nbG9iYWwnO1xuaW1wb3J0IHVzZXJJbmZvIGZyb20gJy4uL3BsdWdpbi91c2VySW5mbyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRVc2VyICgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PiB7XG4gICAgICAgIGxvZ2luKClcbiAgICAgICAgICAgIC50aGVuKChyZXMpPT4ge1xuICAgICAgICAgICAgICAgIGpzY29kZTJTZXNzaW9uKHJlcy5jb2RlKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJbmZvLnNldE9wZW5JZChyZXMub3BlbmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJbmZvLnNldFNlc3Npb25LZXkocmVzLnNlc3Npb25fa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFVzZXJJbmZvKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlckluZm8uc2V0SW5mbyhyZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pO1xuICAgIH0pO1xufSJdfQ==