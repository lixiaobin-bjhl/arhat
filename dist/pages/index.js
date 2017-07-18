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
                _this.setData('bannerOption', bannerOption);
                return data;
            },

            getProductList: function getProductList() {
                wx.showLoading();
                (0, _product.getList)().then(function (res) {
                    wx.hideLoading();
                    _this.setData('products', _this.methods.adaptList(res.data.list));
                }).catch(function () {
                    _this.setData('products', []);
                    wx.hideLoading();
                });
            },
            purchase: _purchase2.default,
            /**
             * 去查看购物车 
             */
            toCard: function toCard() {},
            addToCard: function addToCard(item) {
                wx.showLoading();
                (0, _card.addToCard)({
                    product: item._id,
                    count: 1
                }).then(function () {
                    wx.hideLoading();
                    toast('已成功加到购物车');
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiZGF0YSIsImJhbm5lck9wdGlvbiIsInByb2R1Y3RzIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsImNvbXBvbmVudHMiLCJmb290ZXIiLCJtZXRob2RzIiwiYWRhcHRMaXN0IiwiZm9yRWFjaCIsIml0ZW0iLCJzdG9yYWdlSWRzIiwibGVuZ3RoIiwic3RvcmFnZUlkIiwiaW5kZXgiLCJpbWFnZVVybCIsInB1c2giLCJpbWFnZSIsIl9pZCIsInNldERhdGEiLCJnZXRQcm9kdWN0TGlzdCIsInd4Iiwic2hvd0xvYWRpbmciLCJ0aGVuIiwicmVzIiwiaGlkZUxvYWRpbmciLCJsaXN0IiwiY2F0Y2giLCJwdXJjaGFzZSIsInRvQ2FyZCIsImFkZFRvQ2FyZCIsInByb2R1Y3QiLCJjb3VudCIsInRvYXN0Iiwic2V0TmF2aWdhdGlvbkJhclRpdGxlIiwidGl0bGUiLCJuYW1lIiwic2V0VXNlckluZm8iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNqQkMsSSxHQUFPO0FBQ0hDLDBCQUFjLEVBRFg7QUFFSEMsc0JBQVUsSUFGUDtBQUdIQywyQkFBZSxJQUhaO0FBSUhDLHNCQUFVLElBSlA7QUFLSEMsc0JBQVUsSUFMUDtBQU1IQyxzQkFBVTtBQU5QLFMsUUFTUEMsVSxHQUFhO0FBQ1RDO0FBRFMsUyxRQXFCYkMsTyxHQUFVO0FBQ05DLHVCQUFXLG1CQUFDVixJQUFELEVBQVM7QUFDaEIsb0JBQUlDLGVBQWUsRUFBbkI7QUFDQUQscUJBQUtXLE9BQUwsQ0FBYSxVQUFDQyxJQUFELEVBQVM7QUFDbEIsd0JBQUlDLGFBQWFELEtBQUtDLFVBQXRCO0FBQ0Esd0JBQUlBLGNBQWNBLFdBQVdDLE1BQTdCLEVBQXFDO0FBQ2pDRCxtQ0FBV0YsT0FBWCxDQUFtQixVQUFDSSxTQUFELEVBQVlDLEtBQVosRUFBcUI7QUFDcEM7QUFDQSxnQ0FBSUEsVUFBVSxDQUFkLEVBQWlCO0FBQ2JKLHFDQUFLSyxRQUFMLEdBQWdCLDZCQUFjRixTQUFkLENBQWhCO0FBQ0o7QUFDQyw2QkFIRCxNQUdPO0FBQ0hkLDZDQUFhaUIsSUFBYixDQUFrQjtBQUNkQywyQ0FBTyw2QkFBY0osU0FBZCxDQURPO0FBRWRLLHlDQUFLUixLQUFLUTtBQUZJLGlDQUFsQjtBQUlIO0FBQ0oseUJBWEQ7QUFZSDtBQUNKLGlCQWhCRDtBQWlCQSxzQkFBS0MsT0FBTCxDQUFhLGNBQWIsRUFBNkJwQixZQUE3QjtBQUNBLHVCQUFPRCxJQUFQO0FBQ0gsYUF0Qks7O0FBd0JOc0IsNEJBQWdCLDBCQUFLO0FBQ2pCQyxtQkFBR0MsV0FBSDtBQUNBLHdDQUNLQyxJQURMLENBQ1UsVUFBQ0MsR0FBRCxFQUFRO0FBQ1ZILHVCQUFHSSxXQUFIO0FBQ0EsMEJBQUtOLE9BQUwsQ0FBYSxVQUFiLEVBQXlCLE1BQUtaLE9BQUwsQ0FBYUMsU0FBYixDQUF1QmdCLElBQUkxQixJQUFKLENBQVM0QixJQUFoQyxDQUF6QjtBQUNILGlCQUpMLEVBS0tDLEtBTEwsQ0FLVyxZQUFLO0FBQ1IsMEJBQUtSLE9BQUwsQ0FBYSxVQUFiLEVBQXlCLEVBQXpCO0FBQ0FFLHVCQUFHSSxXQUFIO0FBQ0gsaUJBUkw7QUFTSCxhQW5DSztBQW9DTkcsd0NBcENNO0FBcUNOOzs7QUFHQUMsa0JBeENNLG9CQXdDSSxDQUVULENBMUNLO0FBMkNOQyxxQkEzQ00scUJBMkNLcEIsSUEzQ0wsRUEyQ1c7QUFDYlcsbUJBQUdDLFdBQUg7QUFDQSxxQ0FBVTtBQUNOUyw2QkFBU3JCLEtBQUtRLEdBRFI7QUFFTmMsMkJBQU87QUFGRCxpQkFBVixFQUlDVCxJQUpELENBSU0sWUFBSztBQUNQRix1QkFBR0ksV0FBSDtBQUNBUSwwQkFBTSxVQUFOO0FBQ0gsaUJBUEQ7QUFRSDtBQXJESyxTOzs7OztpQ0FqQkE7QUFDTixpQkFBSzFCLE9BQUwsQ0FBYWEsY0FBYjtBQUNBQyxlQUFHYSxxQkFBSCxDQUF5QjtBQUNyQkMsdUJBQU8saUJBQU9DO0FBRE8sYUFBekI7QUFHQSxpQkFBS0MsV0FBTDtBQUNIOzs7Ozs7Ozs7O0FBR09iLG1DOzs7dUNBRVksd0JBQVMsSUFBVCxDOzs7QUFBWkEsbUM7Ozs7Ozs7O0FBRUFTLHNDQUFNLFVBQU47Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUEzQnVCLGVBQUtLLEk7O2tCQUFuQnpDLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgICBpbXBvcnQgZm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJ1xyXG4gICAgaW1wb3J0IHsgZ2V0TGlzdCB9IGZyb20gJy4uL3NlcnZpY2UvcHJvZHVjdCc7XHJcbiAgICBpbXBvcnQgeyBhZGRUb0NhcmQgfSBmcm9tICcuLi9zZXJ2aWNlL2NhcmQnO1xyXG4gICAgaW1wb3J0IHsgbG9naW4sIHRva2VuIH0gZnJvbSAnLi4vc2VydmljZS91c2VyJztcclxuICAgIGltcG9ydCBjb21wcmVzc0ltYWdlIGZyb20gJy4uL2Z1bmN0aW9uL2NvbXByZXNzSW1hZ2UnO1xyXG4gICAgaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnO1xyXG4gICAgaW1wb3J0IHsgZ2V0VXNlckluZm8gfSBmcm9tICcuLi9zZXJ2aWNlL2dsb2JhbCc7XHJcbiAgICBpbXBvcnQgdXNlckluZm8gZnJvbSAnLi4vcGx1Z2luL3VzZXJJbmZvJztcclxuICAgIGltcG9ydCBpbml0VXNlciBmcm9tICcuLi9mdW5jdGlvbi9pbml0VXNlcic7XHJcbiAgICBpbXBvcnQgcHVyY2hhc2UgZnJvbSAnLi4vZnVuY3Rpb24vcHVyY2hhc2UnO1xyXG4gIFxyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICAgIGJhbm5lck9wdGlvbjogW10sXHJcbiAgICAgICAgICAgIHByb2R1Y3RzOiBudWxsLFxyXG4gICAgICAgICAgICBpbmRpY2F0b3JEb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgaW50ZXJ2YWw6IDUwMDAsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb21wb25lbnRzID0ge1xyXG4gICAgICAgICAgICBmb290ZXJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWV0aG9kcy5nZXRQcm9kdWN0TGlzdCgpO1xyXG4gICAgICAgICAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IGNvbmZpZy5uYW1lXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnNldFVzZXJJbmZvKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhc3luYyBzZXRVc2VySW5mbygpIHtcclxuICAgICAgICAgICAgbGV0IHJlcztcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHJlcyA9IGF3YWl0IGluaXRVc2VyKHRoaXMpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdCgn6I635Y+W55So5oi35L+h5oGv5aSx6LSlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgICAgIGFkYXB0TGlzdDogKGRhdGEpPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIGJhbm5lck9wdGlvbiA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZGF0YS5mb3JFYWNoKChpdGVtKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3RvcmFnZUlkcyA9IGl0ZW0uc3RvcmFnZUlkcztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RvcmFnZUlkcyAmJiBzdG9yYWdlSWRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yYWdlSWRzLmZvckVhY2goKHN0b3JhZ2VJZCwgaW5kZXgpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5Lqn5ZOB5LuF5pi+56S656ysMeW8oOWbvlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbWFnZVVybCA9IGNvbXByZXNzSW1hZ2Uoc3RvcmFnZUlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5YW25L2Z5Zu+54mH5pS+5YiwYmFubmVy5Lit5pi+56S6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbm5lck9wdGlvbi5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IGNvbXByZXNzSW1hZ2Uoc3RvcmFnZUlkKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2lkOiBpdGVtLl9pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSgnYmFubmVyT3B0aW9uJywgYmFubmVyT3B0aW9uKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgZ2V0UHJvZHVjdExpc3Q6ICgpPT4ge1xyXG4gICAgICAgICAgICAgICAgd3guc2hvd0xvYWRpbmcoKTtcclxuICAgICAgICAgICAgICAgIGdldExpc3QoKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXMpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoJ3Byb2R1Y3RzJywgdGhpcy5tZXRob2RzLmFkYXB0TGlzdChyZXMuZGF0YS5saXN0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKCk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSgncHJvZHVjdHMnLCBbXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHB1cmNoYXNlLFxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5Y675p+l55yL6LSt54mp6L2mIFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgdG9DYXJkICgpIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhZGRUb0NhcmQgKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKCk7XHJcbiAgICAgICAgICAgICAgICBhZGRUb0NhcmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3Q6IGl0ZW0uX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50OiAxXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdCgn5bey5oiQ5Yqf5Yqg5Yiw6LSt54mp6L2mJyk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4iXX0=