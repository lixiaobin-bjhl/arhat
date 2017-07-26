'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

var _config = require('./config.js');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
    _inherits(_default, _wepy$app);

    function _default() {
        _classCallCheck(this, _default);

        var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

        _this.config = {
            pages: ['pages/index', 'pages/card', 'pages/productDetail', 'pages/orderConfirm', 'pages/shippingAddress', 'pages/fillShippingAddress', 'pages/order'],
            window: {
                backgroundTextStyle: 'light',
                navigationBarBackgroundColor: '#fff',
                navigationBarTitleText: '',
                navigationBarTextStyle: 'black'
            }
        };
        _this.globalData = {
            userInfo: null,
            openId: null,
            sessionKey: null
        };

        _this.use('requestfix');
        _this.use('promisify');
        return _this;
    }

    _createClass(_default, [{
        key: 'onLaunch',
        value: function onLaunch() {
            this.testAsync();
        }
    }, {
        key: 'sleep',
        value: function sleep(s) {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve('promise resolved');
                }, s * 1000);
            });
        }
    }, {
        key: 'testAsync',
        value: function () {
            var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                var data;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.sleep(3);

                            case 2:
                                data = _context.sent;

                            case 3:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function testAsync() {
                return _ref.apply(this, arguments);
            }

            return testAsync;
        }()
    }, {
        key: 'getUserInfo',
        value: function getUserInfo(cb) {
            var that = this;
            if (this.globalData.userInfo) {
                return this.globalData.userInfo;
            }
            _wepy2.default.getUserInfo({
                success: function success(res) {
                    that.globalData.userInfo = res.userInfo;
                    cb && cb(res.userInfo);
                }
            });
        }
    }]);

    return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJvcGVuSWQiLCJzZXNzaW9uS2V5IiwidXNlIiwidGVzdEFzeW5jIiwicyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsInNsZWVwIiwiZGF0YSIsImNiIiwidGhhdCIsImdldFVzZXJJbmZvIiwic3VjY2VzcyIsInJlcyIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0Qkksd0JBQWU7QUFBQTs7QUFBQTs7QUFBQSxjQXhCZkEsTUF3QmUsR0F4Qk47QUFDTEMsbUJBQU8sQ0FDSCxhQURHLEVBRUgsWUFGRyxFQUdILHFCQUhHLEVBSUgsb0JBSkcsRUFLSCx1QkFMRyxFQU1ILDJCQU5HLEVBT0gsYUFQRyxDQURGO0FBVUxDLG9CQUFRO0FBQ0pDLHFDQUFxQixPQURqQjtBQUVKQyw4Q0FBOEIsTUFGMUI7QUFHSkMsd0NBQXdCLEVBSHBCO0FBSUpDLHdDQUF3QjtBQUpwQjtBQVZILFNBd0JNO0FBQUEsY0FOZkMsVUFNZSxHQU5GO0FBQ1RDLHNCQUFVLElBREQ7QUFFVEMsb0JBQVEsSUFGQztBQUdUQyx3QkFBWTtBQUhILFNBTUU7O0FBRVgsY0FBS0MsR0FBTCxDQUFTLFlBQVQ7QUFDQSxjQUFLQSxHQUFMLENBQVMsV0FBVDtBQUhXO0FBSWQ7Ozs7bUNBRVU7QUFDUCxpQkFBS0MsU0FBTDtBQUNIOzs7OEJBRU1DLEMsRUFBRztBQUNOLG1CQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcENDLDJCQUFXLFlBQU07QUFDYkYsNEJBQVEsa0JBQVI7QUFDSCxpQkFGRCxFQUVHRixJQUFJLElBRlA7QUFHSCxhQUpNLENBQVA7QUFLSDs7Ozs7Ozs7Ozs7dUNBR3NCLEtBQUtLLEtBQUwsQ0FBVyxDQUFYLEM7OztBQUFiQyxvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O29DQUdFQyxFLEVBQUk7QUFDWixnQkFBTUMsT0FBTyxJQUFiO0FBQ0EsZ0JBQUksS0FBS2QsVUFBTCxDQUFnQkMsUUFBcEIsRUFBOEI7QUFDMUIsdUJBQU8sS0FBS0QsVUFBTCxDQUFnQkMsUUFBdkI7QUFDSDtBQUNELDJCQUFLYyxXQUFMLENBQWlCO0FBQ2JDLHVCQURhLG1CQUNKQyxHQURJLEVBQ0M7QUFDVkgseUJBQUtkLFVBQUwsQ0FBZ0JDLFFBQWhCLEdBQTJCZ0IsSUFBSWhCLFFBQS9CO0FBQ0FZLDBCQUFNQSxHQUFHSSxJQUFJaEIsUUFBUCxDQUFOO0FBQ0g7QUFKWSxhQUFqQjtBQU1IOzs7O0VBM0R3QixlQUFLaUIsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgICBpbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXHJcbiAgICBpbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJ1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xyXG5cclxuICAgICAgICBjb25maWcgPSB7XHJcbiAgICAgICAgICAgIHBhZ2VzOiBbXHJcbiAgICAgICAgICAgICAgICAncGFnZXMvaW5kZXgnLFxyXG4gICAgICAgICAgICAgICAgJ3BhZ2VzL2NhcmQnLFxyXG4gICAgICAgICAgICAgICAgJ3BhZ2VzL3Byb2R1Y3REZXRhaWwnLFxyXG4gICAgICAgICAgICAgICAgJ3BhZ2VzL29yZGVyQ29uZmlybScsXHJcbiAgICAgICAgICAgICAgICAncGFnZXMvc2hpcHBpbmdBZGRyZXNzJyxcclxuICAgICAgICAgICAgICAgICdwYWdlcy9maWxsU2hpcHBpbmdBZGRyZXNzJyxcclxuICAgICAgICAgICAgICAgICdwYWdlcy9vcmRlcidcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgd2luZG93OiB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxyXG4gICAgICAgICAgICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxyXG4gICAgICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJycsXHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdsb2JhbERhdGEgPSB7XHJcbiAgICAgICAgICAgIHVzZXJJbmZvOiBudWxsLFxyXG4gICAgICAgICAgICBvcGVuSWQ6IG51bGwsXHJcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IG51bGxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICAgICAgc3VwZXIoKVxyXG4gICAgICAgICAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpXHJcbiAgICAgICAgICAgIHRoaXMudXNlKCdwcm9taXNpZnknKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb25MYXVuY2goKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGVzdEFzeW5jKClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNsZWVwIChzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCdwcm9taXNlIHJlc29sdmVkJylcclxuICAgICAgICAgICAgICAgIH0sIHMgKiAxMDAwKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXN5bmMgdGVzdEFzeW5jICgpIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuc2xlZXAoMylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldFVzZXJJbmZvKGNiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd2VweS5nZXRVc2VySW5mbyh7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0Lmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cclxuICAgICAgICAgICAgICAgICAgICBjYiAmJiBjYihyZXMudXNlckluZm8pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4iXX0=