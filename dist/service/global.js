/**
 * @fileOverview arhat-service-global
 * @author XiaoBin Li(lixiaobin8878@gmail.com) 
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.login = login;
exports.getUserInfo = getUserInfo;
exports.jscode2Session = jscode2Session;

var _userInfo = require('./../plugin/userInfo.js');

var _userInfo2 = _interopRequireDefault(_userInfo);

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _serviceUtil = require('./../function/serviceUtil.js');

var _config = require('./../config.js');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 用户登录 
 */
function login() {
    return new Promise(function (resolve, reject) {
        _wepy2.default.login().then(function (res) {
            resolve(res);
        }).catch(function () {
            reject();
        });
    });
}

/**
 * 获取用的信息 
 */
function getUserInfo() {
    return new Promise(function (resolve, reject) {
        _wepy2.default.getUserInfo().then(function (res) {
            resolve(res.userInfo);
        }).catch(reject);
    });
}

/**
 * 将jscode转化为session信息
 */
function jscode2Session(code) {
    return (0, _serviceUtil.post)('/api/user/jscode2session', {
        appid: _config2.default.appId,
        secret: _config2.default.appSecret,
        code: code
    });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdsb2JhbC5qcyJdLCJuYW1lcyI6WyJsb2dpbiIsImdldFVzZXJJbmZvIiwianNjb2RlMlNlc3Npb24iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInRoZW4iLCJyZXMiLCJjYXRjaCIsInVzZXJJbmZvIiwiY29kZSIsImFwcGlkIiwiYXBwSWQiLCJzZWNyZXQiLCJhcHBTZWNyZXQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUtBOzs7OztRQVVnQkEsSyxHQUFBQSxLO1FBZUFDLFcsR0FBQUEsVztRQWFBQyxjLEdBQUFBLGM7O0FBcENoQjs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBOzs7QUFHTyxTQUFTRixLQUFULEdBQWtCO0FBQ3JCLFdBQU8sSUFBSUcsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQyx1QkFBS0wsS0FBTCxHQUNLTSxJQURMLENBQ1UsVUFBQ0MsR0FBRCxFQUFRO0FBQ1ZILG9CQUFRRyxHQUFSO0FBQ0gsU0FITCxFQUlLQyxLQUpMLENBSVcsWUFBSztBQUNSSDtBQUNILFNBTkw7QUFPSCxLQVJNLENBQVA7QUFTSDs7QUFFRDs7O0FBR08sU0FBU0osV0FBVCxHQUF3QjtBQUMzQixXQUFPLElBQUlFLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcEMsdUJBQUtKLFdBQUwsR0FDS0ssSUFETCxDQUNVLFVBQUNDLEdBQUQsRUFBUztBQUNYSCxvQkFBUUcsSUFBSUUsUUFBWjtBQUNILFNBSEwsRUFJS0QsS0FKTCxDQUlXSCxNQUpYO0FBS0gsS0FOTSxDQUFQO0FBT0g7O0FBRUQ7OztBQUdPLFNBQVNILGNBQVQsQ0FBeUJRLElBQXpCLEVBQStCO0FBQ2xDLFdBQU8sdUJBQUssMEJBQUwsRUFBaUM7QUFDcENDLGVBQU8saUJBQU9DLEtBRHNCO0FBRXBDQyxnQkFBUSxpQkFBT0MsU0FGcUI7QUFHcENKLGNBQU1BO0FBSDhCLEtBQWpDLENBQVA7QUFLSCIsImZpbGUiOiJnbG9iYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlT3ZlcnZpZXcgYXJoYXQtc2VydmljZS1nbG9iYWxcbiAqIEBhdXRob3IgWGlhb0JpbiBMaShsaXhpYW9iaW44ODc4QGdtYWlsLmNvbSkgXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXNlckluZm8gZnJvbSAnLi4vcGx1Z2luL3VzZXJJbmZvJztcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IHsgZ2V0LCB4bWxQb3N0LCBwb3N0fSBmcm9tICcuLi9mdW5jdGlvbi9zZXJ2aWNlVXRpbCc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XG5cbi8qKlxuICog55So5oi355m75b2VIFxuICovXG5leHBvcnQgZnVuY3Rpb24gbG9naW4gKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdlcHkubG9naW4oKVxuICAgICAgICAgICAgLnRoZW4oKHJlcyk9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoKT0+IHtcbiAgICAgICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG4vKipcbiAqIOiOt+WPlueUqOeahOS/oeaBryBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJJbmZvICgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LmdldFVzZXJJbmZvKClcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlcy51c2VySW5mbyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKHJlamVjdCk7XG4gICAgfSk7XG59XG5cbi8qKlxuICog5bCGanNjb2Rl6L2s5YyW5Li6c2Vzc2lvbuS/oeaBr1xuICovXG5leHBvcnQgZnVuY3Rpb24ganNjb2RlMlNlc3Npb24gKGNvZGUpIHtcbiAgICByZXR1cm4gcG9zdCgnL2FwaS91c2VyL2pzY29kZTJzZXNzaW9uJywge1xuICAgICAgICBhcHBpZDogY29uZmlnLmFwcElkLFxuICAgICAgICBzZWNyZXQ6IGNvbmZpZy5hcHBTZWNyZXQsXG4gICAgICAgIGNvZGU6IGNvZGVcbiAgICB9KTtcbn0iXX0=