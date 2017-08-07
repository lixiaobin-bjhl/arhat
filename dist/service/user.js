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
  return (0, _serviceUtil.post)('/api/user', {
    mobile: _config2.default.mobile,
    avatarUrl: params.avatarUrl,
    city: params.city,
    country: params.country,
    province: params.province,
    gender: params.gender,
    language: params.language,
    nickName: params.nickName,
    openid: _userInfo2.default.getOpenId()
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuanMiXSwibmFtZXMiOlsiYWRkIiwicGFyYW1zIiwibW9iaWxlIiwiYXZhdGFyVXJsIiwiY2l0eSIsImNvdW50cnkiLCJwcm92aW5jZSIsImdlbmRlciIsImxhbmd1YWdlIiwibmlja05hbWUiLCJvcGVuaWQiLCJnZXRPcGVuSWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUtBOzs7OztRQXNCZ0JBLEcsR0FBQUEsRzs7QUFwQmhCOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JPLFNBQVNBLEdBQVQsQ0FBY0MsTUFBZCxFQUFzQjtBQUN6QixTQUFPLHVCQUFLLFdBQUwsRUFBa0I7QUFDckJDLFlBQVEsaUJBQU9BLE1BRE07QUFFckJDLGVBQVdGLE9BQU9FLFNBRkc7QUFHckJDLFVBQU1ILE9BQU9HLElBSFE7QUFJckJDLGFBQVNKLE9BQU9JLE9BSks7QUFLckJDLGNBQVVMLE9BQU9LLFFBTEk7QUFNckJDLFlBQVFOLE9BQU9NLE1BTk07QUFPckJDLGNBQVVQLE9BQU9PLFFBUEk7QUFRckJDLGNBQVVSLE9BQU9RLFFBUkk7QUFTckJDLFlBQVEsbUJBQVNDLFNBQVQ7QUFUYSxHQUFsQixDQUFQO0FBV0giLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVPdmVydmlldyBhcmhhdC11c2VyLXNlcnZpY2VcbiAqIEBhdXRob3IgWGlhb0JpbiBMaShsaXhpYW9iaW44ODc4QGdtYWlsLmNvbSkgXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgeyBnZXQsIHBvc3QsIGRlbCB9IGZyb20gJy4uL2Z1bmN0aW9uL3NlcnZpY2VVdGlsJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB1c2VySW5mbyBmcm9tICcuLi9wbHVnaW4vdXNlckluZm8nO1xuXG4vKipcbiAqIOa3u+WKoOeUqOaIt1xuICogXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLm1vYmlsZSDllYbmiLfmiYvmnLpcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuYXZhdGFyVXJsIOeUqOaIt+WktOWDj1xuICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5jaXR5IOeUqOaIt+aJgOWcqOWfjuW4glxuICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5jb3VudHJ5IOeUqOaIt+aJgOWcqOWMulxuICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5wcm92aW5jZSDnlKjmiLfmiYDlnKjnnIFcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuZ2VuZGVyIOeUqOaIt+Wnk+WIq1xuICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5sYW5ndWFnZSDnlKjmiLfkvb/nlKjnmoTlvq7kv6Hor63oqIDniYjmnKxcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMubmlja05hbWUg55So5oi35pi156ewXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLnByb3ZpbmNlIOeUqOaIt+aJgOWcqOecgVxuICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5vcGVuaWQg55So5oi355qEb3BlbmlkXG4gKiBcbiAqICBAcmV0dXJuIHtQcm9taXNlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkIChwYXJhbXMpIHtcbiAgICByZXR1cm4gcG9zdCgnL2FwaS91c2VyJywge1xuICAgICAgICBtb2JpbGU6IGNvbmZpZy5tb2JpbGUsXG4gICAgICAgIGF2YXRhclVybDogcGFyYW1zLmF2YXRhclVybCxcbiAgICAgICAgY2l0eTogcGFyYW1zLmNpdHksXG4gICAgICAgIGNvdW50cnk6IHBhcmFtcy5jb3VudHJ5LFxuICAgICAgICBwcm92aW5jZTogcGFyYW1zLnByb3ZpbmNlLFxuICAgICAgICBnZW5kZXI6IHBhcmFtcy5nZW5kZXIsXG4gICAgICAgIGxhbmd1YWdlOiBwYXJhbXMubGFuZ3VhZ2UsXG4gICAgICAgIG5pY2tOYW1lOiBwYXJhbXMubmlja05hbWUsXG4gICAgICAgIG9wZW5pZDogdXNlckluZm8uZ2V0T3BlbklkKClcbiAgICB9KVxufSJdfQ==