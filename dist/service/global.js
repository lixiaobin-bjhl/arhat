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
        }).catch(reject);
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
            wx.showModal({
                title: '提示',
                cancelText: '不授权',
                confirmText: '授权',
                content: '【' + _config2.default.name + '】需要获取你的公开信息（昵称、头像）等，否则不能正常使用。',
                success: function success(res) {
                    wx.openSetting({
                        authSetting: {
                            "scope.userInfo": true
                        },
                        fail: function fail() {
                            reject();
                        },
                        success: function success(res) {
                            if (res.authSetting['scope.userInfo']) {
                                _wepy2.default.getUserInfo().then(function (res) {
                                    resolve(res.userInfo);
                                });
                            } else {
                                reject();
                            }
                        }
                    });
                }
            });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdsb2JhbC5qcyJdLCJuYW1lcyI6WyJsb2dpbiIsImdldFVzZXJJbmZvIiwianNjb2RlMlNlc3Npb24iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInRoZW4iLCJyZXMiLCJjYXRjaCIsInVzZXJJbmZvIiwid3giLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNhbmNlbFRleHQiLCJjb25maXJtVGV4dCIsImNvbnRlbnQiLCJuYW1lIiwic3VjY2VzcyIsIm9wZW5TZXR0aW5nIiwiYXV0aFNldHRpbmciLCJmYWlsIiwiY29kZSIsImFwcGlkIiwiYXBwSWQiLCJzZWNyZXQiLCJhcHBTZWNyZXQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUtBOzs7OztRQVlnQkEsSyxHQUFBQSxLO1FBZUFDLFcsR0FBQUEsVztRQTBDQUMsYyxHQUFBQSxjOztBQW5FaEI7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7QUFFQTs7Ozs7QUFLTyxTQUFTRixLQUFULEdBQWtCO0FBQ3JCLFdBQU8sSUFBSUcsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQyx1QkFBS0wsS0FBTCxHQUNLTSxJQURMLENBQ1UsVUFBQ0MsR0FBRCxFQUFRO0FBQ1ZILG9CQUFRRyxHQUFSO0FBQ0gsU0FITCxFQUlLQyxLQUpMLENBSVdILE1BSlg7QUFLSCxLQU5NLENBQVA7QUFPSDs7QUFFRDs7Ozs7QUFLTyxTQUFTSixXQUFULEdBQXdCO0FBQzNCLFdBQU8sSUFBSUUsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQyx1QkFBS0osV0FBTCxHQUNLSyxJQURMLENBQ1UsVUFBQ0MsR0FBRCxFQUFTO0FBQ1hILG9CQUFRRyxJQUFJRSxRQUFaO0FBQ0gsU0FITCxFQUlLRCxLQUpMLENBSVcsWUFBSztBQUNSRSxlQUFHQyxTQUFILENBQWE7QUFDVEMsdUJBQU8sSUFERTtBQUVUQyw0QkFBWSxLQUZIO0FBR1RDLDZCQUFhLElBSEo7QUFJVEMseUJBQVMsTUFBTSxpQkFBT0MsSUFBYixHQUFvQiwrQkFKcEI7QUFLVEMseUJBQVMsaUJBQUNWLEdBQUQsRUFBUztBQUNkRyx1QkFBR1EsV0FBSCxDQUFlO0FBQ1hDLHFDQUFhO0FBQ1QsOENBQWtCO0FBRFQseUJBREY7QUFJWEMsOEJBQU0sZ0JBQUs7QUFDUGY7QUFDSCx5QkFOVTtBQU9YWSxpQ0FBUyxpQkFBQ1YsR0FBRCxFQUFTO0FBQ2QsZ0NBQUlBLElBQUlZLFdBQUosQ0FBZ0IsZ0JBQWhCLENBQUosRUFBdUM7QUFDbkMsK0NBQUtsQixXQUFMLEdBQ0tLLElBREwsQ0FDVSxVQUFDQyxHQUFELEVBQVE7QUFDVkgsNENBQVFHLElBQUlFLFFBQVo7QUFDSCxpQ0FITDtBQUlILDZCQUxELE1BS087QUFDSEo7QUFDSDtBQUNKO0FBaEJVLHFCQUFmO0FBa0JIO0FBeEJRLGFBQWI7QUEwQkgsU0EvQkw7QUFnQ0gsS0FqQ00sQ0FBUDtBQWtDSDs7QUFFRDs7Ozs7QUFLTyxTQUFTSCxjQUFULENBQXlCbUIsSUFBekIsRUFBK0I7QUFDbEMsV0FBTyx1QkFBSywwQkFBTCxFQUFpQztBQUNwQ0MsZUFBTyxpQkFBT0MsS0FEc0I7QUFFcENDLGdCQUFRLGlCQUFPQyxTQUZxQjtBQUdwQ0osY0FBTUE7QUFIOEIsS0FBakMsQ0FBUDtBQUtIIiwiZmlsZSI6Imdsb2JhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVPdmVydmlldyBhcmhhdC1zZXJ2aWNlLWdsb2JhbFxuICogQGF1dGhvciBYaWFvQmluIExpKGxpeGlhb2Jpbjg4NzhAZ21haWwuY29tKSBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1c2VySW5mbyBmcm9tICcuLi9wbHVnaW4vdXNlckluZm8nO1xuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgeyBnZXQsIHhtbFBvc3QsIHBvc3R9IGZyb20gJy4uL2Z1bmN0aW9uL3NlcnZpY2VVdGlsJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcblxuLyoqXG4gKiDnlKjmiLfnmbvlvZUgXG4gKiBcbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb2dpbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd2VweS5sb2dpbigpXG4gICAgICAgICAgICAudGhlbigocmVzKT0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKHJlamVjdCk7XG4gICAgfSk7XG59XG5cbi8qKlxuICog6I635Y+W55So55qE5L+h5oGvIFxuICogXG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlckluZm8gKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdlcHkuZ2V0VXNlckluZm8oKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzLnVzZXJJbmZvKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKCk9PiB7XG4gICAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxUZXh0OiAn5LiN5o6I5p2DJyxcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybVRleHQ6ICfmjojmnYMnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAn44CQJyArIGNvbmZpZy5uYW1lICsgJ+OAkemcgOimgeiOt+WPluS9oOeahOWFrOW8gOS/oeaBr++8iOaYteensOOAgeWktOWDj++8ieetie+8jOWQpuWImeS4jeiDveato+W4uOS9v+eUqOOAgicsXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4Lm9wZW5TZXR0aW5nKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRoU2V0dGluZzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNjb3BlLnVzZXJJbmZvXCI6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWw6ICgpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5hdXRoU2V0dGluZ1snc2NvcGUudXNlckluZm8nXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2VweS5nZXRVc2VySW5mbygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcyk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzLnVzZXJJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG4vKipcbiAqIOWwhmpzY29kZei9rOWMluS4unNlc3Npb27kv6Hmga9cbiAqIFxuICogQHJldHVybiB7UHJvbWlzZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGpzY29kZTJTZXNzaW9uIChjb2RlKSB7XG4gICAgcmV0dXJuIHBvc3QoJy9hcGkvdXNlci9qc2NvZGUyc2Vzc2lvbicsIHtcbiAgICAgICAgYXBwaWQ6IGNvbmZpZy5hcHBJZCxcbiAgICAgICAgc2VjcmV0OiBjb25maWcuYXBwU2VjcmV0LFxuICAgICAgICBjb2RlOiBjb2RlXG4gICAgfSk7XG59Il19