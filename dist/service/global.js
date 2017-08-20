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
 * 
 * @return {Promise}
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
 * 
 * @return {Promise}
 */
function getUserInfo() {
    return new Promise(function (resolve, reject) {
        _wepy2.default.getUserInfo().then(function (res) {
            resolve(res.userInfo);
        }).catch(function () {
            reject();
        });
    });
}

/**
 * 将jscode转化为session信息
 * 
 * @return {Promise}
 */
function jscode2Session(code) {
    return (0, _serviceUtil.post)('/api/user/jscode2session', {
        appid: _config2.default.appId,
        secret: _config2.default.appSecret,
        code: code
    });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdsb2JhbC5qcyJdLCJuYW1lcyI6WyJsb2dpbiIsImdldFVzZXJJbmZvIiwianNjb2RlMlNlc3Npb24iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInRoZW4iLCJyZXMiLCJjYXRjaCIsInVzZXJJbmZvIiwiY29kZSIsImFwcGlkIiwiYXBwSWQiLCJzZWNyZXQiLCJhcHBTZWNyZXQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUtBOzs7OztRQVlnQkEsSyxHQUFBQSxLO1FBaUJBQyxXLEdBQUFBLFc7UUFpQkFDLGMsR0FBQUEsYzs7QUE1Q2hCOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7O0FBRUE7Ozs7O0FBS08sU0FBU0YsS0FBVCxHQUFrQjtBQUNyQixXQUFPLElBQUlHLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcEMsdUJBQUtMLEtBQUwsR0FDS00sSUFETCxDQUNVLFVBQUNDLEdBQUQsRUFBUTtBQUNWSCxvQkFBUUcsR0FBUjtBQUNILFNBSEwsRUFJS0MsS0FKTCxDQUlXLFlBQUs7QUFDUkg7QUFDSCxTQU5MO0FBT0gsS0FSTSxDQUFQO0FBU0g7O0FBRUQ7Ozs7O0FBS08sU0FBU0osV0FBVCxHQUF3QjtBQUMzQixXQUFPLElBQUlFLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcEMsdUJBQUtKLFdBQUwsR0FDS0ssSUFETCxDQUNVLFVBQUNDLEdBQUQsRUFBUztBQUNYSCxvQkFBUUcsSUFBSUUsUUFBWjtBQUNILFNBSEwsRUFJS0QsS0FKTCxDQUlXLFlBQUs7QUFDUkg7QUFDSCxTQU5MO0FBT0gsS0FSTSxDQUFQO0FBU0g7O0FBRUQ7Ozs7O0FBS08sU0FBU0gsY0FBVCxDQUF5QlEsSUFBekIsRUFBK0I7QUFDbEMsV0FBTyx1QkFBSywwQkFBTCxFQUFpQztBQUNwQ0MsZUFBTyxpQkFBT0MsS0FEc0I7QUFFcENDLGdCQUFRLGlCQUFPQyxTQUZxQjtBQUdwQ0osY0FBTUE7QUFIOEIsS0FBakMsQ0FBUDtBQUtIIiwiZmlsZSI6Imdsb2JhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVPdmVydmlldyBhcmhhdC1zZXJ2aWNlLWdsb2JhbFxuICogQGF1dGhvciBYaWFvQmluIExpKGxpeGlhb2Jpbjg4NzhAZ21haWwuY29tKSBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1c2VySW5mbyBmcm9tICcuLi9wbHVnaW4vdXNlckluZm8nO1xuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgeyBnZXQsIHhtbFBvc3QsIHBvc3R9IGZyb20gJy4uL2Z1bmN0aW9uL3NlcnZpY2VVdGlsJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcblxuLyoqXG4gKiDnlKjmiLfnmbvlvZUgXG4gKiBcbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb2dpbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd2VweS5sb2dpbigpXG4gICAgICAgICAgICAudGhlbigocmVzKT0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKCgpPT4ge1xuICAgICAgICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbi8qKlxuICog6I635Y+W55So55qE5L+h5oGvIFxuICogXG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlckluZm8gKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdlcHkuZ2V0VXNlckluZm8oKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzLnVzZXJJbmZvKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKCk9PiB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuLyoqXG4gKiDlsIZqc2NvZGXovazljJbkuLpzZXNzaW9u5L+h5oGvXG4gKiBcbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBqc2NvZGUyU2Vzc2lvbiAoY29kZSkge1xuICAgIHJldHVybiBwb3N0KCcvYXBpL3VzZXIvanNjb2RlMnNlc3Npb24nLCB7XG4gICAgICAgIGFwcGlkOiBjb25maWcuYXBwSWQsXG4gICAgICAgIHNlY3JldDogY29uZmlnLmFwcFNlY3JldCxcbiAgICAgICAgY29kZTogY29kZVxuICAgIH0pO1xufSJdfQ==