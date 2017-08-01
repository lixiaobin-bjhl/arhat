/**
 * @fileOverview function initUser
 * @author XiaoBin Li(lixiaobin8878@gmail.com)
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = initUser;

var _global = require('./../service/global.js');

var _userInfo = require('./../plugin/userInfo.js');

var _userInfo2 = _interopRequireDefault(_userInfo);

var _user = require('./../service/user.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function initUser(context) {
    return new Promise(function (resolve, reject) {
        (0, _global.login)().then(function (res) {
            (0, _global.jscode2Session)(res.code).then(function (res) {
                _userInfo2.default.setOpenId(res.openid);
                context.$invoke('footer', 'getCountByOpendId');
                _userInfo2.default.setSessionKey(res.session_key);
                (0, _global.getUserInfo)().then(function (res) {
                    _userInfo2.default.setInfo(res);
                    (0, _user.add)(res);
                    resolve(res);
                }).catch(reject);
            });
        });
    });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaXRVc2VyLmpzIl0sIm5hbWVzIjpbImluaXRVc2VyIiwiY29udGV4dCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidGhlbiIsInJlcyIsImNvZGUiLCJzZXRPcGVuSWQiLCJvcGVuaWQiLCIkaW52b2tlIiwic2V0U2Vzc2lvbktleSIsInNlc3Npb25fa2V5Iiwic2V0SW5mbyIsImNhdGNoIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFLQTs7Ozs7a0JBTXdCQSxROztBQUp4Qjs7QUFDQTs7OztBQUNBOzs7O0FBRWUsU0FBU0EsUUFBVCxDQUFtQkMsT0FBbkIsRUFBNEI7QUFDdkMsV0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQW9CO0FBQ25DLDZCQUNLQyxJQURMLENBQ1UsVUFBQ0MsR0FBRCxFQUFRO0FBQ1Ysd0NBQWVBLElBQUlDLElBQW5CLEVBQ0tGLElBREwsQ0FDVSxVQUFDQyxHQUFELEVBQVE7QUFDVixtQ0FBU0UsU0FBVCxDQUFtQkYsSUFBSUcsTUFBdkI7QUFDQVIsd0JBQVFTLE9BQVIsQ0FBZ0IsUUFBaEIsRUFBMEIsbUJBQTFCO0FBQ0EsbUNBQVNDLGFBQVQsQ0FBdUJMLElBQUlNLFdBQTNCO0FBQ0EsMkNBQ0tQLElBREwsQ0FDVSxVQUFDQyxHQUFELEVBQVE7QUFDVix1Q0FBU08sT0FBVCxDQUFpQlAsR0FBakI7QUFDQSxtQ0FBSUEsR0FBSjtBQUNBSCw0QkFBUUcsR0FBUjtBQUNILGlCQUxMLEVBTUtRLEtBTkwsQ0FNV1YsTUFOWDtBQU9ILGFBWkw7QUFhSCxTQWZMO0FBZ0JILEtBakJNLENBQVA7QUFrQkgiLCJmaWxlIjoiaW5pdFVzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlT3ZlcnZpZXcgZnVuY3Rpb24gaW5pdFVzZXJcbiAqIEBhdXRob3IgWGlhb0JpbiBMaShsaXhpYW9iaW44ODc4QGdtYWlsLmNvbSlcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7IGxvZ2luLCBnZXRVc2VySW5mbywganNjb2RlMlNlc3Npb24gfSBmcm9tICcuLi9zZXJ2aWNlL2dsb2JhbCc7XG5pbXBvcnQgdXNlckluZm8gZnJvbSAnLi4vcGx1Z2luL3VzZXJJbmZvJztcbmltcG9ydCB7IGFkZCB9IGZyb20gJy4uL3NlcnZpY2UvdXNlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRVc2VyIChjb250ZXh0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT4ge1xuICAgICAgICBsb2dpbigpXG4gICAgICAgICAgICAudGhlbigocmVzKT0+IHtcbiAgICAgICAgICAgICAgICBqc2NvZGUyU2Vzc2lvbihyZXMuY29kZSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcyk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySW5mby5zZXRPcGVuSWQocmVzLm9wZW5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LiRpbnZva2UoJ2Zvb3RlcicsICdnZXRDb3VudEJ5T3BlbmRJZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlckluZm8uc2V0U2Vzc2lvbktleShyZXMuc2Vzc2lvbl9rZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0VXNlckluZm8oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXMpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VySW5mby5zZXRJbmZvKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZChyZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pO1xuICAgIH0pO1xufSJdfQ==