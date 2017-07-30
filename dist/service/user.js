/**
 * @fileOverview arhat-user-service
 * @author XiaoBin Li(lixiaobin8878@gmail.com) 
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add = add;

var _serviceUtil = require('./../function/serviceUtil.js');

var _config = require('./../config.js');

var _config2 = _interopRequireDefault(_config);

var _userInfo = require('./../plugin/userInfo.js');

var _userInfo2 = _interopRequireDefault(_userInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 添加用户
 * 
 * @param {string} params.mobile 商户手机
 * @param {string} params.avatarUrl 用户头像
 * @param {string} params.city 用户所在城市
 * @param {string} params.country 用户所在区
 * @param {string} params.province 用户所在省
 * @param {string} params.gender 用户姓别
 * @param {string} params.language 用户使用的微信语言版本
 * @param {string} params.nickName 用户昵称
 * @param {string} params.province 用户所在省
 * @param {string} params.openid 用户的openid
 * 
 *  @return {Promise}
 */
function add(params) {
  var _post;

  return (0, _serviceUtil.post)('/api/user', (_post = {
    mobile: _config2.default.mobile,
    avatarUrl: params.avatarUrl,
    city: params.city,
    country: params.country,
    province: params.province,
    gender: params.gender,
    language: params.language,
    nickName: params.nickName
  }, _defineProperty(_post, 'province', params.province), _defineProperty(_post, 'openid', _userInfo2.default.getOpenId()), _post));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuanMiXSwibmFtZXMiOlsiYWRkIiwicGFyYW1zIiwibW9iaWxlIiwiYXZhdGFyVXJsIiwiY2l0eSIsImNvdW50cnkiLCJwcm92aW5jZSIsImdlbmRlciIsImxhbmd1YWdlIiwibmlja05hbWUiLCJnZXRPcGVuSWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUtBOzs7OztRQXNCZ0JBLEcsR0FBQUEsRzs7QUFwQmhCOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQk8sU0FBU0EsR0FBVCxDQUFjQyxNQUFkLEVBQXNCO0FBQUE7O0FBQ3pCLFNBQU8sdUJBQUssV0FBTDtBQUNIQyxZQUFRLGlCQUFPQSxNQURaO0FBRUhDLGVBQVdGLE9BQU9FLFNBRmY7QUFHSEMsVUFBTUgsT0FBT0csSUFIVjtBQUlIQyxhQUFTSixPQUFPSSxPQUpiO0FBS0hDLGNBQVVMLE9BQU9LLFFBTGQ7QUFNSEMsWUFBUU4sT0FBT00sTUFOWjtBQU9IQyxjQUFVUCxPQUFPTyxRQVBkO0FBUUhDLGNBQVVSLE9BQU9RO0FBUmQsd0NBU09SLE9BQU9LLFFBVGQsb0NBVUssbUJBQVNJLFNBQVQsRUFWTCxVQUFQO0FBWUgiLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVPdmVydmlldyBhcmhhdC11c2VyLXNlcnZpY2VcbiAqIEBhdXRob3IgWGlhb0JpbiBMaShsaXhpYW9iaW44ODc4QGdtYWlsLmNvbSkgXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgeyBnZXQsIHBvc3QsIGRlbCB9IGZyb20gJy4uL2Z1bmN0aW9uL3NlcnZpY2VVdGlsJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB1c2VySW5mbyBmcm9tICcuLi9wbHVnaW4vdXNlckluZm8nO1xuXG4vKipcbiAqIOa3u+WKoOeUqOaIt1xuICogXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLm1vYmlsZSDllYbmiLfmiYvmnLpcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuYXZhdGFyVXJsIOeUqOaIt+WktOWDj1xuICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5jaXR5IOeUqOaIt+aJgOWcqOWfjuW4glxuICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5jb3VudHJ5IOeUqOaIt+aJgOWcqOWMulxuICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5wcm92aW5jZSDnlKjmiLfmiYDlnKjnnIFcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuZ2VuZGVyIOeUqOaIt+Wnk+WIq1xuICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5sYW5ndWFnZSDnlKjmiLfkvb/nlKjnmoTlvq7kv6Hor63oqIDniYjmnKxcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMubmlja05hbWUg55So5oi35pi156ewXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLnByb3ZpbmNlIOeUqOaIt+aJgOWcqOecgVxuICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5vcGVuaWQg55So5oi355qEb3BlbmlkXG4gKiBcbiAqICBAcmV0dXJuIHtQcm9taXNlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkIChwYXJhbXMpIHtcbiAgICByZXR1cm4gcG9zdCgnL2FwaS91c2VyJywge1xuICAgICAgICBtb2JpbGU6IGNvbmZpZy5tb2JpbGUsXG4gICAgICAgIGF2YXRhclVybDogcGFyYW1zLmF2YXRhclVybCxcbiAgICAgICAgY2l0eTogcGFyYW1zLmNpdHksXG4gICAgICAgIGNvdW50cnk6IHBhcmFtcy5jb3VudHJ5LFxuICAgICAgICBwcm92aW5jZTogcGFyYW1zLnByb3ZpbmNlLFxuICAgICAgICBnZW5kZXI6IHBhcmFtcy5nZW5kZXIsXG4gICAgICAgIGxhbmd1YWdlOiBwYXJhbXMubGFuZ3VhZ2UsXG4gICAgICAgIG5pY2tOYW1lOiBwYXJhbXMubmlja05hbWUsXG4gICAgICAgIHByb3ZpbmNlOiBwYXJhbXMucHJvdmluY2UsXG4gICAgICAgIG9wZW5pZDogdXNlckluZm8uZ2V0T3BlbklkKClcbiAgICB9KVxufSJdfQ==