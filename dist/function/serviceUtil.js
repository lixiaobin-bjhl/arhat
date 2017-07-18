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
 * @param {boolean} sync 是否是同步请求
 * @return {Promise}
 */
function put(url) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return axios.put(url, data);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VVdGlsLmpzIl0sIm5hbWVzIjpbInBvc3QiLCJkZWwiLCJnZXQiLCJwdXQiLCJkb1JlcXVlc3QiLCJ1cmwiLCJkYXRhIiwibWV0aG9kIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0IiwiaW5kZXhPZiIsImRvbWFpbiIsImhlYWRlciIsIm1vYmlsZSIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1c0NvZGUiLCJ3eCIsInNob3dUb2FzdCIsImljb24iLCJ0aXRsZSIsImR1cmF0aW9uIiwiY29kZSIsIm1lc3NhZ2UiLCJheGlvcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBS0E7Ozs7O1FBK0RnQkEsSSxHQUFBQSxJO1FBWUFDLEcsR0FBQUEsRztRQVdBQyxHLEdBQUFBLEc7UUFZQUMsRyxHQUFBQSxHOztBQWhHaEI7Ozs7QUFDQTs7Ozs7O0FBRUE7OztBQUdBLFNBQVNDLFNBQVQsQ0FBbUJDLEdBQW5CLEVBQW1EO0FBQUEsUUFBM0JDLElBQTJCLHVFQUFwQixFQUFvQjtBQUFBLFFBQWhCQyxNQUFnQix1RUFBUCxLQUFPOztBQUMvQyxXQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcEMsdUJBQUtDLE9BQUwsQ0FBYTtBQUNUTixpQkFBS0EsSUFBSU8sT0FBSixDQUFZLE1BQVosSUFBc0IsQ0FBQyxDQUF2QixHQUEyQlAsR0FBM0IsR0FBa0MsaUJBQU9RLE1BQVAsR0FBZ0JSLEdBRDlDO0FBRVRFLG9CQUFRQSxNQUZDO0FBR1RPLG9CQUFRO0FBQ0osMEJBQVUsaUJBQU9DO0FBRGIsYUFIQztBQU1UVCxrQkFBTUE7QUFORyxTQUFiLEVBUUNVLElBUkQsQ0FTSSxVQUFDQyxRQUFELEVBQWE7QUFDVCxnQkFBSVgsT0FBT1csU0FBU1gsSUFBcEI7O0FBRUEsZ0JBQUlXLFNBQVNDLFVBQVQsR0FBc0IsR0FBMUIsRUFBK0I7QUFDM0JDLG1CQUFHQyxTQUFILENBQWE7QUFDVEMsMEJBQU0sU0FERztBQUVUQywyQkFBTyxZQUZFO0FBR1RDLDhCQUFVO0FBSEQsaUJBQWI7QUFLQWIsdUJBQU9KLElBQVA7QUFDQTtBQUNIOztBQUVELGdCQUFJQSxLQUFLa0IsSUFBTCxLQUFjLENBQWxCLEVBQXFCO0FBQ2pCZix3QkFBUUgsSUFBUjtBQUNILGFBRkQsTUFFUSxJQUFJLE9BQU9BLEtBQUtrQixJQUFaLEtBQXFCLFdBQXpCLEVBQXNDO0FBQzFDZix3QkFBUUgsSUFBUjtBQUNILGFBRk8sTUFFRDtBQUNIYSxtQkFBR0MsU0FBSCxDQUFhO0FBQ1RDLDBCQUFNLFNBREc7QUFFVEMsMkJBQU9oQixLQUFLbUIsT0FBTCxJQUFnQixZQUZkO0FBR1RGLDhCQUFVO0FBSEQsaUJBQWI7QUFLQWIsdUJBQU9KLElBQVA7QUFDSDtBQUNKLFNBbENMLEVBbUNJLFVBQUNXLFFBQUQsRUFBYTtBQUNURSxlQUFHQyxTQUFILENBQWE7QUFDVEMsc0JBQU0sU0FERztBQUVUQyx1QkFBTyxZQUZFO0FBR1RDLDBCQUFVO0FBSEQsYUFBYjtBQUtILFNBekNMO0FBMkNILEtBNUNNLENBQVA7QUE2Q0g7O0FBRUQ7Ozs7Ozs7QUFPTyxTQUFTdkIsSUFBVCxDQUFjSyxHQUFkLEVBQThCO0FBQUEsUUFBWEMsSUFBVyx1RUFBSixFQUFJOztBQUNqQyxXQUFPRixVQUFVQyxHQUFWLEVBQWVDLElBQWYsRUFBcUIsTUFBckIsQ0FBUDtBQUNIOztBQUVEOzs7Ozs7OztBQVFPLFNBQVNMLEdBQVQsQ0FBYUksR0FBYixFQUE2QjtBQUFBLFFBQVhDLElBQVcsdUVBQUosRUFBSTs7QUFDL0IsV0FBT0YsVUFBVUMsR0FBVixFQUFlQyxJQUFmLEVBQXFCLFFBQXJCLENBQVA7QUFDSjs7QUFFRDs7Ozs7OztBQU9PLFNBQVNKLEdBQVQsQ0FBYUcsR0FBYixFQUE2QjtBQUFBLFFBQVhDLElBQVcsdUVBQUosRUFBSTs7QUFDaEMsV0FBT0YsVUFBVUMsR0FBVixFQUFlQyxJQUFmLEVBQXFCLEtBQXJCLENBQVA7QUFDSDs7QUFFRDs7Ozs7Ozs7QUFRTyxTQUFTSCxHQUFULENBQWFFLEdBQWIsRUFBNkI7QUFBQSxRQUFYQyxJQUFXLHVFQUFKLEVBQUk7O0FBQ2hDLFdBQU9vQixNQUFNdkIsR0FBTixDQUFVRSxHQUFWLEVBQWVDLElBQWYsQ0FBUDtBQUNIIiwiZmlsZSI6InNlcnZpY2VVdGlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IHNlcnZpY2UgdXRpbFxuICogQGF1dGhvciBYaWFvQmluIExpKGxpeGlhb2Jpbjg4NzhAZ21haWwuY29tKVxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJ1xuXG4vKipcbiAqIOiwg+eUqHdlcHkucmVxdWVzdCDlj5HpgIHor7fmsYJcbiAqL1xuZnVuY3Rpb24gZG9SZXF1ZXN0KHVybCwgZGF0YSA9IHt9LCBtZXRob2QgPSAnZ2V0Jykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgICB1cmw6IHVybC5pbmRleE9mKCdodHRwJykgPiAtMSA/IHVybCA6IChjb25maWcuZG9tYWluICsgdXJsKSxcbiAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICAgICAgJ21vYmlsZSc6IGNvbmZpZy5tb2JpbGVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgICAgKHJlc3BvbnNlKT0+IHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHJlc3BvbnNlLmRhdGE7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzQ29kZSA+IDMwMCkge1xuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2xvYWRpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfns7vnu5/lvILluLjvvIzor7fnqI3lkI7ph43or5UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDMwMDBcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmNvZGUgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgICAgICAgICB9ICBlbHNlIGlmICh0eXBlb2YgZGF0YS5jb2RlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbG9hZGluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogZGF0YS5tZXNzYWdlIHx8ICfns7vnu5/lvILluLjvvIzor7fnqI3lkI7ph43or5UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDMwMDBcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIChyZXNwb25zZSk9PiB7XG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2xvYWRpbmcnLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+ezu+e7n+W8guW4uO+8jOivt+eojeWQjumHjeivlScsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAwXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfSk7XG59XG5cbi8qKlxuICog5Y+R6YCBIHBvc3Qg6K+35rGCXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCDor7fmsYIgdXJsXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YSDlj5HpgIHnmoTmlbDmja5cbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwb3N0KHVybCwgZGF0YSA9IHt9KSB7XG4gICAgcmV0dXJuIGRvUmVxdWVzdCh1cmwsIGRhdGEsICdwb3N0Jyk7XG59XG5cbi8qKlxuICog5Y+R6YCBIGRlbGV0ZSDor7fmsYJcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIOivt+axgiB1cmxcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIOWPkemAgeeahOaVsOaNrlxuICogQHBhcmFtIHtib29sZWFufSBzeW5jIOaYr+WQpuaYr+WQjOatpeivt+axglxuICogQHJldHVybiB7UHJvbWlzZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlbCh1cmwsIGRhdGEgPSB7fSkge1xuICAgICByZXR1cm4gZG9SZXF1ZXN0KHVybCwgZGF0YSwgJ2RlbGV0ZScpO1xufVxuXG4vKipcbiAqIOWPkemAgSBnZXQg6K+35rGCXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCDor7fmsYIgdXJsXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YSDlj5HpgIHnmoTmlbDmja5cbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXQodXJsLCBkYXRhID0ge30pIHtcbiAgICByZXR1cm4gZG9SZXF1ZXN0KHVybCwgZGF0YSwgJ2dldCcpO1xufVxuXG4vKipcbiAqIOWPkemAgSB1cGRhdGUg6K+35rGCXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCDor7fmsYIgdXJsXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YSDlj5HpgIHnmoTmlbDmja5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gc3luYyDmmK/lkKbmmK/lkIzmraXor7fmsYJcbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwdXQodXJsLCBkYXRhID0ge30pIHtcbiAgICByZXR1cm4gYXhpb3MucHV0KHVybCwgZGF0YSk7XG59Il19