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

var _purchase = require('./../function/purchase.js');

var _purchase2 = _interopRequireDefault(_purchase);

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
        }, _this.components = {
            footer: _footer2.default
        }, _this.methods = {
            adaptList: function adaptList(data) {
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
                _this.$apply();
                return data;
            },

            getProductList: function getProductList() {
                wx.showLoading();
                (0, _product.getList)().then(function (res) {
                    wx.hideLoading();
                    _this.products = _this.methods.adaptList(res.data.list);
                    _this.$apply();
                }).catch(function () {
                    _this.products = [];
                    wx.hideLoading();
                });
            },
            purchase: _purchase2.default,
            /**
             * 购买
             */
            pay: function pay(item) {
                wx.navigateTo({
                    url: 'orderConfirm?pids=' + item._id
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
            this.methods.getProductList();
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
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiZGF0YSIsImJhbm5lck9wdGlvbiIsInByb2R1Y3RzIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsImNvbXBvbmVudHMiLCJmb290ZXIiLCJtZXRob2RzIiwiYWRhcHRMaXN0IiwiZm9yRWFjaCIsIml0ZW0iLCJzdG9yYWdlSWRzIiwibGVuZ3RoIiwic3RvcmFnZUlkIiwiaW5kZXgiLCJpbWFnZVVybCIsInB1c2giLCJpbWFnZSIsIl9pZCIsIiRhcHBseSIsImdldFByb2R1Y3RMaXN0Iiwid3giLCJzaG93TG9hZGluZyIsInRoZW4iLCJyZXMiLCJoaWRlTG9hZGluZyIsImxpc3QiLCJjYXRjaCIsInB1cmNoYXNlIiwicGF5IiwibmF2aWdhdGVUbyIsInVybCIsImFkZFRvQ2FyZCIsInByb2R1Y3QiLCJjb3VudCIsIiRpbnZva2UiLCJ0b2FzdCIsImdldE9wZW5JZCIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsInRpdGxlIiwibmFtZSIsInNldFVzZXJJbmZvIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLEksR0FBTztBQUNIQywwQkFBYyxFQURYO0FBRUhDLHNCQUFVLElBRlA7QUFHSEMsMkJBQWUsSUFIWjtBQUlIQyxzQkFBVSxJQUpQO0FBS0hDLHNCQUFVLElBTFA7QUFNSEMsc0JBQVU7QUFOUCxTLFFBU1BDLFUsR0FBYTtBQUNUQztBQURTLFMsUUEyQmJDLE8sR0FBVTtBQUNOQyx1QkFBVyxtQkFBQ1YsSUFBRCxFQUFTO0FBQ2hCLG9CQUFJQyxlQUFlLEVBQW5CO0FBQ0FELHFCQUFLVyxPQUFMLENBQWEsVUFBQ0MsSUFBRCxFQUFTO0FBQ2xCLHdCQUFJQyxhQUFhRCxLQUFLQyxVQUF0QjtBQUNBLHdCQUFJQSxjQUFjQSxXQUFXQyxNQUE3QixFQUFxQztBQUNqQ0QsbUNBQVdGLE9BQVgsQ0FBbUIsVUFBQ0ksU0FBRCxFQUFZQyxLQUFaLEVBQXFCO0FBQ3BDO0FBQ0EsZ0NBQUlBLFVBQVUsQ0FBZCxFQUFpQjtBQUNiSixxQ0FBS0ssUUFBTCxHQUFnQiw2QkFBY0YsU0FBZCxDQUFoQjtBQUNKO0FBQ0MsNkJBSEQsTUFHTztBQUNIZCw2Q0FBYWlCLElBQWIsQ0FBa0I7QUFDZEMsMkNBQU8sNkJBQWNKLFNBQWQsQ0FETztBQUVkSyx5Q0FBS1IsS0FBS1E7QUFGSSxpQ0FBbEI7QUFJSDtBQUNKLHlCQVhEO0FBWUg7QUFDSixpQkFoQkQ7QUFpQkEsc0JBQUtuQixZQUFMLEdBQW9CQSxZQUFwQjtBQUNBLHNCQUFLb0IsTUFBTDtBQUNBLHVCQUFPckIsSUFBUDtBQUNILGFBdkJLOztBQXlCTnNCLDRCQUFnQiwwQkFBSztBQUNqQkMsbUJBQUdDLFdBQUg7QUFDQSx3Q0FDS0MsSUFETCxDQUNVLFVBQUNDLEdBQUQsRUFBUTtBQUNWSCx1QkFBR0ksV0FBSDtBQUNBLDBCQUFLekIsUUFBTCxHQUFnQixNQUFLTyxPQUFMLENBQWFDLFNBQWIsQ0FBdUJnQixJQUFJMUIsSUFBSixDQUFTNEIsSUFBaEMsQ0FBaEI7QUFDQSwwQkFBS1AsTUFBTDtBQUNILGlCQUxMLEVBTUtRLEtBTkwsQ0FNVyxZQUFLO0FBQ1IsMEJBQUszQixRQUFMLEdBQWdCLEVBQWhCO0FBQ0FxQix1QkFBR0ksV0FBSDtBQUNILGlCQVRMO0FBVUgsYUFyQ0s7QUFzQ05HLHdDQXRDTTtBQXVDTjs7O0FBR0FDLGVBMUNNLGVBMENEbkIsSUExQ0MsRUEwQ0s7QUFDUlcsbUJBQUdTLFVBQUgsQ0FBYztBQUNWQyx5QkFBSyx1QkFBdUJyQixLQUFLUTtBQUR2QixpQkFBZDtBQUdGLGFBOUNLO0FBK0NOYyxxQkEvQ00scUJBK0NLdEIsSUEvQ0wsRUErQ1c7QUFBQTs7QUFDYlcsbUJBQUdDLFdBQUg7QUFDQSxxQ0FBVTtBQUNOVyw2QkFBU3ZCLEtBQUtRLEdBRFI7QUFFTmdCLDJCQUFPO0FBRkQsaUJBQVYsRUFJQ1gsSUFKRCxDQUlNLFlBQUs7QUFDUEYsdUJBQUdJLFdBQUg7QUFDQSwyQkFBS1UsT0FBTCxDQUFhLFFBQWIsRUFBdUIsbUJBQXZCO0FBQ0FDLDBCQUFNLFVBQU47QUFDSCxpQkFSRDtBQVNIO0FBMURLLFM7Ozs7O2lDQXZCQTtBQUNOLGdCQUFJLG1CQUFTQyxTQUFULEVBQUosRUFBMEI7QUFDdEIscUJBQUtGLE9BQUwsQ0FBYSxRQUFiLEVBQXVCLG1CQUF2QjtBQUNIO0FBQ0o7OztpQ0FFUztBQUNOLGlCQUFLNUIsT0FBTCxDQUFhYSxjQUFiO0FBQ0FDLGVBQUdpQixxQkFBSCxDQUF5QjtBQUNyQkMsdUJBQU8saUJBQU9DO0FBRE8sYUFBekI7QUFHQSxpQkFBS0MsV0FBTDtBQUNIOzs7Ozs7Ozs7O0FBR09qQixtQzs7O3VDQUVZLHdCQUFTLElBQVQsQzs7O0FBQVpBLG1DOzs7Ozs7OztBQUVBWSxzQ0FBTSxVQUFOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBakN1QixlQUFLTSxJOztrQkFBbkI3QyxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gICAgaW1wb3J0IGZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3RlcidcclxuICAgIGltcG9ydCB7IGdldExpc3QgfSBmcm9tICcuLi9zZXJ2aWNlL3Byb2R1Y3QnO1xyXG4gICAgaW1wb3J0IHsgYWRkVG9DYXJkIH0gZnJvbSAnLi4vc2VydmljZS9jYXJkJztcclxuICAgIGltcG9ydCB7IGxvZ2luLCB0b2tlbiB9IGZyb20gJy4uL3NlcnZpY2UvdXNlcic7XHJcbiAgICBpbXBvcnQgY29tcHJlc3NJbWFnZSBmcm9tICcuLi9mdW5jdGlvbi9jb21wcmVzc0ltYWdlJztcclxuICAgIGltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcclxuICAgIGltcG9ydCB7IGdldFVzZXJJbmZvIH0gZnJvbSAnLi4vc2VydmljZS9nbG9iYWwnO1xyXG4gICAgaW1wb3J0IHVzZXJJbmZvIGZyb20gJy4uL3BsdWdpbi91c2VySW5mbyc7XHJcbiAgICBpbXBvcnQgaW5pdFVzZXIgZnJvbSAnLi4vZnVuY3Rpb24vaW5pdFVzZXInO1xyXG4gICAgaW1wb3J0IHB1cmNoYXNlIGZyb20gJy4uL2Z1bmN0aW9uL3B1cmNoYXNlJztcclxuICBcclxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgICAgICBkYXRhID0ge1xyXG4gICAgICAgICAgICBiYW5uZXJPcHRpb246IFtdLFxyXG4gICAgICAgICAgICBwcm9kdWN0czogbnVsbCxcclxuICAgICAgICAgICAgaW5kaWNhdG9yRG90czogdHJ1ZSxcclxuICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgIGludGVydmFsOiA1MDAwLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMTAwMFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29tcG9uZW50cyA9IHtcclxuICAgICAgICAgICAgZm9vdGVyXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvblNob3cgKCkge1xyXG4gICAgICAgICAgICBpZiAodXNlckluZm8uZ2V0T3BlbklkKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGludm9rZSgnZm9vdGVyJywgJ2dldENvdW50QnlPcGVuZElkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWV0aG9kcy5nZXRQcm9kdWN0TGlzdCgpO1xyXG4gICAgICAgICAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IGNvbmZpZy5uYW1lXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnNldFVzZXJJbmZvKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhc3luYyBzZXRVc2VySW5mbygpIHtcclxuICAgICAgICAgICAgbGV0IHJlcztcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHJlcyA9IGF3YWl0IGluaXRVc2VyKHRoaXMpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdCgn6I635Y+W55So5oi35L+h5oGv5aSx6LSlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgICAgIGFkYXB0TGlzdDogKGRhdGEpPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIGJhbm5lck9wdGlvbiA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZGF0YS5mb3JFYWNoKChpdGVtKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3RvcmFnZUlkcyA9IGl0ZW0uc3RvcmFnZUlkcztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RvcmFnZUlkcyAmJiBzdG9yYWdlSWRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yYWdlSWRzLmZvckVhY2goKHN0b3JhZ2VJZCwgaW5kZXgpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5Lqn5ZOB5LuF5pi+56S656ysMeW8oOWbvlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbWFnZVVybCA9IGNvbXByZXNzSW1hZ2Uoc3RvcmFnZUlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5YW25L2Z5Zu+54mH5pS+5YiwYmFubmVy5Lit5pi+56S6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbm5lck9wdGlvbi5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IGNvbXByZXNzSW1hZ2Uoc3RvcmFnZUlkKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2lkOiBpdGVtLl9pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFubmVyT3B0aW9uID0gYmFubmVyT3B0aW9uO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgZ2V0UHJvZHVjdExpc3Q6ICgpPT4ge1xyXG4gICAgICAgICAgICAgICAgd3guc2hvd0xvYWRpbmcoKTtcclxuICAgICAgICAgICAgICAgIGdldExpc3QoKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXMpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzID0gdGhpcy5tZXRob2RzLmFkYXB0TGlzdChyZXMuZGF0YS5saXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0cyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwdXJjaGFzZSxcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOi0reS5sFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgcGF5IChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgICAgdXJsOiAnb3JkZXJDb25maXJtP3BpZHM9JyArIGl0ZW0uX2lkXHJcbiAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhZGRUb0NhcmQgKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKCk7XHJcbiAgICAgICAgICAgICAgICBhZGRUb0NhcmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3Q6IGl0ZW0uX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50OiAxXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRpbnZva2UoJ2Zvb3RlcicsICdnZXRDb3VudEJ5T3BlbmRJZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0KCflt7LmiJDlip/liqDliLDotK3nianovaYnKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiJdfQ==