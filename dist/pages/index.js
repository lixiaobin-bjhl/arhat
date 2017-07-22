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
                    _this.$apply();
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
                    _this2.$root.$broadcast('updatecard');
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiZGF0YSIsImJhbm5lck9wdGlvbiIsInByb2R1Y3RzIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsImNvbXBvbmVudHMiLCJmb290ZXIiLCJtZXRob2RzIiwiYWRhcHRMaXN0IiwiZm9yRWFjaCIsIml0ZW0iLCJzdG9yYWdlSWRzIiwibGVuZ3RoIiwic3RvcmFnZUlkIiwiaW5kZXgiLCJpbWFnZVVybCIsInB1c2giLCJpbWFnZSIsIl9pZCIsIiRhcHBseSIsImdldFByb2R1Y3RMaXN0Iiwid3giLCJzaG93TG9hZGluZyIsInRoZW4iLCJyZXMiLCJoaWRlTG9hZGluZyIsImxpc3QiLCJjYXRjaCIsInB1cmNoYXNlIiwicGF5IiwibmF2aWdhdGVUbyIsInVybCIsImFkZFRvQ2FyZCIsInByb2R1Y3QiLCJjb3VudCIsIiRyb290IiwiJGJyb2FkY2FzdCIsInRvYXN0Iiwic2V0TmF2aWdhdGlvbkJhclRpdGxlIiwidGl0bGUiLCJuYW1lIiwic2V0VXNlckluZm8iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNqQkMsSSxHQUFPO0FBQ0hDLDBCQUFjLEVBRFg7QUFFSEMsc0JBQVUsSUFGUDtBQUdIQywyQkFBZSxJQUhaO0FBSUhDLHNCQUFVLElBSlA7QUFLSEMsc0JBQVUsSUFMUDtBQU1IQyxzQkFBVTtBQU5QLFMsUUFTUEMsVSxHQUFhO0FBQ1RDO0FBRFMsUyxRQXFCYkMsTyxHQUFVO0FBQ05DLHVCQUFXLG1CQUFDVixJQUFELEVBQVM7QUFDaEIsb0JBQUlDLGVBQWUsRUFBbkI7QUFDQUQscUJBQUtXLE9BQUwsQ0FBYSxVQUFDQyxJQUFELEVBQVM7QUFDbEIsd0JBQUlDLGFBQWFELEtBQUtDLFVBQXRCO0FBQ0Esd0JBQUlBLGNBQWNBLFdBQVdDLE1BQTdCLEVBQXFDO0FBQ2pDRCxtQ0FBV0YsT0FBWCxDQUFtQixVQUFDSSxTQUFELEVBQVlDLEtBQVosRUFBcUI7QUFDcEM7QUFDQSxnQ0FBSUEsVUFBVSxDQUFkLEVBQWlCO0FBQ2JKLHFDQUFLSyxRQUFMLEdBQWdCLDZCQUFjRixTQUFkLENBQWhCO0FBQ0o7QUFDQyw2QkFIRCxNQUdPO0FBQ0hkLDZDQUFhaUIsSUFBYixDQUFrQjtBQUNkQywyQ0FBTyw2QkFBY0osU0FBZCxDQURPO0FBRWRLLHlDQUFLUixLQUFLUTtBQUZJLGlDQUFsQjtBQUlIO0FBQ0oseUJBWEQ7QUFZSDtBQUNKLGlCQWhCRDtBQWlCQSxzQkFBS25CLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0Esc0JBQUtvQixNQUFMO0FBQ0EsdUJBQU9yQixJQUFQO0FBQ0gsYUF2Qks7O0FBeUJOc0IsNEJBQWdCLDBCQUFLO0FBQ2pCQyxtQkFBR0MsV0FBSDtBQUNBLHdDQUNLQyxJQURMLENBQ1UsVUFBQ0MsR0FBRCxFQUFRO0FBQ1ZILHVCQUFHSSxXQUFIO0FBQ0EsMEJBQUt6QixRQUFMLEdBQWdCLE1BQUtPLE9BQUwsQ0FBYUMsU0FBYixDQUF1QmdCLElBQUkxQixJQUFKLENBQVM0QixJQUFoQyxDQUFoQjtBQUNBLDBCQUFLUCxNQUFMO0FBQ0gsaUJBTEwsRUFNS1EsS0FOTCxDQU1XLFlBQUs7QUFDUiwwQkFBSzNCLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSwwQkFBS21CLE1BQUw7QUFDQUUsdUJBQUdJLFdBQUg7QUFDSCxpQkFWTDtBQVdILGFBdENLO0FBdUNORyx3Q0F2Q007QUF3Q047OztBQUdBQyxlQTNDTSxlQTJDRG5CLElBM0NDLEVBMkNLO0FBQ1JXLG1CQUFHUyxVQUFILENBQWM7QUFDVkMseUJBQUssdUJBQXVCckIsS0FBS1E7QUFEdkIsaUJBQWQ7QUFHRixhQS9DSztBQWdETmMscUJBaERNLHFCQWdES3RCLElBaERMLEVBZ0RXO0FBQUE7O0FBQ2JXLG1CQUFHQyxXQUFIO0FBQ0EscUNBQVU7QUFDTlcsNkJBQVN2QixLQUFLUSxHQURSO0FBRU5nQiwyQkFBTztBQUZELGlCQUFWLEVBSUNYLElBSkQsQ0FJTSxZQUFLO0FBQ1BGLHVCQUFHSSxXQUFIO0FBQ0EsMkJBQUtVLEtBQUwsQ0FBV0MsVUFBWCxDQUFzQixZQUF0QjtBQUNBQywwQkFBTSxVQUFOO0FBQ0gsaUJBUkQ7QUFTSDtBQTNESyxTOzs7OztpQ0FqQkE7QUFDTixpQkFBSzlCLE9BQUwsQ0FBYWEsY0FBYjtBQUNBQyxlQUFHaUIscUJBQUgsQ0FBeUI7QUFDckJDLHVCQUFPLGlCQUFPQztBQURPLGFBQXpCO0FBR0EsaUJBQUtDLFdBQUw7QUFDSDs7Ozs7Ozs7OztBQUdPakIsbUM7Ozt1Q0FFWSx3QkFBUyxJQUFULEM7OztBQUFaQSxtQzs7Ozs7Ozs7QUFFQWEsc0NBQU0sVUFBTjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTNCdUIsZUFBS0ssSTs7a0JBQW5CN0MsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICAgIGltcG9ydCBmb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInXHJcbiAgICBpbXBvcnQgeyBnZXRMaXN0IH0gZnJvbSAnLi4vc2VydmljZS9wcm9kdWN0JztcclxuICAgIGltcG9ydCB7IGFkZFRvQ2FyZCB9IGZyb20gJy4uL3NlcnZpY2UvY2FyZCc7XHJcbiAgICBpbXBvcnQgeyBsb2dpbiwgdG9rZW4gfSBmcm9tICcuLi9zZXJ2aWNlL3VzZXInO1xyXG4gICAgaW1wb3J0IGNvbXByZXNzSW1hZ2UgZnJvbSAnLi4vZnVuY3Rpb24vY29tcHJlc3NJbWFnZSc7XHJcbiAgICBpbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XHJcbiAgICBpbXBvcnQgeyBnZXRVc2VySW5mbyB9IGZyb20gJy4uL3NlcnZpY2UvZ2xvYmFsJztcclxuICAgIGltcG9ydCB1c2VySW5mbyBmcm9tICcuLi9wbHVnaW4vdXNlckluZm8nO1xyXG4gICAgaW1wb3J0IGluaXRVc2VyIGZyb20gJy4uL2Z1bmN0aW9uL2luaXRVc2VyJztcclxuICAgIGltcG9ydCBwdXJjaGFzZSBmcm9tICcuLi9mdW5jdGlvbi9wdXJjaGFzZSc7XHJcbiAgXHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgICAgYmFubmVyT3B0aW9uOiBbXSxcclxuICAgICAgICAgICAgcHJvZHVjdHM6IG51bGwsXHJcbiAgICAgICAgICAgIGluZGljYXRvckRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICBpbnRlcnZhbDogNTAwMCxcclxuICAgICAgICAgICAgZHVyYXRpb246IDEwMDBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgICAgICAgIGZvb3RlclxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb25Mb2FkICgpIHtcclxuICAgICAgICAgICAgdGhpcy5tZXRob2RzLmdldFByb2R1Y3RMaXN0KCk7XHJcbiAgICAgICAgICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogY29uZmlnLm5hbWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VXNlckluZm8oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFzeW5jIHNldFVzZXJJbmZvKCkge1xyXG4gICAgICAgICAgICBsZXQgcmVzO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcmVzID0gYXdhaXQgaW5pdFVzZXIodGhpcyk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0KCfojrflj5bnlKjmiLfkv6Hmga/lpLHotKUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWV0aG9kcyA9IHtcclxuICAgICAgICAgICAgYWRhcHRMaXN0OiAoZGF0YSk9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYmFubmVyT3B0aW9uID0gW107XHJcbiAgICAgICAgICAgICAgICBkYXRhLmZvckVhY2goKGl0ZW0pPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzdG9yYWdlSWRzID0gaXRlbS5zdG9yYWdlSWRzO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdG9yYWdlSWRzICYmIHN0b3JhZ2VJZHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JhZ2VJZHMuZm9yRWFjaCgoc3RvcmFnZUlkLCBpbmRleCk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDkuqflk4Hku4XmmL7npLrnrKwx5byg5Zu+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmltYWdlVXJsID0gY29tcHJlc3NJbWFnZShzdG9yYWdlSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlhbbkvZnlm77niYfmlL7liLBiYW5uZXLkuK3mmL7npLpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFubmVyT3B0aW9uLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZTogY29tcHJlc3NJbWFnZShzdG9yYWdlSWQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaWQ6IGl0ZW0uX2lkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iYW5uZXJPcHRpb24gPSBiYW5uZXJPcHRpb247XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBnZXRQcm9kdWN0TGlzdDogKCk9PiB7XHJcbiAgICAgICAgICAgICAgICB3eC5zaG93TG9hZGluZygpO1xyXG4gICAgICAgICAgICAgICAgZ2V0TGlzdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcyk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdHMgPSB0aGlzLm1ldGhvZHMuYWRhcHRMaXN0KHJlcy5kYXRhLmxpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHB1cmNoYXNlLFxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog6LSt5LmwXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBwYXkgKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICAgICB1cmw6ICdvcmRlckNvbmZpcm0/cGlkcz0nICsgaXRlbS5faWRcclxuICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFkZFRvQ2FyZCAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgd3guc2hvd0xvYWRpbmcoKTtcclxuICAgICAgICAgICAgICAgIGFkZFRvQ2FyZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdDogaXRlbS5faWQsXHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IDFcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGJyb2FkY2FzdCgndXBkYXRlY2FyZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0KCflt7LmiJDlip/liqDliLDotK3nianovaYnKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiJdfQ==