/**
 * @fileOverview service util
 * @author XiaoBin Li(lixiaobin8878@gmail.com)
 */

'use strict';

// /**
//  * 添加ajax response interceptor
//  */
// axios.interceptors.response.use(function (response) {
//     var data = response.data;
//     if (typeof data === 'string') {
//         data = JSON.parse(data);
//     }
//     if (data.code === 0) {
//         return data;
//     } else {
//         toast(data.message || '系统异常', 'error');
//         return Promise.reject(data);
//     }
// }, function (error) {
//     toast('系统异常', 'error');
//     return Promise.reject(error);
// });

/**
 * 错误处理
 *
 * @inner
 * @param {Object} response 返回的 JSON 数据
 * @return {Object}
 */

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.post = post;
exports.del = del;
exports.get = get;
exports.put = put;
function errorHandler(response) {
    var code = response.code;
}

/**
 * 发送 post 请求
 *
 * @param {string} url 请求 url
 * @param {Object} data 发送的数据
 * @param {boolean} sync 是否是同步请求
 * @return {Promise}
 */
function post(url) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var sync = arguments[2];

    return axios.post(url, data);
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
 * @param {boolean} sync 是否是同步请求
 * @return {Promise}
 */
function get(url) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var sync = arguments[2];

    return axios.get(url, {
        params: data
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2UuanMiXSwibmFtZXMiOlsicG9zdCIsImRlbCIsImdldCIsInB1dCIsImVycm9ySGFuZGxlciIsInJlc3BvbnNlIiwiY29kZSIsInVybCIsImRhdGEiLCJzeW5jIiwiYXhpb3MiLCJkZWxldGUiLCJwYXJhbXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUtBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7UUFtQmdCQSxJLEdBQUFBLEk7UUFZQUMsRyxHQUFBQSxHO1FBY0FDLEcsR0FBQUEsRztRQWNBQyxHLEdBQUFBLEc7QUFwRGhCLFNBQVNDLFlBQVQsQ0FBc0JDLFFBQXRCLEVBQWdDO0FBQzVCLFFBQUlDLE9BQU9ELFNBQVNDLElBQXBCO0FBQ0g7O0FBRUQ7Ozs7Ozs7O0FBUU8sU0FBU04sSUFBVCxDQUFjTyxHQUFkLEVBQW9DO0FBQUEsUUFBakJDLElBQWlCLHVFQUFWLEVBQVU7QUFBQSxRQUFOQyxJQUFNOztBQUN2QyxXQUFPQyxNQUFNVixJQUFOLENBQVdPLEdBQVgsRUFBZ0JDLElBQWhCLENBQVA7QUFDSDs7QUFFRDs7Ozs7Ozs7QUFRTyxTQUFTUCxHQUFULENBQWFNLEdBQWIsRUFBbUM7QUFBQSxRQUFqQkMsSUFBaUIsdUVBQVYsRUFBVTtBQUFBLFFBQU5DLElBQU07O0FBQ3RDLFdBQU9DLE1BQU1DLE1BQU4sQ0FBYUosR0FBYixFQUFrQjtBQUNyQkssZ0JBQVFKO0FBRGEsS0FBbEIsQ0FBUDtBQUdIOztBQUVEOzs7Ozs7OztBQVFPLFNBQVNOLEdBQVQsQ0FBYUssR0FBYixFQUFtQztBQUFBLFFBQWpCQyxJQUFpQix1RUFBVixFQUFVO0FBQUEsUUFBTkMsSUFBTTs7QUFDdEMsV0FBT0MsTUFBTVIsR0FBTixDQUFVSyxHQUFWLEVBQWU7QUFDbEJLLGdCQUFRSjtBQURVLEtBQWYsQ0FBUDtBQUdIOztBQUVEOzs7Ozs7OztBQVFPLFNBQVNMLEdBQVQsQ0FBYUksR0FBYixFQUFtQztBQUFBLFFBQWpCQyxJQUFpQix1RUFBVixFQUFVO0FBQUEsUUFBTkMsSUFBTTs7QUFDdEMsV0FBT0MsTUFBTVAsR0FBTixDQUFVSSxHQUFWLEVBQWVDLElBQWYsQ0FBUDtBQUNIIiwiZmlsZSI6InNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlT3ZlcnZpZXcgc2VydmljZSB1dGlsXG4gKiBAYXV0aG9yIFhpYW9CaW4gTGkobGl4aWFvYmluODg3OEBnbWFpbC5jb20pXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cbi8vIC8qKlxuLy8gICog5re75YqgYWpheCByZXNwb25zZSBpbnRlcmNlcHRvclxuLy8gICovXG4vLyBheGlvcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuLy8gICAgIHZhciBkYXRhID0gcmVzcG9uc2UuZGF0YTtcbi8vICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4vLyAgICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuLy8gICAgIH1cbi8vICAgICBpZiAoZGF0YS5jb2RlID09PSAwKSB7XG4vLyAgICAgICAgIHJldHVybiBkYXRhO1xuLy8gICAgIH0gZWxzZSB7XG4vLyAgICAgICAgIHRvYXN0KGRhdGEubWVzc2FnZSB8fCAn57O757uf5byC5bi4JywgJ2Vycm9yJyk7XG4vLyAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChkYXRhKTtcbi8vICAgICB9XG4vLyB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbi8vICAgICB0b2FzdCgn57O757uf5byC5bi4JywgJ2Vycm9yJyk7XG4vLyAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbi8vIH0pO1xuXG4vKipcbiAqIOmUmeivr+WkhOeQhlxuICpcbiAqIEBpbm5lclxuICogQHBhcmFtIHtPYmplY3R9IHJlc3BvbnNlIOi/lOWbnueahCBKU09OIOaVsOaNrlxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBlcnJvckhhbmRsZXIocmVzcG9uc2UpIHtcbiAgICB2YXIgY29kZSA9IHJlc3BvbnNlLmNvZGU7XG59XG5cbi8qKlxuICog5Y+R6YCBIHBvc3Qg6K+35rGCXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCDor7fmsYIgdXJsXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YSDlj5HpgIHnmoTmlbDmja5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gc3luYyDmmK/lkKbmmK/lkIzmraXor7fmsYJcbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwb3N0KHVybCwgZGF0YSA9IHt9LCBzeW5jKSB7XG4gICAgcmV0dXJuIGF4aW9zLnBvc3QodXJsLCBkYXRhKTtcbn1cblxuLyoqXG4gKiDlj5HpgIEgZGVsZXRlIOivt+axglxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwg6K+35rGCIHVybFxuICogQHBhcmFtIHtPYmplY3R9IGRhdGEg5Y+R6YCB55qE5pWw5o2uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHN5bmMg5piv5ZCm5piv5ZCM5q2l6K+35rGCXG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVsKHVybCwgZGF0YSA9IHt9LCBzeW5jKSB7XG4gICAgcmV0dXJuIGF4aW9zLmRlbGV0ZSh1cmwsIHtcbiAgICAgICAgcGFyYW1zOiBkYXRhXG4gICAgfSk7XG59XG5cbi8qKlxuICog5Y+R6YCBIGdldCDor7fmsYJcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIOivt+axgiB1cmxcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIOWPkemAgeeahOaVsOaNrlxuICogQHBhcmFtIHtib29sZWFufSBzeW5jIOaYr+WQpuaYr+WQjOatpeivt+axglxuICogQHJldHVybiB7UHJvbWlzZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldCh1cmwsIGRhdGEgPSB7fSwgc3luYykge1xuICAgIHJldHVybiBheGlvcy5nZXQodXJsLCB7XG4gICAgICAgIHBhcmFtczogZGF0YVxuICAgIH0pO1xufVxuXG4vKipcbiAqIOWPkemAgSB1cGRhdGUg6K+35rGCXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCDor7fmsYIgdXJsXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YSDlj5HpgIHnmoTmlbDmja5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gc3luYyDmmK/lkKbmmK/lkIzmraXor7fmsYJcbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwdXQodXJsLCBkYXRhID0ge30sIHN5bmMpIHtcbiAgICByZXR1cm4gYXhpb3MucHV0KHVybCwgZGF0YSk7XG59Il19