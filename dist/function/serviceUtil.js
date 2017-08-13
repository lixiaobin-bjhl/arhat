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

var _toast = require('./toast.js');

var _toast2 = _interopRequireDefault(_toast);

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
                (0, _toast2.default)('系统异常，请稍后重试');
                reject(data);
                return;
            }

            if (data.code === 0) {
                resolve(data);
            } else if (typeof data.code === 'undefined') {
                resolve(data);
            } else {
                (0, _toast2.default)('系统异常，请稍后重试');
                reject(data);
            }
        }, function (response) {
            (0, _toast2.default)('系统异常，请稍后重试');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VVdGlsLmpzIl0sIm5hbWVzIjpbInBvc3QiLCJkZWwiLCJnZXQiLCJwdXQiLCJkb1JlcXVlc3QiLCJ1cmwiLCJkYXRhIiwibWV0aG9kIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0IiwiaW5kZXhPZiIsImRvbWFpbiIsImhlYWRlciIsIm1vYmlsZSIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1c0NvZGUiLCJjb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFLQTs7Ozs7UUFvRGdCQSxJLEdBQUFBLEk7UUFZQUMsRyxHQUFBQSxHO1FBV0FDLEcsR0FBQUEsRztRQVdBQyxHLEdBQUFBLEc7O0FBcEZoQjs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBOzs7QUFHQSxTQUFTQyxTQUFULENBQW1CQyxHQUFuQixFQUFtRDtBQUFBLFFBQTNCQyxJQUEyQix1RUFBcEIsRUFBb0I7QUFBQSxRQUFoQkMsTUFBZ0IsdUVBQVAsS0FBTzs7QUFDL0MsV0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDLHVCQUFLQyxPQUFMLENBQWE7QUFDVE4saUJBQUtBLElBQUlPLE9BQUosQ0FBWSxNQUFaLElBQXNCLENBQUMsQ0FBdkIsR0FBMkJQLEdBQTNCLEdBQWtDLGlCQUFPUSxNQUFQLEdBQWdCUixHQUQ5QztBQUVURSxvQkFBUUEsTUFGQztBQUdUTyxvQkFBUTtBQUNKLDBCQUFVLGlCQUFPQztBQURiLGFBSEM7QUFNVFQsa0JBQU1BO0FBTkcsU0FBYixFQVFDVSxJQVJELENBU0ksVUFBQ0MsUUFBRCxFQUFhO0FBQ1QsZ0JBQUlYLE9BQU9XLFNBQVNYLElBQXBCOztBQUVBLGdCQUFJVyxTQUFTQyxVQUFULEdBQXNCLEdBQTFCLEVBQStCO0FBQzNCLHFDQUFNLFlBQU47QUFDQVIsdUJBQU9KLElBQVA7QUFDQTtBQUNIOztBQUVELGdCQUFJQSxLQUFLYSxJQUFMLEtBQWMsQ0FBbEIsRUFBcUI7QUFDakJWLHdCQUFRSCxJQUFSO0FBQ0gsYUFGRCxNQUVRLElBQUksT0FBT0EsS0FBS2EsSUFBWixLQUFxQixXQUF6QixFQUFzQztBQUMxQ1Ysd0JBQVFILElBQVI7QUFDSCxhQUZPLE1BRUQ7QUFDSCxxQ0FBTSxZQUFOO0FBQ0FJLHVCQUFPSixJQUFQO0FBQ0g7QUFDSixTQTFCTCxFQTJCSSxVQUFDVyxRQUFELEVBQWE7QUFDVCxpQ0FBTSxZQUFOO0FBQ0gsU0E3Qkw7QUErQkgsS0FoQ00sQ0FBUDtBQWlDSDs7QUFFRDs7Ozs7OztBQU9PLFNBQVNqQixJQUFULENBQWNLLEdBQWQsRUFBOEI7QUFBQSxRQUFYQyxJQUFXLHVFQUFKLEVBQUk7O0FBQ2pDLFdBQU9GLFVBQVVDLEdBQVYsRUFBZUMsSUFBZixFQUFxQixNQUFyQixDQUFQO0FBQ0g7O0FBRUQ7Ozs7Ozs7O0FBUU8sU0FBU0wsR0FBVCxDQUFhSSxHQUFiLEVBQTZCO0FBQUEsUUFBWEMsSUFBVyx1RUFBSixFQUFJOztBQUMvQixXQUFPRixVQUFVQyxHQUFWLEVBQWVDLElBQWYsRUFBcUIsUUFBckIsQ0FBUDtBQUNKOztBQUVEOzs7Ozs7O0FBT08sU0FBU0osR0FBVCxDQUFhRyxHQUFiLEVBQTZCO0FBQUEsUUFBWEMsSUFBVyx1RUFBSixFQUFJOztBQUNoQyxXQUFPRixVQUFVQyxHQUFWLEVBQWVDLElBQWYsRUFBcUIsS0FBckIsQ0FBUDtBQUNIOztBQUVEOzs7Ozs7O0FBT08sU0FBU0gsR0FBVCxDQUFhRSxHQUFiLEVBQTZCO0FBQUEsUUFBWEMsSUFBVyx1RUFBSixFQUFJOztBQUNoQyxXQUFPRixVQUFVQyxHQUFWLEVBQWVDLElBQWYsRUFBcUIsS0FBckIsQ0FBUDtBQUNIIiwiZmlsZSI6InNlcnZpY2VVdGlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IHNlcnZpY2UgdXRpbFxuICogQGF1dGhvciBYaWFvQmluIExpKGxpeGlhb2Jpbjg4NzhAZ21haWwuY29tKVxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJ1xuaW1wb3J0IHRvYXN0IGZyb20gJy4vdG9hc3QnO1xuXG4vKipcbiAqIOiwg+eUqHdlcHkucmVxdWVzdCDlj5HpgIHor7fmsYJcbiAqL1xuZnVuY3Rpb24gZG9SZXF1ZXN0KHVybCwgZGF0YSA9IHt9LCBtZXRob2QgPSAnZ2V0Jykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgICB1cmw6IHVybC5pbmRleE9mKCdodHRwJykgPiAtMSA/IHVybCA6IChjb25maWcuZG9tYWluICsgdXJsKSxcbiAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICAgICAgJ21vYmlsZSc6IGNvbmZpZy5tb2JpbGVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgICAgKHJlc3BvbnNlKT0+IHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHJlc3BvbnNlLmRhdGE7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzQ29kZSA+IDMwMCkge1xuICAgICAgICAgICAgICAgICAgICB0b2FzdCgn57O757uf5byC5bi477yM6K+356iN5ZCO6YeN6K+VJyk7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmNvZGUgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgICAgICAgICB9ICBlbHNlIGlmICh0eXBlb2YgZGF0YS5jb2RlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRvYXN0KCfns7vnu5/lvILluLjvvIzor7fnqI3lkI7ph43or5UnKTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgKHJlc3BvbnNlKT0+IHtcbiAgICAgICAgICAgICAgICB0b2FzdCgn57O757uf5byC5bi477yM6K+356iN5ZCO6YeN6K+VJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfSk7XG59XG5cbi8qKlxuICog5Y+R6YCBIHBvc3Qg6K+35rGCXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCDor7fmsYIgdXJsXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YSDlj5HpgIHnmoTmlbDmja5cbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwb3N0KHVybCwgZGF0YSA9IHt9KSB7XG4gICAgcmV0dXJuIGRvUmVxdWVzdCh1cmwsIGRhdGEsICdwb3N0Jyk7XG59XG5cbi8qKlxuICog5Y+R6YCBIGRlbGV0ZSDor7fmsYJcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIOivt+axgiB1cmxcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIOWPkemAgeeahOaVsOaNrlxuICogQHBhcmFtIHtib29sZWFufSBzeW5jIOaYr+WQpuaYr+WQjOatpeivt+axglxuICogQHJldHVybiB7UHJvbWlzZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlbCh1cmwsIGRhdGEgPSB7fSkge1xuICAgICByZXR1cm4gZG9SZXF1ZXN0KHVybCwgZGF0YSwgJ2RlbGV0ZScpO1xufVxuXG4vKipcbiAqIOWPkemAgSBnZXQg6K+35rGCXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCDor7fmsYIgdXJsXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YSDlj5HpgIHnmoTmlbDmja5cbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXQodXJsLCBkYXRhID0ge30pIHtcbiAgICByZXR1cm4gZG9SZXF1ZXN0KHVybCwgZGF0YSwgJ2dldCcpO1xufVxuXG4vKipcbiAqIOWPkemAgSB1cGRhdGUg6K+35rGCXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCDor7fmsYIgdXJsXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YSDlj5HpgIHnmoTmlbDmja5cbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwdXQodXJsLCBkYXRhID0ge30pIHtcbiAgICByZXR1cm4gZG9SZXF1ZXN0KHVybCwgZGF0YSwgJ3B1dCcpO1xufSJdfQ==