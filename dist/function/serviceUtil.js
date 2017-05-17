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
function doRequest(url, data, method) {
    return new Promise(function (resolve, reject) {
        _wepy2.default.request(_config2.default.domain + url, {
            method: method,
            params: data
        }).then(function (response) {
            var data = response.data;

            if (data.code === 0) {
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
    var sync = arguments[2];

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
    var sync = arguments[2];

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
    var sync = arguments[2];

    return axios.put(url, data);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VVdGlsLmpzIl0sIm5hbWVzIjpbInBvc3QiLCJkZWwiLCJnZXQiLCJwdXQiLCJkb1JlcXVlc3QiLCJ1cmwiLCJkYXRhIiwibWV0aG9kIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0IiwiZG9tYWluIiwicGFyYW1zIiwidGhlbiIsInJlc3BvbnNlIiwiY29kZSIsInd4Iiwic2hvd1RvYXN0IiwidGl0bGUiLCJtZXNzYWdlIiwiZHVyYXRpb24iLCJzeW5jIiwiYXhpb3MiLCJkZWxldGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUtBOzs7OztRQTZDZ0JBLEksR0FBQUEsSTtRQVlBQyxHLEdBQUFBLEc7UUFhQUMsRyxHQUFBQSxHO1FBWUFDLEcsR0FBQUEsRzs7QUFoRmhCOzs7O0FBQ0E7Ozs7OztBQUVBOzs7QUFHQSxTQUFTQyxTQUFULENBQW1CQyxHQUFuQixFQUF1QkMsSUFBdkIsRUFBNkJDLE1BQTdCLEVBQXFDO0FBQ2pDLFdBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQyx1QkFBS0MsT0FBTCxDQUFhLGlCQUFPQyxNQUFQLEdBQWdCUCxHQUE3QixFQUFrQztBQUM5QkUsMEJBRDhCO0FBRTlCTSxvQkFBUVA7QUFGc0IsU0FBbEMsRUFJQ1EsSUFKRCxDQUtJLFVBQUNDLFFBQUQsRUFBYTtBQUNULGdCQUFJVCxPQUFPUyxTQUFTVCxJQUFwQjs7QUFFQSxnQkFBSUEsS0FBS1UsSUFBTCxLQUFjLENBQWxCLEVBQXFCO0FBQ2pCUCx3QkFBUUgsSUFBUjtBQUNILGFBRkQsTUFFTztBQUNIVyxtQkFBR0MsU0FBSCxDQUFhO0FBQ1RDLDJCQUFPYixLQUFLYyxPQUFMLElBQWdCLFlBRGQ7QUFFVEMsOEJBQVU7QUFGRCxpQkFBYjtBQUlBWCx1QkFBT0osSUFBUDtBQUNIO0FBQ0osU0FqQkwsRUFrQkksVUFBQ1MsUUFBRCxFQUFhO0FBQ1RFLGVBQUdDLFNBQUgsQ0FBYTtBQUNUQyx1QkFBTyxZQURFO0FBRVRFLDBCQUFVO0FBRkQsYUFBYjtBQUlILFNBdkJMO0FBeUJILEtBMUJNLENBQVA7QUEyQkg7O0FBRUQ7Ozs7Ozs7QUFPTyxTQUFTckIsSUFBVCxDQUFjSyxHQUFkLEVBQW9DO0FBQUEsUUFBakJDLElBQWlCLHVFQUFWLEVBQVU7QUFBQSxRQUFOZ0IsSUFBTTs7QUFDdkMsV0FBT2xCLFVBQVVDLEdBQVYsRUFBZUMsSUFBZixFQUFxQixNQUFyQixDQUFQO0FBQ0g7O0FBRUQ7Ozs7Ozs7O0FBUU8sU0FBU0wsR0FBVCxDQUFhSSxHQUFiLEVBQW1DO0FBQUEsUUFBakJDLElBQWlCLHVFQUFWLEVBQVU7QUFBQSxRQUFOZ0IsSUFBTTs7QUFDdEMsV0FBT0MsTUFBTUMsTUFBTixDQUFhbkIsR0FBYixFQUFrQjtBQUNyQlEsZ0JBQVFQO0FBRGEsS0FBbEIsQ0FBUDtBQUdIOztBQUVEOzs7Ozs7O0FBT08sU0FBU0osR0FBVCxDQUFhRyxHQUFiLEVBQTZCO0FBQUEsUUFBWEMsSUFBVyx1RUFBSixFQUFJOztBQUNoQyxXQUFPRixVQUFVQyxHQUFWLEVBQWVDLElBQWYsRUFBcUIsS0FBckIsQ0FBUDtBQUNIOztBQUVEOzs7Ozs7OztBQVFPLFNBQVNILEdBQVQsQ0FBYUUsR0FBYixFQUFtQztBQUFBLFFBQWpCQyxJQUFpQix1RUFBVixFQUFVO0FBQUEsUUFBTmdCLElBQU07O0FBQ3RDLFdBQU9DLE1BQU1wQixHQUFOLENBQVVFLEdBQVYsRUFBZUMsSUFBZixDQUFQO0FBQ0giLCJmaWxlIjoic2VydmljZVV0aWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlT3ZlcnZpZXcgc2VydmljZSB1dGlsXG4gKiBAYXV0aG9yIFhpYW9CaW4gTGkobGl4aWFvYmluODg3OEBnbWFpbC5jb20pXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnXG5cbi8qKlxuICog6LCD55Sod2VweS5yZXF1ZXN0IOWPkemAgeivt+axglxuICovXG5mdW5jdGlvbiBkb1JlcXVlc3QodXJsLGRhdGEsIG1ldGhvZCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdlcHkucmVxdWVzdChjb25maWcuZG9tYWluICsgdXJsLCB7XG4gICAgICAgICAgICBtZXRob2QsXG4gICAgICAgICAgICBwYXJhbXM6IGRhdGFcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICAocmVzcG9uc2UpPT4ge1xuICAgICAgICAgICAgICAgIHZhciBkYXRhID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5jb2RlID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBkYXRhLm1lc3NhZ2UgfHwgJ+ezu+e7n+W8guW4uO+8jOivt+eojeWQjumHjeivlScsXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMzAwMFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgKHJlc3BvbnNlKT0+IHtcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+ezu+e7n+W8guW4uO+8jOivt+eojeWQjumHjeivlScsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAwXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfSk7XG59XG5cbi8qKlxuICog5Y+R6YCBIHBvc3Qg6K+35rGCXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCDor7fmsYIgdXJsXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YSDlj5HpgIHnmoTmlbDmja5cbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwb3N0KHVybCwgZGF0YSA9IHt9LCBzeW5jKSB7XG4gICAgcmV0dXJuIGRvUmVxdWVzdCh1cmwsIGRhdGEsICdwb3N0Jyk7XG59XG5cbi8qKlxuICog5Y+R6YCBIGRlbGV0ZSDor7fmsYJcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIOivt+axgiB1cmxcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIOWPkemAgeeahOaVsOaNrlxuICogQHBhcmFtIHtib29sZWFufSBzeW5jIOaYr+WQpuaYr+WQjOatpeivt+axglxuICogQHJldHVybiB7UHJvbWlzZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlbCh1cmwsIGRhdGEgPSB7fSwgc3luYykge1xuICAgIHJldHVybiBheGlvcy5kZWxldGUodXJsLCB7XG4gICAgICAgIHBhcmFtczogZGF0YVxuICAgIH0pO1xufVxuXG4vKipcbiAqIOWPkemAgSBnZXQg6K+35rGCXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCDor7fmsYIgdXJsXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YSDlj5HpgIHnmoTmlbDmja5cbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXQodXJsLCBkYXRhID0ge30pIHtcbiAgICByZXR1cm4gZG9SZXF1ZXN0KHVybCwgZGF0YSwgJ2dldCcpO1xufVxuXG4vKipcbiAqIOWPkemAgSB1cGRhdGUg6K+35rGCXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCDor7fmsYIgdXJsXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YSDlj5HpgIHnmoTmlbDmja5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gc3luYyDmmK/lkKbmmK/lkIzmraXor7fmsYJcbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwdXQodXJsLCBkYXRhID0ge30sIHN5bmMpIHtcbiAgICByZXR1cm4gYXhpb3MucHV0KHVybCwgZGF0YSk7XG59Il19