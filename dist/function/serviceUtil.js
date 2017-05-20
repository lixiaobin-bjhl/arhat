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
            url: _config2.default.domain + url,
            method: method,
            header: {
                'mobile': _config2.default.mobile
            },
            data: data
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VVdGlsLmpzIl0sIm5hbWVzIjpbInBvc3QiLCJkZWwiLCJnZXQiLCJwdXQiLCJkb1JlcXVlc3QiLCJ1cmwiLCJkYXRhIiwibWV0aG9kIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0IiwiZG9tYWluIiwiaGVhZGVyIiwibW9iaWxlIiwidGhlbiIsInJlc3BvbnNlIiwiY29kZSIsInd4Iiwic2hvd1RvYXN0IiwidGl0bGUiLCJtZXNzYWdlIiwiZHVyYXRpb24iLCJheGlvcyIsImRlbGV0ZSIsInBhcmFtcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBS0E7Ozs7O1FBaURnQkEsSSxHQUFBQSxJO1FBWUFDLEcsR0FBQUEsRztRQWFBQyxHLEdBQUFBLEc7UUFZQUMsRyxHQUFBQSxHOztBQXBGaEI7Ozs7QUFDQTs7Ozs7O0FBRUE7OztBQUdBLFNBQVNDLFNBQVQsQ0FBbUJDLEdBQW5CLEVBQW1EO0FBQUEsUUFBM0JDLElBQTJCLHVFQUFwQixFQUFvQjtBQUFBLFFBQWhCQyxNQUFnQix1RUFBUCxLQUFPOztBQUMvQyxXQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcEMsdUJBQUtDLE9BQUwsQ0FBYTtBQUNUTixpQkFBSyxpQkFBT08sTUFBUCxHQUFnQlAsR0FEWjtBQUVURSxvQkFBUUEsTUFGQztBQUdUTSxvQkFBUTtBQUNKLDBCQUFVLGlCQUFPQztBQURiLGFBSEM7QUFNVFIsa0JBQU1BO0FBTkcsU0FBYixFQVFDUyxJQVJELENBU0ksVUFBQ0MsUUFBRCxFQUFhO0FBQ1QsZ0JBQUlWLE9BQU9VLFNBQVNWLElBQXBCOztBQUVBLGdCQUFJQSxLQUFLVyxJQUFMLEtBQWMsQ0FBbEIsRUFBcUI7QUFDakJSLHdCQUFRSCxJQUFSO0FBQ0gsYUFGRCxNQUVPO0FBQ0hZLG1CQUFHQyxTQUFILENBQWE7QUFDVEMsMkJBQU9kLEtBQUtlLE9BQUwsSUFBZ0IsWUFEZDtBQUVUQyw4QkFBVTtBQUZELGlCQUFiO0FBSUFaLHVCQUFPSixJQUFQO0FBQ0g7QUFDSixTQXJCTCxFQXNCSSxVQUFDVSxRQUFELEVBQWE7QUFDVEUsZUFBR0MsU0FBSCxDQUFhO0FBQ1RDLHVCQUFPLFlBREU7QUFFVEUsMEJBQVU7QUFGRCxhQUFiO0FBSUgsU0EzQkw7QUE2QkgsS0E5Qk0sQ0FBUDtBQStCSDs7QUFFRDs7Ozs7OztBQU9PLFNBQVN0QixJQUFULENBQWNLLEdBQWQsRUFBOEI7QUFBQSxRQUFYQyxJQUFXLHVFQUFKLEVBQUk7O0FBQ2pDLFdBQU9GLFVBQVVDLEdBQVYsRUFBZUMsSUFBZixFQUFxQixNQUFyQixDQUFQO0FBQ0g7O0FBRUQ7Ozs7Ozs7O0FBUU8sU0FBU0wsR0FBVCxDQUFhSSxHQUFiLEVBQTZCO0FBQUEsUUFBWEMsSUFBVyx1RUFBSixFQUFJOztBQUNoQyxXQUFPaUIsTUFBTUMsTUFBTixDQUFhbkIsR0FBYixFQUFrQjtBQUNyQm9CLGdCQUFRbkI7QUFEYSxLQUFsQixDQUFQO0FBR0g7O0FBRUQ7Ozs7Ozs7QUFPTyxTQUFTSixHQUFULENBQWFHLEdBQWIsRUFBNkI7QUFBQSxRQUFYQyxJQUFXLHVFQUFKLEVBQUk7O0FBQ2hDLFdBQU9GLFVBQVVDLEdBQVYsRUFBZUMsSUFBZixFQUFxQixLQUFyQixDQUFQO0FBQ0g7O0FBRUQ7Ozs7Ozs7O0FBUU8sU0FBU0gsR0FBVCxDQUFhRSxHQUFiLEVBQTZCO0FBQUEsUUFBWEMsSUFBVyx1RUFBSixFQUFJOztBQUNoQyxXQUFPaUIsTUFBTXBCLEdBQU4sQ0FBVUUsR0FBVixFQUFlQyxJQUFmLENBQVA7QUFDSCIsImZpbGUiOiJzZXJ2aWNlVXRpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVPdmVydmlldyBzZXJ2aWNlIHV0aWxcbiAqIEBhdXRob3IgWGlhb0JpbiBMaShsaXhpYW9iaW44ODc4QGdtYWlsLmNvbSlcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZydcblxuLyoqXG4gKiDosIPnlKh3ZXB5LnJlcXVlc3Qg5Y+R6YCB6K+35rGCXG4gKi9cbmZ1bmN0aW9uIGRvUmVxdWVzdCh1cmwsIGRhdGEgPSB7fSwgbWV0aG9kID0gJ2dldCcpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgICAgdXJsOiBjb25maWcuZG9tYWluICsgdXJsLFxuICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICAgICAnbW9iaWxlJzogY29uZmlnLm1vYmlsZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRhdGE6IGRhdGFcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICAocmVzcG9uc2UpPT4ge1xuICAgICAgICAgICAgICAgIHZhciBkYXRhID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5jb2RlID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBkYXRhLm1lc3NhZ2UgfHwgJ+ezu+e7n+W8guW4uO+8jOivt+eojeWQjumHjeivlScsXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMzAwMFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgKHJlc3BvbnNlKT0+IHtcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+ezu+e7n+W8guW4uO+8jOivt+eojeWQjumHjeivlScsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAwXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfSk7XG59XG5cbi8qKlxuICog5Y+R6YCBIHBvc3Qg6K+35rGCXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCDor7fmsYIgdXJsXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YSDlj5HpgIHnmoTmlbDmja5cbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwb3N0KHVybCwgZGF0YSA9IHt9KSB7XG4gICAgcmV0dXJuIGRvUmVxdWVzdCh1cmwsIGRhdGEsICdwb3N0Jyk7XG59XG5cbi8qKlxuICog5Y+R6YCBIGRlbGV0ZSDor7fmsYJcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIOivt+axgiB1cmxcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIOWPkemAgeeahOaVsOaNrlxuICogQHBhcmFtIHtib29sZWFufSBzeW5jIOaYr+WQpuaYr+WQjOatpeivt+axglxuICogQHJldHVybiB7UHJvbWlzZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlbCh1cmwsIGRhdGEgPSB7fSkge1xuICAgIHJldHVybiBheGlvcy5kZWxldGUodXJsLCB7XG4gICAgICAgIHBhcmFtczogZGF0YVxuICAgIH0pO1xufVxuXG4vKipcbiAqIOWPkemAgSBnZXQg6K+35rGCXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCDor7fmsYIgdXJsXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YSDlj5HpgIHnmoTmlbDmja5cbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXQodXJsLCBkYXRhID0ge30pIHtcbiAgICByZXR1cm4gZG9SZXF1ZXN0KHVybCwgZGF0YSwgJ2dldCcpO1xufVxuXG4vKipcbiAqIOWPkemAgSB1cGRhdGUg6K+35rGCXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCDor7fmsYIgdXJsXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YSDlj5HpgIHnmoTmlbDmja5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gc3luYyDmmK/lkKbmmK/lkIzmraXor7fmsYJcbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwdXQodXJsLCBkYXRhID0ge30pIHtcbiAgICByZXR1cm4gYXhpb3MucHV0KHVybCwgZGF0YSk7XG59Il19