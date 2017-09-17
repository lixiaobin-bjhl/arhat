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
    getUserid: function getUserid() {
        if (!this._user) {
            this._user = wx.getStorageSync('user');
        }
        return this._user.id;
    },
    getUserName: function getUserName() {
        if (!this._user) {
            this._user = wx.getStorageSync('user');
        }
        return this._user.name;
    },
    getOpenid: function getOpenid() {
        if (!this._user) {
            this._user = wx.getStorageSync('user');
        }
        return this._user.openid;
    },
    setSessionKey: function setSessionKey(sessionKey) {
        this._sessionKey = sessionKey;
    },
    getSessionKey: function getSessionKey() {
        return this._sessionKey;
    }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJJbmZvLmpzIl0sIm5hbWVzIjpbImdldFVzZXJpZCIsIl91c2VyIiwid3giLCJnZXRTdG9yYWdlU3luYyIsImlkIiwiZ2V0VXNlck5hbWUiLCJuYW1lIiwiZ2V0T3BlbmlkIiwib3BlbmlkIiwic2V0U2Vzc2lvbktleSIsInNlc3Npb25LZXkiLCJfc2Vzc2lvbktleSIsImdldFNlc3Npb25LZXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUtBOztBQUVBOzs7Ozs7QUFDQTs7Ozs7O2tCQUVlO0FBQ1hBLGFBRFcsdUJBQ0U7QUFDVCxZQUFJLENBQUMsS0FBS0MsS0FBVixFQUFpQjtBQUNiLGlCQUFLQSxLQUFMLEdBQWFDLEdBQUdDLGNBQUgsQ0FBa0IsTUFBbEIsQ0FBYjtBQUNIO0FBQ0QsZUFBTyxLQUFLRixLQUFMLENBQVdHLEVBQWxCO0FBQ0gsS0FOVTtBQU9YQyxlQVBXLHlCQU9JO0FBQ1gsWUFBSSxDQUFDLEtBQUtKLEtBQVYsRUFBaUI7QUFDYixpQkFBS0EsS0FBTCxHQUFhQyxHQUFHQyxjQUFILENBQWtCLE1BQWxCLENBQWI7QUFDSDtBQUNELGVBQU8sS0FBS0YsS0FBTCxDQUFXSyxJQUFsQjtBQUNILEtBWlU7QUFhWEMsYUFiVyx1QkFhRTtBQUNULFlBQUksQ0FBQyxLQUFLTixLQUFWLEVBQWlCO0FBQ2IsaUJBQUtBLEtBQUwsR0FBYUMsR0FBR0MsY0FBSCxDQUFrQixNQUFsQixDQUFiO0FBQ0g7QUFDRCxlQUFPLEtBQUtGLEtBQUwsQ0FBV08sTUFBbEI7QUFDSCxLQWxCVTtBQW1CWEMsaUJBbkJXLHlCQW1CSUMsVUFuQkosRUFtQmdCO0FBQ3ZCLGFBQUtDLFdBQUwsR0FBbUJELFVBQW5CO0FBQ0gsS0FyQlU7QUFzQlhFLGlCQXRCVywyQkFzQk07QUFDZCxlQUFPLEtBQUtELFdBQVo7QUFDRjtBQXhCVSxDIiwiZmlsZSI6InVzZXJJbmZvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IGFyaGF0LXBsdWdpbi11c2VySW5mbyDnlKjmiLfkv6Hmga9cbiAqIEBhdXRob3IgWGlhb0JpbiBMaShsaXhpYW9iaW44ODc4QGdtYWlsLmNvbSkgXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vLyBpbXBvcnQgeyBpbml0VXNlciB9IGZyb20gJy4uL2Z1bmN0aW9uL2luaXRVc2VyJztcbmltcG9ydCBjaGVja1Nlc3Npb24gZnJvbSAnLi4vZnVuY3Rpb24vY2hlY2tTZXNzaW9uJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGdldFVzZXJpZCAoKSB7XG4gICAgICAgIGlmICghdGhpcy5fdXNlcikge1xuICAgICAgICAgICAgdGhpcy5fdXNlciA9IHd4LmdldFN0b3JhZ2VTeW5jKCd1c2VyJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXIuaWQ7XG4gICAgfSxcbiAgICBnZXRVc2VyTmFtZSAoKSB7XG4gICAgICAgIGlmICghdGhpcy5fdXNlcikge1xuICAgICAgICAgICAgdGhpcy5fdXNlciA9IHd4LmdldFN0b3JhZ2VTeW5jKCd1c2VyJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXIubmFtZTtcbiAgICB9LFxuICAgIGdldE9wZW5pZCAoKSB7XG4gICAgICAgIGlmICghdGhpcy5fdXNlcikge1xuICAgICAgICAgICAgdGhpcy5fdXNlciA9IHd4LmdldFN0b3JhZ2VTeW5jKCd1c2VyJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXIub3BlbmlkO1xuICAgIH0sXG4gICAgc2V0U2Vzc2lvbktleSAoc2Vzc2lvbktleSkge1xuICAgICAgICB0aGlzLl9zZXNzaW9uS2V5ID0gc2Vzc2lvbktleTtcbiAgICB9LFxuICAgIGdldFNlc3Npb25LZXkgKCkge1xuICAgICAgIHJldHVybiB0aGlzLl9zZXNzaW9uS2V5OyBcbiAgICB9XG59Il19