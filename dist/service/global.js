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
        }).catch(reject);
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
    return (0, _serviceUtil.get)('https://api.weixin.qq.com/sns/jscode2session', {
        appid: _config2.default.appId,
        secret: _config2.default.appSecret,
        js_code: code,
        grant_type: 'authorization_code'
    });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdsb2JhbC5qcyJdLCJuYW1lcyI6WyJsb2dpbiIsImdldFVzZXJJbmZvIiwianNjb2RlMlNlc3Npb24iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInRoZW4iLCJyZXMiLCJjYXRjaCIsInVzZXJJbmZvIiwiY29kZSIsImFwcGlkIiwiYXBwSWQiLCJzZWNyZXQiLCJhcHBTZWNyZXQiLCJqc19jb2RlIiwiZ3JhbnRfdHlwZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBS0E7Ozs7O1FBVWdCQSxLLEdBQUFBLEs7UUFhQUMsVyxHQUFBQSxXO1FBYUFDLGMsR0FBQUEsYzs7QUFsQ2hCOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7O0FBRUE7OztBQUdPLFNBQVNGLEtBQVQsR0FBa0I7QUFDckIsV0FBTyxJQUFJRyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDLHVCQUFLTCxLQUFMLEdBQ0tNLElBREwsQ0FDVSxVQUFDQyxHQUFELEVBQVE7QUFDVkgsb0JBQVFHLEdBQVI7QUFDSCxTQUhMLEVBSUtDLEtBSkwsQ0FJV0gsTUFKWDtBQUtILEtBTk0sQ0FBUDtBQU9IOztBQUVEOzs7QUFHTyxTQUFTSixXQUFULEdBQXdCO0FBQzNCLFdBQU8sSUFBSUUsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQyx1QkFBS0osV0FBTCxHQUNLSyxJQURMLENBQ1UsVUFBQ0MsR0FBRCxFQUFTO0FBQ1hILG9CQUFRRyxJQUFJRSxRQUFaO0FBQ0gsU0FITCxFQUlLRCxLQUpMLENBSVdILE1BSlg7QUFLSCxLQU5NLENBQVA7QUFPSDs7QUFFRDs7O0FBR08sU0FBU0gsY0FBVCxDQUF5QlEsSUFBekIsRUFBK0I7QUFDbEMsV0FBTyxzQkFBSSw4Q0FBSixFQUFvRDtBQUN2REMsZUFBTyxpQkFBT0MsS0FEeUM7QUFFdkRDLGdCQUFRLGlCQUFPQyxTQUZ3QztBQUd2REMsaUJBQVNMLElBSDhDO0FBSXZETSxvQkFBWTtBQUoyQyxLQUFwRCxDQUFQO0FBTUgiLCJmaWxlIjoiZ2xvYmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IGFyaGF0LXNlcnZpY2UtZ2xvYmFsXG4gKiBAYXV0aG9yIFhpYW9CaW4gTGkobGl4aWFvYmluODg3OEBnbWFpbC5jb20pIFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHVzZXJJbmZvIGZyb20gJy4uL3BsdWdpbi91c2VySW5mbyc7XG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCB7IGdldCwgeG1sUG9zdCB9IGZyb20gJy4uL2Z1bmN0aW9uL3NlcnZpY2VVdGlsJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcblxuLyoqXG4gKiDnlKjmiLfnmbvlvZUgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb2dpbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd2VweS5sb2dpbigpXG4gICAgICAgICAgICAudGhlbigocmVzKT0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKHJlamVjdCk7XG4gICAgfSk7XG59XG5cbi8qKlxuICog6I635Y+W55So55qE5L+h5oGvIFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlckluZm8gKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdlcHkuZ2V0VXNlckluZm8oKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzLnVzZXJJbmZvKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2gocmVqZWN0KTtcbiAgICB9KTtcbn1cblxuLyoqXG4gKiDlsIZqc2NvZGXovazljJbkuLpzZXNzaW9u5L+h5oGvXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBqc2NvZGUyU2Vzc2lvbiAoY29kZSkge1xuICAgIHJldHVybiBnZXQoJ2h0dHBzOi8vYXBpLndlaXhpbi5xcS5jb20vc25zL2pzY29kZTJzZXNzaW9uJywge1xuICAgICAgICBhcHBpZDogY29uZmlnLmFwcElkLFxuICAgICAgICBzZWNyZXQ6IGNvbmZpZy5hcHBTZWNyZXQsXG4gICAgICAgIGpzX2NvZGU6IGNvZGUsXG4gICAgICAgIGdyYW50X3R5cGU6ICdhdXRob3JpemF0aW9uX2NvZGUnXG4gICAgfSk7XG59Il19