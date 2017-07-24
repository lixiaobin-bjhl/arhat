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
                    resolve(res);
                }).catch(reject);
            });
        });
    });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaXRVc2VyLmpzIl0sIm5hbWVzIjpbImluaXRVc2VyIiwiY29udGV4dCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidGhlbiIsInJlcyIsImNvZGUiLCJzZXRPcGVuSWQiLCJvcGVuaWQiLCIkaW52b2tlIiwic2V0U2Vzc2lvbktleSIsInNlc3Npb25fa2V5Iiwic2V0SW5mbyIsImNhdGNoIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFLQTs7Ozs7a0JBS3dCQSxROztBQUh4Qjs7QUFDQTs7Ozs7O0FBRWUsU0FBU0EsUUFBVCxDQUFtQkMsT0FBbkIsRUFBNEI7QUFDdkMsV0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQW9CO0FBQ25DLDZCQUNLQyxJQURMLENBQ1UsVUFBQ0MsR0FBRCxFQUFRO0FBQ1Ysd0NBQWVBLElBQUlDLElBQW5CLEVBQ0tGLElBREwsQ0FDVSxVQUFDQyxHQUFELEVBQVE7QUFDVixtQ0FBU0UsU0FBVCxDQUFtQkYsSUFBSUcsTUFBdkI7QUFDQVIsd0JBQVFTLE9BQVIsQ0FBZ0IsUUFBaEIsRUFBMEIsbUJBQTFCO0FBQ0EsbUNBQVNDLGFBQVQsQ0FBdUJMLElBQUlNLFdBQTNCO0FBQ0EsMkNBQ0tQLElBREwsQ0FDVSxVQUFDQyxHQUFELEVBQVE7QUFDVix1Q0FBU08sT0FBVCxDQUFpQlAsR0FBakI7QUFDQUgsNEJBQVFHLEdBQVI7QUFDSCxpQkFKTCxFQUtLUSxLQUxMLENBS1dWLE1BTFg7QUFNSCxhQVhMO0FBWUgsU0FkTDtBQWVILEtBaEJNLENBQVA7QUFpQkgiLCJmaWxlIjoiaW5pdFVzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlT3ZlcnZpZXcgZnVuY3Rpb24gaW5pdFVzZXJcbiAqIEBhdXRob3IgWGlhb0JpbiBMaShsaXhpYW9iaW44ODc4QGdtYWlsLmNvbSlcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7IGxvZ2luLCBnZXRVc2VySW5mbywganNjb2RlMlNlc3Npb24gfSBmcm9tICcuLi9zZXJ2aWNlL2dsb2JhbCc7XG5pbXBvcnQgdXNlckluZm8gZnJvbSAnLi4vcGx1Z2luL3VzZXJJbmZvJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdFVzZXIgKGNvbnRleHQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PiB7XG4gICAgICAgIGxvZ2luKClcbiAgICAgICAgICAgIC50aGVuKChyZXMpPT4ge1xuICAgICAgICAgICAgICAgIGpzY29kZTJTZXNzaW9uKHJlcy5jb2RlKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJbmZvLnNldE9wZW5JZChyZXMub3BlbmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuJGludm9rZSgnZm9vdGVyJywgJ2dldENvdW50QnlPcGVuZElkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySW5mby5zZXRTZXNzaW9uS2V5KHJlcy5zZXNzaW9uX2tleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRVc2VySW5mbygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcyk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJbmZvLnNldEluZm8ocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKHJlamVjdCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KTtcbiAgICB9KTtcbn0iXX0=