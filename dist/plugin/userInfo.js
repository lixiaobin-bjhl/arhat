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
        console.log(this._user.id);
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
        console.log('userid' + this._user.id);
        return this._user.openid;
    },
    setSessionKey: function setSessionKey(sessionKey) {
        this._sessionKey = sessionKey;
    },
    getSessionKey: function getSessionKey() {
        return this._sessionKey;
    }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJJbmZvLmpzIl0sIm5hbWVzIjpbImdldFVzZXJpZCIsIl91c2VyIiwid3giLCJnZXRTdG9yYWdlU3luYyIsImNvbnNvbGUiLCJsb2ciLCJpZCIsImdldFVzZXJOYW1lIiwibmFtZSIsImdldE9wZW5pZCIsIm9wZW5pZCIsInNldFNlc3Npb25LZXkiLCJzZXNzaW9uS2V5IiwiX3Nlc3Npb25LZXkiLCJnZXRTZXNzaW9uS2V5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFLQTs7QUFFQTs7Ozs7O0FBQ0E7Ozs7OztrQkFFZTtBQUNYQSxhQURXLHVCQUNFO0FBQ1QsWUFBSSxDQUFDLEtBQUtDLEtBQVYsRUFBaUI7QUFDYixpQkFBS0EsS0FBTCxHQUFhQyxHQUFHQyxjQUFILENBQWtCLE1BQWxCLENBQWI7QUFDSDtBQUNEQyxnQkFBUUMsR0FBUixDQUFZLEtBQUtKLEtBQUwsQ0FBV0ssRUFBdkI7QUFDQSxlQUFPLEtBQUtMLEtBQUwsQ0FBV0ssRUFBbEI7QUFDSCxLQVBVO0FBUVhDLGVBUlcseUJBUUk7QUFDWCxZQUFJLENBQUMsS0FBS04sS0FBVixFQUFpQjtBQUNiLGlCQUFLQSxLQUFMLEdBQWFDLEdBQUdDLGNBQUgsQ0FBa0IsTUFBbEIsQ0FBYjtBQUNIO0FBQ0QsZUFBTyxLQUFLRixLQUFMLENBQVdPLElBQWxCO0FBQ0gsS0FiVTtBQWNYQyxhQWRXLHVCQWNFO0FBQ1QsWUFBSSxDQUFDLEtBQUtSLEtBQVYsRUFBaUI7QUFDYixpQkFBS0EsS0FBTCxHQUFhQyxHQUFHQyxjQUFILENBQWtCLE1BQWxCLENBQWI7QUFDSDtBQUNEQyxnQkFBUUMsR0FBUixDQUFZLFdBQVcsS0FBS0osS0FBTCxDQUFXSyxFQUFsQztBQUNBLGVBQU8sS0FBS0wsS0FBTCxDQUFXUyxNQUFsQjtBQUNILEtBcEJVO0FBcUJYQyxpQkFyQlcseUJBcUJJQyxVQXJCSixFQXFCZ0I7QUFDdkIsYUFBS0MsV0FBTCxHQUFtQkQsVUFBbkI7QUFDSCxLQXZCVTtBQXdCWEUsaUJBeEJXLDJCQXdCTTtBQUNkLGVBQU8sS0FBS0QsV0FBWjtBQUNGO0FBMUJVLEMiLCJmaWxlIjoidXNlckluZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlT3ZlcnZpZXcgYXJoYXQtcGx1Z2luLXVzZXJJbmZvIOeUqOaIt+S/oeaBr1xuICogQGF1dGhvciBYaWFvQmluIExpKGxpeGlhb2Jpbjg4NzhAZ21haWwuY29tKSBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8vIGltcG9ydCB7IGluaXRVc2VyIH0gZnJvbSAnLi4vZnVuY3Rpb24vaW5pdFVzZXInO1xuaW1wb3J0IGNoZWNrU2Vzc2lvbiBmcm9tICcuLi9mdW5jdGlvbi9jaGVja1Nlc3Npb24nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZ2V0VXNlcmlkICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl91c2VyKSB7XG4gICAgICAgICAgICB0aGlzLl91c2VyID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3VzZXInKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl91c2VyLmlkKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXIuaWQ7XG4gICAgfSxcbiAgICBnZXRVc2VyTmFtZSAoKSB7XG4gICAgICAgIGlmICghdGhpcy5fdXNlcikge1xuICAgICAgICAgICAgdGhpcy5fdXNlciA9IHd4LmdldFN0b3JhZ2VTeW5jKCd1c2VyJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXIubmFtZTtcbiAgICB9LFxuICAgIGdldE9wZW5pZCAoKSB7XG4gICAgICAgIGlmICghdGhpcy5fdXNlcikge1xuICAgICAgICAgICAgdGhpcy5fdXNlciA9IHd4LmdldFN0b3JhZ2VTeW5jKCd1c2VyJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ3VzZXJpZCcgKyB0aGlzLl91c2VyLmlkKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXIub3BlbmlkO1xuICAgIH0sXG4gICAgc2V0U2Vzc2lvbktleSAoc2Vzc2lvbktleSkge1xuICAgICAgICB0aGlzLl9zZXNzaW9uS2V5ID0gc2Vzc2lvbktleTtcbiAgICB9LFxuICAgIGdldFNlc3Npb25LZXkgKCkge1xuICAgICAgIHJldHVybiB0aGlzLl9zZXNzaW9uS2V5OyBcbiAgICB9XG59Il19