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
            pages: ['pages/index', 'pages/card', 'pages/productDetail', 'pages/orderConfirm'],
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJvcGVuSWQiLCJzZXNzaW9uS2V5IiwidXNlIiwidGVzdEFzeW5jIiwicyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsInNsZWVwIiwiZGF0YSIsImNiIiwidGhhdCIsImdldFVzZXJJbmZvIiwic3VjY2VzcyIsInJlcyIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5Qkksd0JBQWU7QUFBQTs7QUFBQTs7QUFBQSxjQXJCZkEsTUFxQmUsR0FyQk47QUFDTEMsbUJBQU8sQ0FDSCxhQURHLEVBRUgsWUFGRyxFQUdILHFCQUhHLEVBSUgsb0JBSkcsQ0FERjtBQU9MQyxvQkFBUTtBQUNKQyxxQ0FBcUIsT0FEakI7QUFFSkMsOENBQThCLE1BRjFCO0FBR0pDLHdDQUF3QixFQUhwQjtBQUlKQyx3Q0FBd0I7QUFKcEI7QUFQSCxTQXFCTTtBQUFBLGNBTmZDLFVBTWUsR0FORjtBQUNUQyxzQkFBVSxJQUREO0FBRVRDLG9CQUFRLElBRkM7QUFHVEMsd0JBQVk7QUFISCxTQU1FOztBQUVYLGNBQUtDLEdBQUwsQ0FBUyxZQUFUO0FBQ0EsY0FBS0EsR0FBTCxDQUFTLFdBQVQ7QUFIVztBQUlkOzs7O21DQUVVO0FBQ1AsaUJBQUtDLFNBQUw7QUFDSDs7OzhCQUVNQyxDLEVBQUc7QUFDTixtQkFBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDQywyQkFBVyxZQUFNO0FBQ2JGLDRCQUFRLGtCQUFSO0FBQ0gsaUJBRkQsRUFFR0YsSUFBSSxJQUZQO0FBR0gsYUFKTSxDQUFQO0FBS0g7Ozs7Ozs7Ozs7O3VDQUdzQixLQUFLSyxLQUFMLENBQVcsQ0FBWCxDOzs7QUFBYkMsb0M7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQ0FHRUMsRSxFQUFJO0FBQ1osZ0JBQU1DLE9BQU8sSUFBYjtBQUNBLGdCQUFJLEtBQUtkLFVBQUwsQ0FBZ0JDLFFBQXBCLEVBQThCO0FBQzFCLHVCQUFPLEtBQUtELFVBQUwsQ0FBZ0JDLFFBQXZCO0FBQ0g7QUFDRCwyQkFBS2MsV0FBTCxDQUFpQjtBQUNiQyx1QkFEYSxtQkFDSkMsR0FESSxFQUNDO0FBQ1ZILHlCQUFLZCxVQUFMLENBQWdCQyxRQUFoQixHQUEyQmdCLElBQUloQixRQUEvQjtBQUNBWSwwQkFBTUEsR0FBR0ksSUFBSWhCLFFBQVAsQ0FBTjtBQUNIO0FBSlksYUFBakI7QUFNSDs7OztFQXhEd0IsZUFBS2lCLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gICAgaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xyXG4gICAgaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XHJcblxyXG4gICAgICAgIGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgcGFnZXM6IFtcclxuICAgICAgICAgICAgICAgICdwYWdlcy9pbmRleCcsXHJcbiAgICAgICAgICAgICAgICAncGFnZXMvY2FyZCcsXHJcbiAgICAgICAgICAgICAgICAncGFnZXMvcHJvZHVjdERldGFpbCcsXHJcbiAgICAgICAgICAgICAgICAncGFnZXMvb3JkZXJDb25maXJtJ1xyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB3aW5kb3c6IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnJyxcclxuICAgICAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICdibGFjaydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2xvYmFsRGF0YSA9IHtcclxuICAgICAgICAgICAgdXNlckluZm86IG51bGwsXHJcbiAgICAgICAgICAgIG9wZW5JZDogbnVsbCxcclxuICAgICAgICAgICAgc2Vzc2lvbktleTogbnVsbFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgICAgICBzdXBlcigpXHJcbiAgICAgICAgICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4JylcclxuICAgICAgICAgICAgdGhpcy51c2UoJ3Byb21pc2lmeScpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvbkxhdW5jaCgpIHtcclxuICAgICAgICAgICAgdGhpcy50ZXN0QXN5bmMoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2xlZXAgKHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoJ3Byb21pc2UgcmVzb2x2ZWQnKVxyXG4gICAgICAgICAgICAgICAgfSwgcyAqIDEwMDApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhc3luYyB0ZXN0QXN5bmMgKCkge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5zbGVlcCgzKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0VXNlckluZm8oY2IpIHtcclxuICAgICAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdsb2JhbERhdGEudXNlckluZm8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdsb2JhbERhdGEudXNlckluZm9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB3ZXB5LmdldFVzZXJJbmZvKHtcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xyXG4gICAgICAgICAgICAgICAgICAgIGNiICYmIGNiKHJlcy51c2VySW5mbylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiJdfQ==