/**
 * @fileOverview service util
 * @author XiaoBin Li(lixiaobin8878@gmail.com)
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.post = post;
exports.del = del;
exports.get = get;
exports.put = put;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _config = require('./../config.js');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 调用wepy.request 发送请求
 */
function doRequest(url) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'get';

    return new Promise(function (resolve, reject) {
        _wepy2.default.request({
            url: url.indexOf('http') > -1 ? url : _config2.default.domain + url,
            method: method,
            header: {
                'mobile': _config2.default.mobile
            },
            data: data
        }).then(function (response) {
            var data = response.data;

            if (data.code === 0) {
                resolve(data);
            } else if (typeof data.code === 'undefined') {
                resolve(data);
            } else {
                wx.showToast({
                    title: data.message || '系统异常，请稍后重试',
                    duration: 3000
                });
                reject(data);
            }
        }, function (response) {
            wx.showToast({
                title: '系统异常，请稍后重试',
                duration: 3000
            });
        });
    });
}

/**
 * 发送 post 请求
 *
 * @param {string} url 请求 url
 * @param {Object} data 发送的数据
 * @return {Promise}
 */
function post(url) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return doRequest(url, data, 'post');
}

/**
 * 发送 delete 请求
 *
 * @param {string} url 请求 url
 * @param {Object} data 发送的数据
 * @param {boolean} sync 是否是同步请求
 * @return {Promise}
 */
function del(url) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return axios.delete(url, {
        params: data
    });
}

/**
 * 发送 get 请求
 *
 * @param {string} url 请求 url
 * @param {Object} data 发送的数据
 * @return {Promise}
 */
function get(url) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return doRequest(url, data, 'get');
}

/**
 * 发送 update 请求
 *
 * @param {string} url 请求 url
 * @param {Object} data 发送的数据
 * @param {boolean} sync 是否是同步请求
 * @return {Promise}
 */
