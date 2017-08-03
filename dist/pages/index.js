'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _footer = require('./../components/footer.js');

var _footer2 = _interopRequireDefault(_footer);

var _product = require('./../service/product.js');

var _card = require('./../service/card.js');

var _user = require('./../service/user.js');

var _compressImage = require('./../function/compressImage.js');

var _compressImage2 = _interopRequireDefault(_compressImage);

var _config = require('./../config.js');

var _config2 = _interopRequireDefault(_config);

var _global = require('./../service/global.js');

var _userInfo = require('./../plugin/userInfo.js');

var _userInfo2 = _interopRequireDefault(_userInfo);

var _initUser = require('./../function/initUser.js');

var _initUser2 = _interopRequireDefault(_initUser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
    _inherits(Index, _wepy$page);

    function Index() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Index);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            bannerOption: [],
            products: null,
            indicatorDots: true,
            autoplay: true,
            interval: 5000,
            duration: 1000
        }, _this.$props = { "footer": { "from": "home" } }, _this.$events = {}, _this.components = {
            footer: _footer2.default
        }, _this.adaptList = function (data) {
            var bannerOption = [];
            data.forEach(function (item) {
                var storageIds = item.storageIds;
                if (storageIds && storageIds.length) {
                    storageIds.forEach(function (storageId, index) {
                        // 产品仅显示第1张图
                        if (index === 0) {
                            item.imageUrl = (0, _compressImage2.default)(storageId);
                            // 其余图片放到banner中显示
                        } else {
                            bannerOption.push({
                                image: (0, _compressImage2.default)(storageId),
                                _id: item._id
                            });
                        }
                    });
                }
            });
            _this.bannerOption = bannerOption;
            return data;
        }, _this.getProductList = function () {
            wx.showLoading();
            (0, _product.getList)().then(function (res) {
                wx.hideLoading();
                _this.products = _this.adaptList(res.data.list);
                _this.$apply();
            }).catch(function () {
                _this.products = [];
                wx.hideLoading();
            });
        }, _this.methods = {
            /**
             * 购买
             */
            pay: function pay(item) {
                wx.navigateTo({
                    url: 'orderConfirm?products=' + JSON.stringify([{
                        count: 1,
                        id: item._id
                    }])
                });
            },
            addToCard: function addToCard(item) {
                var _this2 = this;

                wx.showLoading();
                (0, _card.addToCard)({
                    product: item._id,
                    count: 1
                }).then(function () {
                    wx.hideLoading();
                    _this2.$invoke('footer', 'getCountByOpendId');
                    toast('已成功加到购物车');
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onShow',
        value: function onShow() {
            if (_userInfo2.default.getOpenId()) {
                this.$invoke('footer', 'getCountByOpendId');
            }
        }
    }, {
        key: 'onLoad',
        value: function onLoad() {
            this.getProductList();
            wx.setNavigationBarTitle({
                title: _config2.default.name
            });
            this.setUserInfo();
        }
    }, {
        key: 'setUserInfo',
        value: function () {
            var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                var res;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                res = void 0;
                                _context.prev = 1;
                                _context.next = 4;
                                return (0, _initUser2.default)(this);

                            case 4:
                                res = _context.sent;
                                _context.next = 10;
                                break;

                            case 7:
                                _context.prev = 7;
                                _context.t0 = _context['catch'](1);

                                toast('获取用户信息失败');

                            case 10:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[1, 7]]);
            }));

            function setUserInfo() {
                return _ref2.apply(this, arguments);
            }

            return setUserInfo;
        }()
        /**
         * 适配产品列表
         */

        /**
         * 获取产品列表 
         */

    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiZGF0YSIsImJhbm5lck9wdGlvbiIsInByb2R1Y3RzIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiZm9vdGVyIiwiYWRhcHRMaXN0IiwiZm9yRWFjaCIsIml0ZW0iLCJzdG9yYWdlSWRzIiwibGVuZ3RoIiwic3RvcmFnZUlkIiwiaW5kZXgiLCJpbWFnZVVybCIsInB1c2giLCJpbWFnZSIsIl9pZCIsImdldFByb2R1Y3RMaXN0Iiwid3giLCJzaG93TG9hZGluZyIsInRoZW4iLCJyZXMiLCJoaWRlTG9hZGluZyIsImxpc3QiLCIkYXBwbHkiLCJjYXRjaCIsIm1ldGhvZHMiLCJwYXkiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvdW50IiwiaWQiLCJhZGRUb0NhcmQiLCJwcm9kdWN0IiwiJGludm9rZSIsInRvYXN0IiwiZ2V0T3BlbklkIiwic2V0TmF2aWdhdGlvbkJhclRpdGxlIiwidGl0bGUiLCJuYW1lIiwic2V0VXNlckluZm8iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLEksR0FBTztBQUNIQywwQkFBYyxFQURYO0FBRUhDLHNCQUFVLElBRlA7QUFHSEMsMkJBQWUsSUFIWjtBQUlIQyxzQkFBVSxJQUpQO0FBS0hDLHNCQUFVLElBTFA7QUFNSEMsc0JBQVU7QUFOUCxTLFFBU1JDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxRQUFPLE1BQVIsRUFBVixFLFFBQ2hCQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDRkM7QUFERSxTLFFBNkJOQyxTLEdBQVksVUFBQ1gsSUFBRCxFQUFTO0FBQ2pCLGdCQUFJQyxlQUFlLEVBQW5CO0FBQ0FELGlCQUFLWSxPQUFMLENBQWEsVUFBQ0MsSUFBRCxFQUFTO0FBQ2xCLG9CQUFJQyxhQUFhRCxLQUFLQyxVQUF0QjtBQUNBLG9CQUFJQSxjQUFjQSxXQUFXQyxNQUE3QixFQUFxQztBQUNqQ0QsK0JBQVdGLE9BQVgsQ0FBbUIsVUFBQ0ksU0FBRCxFQUFZQyxLQUFaLEVBQXFCO0FBQ3BDO0FBQ0EsNEJBQUlBLFVBQVUsQ0FBZCxFQUFpQjtBQUNiSixpQ0FBS0ssUUFBTCxHQUFnQiw2QkFBY0YsU0FBZCxDQUFoQjtBQUNKO0FBQ0MseUJBSEQsTUFHTztBQUNIZix5Q0FBYWtCLElBQWIsQ0FBa0I7QUFDZEMsdUNBQU8sNkJBQWNKLFNBQWQsQ0FETztBQUVkSyxxQ0FBS1IsS0FBS1E7QUFGSSw2QkFBbEI7QUFJSDtBQUNKLHFCQVhEO0FBWUg7QUFDSixhQWhCRDtBQWlCQSxrQkFBS3BCLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0EsbUJBQU9ELElBQVA7QUFDSCxTLFFBSURzQixjLEdBQWlCLFlBQU07QUFDbkJDLGVBQUdDLFdBQUg7QUFDSSxvQ0FDS0MsSUFETCxDQUNVLFVBQUNDLEdBQUQsRUFBUTtBQUNWSCxtQkFBR0ksV0FBSDtBQUNBLHNCQUFLekIsUUFBTCxHQUFnQixNQUFLUyxTQUFMLENBQWVlLElBQUkxQixJQUFKLENBQVM0QixJQUF4QixDQUFoQjtBQUNBLHNCQUFLQyxNQUFMO0FBQ0gsYUFMTCxFQU1LQyxLQU5MLENBTVcsWUFBSztBQUNSLHNCQUFLNUIsUUFBTCxHQUFnQixFQUFoQjtBQUNBcUIsbUJBQUdJLFdBQUg7QUFDSCxhQVRMO0FBVVAsUyxRQUVESSxPLEdBQVU7QUFDTjs7O0FBR0FDLGVBSk0sZUFJRG5CLElBSkMsRUFJSztBQUNSVSxtQkFBR1UsVUFBSCxDQUFjO0FBQ1ZDLHlCQUFLLDJCQUEyQkMsS0FBS0MsU0FBTCxDQUFlLENBQUM7QUFDNUNDLCtCQUFPLENBRHFDO0FBRTVDQyw0QkFBSXpCLEtBQUtRO0FBRm1DLHFCQUFELENBQWY7QUFEdEIsaUJBQWQ7QUFNRixhQVhLO0FBWU5rQixxQkFaTSxxQkFZSzFCLElBWkwsRUFZVztBQUFBOztBQUNiVSxtQkFBR0MsV0FBSDtBQUNBLHFDQUFVO0FBQ05nQiw2QkFBUzNCLEtBQUtRLEdBRFI7QUFFTmdCLDJCQUFPO0FBRkQsaUJBQVYsRUFJQ1osSUFKRCxDQUlNLFlBQUs7QUFDUEYsdUJBQUdJLFdBQUg7QUFDQSwyQkFBS2MsT0FBTCxDQUFhLFFBQWIsRUFBdUIsbUJBQXZCO0FBQ0FDLDBCQUFNLFVBQU47QUFDSCxpQkFSRDtBQVNIO0FBdkJLLFM7Ozs7O2lDQWhFQTtBQUNOLGdCQUFJLG1CQUFTQyxTQUFULEVBQUosRUFBMEI7QUFDdEIscUJBQUtGLE9BQUwsQ0FBYSxRQUFiLEVBQXVCLG1CQUF2QjtBQUNIO0FBQ0o7OztpQ0FFUztBQUNOLGlCQUFLbkIsY0FBTDtBQUNBQyxlQUFHcUIscUJBQUgsQ0FBeUI7QUFDckJDLHVCQUFPLGlCQUFPQztBQURPLGFBQXpCO0FBR0EsaUJBQUtDLFdBQUw7QUFDSDs7Ozs7Ozs7OztBQUdPckIsbUM7Ozt1Q0FFWSx3QkFBUyxJQUFULEM7OztBQUFaQSxtQzs7Ozs7Ozs7QUFFQWdCLHNDQUFNLFVBQU47Ozs7Ozs7Ozs7Ozs7Ozs7QUFHUjs7OztBQXlCQTs7Ozs7OztFQS9EK0IsZUFBS00sSTs7a0JBQW5CakQsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICAgIGltcG9ydCBmb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInXHJcbiAgICBpbXBvcnQgeyBnZXRMaXN0IH0gZnJvbSAnLi4vc2VydmljZS9wcm9kdWN0J1xyXG4gICAgaW1wb3J0IHsgYWRkVG9DYXJkIH0gZnJvbSAnLi4vc2VydmljZS9jYXJkJ1xyXG4gICAgaW1wb3J0IHsgbG9naW4sIHRva2VuIH0gZnJvbSAnLi4vc2VydmljZS91c2VyJztcclxuICAgIGltcG9ydCBjb21wcmVzc0ltYWdlIGZyb20gJy4uL2Z1bmN0aW9uL2NvbXByZXNzSW1hZ2UnXHJcbiAgICBpbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZydcclxuICAgIGltcG9ydCB7IGdldFVzZXJJbmZvIH0gZnJvbSAnLi4vc2VydmljZS9nbG9iYWwnXHJcbiAgICBpbXBvcnQgdXNlckluZm8gZnJvbSAnLi4vcGx1Z2luL3VzZXJJbmZvJ1xyXG4gICAgaW1wb3J0IGluaXRVc2VyIGZyb20gJy4uL2Z1bmN0aW9uL2luaXRVc2VyJ1xyXG4gIFxyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICAgIGJhbm5lck9wdGlvbjogW10sXHJcbiAgICAgICAgICAgIHByb2R1Y3RzOiBudWxsLFxyXG4gICAgICAgICAgICBpbmRpY2F0b3JEb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgaW50ZXJ2YWw6IDUwMDAsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICRwcm9wcyA9IHtcImZvb3RlclwiOntcImZyb21cIjpcImhvbWVcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgICAgICAgICBmb290ZXJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9uU2hvdyAoKSB7XHJcbiAgICAgICAgICAgIGlmICh1c2VySW5mby5nZXRPcGVuSWQoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kaW52b2tlKCdmb290ZXInLCAnZ2V0Q291bnRCeU9wZW5kSWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb25Mb2FkICgpIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRQcm9kdWN0TGlzdCgpO1xyXG4gICAgICAgICAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IGNvbmZpZy5uYW1lXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnNldFVzZXJJbmZvKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhc3luYyBzZXRVc2VySW5mbygpIHtcclxuICAgICAgICAgICAgbGV0IHJlcztcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHJlcyA9IGF3YWl0IGluaXRVc2VyKHRoaXMpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdCgn6I635Y+W55So5oi35L+h5oGv5aSx6LSlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6YCC6YWN5Lqn5ZOB5YiX6KGoXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgYWRhcHRMaXN0ID0gKGRhdGEpPT4ge1xyXG4gICAgICAgICAgICB2YXIgYmFubmVyT3B0aW9uID0gW107XHJcbiAgICAgICAgICAgIGRhdGEuZm9yRWFjaCgoaXRlbSk9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RvcmFnZUlkcyA9IGl0ZW0uc3RvcmFnZUlkcztcclxuICAgICAgICAgICAgICAgIGlmIChzdG9yYWdlSWRzICYmIHN0b3JhZ2VJZHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmFnZUlkcy5mb3JFYWNoKChzdG9yYWdlSWQsIGluZGV4KT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5Lqn5ZOB5LuF5pi+56S656ysMeW8oOWbvlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW1hZ2VVcmwgPSBjb21wcmVzc0ltYWdlKHN0b3JhZ2VJZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5YW25L2Z5Zu+54mH5pS+5YiwYmFubmVy5Lit5pi+56S6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYW5uZXJPcHRpb24ucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IGNvbXByZXNzSW1hZ2Uoc3RvcmFnZUlkKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaWQ6IGl0ZW0uX2lkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5iYW5uZXJPcHRpb24gPSBiYW5uZXJPcHRpb247XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6I635Y+W5Lqn5ZOB5YiX6KGoIFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldFByb2R1Y3RMaXN0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB3eC5zaG93TG9hZGluZygpO1xyXG4gICAgICAgICAgICAgICAgZ2V0TGlzdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcyk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdHMgPSB0aGlzLmFkYXB0TGlzdChyZXMuZGF0YS5saXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0cyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDotK3kubBcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHBheSAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgICAgIHVybDogJ29yZGVyQ29uZmlybT9wcm9kdWN0cz0nICsgSlNPTi5zdHJpbmdpZnkoW3tcclxuICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICBpZDogaXRlbS5faWRcclxuICAgICAgICAgICAgICAgICAgIH1dKVxyXG4gICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYWRkVG9DYXJkIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICB3eC5zaG93TG9hZGluZygpO1xyXG4gICAgICAgICAgICAgICAgYWRkVG9DYXJkKHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0OiBpdGVtLl9pZCxcclxuICAgICAgICAgICAgICAgICAgICBjb3VudDogMVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kaW52b2tlKCdmb290ZXInLCAnZ2V0Q291bnRCeU9wZW5kSWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdCgn5bey5oiQ5Yqf5Yqg5Yiw6LSt54mp6L2mJyk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4iXX0=