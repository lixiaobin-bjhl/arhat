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
            pages: ['pages/index', 'pages/card', 'pages/productDetail', 'pages/orderConfirm', 'pages/shippingAddress', 'pages/fillShippingAddress'],
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJvcGVuSWQiLCJzZXNzaW9uS2V5IiwidXNlIiwidGVzdEFzeW5jIiwicyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsInNsZWVwIiwiZGF0YSIsImNiIiwidGhhdCIsImdldFVzZXJJbmZvIiwic3VjY2VzcyIsInJlcyIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQkksd0JBQWU7QUFBQTs7QUFBQTs7QUFBQSxjQXZCZkEsTUF1QmUsR0F2Qk47QUFDTEMsbUJBQU8sQ0FDSCxhQURHLEVBRUgsWUFGRyxFQUdILHFCQUhHLEVBSUgsb0JBSkcsRUFLSCx1QkFMRyxFQU1ILDJCQU5HLENBREY7QUFTTEMsb0JBQVE7QUFDSkMscUNBQXFCLE9BRGpCO0FBRUpDLDhDQUE4QixNQUYxQjtBQUdKQyx3Q0FBd0IsRUFIcEI7QUFJSkMsd0NBQXdCO0FBSnBCO0FBVEgsU0F1Qk07QUFBQSxjQU5mQyxVQU1lLEdBTkY7QUFDVEMsc0JBQVUsSUFERDtBQUVUQyxvQkFBUSxJQUZDO0FBR1RDLHdCQUFZO0FBSEgsU0FNRTs7QUFFWCxjQUFLQyxHQUFMLENBQVMsWUFBVDtBQUNBLGNBQUtBLEdBQUwsQ0FBUyxXQUFUO0FBSFc7QUFJZDs7OzttQ0FFVTtBQUNQLGlCQUFLQyxTQUFMO0FBQ0g7Ozs4QkFFTUMsQyxFQUFHO0FBQ04sbUJBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQ0MsMkJBQVcsWUFBTTtBQUNiRiw0QkFBUSxrQkFBUjtBQUNILGlCQUZELEVBRUdGLElBQUksSUFGUDtBQUdILGFBSk0sQ0FBUDtBQUtIOzs7Ozs7Ozs7Ozt1Q0FHc0IsS0FBS0ssS0FBTCxDQUFXLENBQVgsQzs7O0FBQWJDLG9DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBR0VDLEUsRUFBSTtBQUNaLGdCQUFNQyxPQUFPLElBQWI7QUFDQSxnQkFBSSxLQUFLZCxVQUFMLENBQWdCQyxRQUFwQixFQUE4QjtBQUMxQix1QkFBTyxLQUFLRCxVQUFMLENBQWdCQyxRQUF2QjtBQUNIO0FBQ0QsMkJBQUtjLFdBQUwsQ0FBaUI7QUFDYkMsdUJBRGEsbUJBQ0pDLEdBREksRUFDQztBQUNWSCx5QkFBS2QsVUFBTCxDQUFnQkMsUUFBaEIsR0FBMkJnQixJQUFJaEIsUUFBL0I7QUFDQVksMEJBQU1BLEdBQUdJLElBQUloQixRQUFQLENBQU47QUFDSDtBQUpZLGFBQWpCO0FBTUg7Ozs7RUExRHdCLGVBQUtpQixHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICAgIGltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcclxuICAgIGltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnXHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XHJcblxyXG4gICAgICAgIGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgcGFnZXM6IFtcclxuICAgICAgICAgICAgICAgICdwYWdlcy9pbmRleCcsXHJcbiAgICAgICAgICAgICAgICAncGFnZXMvY2FyZCcsXHJcbiAgICAgICAgICAgICAgICAncGFnZXMvcHJvZHVjdERldGFpbCcsXHJcbiAgICAgICAgICAgICAgICAncGFnZXMvb3JkZXJDb25maXJtJyxcclxuICAgICAgICAgICAgICAgICdwYWdlcy9zaGlwcGluZ0FkZHJlc3MnLFxyXG4gICAgICAgICAgICAgICAgJ3BhZ2VzL2ZpbGxTaGlwcGluZ0FkZHJlc3MnXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIHdpbmRvdzoge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2xpZ2h0JyxcclxuICAgICAgICAgICAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgICAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnbG9iYWxEYXRhID0ge1xyXG4gICAgICAgICAgICB1c2VySW5mbzogbnVsbCxcclxuICAgICAgICAgICAgb3BlbklkOiBudWxsLFxyXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBudWxsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKClcclxuICAgICAgICAgICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKVxyXG4gICAgICAgICAgICB0aGlzLnVzZSgncHJvbWlzaWZ5JylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9uTGF1bmNoKCkge1xyXG4gICAgICAgICAgICB0aGlzLnRlc3RBc3luYygpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzbGVlcCAocykge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgncHJvbWlzZSByZXNvbHZlZCcpXHJcbiAgICAgICAgICAgICAgICB9LCBzICogMTAwMClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFzeW5jIHRlc3RBc3luYyAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLnNsZWVwKDMpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRVc2VySW5mbyhjYikge1xyXG4gICAgICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mb1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHdlcHkuZ2V0VXNlckluZm8oe1xyXG4gICAgICAgICAgICAgICAgc3VjY2VzcyAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXHJcbiAgICAgICAgICAgICAgICAgICAgY2IgJiYgY2IocmVzLnVzZXJJbmZvKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuIl19