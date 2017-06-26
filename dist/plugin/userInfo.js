/**
 * @fileOverview arhat-plugin-userInfo 用户信息
 * @author XiaoBin Li(lixiaobin8878@gmail.com) 
 */

'use strict';

// import { initUser } from '../function/initUser';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _checkSession = require('./../function/checkSession.js');

var _checkSession2 = _interopRequireDefault(_checkSession);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    getInfo: function getInfo() {
        // var res = await checkSession();
        // console.log(res);
        // if (res) {
        return this._userInfo;
        // } else {
        //     toast('登录信息失效');
        // }
    },
    setInfo: function setInfo(userInfo) {
        this._userInfo = userInfo;
    },
    setOpenId: function setOpenId(openId) {
        this._openId = openId;
    },
    getOpenId: function getOpenId() {
        return this._openId;
    },
    setSessionKey: function setSessionKey(sessionKey) {
        this._sessionKey = sessionKey;
    },
    getSessionKey: function getSessionKey() {
        return this._sessionKey;
    }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJJbmZvLmpzIl0sIm5hbWVzIjpbImdldEluZm8iLCJfdXNlckluZm8iLCJzZXRJbmZvIiwidXNlckluZm8iLCJzZXRPcGVuSWQiLCJvcGVuSWQiLCJfb3BlbklkIiwiZ2V0T3BlbklkIiwic2V0U2Vzc2lvbktleSIsInNlc3Npb25LZXkiLCJfc2Vzc2lvbktleSIsImdldFNlc3Npb25LZXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUtBOztBQUVBOzs7Ozs7QUFDQTs7Ozs7O2tCQUVlO0FBQ1hBLFdBRFcscUJBQ0E7QUFDUDtBQUNBO0FBQ0E7QUFDSSxlQUFPLEtBQUtDLFNBQVo7QUFDSjtBQUNBO0FBQ0E7QUFDSCxLQVRVO0FBVVhDLFdBVlcsbUJBVUZDLFFBVkUsRUFVUTtBQUNmLGFBQUtGLFNBQUwsR0FBaUJFLFFBQWpCO0FBQ0gsS0FaVTtBQWFYQyxhQWJXLHFCQWFBQyxNQWJBLEVBYVE7QUFDZixhQUFLQyxPQUFMLEdBQWVELE1BQWY7QUFDSCxLQWZVO0FBZ0JYRSxhQWhCVyx1QkFnQkU7QUFDVCxlQUFPLEtBQUtELE9BQVo7QUFDSCxLQWxCVTtBQW1CWEUsaUJBbkJXLHlCQW1CSUMsVUFuQkosRUFtQmdCO0FBQ3ZCLGFBQUtDLFdBQUwsR0FBbUJELFVBQW5CO0FBQ0gsS0FyQlU7QUFzQlhFLGlCQXRCVywyQkFzQk07QUFDZCxlQUFPLEtBQUtELFdBQVo7QUFDRjtBQXhCVSxDIiwiZmlsZSI6InVzZXJJbmZvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IGFyaGF0LXBsdWdpbi11c2VySW5mbyDnlKjmiLfkv6Hmga9cbiAqIEBhdXRob3IgWGlhb0JpbiBMaShsaXhpYW9iaW44ODc4QGdtYWlsLmNvbSkgXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vLyBpbXBvcnQgeyBpbml0VXNlciB9IGZyb20gJy4uL2Z1bmN0aW9uL2luaXRVc2VyJztcbmltcG9ydCBjaGVja1Nlc3Npb24gZnJvbSAnLi4vZnVuY3Rpb24vY2hlY2tTZXNzaW9uJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGdldEluZm8gKCkge1xuICAgICAgICAvLyB2YXIgcmVzID0gYXdhaXQgY2hlY2tTZXNzaW9uKCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIC8vIGlmIChyZXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl91c2VySW5mbztcbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgLy8gICAgIHRvYXN0KCfnmbvlvZXkv6Hmga/lpLHmlYgnKTtcbiAgICAgICAgLy8gfVxuICAgIH0sXG4gICAgc2V0SW5mbyAodXNlckluZm8pIHtcbiAgICAgICAgdGhpcy5fdXNlckluZm8gPSB1c2VySW5mbztcbiAgICB9LFxuICAgIHNldE9wZW5JZCAob3BlbklkKSB7XG4gICAgICAgIHRoaXMuX29wZW5JZCA9IG9wZW5JZDsgXG4gICAgfSxcbiAgICBnZXRPcGVuSWQgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fb3BlbklkO1xuICAgIH0sXG4gICAgc2V0U2Vzc2lvbktleSAoc2Vzc2lvbktleSkge1xuICAgICAgICB0aGlzLl9zZXNzaW9uS2V5ID0gc2Vzc2lvbktleTtcbiAgICB9LFxuICAgIGdldFNlc3Npb25LZXkgKCkge1xuICAgICAgIHJldHVybiB0aGlzLl9zZXNzaW9uS2V5OyBcbiAgICB9XG59Il19