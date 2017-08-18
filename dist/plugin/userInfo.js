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
    getUserid: function getUserid() {
        if (!this._user) {
            this._user = wx.getStorageSync('user');
        }
        return this._user.id;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJJbmZvLmpzIl0sIm5hbWVzIjpbImdldEluZm8iLCJfdXNlckluZm8iLCJzZXRJbmZvIiwidXNlckluZm8iLCJnZXRVc2VyaWQiLCJfdXNlciIsInd4IiwiZ2V0U3RvcmFnZVN5bmMiLCJpZCIsImdldE9wZW5pZCIsIm9wZW5pZCIsInNldFNlc3Npb25LZXkiLCJzZXNzaW9uS2V5IiwiX3Nlc3Npb25LZXkiLCJnZXRTZXNzaW9uS2V5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFLQTs7QUFFQTs7Ozs7O0FBQ0E7Ozs7OztrQkFFZTtBQUNYQSxXQURXLHFCQUNBO0FBQ1A7QUFDQTtBQUNBO0FBQ0ksZUFBTyxLQUFLQyxTQUFaO0FBQ0o7QUFDQTtBQUNBO0FBQ0gsS0FUVTtBQVVYQyxXQVZXLG1CQVVGQyxRQVZFLEVBVVE7QUFDZixhQUFLRixTQUFMLEdBQWlCRSxRQUFqQjtBQUNILEtBWlU7QUFhWEMsYUFiVyx1QkFhRTtBQUNULFlBQUksQ0FBQyxLQUFLQyxLQUFWLEVBQWlCO0FBQ2IsaUJBQUtBLEtBQUwsR0FBYUMsR0FBR0MsY0FBSCxDQUFrQixNQUFsQixDQUFiO0FBQ0g7QUFDRCxlQUFPLEtBQUtGLEtBQUwsQ0FBV0csRUFBbEI7QUFDSCxLQWxCVTtBQW1CWEMsYUFuQlcsdUJBbUJFO0FBQ1QsWUFBSSxDQUFDLEtBQUtKLEtBQVYsRUFBaUI7QUFDYixpQkFBS0EsS0FBTCxHQUFhQyxHQUFHQyxjQUFILENBQWtCLE1BQWxCLENBQWI7QUFDSDtBQUNELGVBQU8sS0FBS0YsS0FBTCxDQUFXSyxNQUFsQjtBQUNILEtBeEJVO0FBeUJYQyxpQkF6QlcseUJBeUJJQyxVQXpCSixFQXlCZ0I7QUFDdkIsYUFBS0MsV0FBTCxHQUFtQkQsVUFBbkI7QUFDSCxLQTNCVTtBQTRCWEUsaUJBNUJXLDJCQTRCTTtBQUNkLGVBQU8sS0FBS0QsV0FBWjtBQUNGO0FBOUJVLEMiLCJmaWxlIjoidXNlckluZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlT3ZlcnZpZXcgYXJoYXQtcGx1Z2luLXVzZXJJbmZvIOeUqOaIt+S/oeaBr1xuICogQGF1dGhvciBYaWFvQmluIExpKGxpeGlhb2Jpbjg4NzhAZ21haWwuY29tKSBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8vIGltcG9ydCB7IGluaXRVc2VyIH0gZnJvbSAnLi4vZnVuY3Rpb24vaW5pdFVzZXInO1xuaW1wb3J0IGNoZWNrU2Vzc2lvbiBmcm9tICcuLi9mdW5jdGlvbi9jaGVja1Nlc3Npb24nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZ2V0SW5mbyAoKSB7XG4gICAgICAgIC8vIHZhciByZXMgPSBhd2FpdCBjaGVja1Nlc3Npb24oKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgLy8gaWYgKHJlcykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJJbmZvO1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgdG9hc3QoJ+eZu+W9leS/oeaBr+WkseaViCcpO1xuICAgICAgICAvLyB9XG4gICAgfSxcbiAgICBzZXRJbmZvICh1c2VySW5mbykge1xuICAgICAgICB0aGlzLl91c2VySW5mbyA9IHVzZXJJbmZvO1xuICAgIH0sXG4gICAgZ2V0VXNlcmlkICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl91c2VyKSB7XG4gICAgICAgICAgICB0aGlzLl91c2VyID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3VzZXInKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fdXNlci5pZDtcbiAgICB9LFxuICAgIGdldE9wZW5pZCAoKSB7XG4gICAgICAgIGlmICghdGhpcy5fdXNlcikge1xuICAgICAgICAgICAgdGhpcy5fdXNlciA9IHd4LmdldFN0b3JhZ2VTeW5jKCd1c2VyJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXIub3BlbmlkO1xuICAgIH0sXG4gICAgc2V0U2Vzc2lvbktleSAoc2Vzc2lvbktleSkge1xuICAgICAgICB0aGlzLl9zZXNzaW9uS2V5ID0gc2Vzc2lvbktleTtcbiAgICB9LFxuICAgIGdldFNlc3Npb25LZXkgKCkge1xuICAgICAgIHJldHVybiB0aGlzLl9zZXNzaW9uS2V5OyBcbiAgICB9XG59Il19