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

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
    getInfo: function getInfo() {
        var _this = this;

        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
            var res;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return (0, _checkSession2.default)();

                        case 2:
                            res = _context.sent;
                            return _context.abrupt('return', _this._userInfo);

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this);
        }))();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJJbmZvLmpzIl0sIm5hbWVzIjpbImdldEluZm8iLCJyZXMiLCJfdXNlckluZm8iLCJzZXRJbmZvIiwidXNlckluZm8iLCJzZXRPcGVuSWQiLCJvcGVuSWQiLCJfb3BlbklkIiwiZ2V0T3BlbklkIiwic2V0U2Vzc2lvbktleSIsInNlc3Npb25LZXkiLCJfc2Vzc2lvbktleSIsImdldFNlc3Npb25LZXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUtBOztBQUVBOzs7Ozs7QUFDQTs7Ozs7Ozs7a0JBRWU7QUFDTEEsV0FESyxxQkFDTTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBQ0csNkJBREg7O0FBQUE7QUFDVEMsK0JBRFM7QUFBQSw2REFHRixNQUFLQyxTQUhIOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT2hCLEtBUlU7QUFTWEMsV0FUVyxtQkFTRkMsUUFURSxFQVNRO0FBQ2YsYUFBS0YsU0FBTCxHQUFpQkUsUUFBakI7QUFDSCxLQVhVO0FBWVhDLGFBWlcscUJBWUFDLE1BWkEsRUFZUTtBQUNmLGFBQUtDLE9BQUwsR0FBZUQsTUFBZjtBQUNILEtBZFU7QUFlWEUsYUFmVyx1QkFlRTtBQUNULGVBQU8sS0FBS0QsT0FBWjtBQUNILEtBakJVO0FBa0JYRSxpQkFsQlcseUJBa0JJQyxVQWxCSixFQWtCZ0I7QUFDdkIsYUFBS0MsV0FBTCxHQUFtQkQsVUFBbkI7QUFDSCxLQXBCVTtBQXFCWEUsaUJBckJXLDJCQXFCTTtBQUNkLGVBQU8sS0FBS0QsV0FBWjtBQUNGO0FBdkJVLEMiLCJmaWxlIjoidXNlckluZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlT3ZlcnZpZXcgYXJoYXQtcGx1Z2luLXVzZXJJbmZvIOeUqOaIt+S/oeaBr1xuICogQGF1dGhvciBYaWFvQmluIExpKGxpeGlhb2Jpbjg4NzhAZ21haWwuY29tKSBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8vIGltcG9ydCB7IGluaXRVc2VyIH0gZnJvbSAnLi4vZnVuY3Rpb24vaW5pdFVzZXInO1xuaW1wb3J0IGNoZWNrU2Vzc2lvbiBmcm9tICcuLi9mdW5jdGlvbi9jaGVja1Nlc3Npb24nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgYXN5bmMgZ2V0SW5mbyAoKSB7XG4gICAgICAgIHZhciByZXMgPSBhd2FpdCBjaGVja1Nlc3Npb24oKTtcbiAgICAgICAgLy8gaWYgKHJlcykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJJbmZvO1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gdG9hc3QoJ+eZu+W9leS/oeaBr+WkseaViCcpO1xuICAgICAgICAvLyB9XG4gICAgfSxcbiAgICBzZXRJbmZvICh1c2VySW5mbykge1xuICAgICAgICB0aGlzLl91c2VySW5mbyA9IHVzZXJJbmZvO1xuICAgIH0sXG4gICAgc2V0T3BlbklkIChvcGVuSWQpIHtcbiAgICAgICAgdGhpcy5fb3BlbklkID0gb3BlbklkOyBcbiAgICB9LFxuICAgIGdldE9wZW5JZCAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vcGVuSWQ7XG4gICAgfSxcbiAgICBzZXRTZXNzaW9uS2V5IChzZXNzaW9uS2V5KSB7XG4gICAgICAgIHRoaXMuX3Nlc3Npb25LZXkgPSBzZXNzaW9uS2V5O1xuICAgIH0sXG4gICAgZ2V0U2Vzc2lvbktleSAoKSB7XG4gICAgICAgcmV0dXJuIHRoaXMuX3Nlc3Npb25LZXk7IFxuICAgIH1cbn0iXX0=