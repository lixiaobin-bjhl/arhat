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
        }).catch(reject);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdsb2JhbC5qcyJdLCJuYW1lcyI6WyJsb2dpbiIsImdldFVzZXJJbmZvIiwianNjb2RlMlNlc3Npb24iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInRoZW4iLCJyZXMiLCJjYXRjaCIsInVzZXJJbmZvIiwiY29kZSIsImFwcGlkIiwiYXBwSWQiLCJzZWNyZXQiLCJhcHBTZWNyZXQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUtBOzs7OztRQVlnQkEsSyxHQUFBQSxLO1FBaUJBQyxXLEdBQUFBLFc7UUFlQUMsYyxHQUFBQSxjOztBQTFDaEI7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7QUFFQTs7Ozs7QUFLTyxTQUFTRixLQUFULEdBQWtCO0FBQ3JCLFdBQU8sSUFBSUcsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQyx1QkFBS0wsS0FBTCxHQUNLTSxJQURMLENBQ1UsVUFBQ0MsR0FBRCxFQUFRO0FBQ1ZILG9CQUFRRyxHQUFSO0FBQ0gsU0FITCxFQUlLQyxLQUpMLENBSVcsWUFBSztBQUNSSDtBQUNILFNBTkw7QUFPSCxLQVJNLENBQVA7QUFTSDs7QUFFRDs7Ozs7QUFLTyxTQUFTSixXQUFULEdBQXdCO0FBQzNCLFdBQU8sSUFBSUUsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQyx1QkFBS0osV0FBTCxHQUNLSyxJQURMLENBQ1UsVUFBQ0MsR0FBRCxFQUFTO0FBQ1hILG9CQUFRRyxJQUFJRSxRQUFaO0FBQ0gsU0FITCxFQUlLRCxLQUpMLENBSVdILE1BSlg7QUFLSCxLQU5NLENBQVA7QUFPSDs7QUFFRDs7Ozs7QUFLTyxTQUFTSCxjQUFULENBQXlCUSxJQUF6QixFQUErQjtBQUNsQyxXQUFPLHVCQUFLLDBCQUFMLEVBQWlDO0FBQ3BDQyxlQUFPLGlCQUFPQyxLQURzQjtBQUVwQ0MsZ0JBQVEsaUJBQU9DLFNBRnFCO0FBR3BDSixjQUFNQTtBQUg4QixLQUFqQyxDQUFQO0FBS0giLCJmaWxlIjoiZ2xvYmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IGFyaGF0LXNlcnZpY2UtZ2xvYmFsXG4gKiBAYXV0aG9yIFhpYW9CaW4gTGkobGl4aWFvYmluODg3OEBnbWFpbC5jb20pIFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHVzZXJJbmZvIGZyb20gJy4uL3BsdWdpbi91c2VySW5mbyc7XG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCB7IGdldCwgeG1sUG9zdCwgcG9zdH0gZnJvbSAnLi4vZnVuY3Rpb24vc2VydmljZVV0aWwnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnO1xuXG4vKipcbiAqIOeUqOaIt+eZu+W9lSBcbiAqIFxuICogQHJldHVybiB7UHJvbWlzZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxvZ2luICgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LmxvZ2luKClcbiAgICAgICAgICAgIC50aGVuKChyZXMpPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKCk9PiB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuLyoqXG4gKiDojrflj5bnlKjnmoTkv6Hmga8gXG4gKiBcbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VySW5mbyAoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd2VweS5nZXRVc2VySW5mbygpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMudXNlckluZm8pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChyZWplY3QpO1xuICAgIH0pO1xufVxuXG4vKipcbiAqIOWwhmpzY29kZei9rOWMluS4unNlc3Npb27kv6Hmga9cbiAqIFxuICogQHJldHVybiB7UHJvbWlzZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGpzY29kZTJTZXNzaW9uIChjb2RlKSB7XG4gICAgcmV0dXJuIHBvc3QoJy9hcGkvdXNlci9qc2NvZGUyc2Vzc2lvbicsIHtcbiAgICAgICAgYXBwaWQ6IGNvbmZpZy5hcHBJZCxcbiAgICAgICAgc2VjcmV0OiBjb25maWcuYXBwU2VjcmV0LFxuICAgICAgICBjb2RlOiBjb2RlXG4gICAgfSk7XG59Il19