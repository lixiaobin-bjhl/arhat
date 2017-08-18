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
                var sessionData = JSON.parse(res.data.body);
                var openid = sessionData.openid;
                (0, _global.getUserInfo)().then(function (res) {
                    var params = res;
                    Object.assign(res, {
                        openid: openid
                    });
                    (0, _user.add)(params).then(function (res) {
                        var data = res.data;
                        wx.setStorageSync('user', {
                            id: data._id,
                            openid: openid
                        });
                        resolve(res);
                        context.$invoke('footer', 'getCountByOpendId');
                    });
                }).catch(reject);
            });
        });
    });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaXRVc2VyLmpzIl0sIm5hbWVzIjpbImluaXRVc2VyIiwiY29udGV4dCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidGhlbiIsInJlcyIsImNvZGUiLCJzZXNzaW9uRGF0YSIsIkpTT04iLCJwYXJzZSIsImRhdGEiLCJib2R5Iiwib3BlbmlkIiwicGFyYW1zIiwiT2JqZWN0IiwiYXNzaWduIiwid3giLCJzZXRTdG9yYWdlU3luYyIsImlkIiwiX2lkIiwiJGludm9rZSIsImNhdGNoIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFLQTs7Ozs7a0JBTXdCQSxROztBQUp4Qjs7QUFDQTs7OztBQUNBOzs7O0FBRWUsU0FBU0EsUUFBVCxDQUFtQkMsT0FBbkIsRUFBNEI7QUFDdkMsV0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQW9CO0FBQ25DLDZCQUNLQyxJQURMLENBQ1UsVUFBQ0MsR0FBRCxFQUFRO0FBQ1Ysd0NBQWVBLElBQUlDLElBQW5CLEVBQ0tGLElBREwsQ0FDVSxVQUFDQyxHQUFELEVBQVE7QUFDVixvQkFBSUUsY0FBY0MsS0FBS0MsS0FBTCxDQUFXSixJQUFJSyxJQUFKLENBQVNDLElBQXBCLENBQWxCO0FBQ0Esb0JBQUlDLFNBQVNMLFlBQVlLLE1BQXpCO0FBQ0EsMkNBQ0tSLElBREwsQ0FDVSxVQUFDQyxHQUFELEVBQVE7QUFDVix3QkFBSVEsU0FBU1IsR0FBYjtBQUNBUywyQkFBT0MsTUFBUCxDQUFjVixHQUFkLEVBQW1CO0FBQ2ZPO0FBRGUscUJBQW5CO0FBR0EsbUNBQUlDLE1BQUosRUFDS1QsSUFETCxDQUNVLFVBQUNDLEdBQUQsRUFBUTtBQUNWLDRCQUFJSyxPQUFPTCxJQUFJSyxJQUFmO0FBQ0FNLDJCQUFHQyxjQUFILENBQWtCLE1BQWxCLEVBQTBCO0FBQ3RCQyxnQ0FBSVIsS0FBS1MsR0FEYTtBQUV0QlAsb0NBQVFBO0FBRmMseUJBQTFCO0FBSUFWLGdDQUFRRyxHQUFSO0FBQ0FMLGdDQUFRb0IsT0FBUixDQUFnQixRQUFoQixFQUEwQixtQkFBMUI7QUFDSCxxQkFUTDtBQVVILGlCQWhCTCxFQWlCS0MsS0FqQkwsQ0FpQldsQixNQWpCWDtBQWtCSCxhQXRCTDtBQXVCSCxTQXpCTDtBQTBCSCxLQTNCTSxDQUFQO0FBNEJIIiwiZmlsZSI6ImluaXRVc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IGZ1bmN0aW9uIGluaXRVc2VyXG4gKiBAYXV0aG9yIFhpYW9CaW4gTGkobGl4aWFvYmluODg3OEBnbWFpbC5jb20pXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgeyBsb2dpbiwgZ2V0VXNlckluZm8sIGpzY29kZTJTZXNzaW9uIH0gZnJvbSAnLi4vc2VydmljZS9nbG9iYWwnO1xuaW1wb3J0IHVzZXJJbmZvIGZyb20gJy4uL3BsdWdpbi91c2VySW5mbyc7XG5pbXBvcnQgeyBhZGQgfSBmcm9tICcuLi9zZXJ2aWNlL3VzZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0VXNlciAoY29udGV4dCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+IHtcbiAgICAgICAgbG9naW4oKVxuICAgICAgICAgICAgLnRoZW4oKHJlcyk9PiB7XG4gICAgICAgICAgICAgICAganNjb2RlMlNlc3Npb24ocmVzLmNvZGUpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXMpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNlc3Npb25EYXRhID0gSlNPTi5wYXJzZShyZXMuZGF0YS5ib2R5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvcGVuaWQgPSBzZXNzaW9uRGF0YS5vcGVuaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRVc2VySW5mbygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcyk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXJhbXMgPSByZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocmVzLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZChwYXJhbXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCd1c2VyJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogZGF0YS5faWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5pZDogb3BlbmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuJGludm9rZSgnZm9vdGVyJywgJ2dldENvdW50QnlPcGVuZElkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChyZWplY3QpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSk7XG4gICAgfSk7XG59Il19