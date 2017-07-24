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

            if (response.statusCode > 300) {
                wx.showToast({
                    icon: 'loading',
                    title: '系统异常，请稍后重试',
                    duration: 3000
                });
                reject(data);
                return;
            }

            if (data.code === 0) {
                resolve(data);
            } else if (typeof data.code === 'undefined') {
                resolve(data);
            } else {
                wx.showToast({
                    icon: 'loading',
                    title: data.message || '系统异常，请稍后重试',
                    duration: 3000
                });
                reject(data);
            }
        }, function (response) {
            wx.showToast({
                icon: 'loading',
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

    return doRequest(url, data, 'delete');
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
 * @return {Promise}
 */
function put(url) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return doRequest(url, data, 'put');
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VVdGlsLmpzIl0sIm5hbWVzIjpbInBvc3QiLCJkZWwiLCJnZXQiLCJwdXQiLCJkb1JlcXVlc3QiLCJ1cmwiLCJkYXRhIiwibWV0aG9kIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0IiwiaW5kZXhPZiIsImRvbWFpbiIsImhlYWRlciIsIm1vYmlsZSIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1c0NvZGUiLCJ3eCIsInNob3dUb2FzdCIsImljb24iLCJ0aXRsZSIsImR1cmF0aW9uIiwiY29kZSIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUtBOzs7OztRQStEZ0JBLEksR0FBQUEsSTtRQVlBQyxHLEdBQUFBLEc7UUFXQUMsRyxHQUFBQSxHO1FBV0FDLEcsR0FBQUEsRzs7QUEvRmhCOzs7O0FBQ0E7Ozs7OztBQUVBOzs7QUFHQSxTQUFTQyxTQUFULENBQW1CQyxHQUFuQixFQUFtRDtBQUFBLFFBQTNCQyxJQUEyQix1RUFBcEIsRUFBb0I7QUFBQSxRQUFoQkMsTUFBZ0IsdUVBQVAsS0FBTzs7QUFDL0MsV0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDLHVCQUFLQyxPQUFMLENBQWE7QUFDVE4saUJBQUtBLElBQUlPLE9BQUosQ0FBWSxNQUFaLElBQXNCLENBQUMsQ0FBdkIsR0FBMkJQLEdBQTNCLEdBQWtDLGlCQUFPUSxNQUFQLEdBQWdCUixHQUQ5QztBQUVURSxvQkFBUUEsTUFGQztBQUdUTyxvQkFBUTtBQUNKLDBCQUFVLGlCQUFPQztBQURiLGFBSEM7QUFNVFQsa0JBQU1BO0FBTkcsU0FBYixFQVFDVSxJQVJELENBU0ksVUFBQ0MsUUFBRCxFQUFhO0FBQ1QsZ0JBQUlYLE9BQU9XLFNBQVNYLElBQXBCOztBQUVBLGdCQUFJVyxTQUFTQyxVQUFULEdBQXNCLEdBQTFCLEVBQStCO0FBQzNCQyxtQkFBR0MsU0FBSCxDQUFhO0FBQ1RDLDBCQUFNLFNBREc7QUFFVEMsMkJBQU8sWUFGRTtBQUdUQyw4QkFBVTtBQUhELGlCQUFiO0FBS0FiLHVCQUFPSixJQUFQO0FBQ0E7QUFDSDs7QUFFRCxnQkFBSUEsS0FBS2tCLElBQUwsS0FBYyxDQUFsQixFQUFxQjtBQUNqQmYsd0JBQVFILElBQVI7QUFDSCxhQUZELE1BRVEsSUFBSSxPQUFPQSxLQUFLa0IsSUFBWixLQUFxQixXQUF6QixFQUFzQztBQUMxQ2Ysd0JBQVFILElBQVI7QUFDSCxhQUZPLE1BRUQ7QUFDSGEsbUJBQUdDLFNBQUgsQ0FBYTtBQUNUQywwQkFBTSxTQURHO0FBRVRDLDJCQUFPaEIsS0FBS21CLE9BQUwsSUFBZ0IsWUFGZDtBQUdURiw4QkFBVTtBQUhELGlCQUFiO0FBS0FiLHVCQUFPSixJQUFQO0FBQ0g7QUFDSixTQWxDTCxFQW1DSSxVQUFDVyxRQUFELEVBQWE7QUFDVEUsZUFBR0MsU0FBSCxDQUFhO0FBQ1RDLHNCQUFNLFNBREc7QUFFVEMsdUJBQU8sWUFGRTtBQUdUQywwQkFBVTtBQUhELGFBQWI7QUFLSCxTQXpDTDtBQTJDSCxLQTVDTSxDQUFQO0FBNkNIOztBQUVEOzs7Ozs7O0FBT08sU0FBU3ZCLElBQVQsQ0FBY0ssR0FBZCxFQUE4QjtBQUFBLFFBQVhDLElBQVcsdUVBQUosRUFBSTs7QUFDakMsV0FBT0YsVUFBVUMsR0FBVixFQUFlQyxJQUFmLEVBQXFCLE1BQXJCLENBQVA7QUFDSDs7QUFFRDs7Ozs7Ozs7QUFRTyxTQUFTTCxHQUFULENBQWFJLEdBQWIsRUFBNkI7QUFBQSxRQUFYQyxJQUFXLHVFQUFKLEVBQUk7O0FBQy9CLFdBQU9GLFVBQVVDLEdBQVYsRUFBZUMsSUFBZixFQUFxQixRQUFyQixDQUFQO0FBQ0o7O0FBRUQ7Ozs7Ozs7QUFPTyxTQUFTSixHQUFULENBQWFHLEdBQWIsRUFBNkI7QUFBQSxRQUFYQyxJQUFXLHVFQUFKLEVBQUk7O0FBQ2hDLFdBQU9GLFVBQVVDLEdBQVYsRUFBZUMsSUFBZixFQUFxQixLQUFyQixDQUFQO0FBQ0g7O0FBRUQ7Ozs7Ozs7QUFPTyxTQUFTSCxHQUFULENBQWFFLEdBQWIsRUFBNkI7QUFBQSxRQUFYQyxJQUFXLHVFQUFKLEVBQUk7O0FBQ2hDLFdBQU9GLFVBQVVDLEdBQVYsRUFBZUMsSUFBZixFQUFxQixLQUFyQixDQUFQO0FBQ0giLCJmaWxlIjoic2VydmljZVV0aWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlT3ZlcnZpZXcgc2VydmljZSB1dGlsXG4gKiBAYXV0aG9yIFhpYW9CaW4gTGkobGl4aWFvYmluODg3OEBnbWFpbC5jb20pXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnXG5cbi8qKlxuICog6LCD55Sod2VweS5yZXF1ZXN0IOWPkemAgeivt+axglxuICovXG5mdW5jdGlvbiBkb1JlcXVlc3QodXJsLCBkYXRhID0ge30sIG1ldGhvZCA9ICdnZXQnKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICAgIHVybDogdXJsLmluZGV4T2YoJ2h0dHAnKSA+IC0xID8gdXJsIDogKGNvbmZpZy5kb21haW4gKyB1cmwpLFxuICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICAgICAnbW9iaWxlJzogY29uZmlnLm1vYmlsZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRhdGE6IGRhdGFcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICAocmVzcG9uc2UpPT4ge1xuICAgICAgICAgICAgICAgIHZhciBkYXRhID0gcmVzcG9uc2UuZGF0YTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXNDb2RlID4gMzAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbG9hZGluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+ezu+e7n+W8guW4uO+8jOivt+eojeWQjumHjeivlScsXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMzAwMFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuY29kZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICAgICAgICAgIH0gIGVsc2UgaWYgKHR5cGVvZiBkYXRhLmNvZGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdsb2FkaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBkYXRhLm1lc3NhZ2UgfHwgJ+ezu+e7n+W8guW4uO+8jOivt+eojeWQjumHjeivlScsXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMzAwMFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgKHJlc3BvbnNlKT0+IHtcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnbG9hZGluZycsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn57O757uf5byC5bi477yM6K+356iN5ZCO6YeN6K+VJyxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDMwMDBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9KTtcbn1cblxuLyoqXG4gKiDlj5HpgIEgcG9zdCDor7fmsYJcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIOivt+axgiB1cmxcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIOWPkemAgeeahOaVsOaNrlxuICogQHJldHVybiB7UHJvbWlzZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBvc3QodXJsLCBkYXRhID0ge30pIHtcbiAgICByZXR1cm4gZG9SZXF1ZXN0KHVybCwgZGF0YSwgJ3Bvc3QnKTtcbn1cblxuLyoqXG4gKiDlj5HpgIEgZGVsZXRlIOivt+axglxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwg6K+35rGCIHVybFxuICogQHBhcmFtIHtPYmplY3R9IGRhdGEg5Y+R6YCB55qE5pWw5o2uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHN5bmMg5piv5ZCm5piv5ZCM5q2l6K+35rGCXG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVsKHVybCwgZGF0YSA9IHt9KSB7XG4gICAgIHJldHVybiBkb1JlcXVlc3QodXJsLCBkYXRhLCAnZGVsZXRlJyk7XG59XG5cbi8qKlxuICog5Y+R6YCBIGdldCDor7fmsYJcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIOivt+axgiB1cmxcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIOWPkemAgeeahOaVsOaNrlxuICogQHJldHVybiB7UHJvbWlzZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldCh1cmwsIGRhdGEgPSB7fSkge1xuICAgIHJldHVybiBkb1JlcXVlc3QodXJsLCBkYXRhLCAnZ2V0Jyk7XG59XG5cbi8qKlxuICog5Y+R6YCBIHVwZGF0ZSDor7fmsYJcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIOivt+axgiB1cmxcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIOWPkemAgeeahOaVsOaNrlxuICogQHJldHVybiB7UHJvbWlzZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHB1dCh1cmwsIGRhdGEgPSB7fSkge1xuICAgIHJldHVybiBkb1JlcXVlc3QodXJsLCBkYXRhLCAncHV0Jyk7XG59Il19