function put(url) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return axios.put(url, data);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VVdGlsLmpzIl0sIm5hbWVzIjpbInBvc3QiLCJkZWwiLCJnZXQiLCJwdXQiLCJkb1JlcXVlc3QiLCJ1cmwiLCJkYXRhIiwibWV0aG9kIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0IiwiaW5kZXhPZiIsImRvbWFpbiIsImhlYWRlciIsIm1vYmlsZSIsInRoZW4iLCJyZXNwb25zZSIsImNvZGUiLCJ3eCIsInNob3dUb2FzdCIsInRpdGxlIiwibWVzc2FnZSIsImR1cmF0aW9uIiwiYXhpb3MiLCJkZWxldGUiLCJwYXJhbXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUtBOzs7OztRQW1EZ0JBLEksR0FBQUEsSTtRQVlBQyxHLEdBQUFBLEc7UUFhQUMsRyxHQUFBQSxHO1FBWUFDLEcsR0FBQUEsRzs7QUF0RmhCOzs7O0FBQ0E7Ozs7OztBQUVBOzs7QUFHQSxTQUFTQyxTQUFULENBQW1CQyxHQUFuQixFQUFtRDtBQUFBLFFBQTNCQyxJQUEyQix1RUFBcEIsRUFBb0I7QUFBQSxRQUFoQkMsTUFBZ0IsdUVBQVAsS0FBTzs7QUFDL0MsV0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDLHVCQUFLQyxPQUFMLENBQWE7QUFDVE4saUJBQUtBLElBQUlPLE9BQUosQ0FBWSxNQUFaLElBQXNCLENBQUMsQ0FBdkIsR0FBMkJQLEdBQTNCLEdBQWtDLGlCQUFPUSxNQUFQLEdBQWdCUixHQUQ5QztBQUVURSxvQkFBUUEsTUFGQztBQUdUTyxvQkFBUTtBQUNKLDBCQUFVLGlCQUFPQztBQURiLGFBSEM7QUFNVFQsa0JBQU1BO0FBTkcsU0FBYixFQVFDVSxJQVJELENBU0ksVUFBQ0MsUUFBRCxFQUFhO0FBQ1QsZ0JBQUlYLE9BQU9XLFNBQVNYLElBQXBCOztBQUVBLGdCQUFJQSxLQUFLWSxJQUFMLEtBQWMsQ0FBbEIsRUFBcUI7QUFDakJULHdCQUFRSCxJQUFSO0FBQ0gsYUFGRCxNQUVRLElBQUksT0FBT0EsS0FBS1ksSUFBWixLQUFxQixXQUF6QixFQUFzQztBQUMxQ1Qsd0JBQVFILElBQVI7QUFDSCxhQUZPLE1BRUQ7QUFDSGEsbUJBQUdDLFNBQUgsQ0FBYTtBQUNUQywyQkFBT2YsS0FBS2dCLE9BQUwsSUFBZ0IsWUFEZDtBQUVUQyw4QkFBVTtBQUZELGlCQUFiO0FBSUFiLHVCQUFPSixJQUFQO0FBQ0g7QUFDSixTQXZCTCxFQXdCSSxVQUFDVyxRQUFELEVBQWE7QUFDVEUsZUFBR0MsU0FBSCxDQUFhO0FBQ1RDLHVCQUFPLFlBREU7QUFFVEUsMEJBQVU7QUFGRCxhQUFiO0FBSUgsU0E3Qkw7QUErQkgsS0FoQ00sQ0FBUDtBQWlDSDs7QUFFRDs7Ozs7OztBQU9PLFNBQVN2QixJQUFULENBQWNLLEdBQWQsRUFBOEI7QUFBQSxRQUFYQyxJQUFXLHVFQUFKLEVBQUk7O0FBQ2pDLFdBQU9GLFVBQVVDLEdBQVYsRUFBZUMsSUFBZixFQUFxQixNQUFyQixDQUFQO0FBQ0g7O0FBRUQ7Ozs7Ozs7O0FBUU8sU0FBU0wsR0FBVCxDQUFhSSxHQUFiLEVBQTZCO0FBQUEsUUFBWEMsSUFBVyx1RUFBSixFQUFJOztBQUNoQyxXQUFPa0IsTUFBTUMsTUFBTixDQUFhcEIsR0FBYixFQUFrQjtBQUNyQnFCLGdCQUFRcEI7QUFEYSxLQUFsQixDQUFQO0FBR0g7O0FBRUQ7Ozs7Ozs7QUFPTyxTQUFTSixHQUFULENBQWFHLEdBQWIsRUFBNkI7QUFBQSxRQUFYQyxJQUFXLHVFQUFKLEVBQUk7O0FBQ2hDLFdBQU9GLFVBQVVDLEdBQVYsRUFBZUMsSUFBZixFQUFxQixLQUFyQixDQUFQO0FBQ0g7O0FBRUQ7Ozs7Ozs7O0FBUU8sU0FBU0gsR0FBVCxDQUFhRSxHQUFiLEVBQTZCO0FBQUEsUUFBWEMsSUFBVyx1RUFBSixFQUFJOztBQUNoQyxXQUFPa0IsTUFBTXJCLEdBQU4sQ0FBVUUsR0FBVixFQUFlQyxJQUFmLENBQVA7QUFDSCIsImZpbGUiOiJzZXJ2aWNlVXRpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVPdmVydmlldyBzZXJ2aWNlIHV0aWxcbiAqIEBhdXRob3IgWGlhb0JpbiBMaShsaXhpYW9iaW44ODc4QGdtYWlsLmNvbSlcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZydcblxuLyoqXG4gKiDosIPnlKh3ZXB5LnJlcXVlc3Qg5Y+R6YCB6K+35rGCXG4gKi9cbmZ1bmN0aW9uIGRvUmVxdWVzdCh1cmwsIGRhdGEgPSB7fSwgbWV0aG9kID0gJ2dldCcpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgICAgdXJsOiB1cmwuaW5kZXhPZignaHR0cCcpID4gLTEgPyB1cmwgOiAoY29uZmlnLmRvbWFpbiArIHVybCksXG4gICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgICAgICdtb2JpbGUnOiBjb25maWcubW9iaWxlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGF0YTogZGF0YVxuICAgICAgICB9KVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAgIChyZXNwb25zZSk9PiB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmNvZGUgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgICAgICAgICB9ICBlbHNlIGlmICh0eXBlb2YgZGF0YS5jb2RlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogZGF0YS5tZXNzYWdlIHx8ICfns7vnu5/lvILluLjvvIzor7fnqI3lkI7ph43or5UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDMwMDBcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIChyZXNwb25zZSk9PiB7XG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfns7vnu5/lvILluLjvvIzor7fnqI3lkI7ph43or5UnLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMzAwMFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH0pO1xufVxuXG4vKipcbiAqIOWPkemAgSBwb3N0IOivt+axglxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwg6K+35rGCIHVybFxuICogQHBhcmFtIHtPYmplY3R9IGRhdGEg5Y+R6YCB55qE5pWw5o2uXG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gcG9zdCh1cmwsIGRhdGEgPSB7fSkge1xuICAgIHJldHVybiBkb1JlcXVlc3QodXJsLCBkYXRhLCAncG9zdCcpO1xufVxuXG4vKipcbiAqIOWPkemAgSBkZWxldGUg6K+35rGCXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCDor7fmsYIgdXJsXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YSDlj5HpgIHnmoTmlbDmja5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gc3luYyDmmK/lkKbmmK/lkIzmraXor7fmsYJcbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWwodXJsLCBkYXRhID0ge30pIHtcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKHVybCwge1xuICAgICAgICBwYXJhbXM6IGRhdGFcbiAgICB9KTtcbn1cblxuLyoqXG4gKiDlj5HpgIEgZ2V0IOivt+axglxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwg6K+35rGCIHVybFxuICogQHBhcmFtIHtPYmplY3R9IGRhdGEg5Y+R6YCB55qE5pWw5o2uXG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0KHVybCwgZGF0YSA9IHt9KSB7XG4gICAgcmV0dXJuIGRvUmVxdWVzdCh1cmwsIGRhdGEsICdnZXQnKTtcbn1cblxuLyoqXG4gKiDlj5HpgIEgdXBkYXRlIOivt+axglxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwg6K+35rGCIHVybFxuICogQHBhcmFtIHtPYmplY3R9IGRhdGEg5Y+R6YCB55qE5pWw5o2uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHN5bmMg5piv5ZCm5piv5ZCM5q2l6K+35rGCXG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gcHV0KHVybCwgZGF0YSA9IHt9KSB7XG4gICAgcmV0dXJuIGF4aW9zLnB1dCh1cmwsIGRhdGEpO1xufSJdfQ==