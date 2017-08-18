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

var _addToCard = require('./../components/addToCard.js');

var _addToCard2 = _interopRequireDefault(_addToCard);

var _copyright = require('./../components/copyright.js');

var _copyright2 = _interopRequireDefault(_copyright);

var _toast = require('./../function/toast.js');

var _toast2 = _interopRequireDefault(_toast);

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
            duration: 1000,
            selectedProduct: null
        }, _this.$props = { "footer": { "from": "home" } }, _this.$events = { "addToCard": { "v-on:addtocardsuccess": "addToCardHandler" } }, _this.components = {
            footer: _footer2.default,
            copyright: _copyright2.default,
            addToCard: _addToCard2.default
        }, _this.adaptList = function (data) {
            var bannerOption = [];
            data.forEach(function (item) {
                var storageIds = item.storageIds;
                item.count = 1;
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
            wx.showLoading({ title: '加载中' });
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


            /**
             * 显示添加到购物车对话框
             */
            showAddToCard: function showAddToCard(item) {
                _this.$invoke('addToCard', 'show', item);
            },

            /**
             * 添加到购物车中处理 
             */
            addToCardHandler: function addToCardHandler() {
                console.log('add to card success');
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onShow',
        value: function onShow() {
            if (_userInfo2.default.getOpenid()) {
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
            // wx.redirectTo({
            //     url: 'productDetail?pid=59206d80c5ca1c13e0ce5789'
            // });
            // wx.redirectTo({
            //     url: 'orderConfirm?products=' + JSON.stringify([{count:2, id: "59206d80c5ca1c13e0ce5789"}])
            // });
            // wx.redirectTo({
            //     url: 'orderDetail?id=59971e9ba1a9a11666bffea5'
            // });
            // wx.redirectTo({
            //     url: 'order'
            // });
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

                                (0, _toast2.default)('获取用户信息失败');

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiZGF0YSIsImJhbm5lck9wdGlvbiIsInByb2R1Y3RzIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsInNlbGVjdGVkUHJvZHVjdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiZm9vdGVyIiwiY29weXJpZ2h0IiwiYWRkVG9DYXJkIiwiYWRhcHRMaXN0IiwiZm9yRWFjaCIsIml0ZW0iLCJzdG9yYWdlSWRzIiwiY291bnQiLCJsZW5ndGgiLCJzdG9yYWdlSWQiLCJpbmRleCIsImltYWdlVXJsIiwicHVzaCIsImltYWdlIiwiX2lkIiwiZ2V0UHJvZHVjdExpc3QiLCJ3eCIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJ0aGVuIiwicmVzIiwiaGlkZUxvYWRpbmciLCJsaXN0IiwiJGFwcGx5IiwiY2F0Y2giLCJtZXRob2RzIiwicGF5IiwibmF2aWdhdGVUbyIsInVybCIsIkpTT04iLCJzdHJpbmdpZnkiLCJpZCIsInNob3dBZGRUb0NhcmQiLCIkaW52b2tlIiwiYWRkVG9DYXJkSGFuZGxlciIsImNvbnNvbGUiLCJsb2ciLCJnZXRPcGVuaWQiLCJzZXROYXZpZ2F0aW9uQmFyVGl0bGUiLCJuYW1lIiwic2V0VXNlckluZm8iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLEksR0FBTztBQUNIQywwQkFBYyxFQURYO0FBRUhDLHNCQUFVLElBRlA7QUFHSEMsMkJBQWUsSUFIWjtBQUlIQyxzQkFBVSxJQUpQO0FBS0hDLHNCQUFVLElBTFA7QUFNSEMsc0JBQVUsSUFOUDtBQU9IQyw2QkFBaUI7QUFQZCxTLFFBVVJDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxRQUFPLE1BQVIsRUFBVixFLFFBQ1pDLE8sR0FBVSxFQUFDLGFBQVksRUFBQyx5QkFBd0Isa0JBQXpCLEVBQWIsRSxRQUNUQyxVLEdBQWE7QUFDTkMsb0NBRE07QUFFTkMsMENBRk07QUFHTkM7QUFITSxTLFFBMkNWQyxTLEdBQVksVUFBQ2QsSUFBRCxFQUFVO0FBQ2xCLGdCQUFJQyxlQUFlLEVBQW5CO0FBQ0FELGlCQUFLZSxPQUFMLENBQWEsVUFBQ0MsSUFBRCxFQUFVO0FBQ25CLG9CQUFJQyxhQUFhRCxLQUFLQyxVQUF0QjtBQUNBRCxxQkFBS0UsS0FBTCxHQUFhLENBQWI7QUFDQSxvQkFBSUQsY0FBY0EsV0FBV0UsTUFBN0IsRUFBcUM7QUFDakNGLCtCQUFXRixPQUFYLENBQW1CLFVBQUNLLFNBQUQsRUFBWUMsS0FBWixFQUFzQjtBQUNyQztBQUNBLDRCQUFJQSxVQUFVLENBQWQsRUFBaUI7QUFDYkwsaUNBQUtNLFFBQUwsR0FBZ0IsNkJBQWNGLFNBQWQsQ0FBaEI7QUFDSjtBQUNDLHlCQUhELE1BR087QUFDSG5CLHlDQUFhc0IsSUFBYixDQUFrQjtBQUNkQyx1Q0FBTyw2QkFBY0osU0FBZCxDQURPO0FBRWRLLHFDQUFLVCxLQUFLUztBQUZJLDZCQUFsQjtBQUlIO0FBQ0oscUJBWEQ7QUFZSDtBQUNKLGFBakJEO0FBa0JBLGtCQUFLeEIsWUFBTCxHQUFvQkEsWUFBcEI7QUFDQSxtQkFBT0QsSUFBUDtBQUNILFMsUUFJRDBCLGMsR0FBaUIsWUFBTTtBQUNuQkMsZUFBR0MsV0FBSCxDQUFlLEVBQUNDLE9BQU8sS0FBUixFQUFmO0FBQ0Esb0NBQ0tDLElBREwsQ0FDVSxVQUFDQyxHQUFELEVBQVM7QUFDWEosbUJBQUdLLFdBQUg7QUFDQSxzQkFBSzlCLFFBQUwsR0FBZ0IsTUFBS1ksU0FBTCxDQUFlaUIsSUFBSS9CLElBQUosQ0FBU2lDLElBQXhCLENBQWhCO0FBQ0Esc0JBQUtDLE1BQUw7QUFDSCxhQUxMLEVBTUtDLEtBTkwsQ0FNVyxZQUFNO0FBQ1Qsc0JBQUtqQyxRQUFMLEdBQWdCLEVBQWhCO0FBQ0F5QixtQkFBR0ssV0FBSDtBQUNILGFBVEw7QUFVSCxTLFFBRURJLE8sR0FBVTtBQUNOOzs7QUFHQUMsZUFKTSxlQUlEckIsSUFKQyxFQUlLO0FBQ1BXLG1CQUFHVyxVQUFILENBQWM7QUFDVkMseUJBQUssMkJBQTJCQyxLQUFLQyxTQUFMLENBQWUsQ0FBQztBQUM1Q3ZCLCtCQUFPLENBRHFDO0FBRTVDd0IsNEJBQUkxQixLQUFLUztBQUZtQyxxQkFBRCxDQUFmO0FBRHRCLGlCQUFkO0FBTUgsYUFYSzs7O0FBYU47OztBQUdBa0IsMkJBQWUsdUJBQUMzQixJQUFELEVBQVU7QUFDckIsc0JBQUs0QixPQUFMLENBQWEsV0FBYixFQUEwQixNQUExQixFQUFrQzVCLElBQWxDO0FBQ0gsYUFsQks7O0FBb0JOOzs7QUFHQTZCLDRCQXZCTSw4QkF1QmM7QUFDaEJDLHdCQUFRQyxHQUFSLENBQVkscUJBQVo7QUFDSDtBQXpCSyxTOzs7OztpQ0E3RUQ7QUFDTCxnQkFBSSxtQkFBU0MsU0FBVCxFQUFKLEVBQTBCO0FBQ3RCLHFCQUFLSixPQUFMLENBQWEsUUFBYixFQUF1QixtQkFBdkI7QUFDSDtBQUNKOzs7aUNBRVE7QUFDTCxpQkFBS2xCLGNBQUw7QUFDQUMsZUFBR3NCLHFCQUFILENBQXlCO0FBQ3JCcEIsdUJBQU8saUJBQU9xQjtBQURPLGFBQXpCO0FBR0EsaUJBQUtDLFdBQUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7Ozs7Ozs7OztBQUdPcEIsbUM7Ozt1Q0FFWSx3QkFBUyxJQUFULEM7OztBQUFaQSxtQzs7Ozs7Ozs7QUFFQSxxREFBTSxVQUFOOzs7Ozs7Ozs7Ozs7Ozs7O0FBR1I7Ozs7QUEwQkE7Ozs7Ozs7RUEvRStCLGVBQUtxQixJOztrQkFBbkJyRCxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgZm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJ1xyXG5pbXBvcnQgeyBnZXRMaXN0IH0gZnJvbSAnLi4vc2VydmljZS9wcm9kdWN0J1xyXG5pbXBvcnQgeyBsb2dpbiwgdG9rZW4gfSBmcm9tICcuLi9zZXJ2aWNlL3VzZXInXHJcbmltcG9ydCBjb21wcmVzc0ltYWdlIGZyb20gJy4uL2Z1bmN0aW9uL2NvbXByZXNzSW1hZ2UnXHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJ1xyXG5pbXBvcnQgeyBnZXRVc2VySW5mbyB9IGZyb20gJy4uL3NlcnZpY2UvZ2xvYmFsJ1xyXG5pbXBvcnQgdXNlckluZm8gZnJvbSAnLi4vcGx1Z2luL3VzZXJJbmZvJ1xyXG5pbXBvcnQgaW5pdFVzZXIgZnJvbSAnLi4vZnVuY3Rpb24vaW5pdFVzZXInXHJcbmltcG9ydCBhZGRUb0NhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9hZGRUb0NhcmQnXHJcbmltcG9ydCBjb3B5cmlnaHQgZnJvbSAnLi4vY29tcG9uZW50cy9jb3B5cmlnaHQnXHJcbmltcG9ydCB0b2FzdCBmcm9tICcuLi9mdW5jdGlvbi90b2FzdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGRhdGEgPSB7XHJcbiAgICAgICAgYmFubmVyT3B0aW9uOiBbXSxcclxuICAgICAgICBwcm9kdWN0czogbnVsbCxcclxuICAgICAgICBpbmRpY2F0b3JEb3RzOiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgIGludGVydmFsOiA1MDAwLFxyXG4gICAgICAgIGR1cmF0aW9uOiAxMDAwLFxyXG4gICAgICAgIHNlbGVjdGVkUHJvZHVjdDogbnVsbFxyXG4gICAgfVxyXG5cclxuICAgJHByb3BzID0ge1wiZm9vdGVyXCI6e1wiZnJvbVwiOlwiaG9tZVwifX07XHJcbiRldmVudHMgPSB7XCJhZGRUb0NhcmRcIjp7XCJ2LW9uOmFkZHRvY2FyZHN1Y2Nlc3NcIjpcImFkZFRvQ2FyZEhhbmRsZXJcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgICAgICBmb290ZXIsXHJcbiAgICAgICAgY29weXJpZ2h0LFxyXG4gICAgICAgIGFkZFRvQ2FyZFxyXG4gICAgfVxyXG5cclxuICAgIG9uU2hvdygpIHtcclxuICAgICAgICBpZiAodXNlckluZm8uZ2V0T3BlbmlkKCkpIHtcclxuICAgICAgICAgICAgdGhpcy4kaW52b2tlKCdmb290ZXInLCAnZ2V0Q291bnRCeU9wZW5kSWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuZ2V0UHJvZHVjdExpc3QoKTtcclxuICAgICAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe1xyXG4gICAgICAgICAgICB0aXRsZTogY29uZmlnLm5hbWVcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNldFVzZXJJbmZvKCk7XHJcbiAgICAgICAgLy8gd3gucmVkaXJlY3RUbyh7XHJcbiAgICAgICAgLy8gICAgIHVybDogJ3Byb2R1Y3REZXRhaWw/cGlkPTU5MjA2ZDgwYzVjYTFjMTNlMGNlNTc4OSdcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICAvLyB3eC5yZWRpcmVjdFRvKHtcclxuICAgICAgICAvLyAgICAgdXJsOiAnb3JkZXJDb25maXJtP3Byb2R1Y3RzPScgKyBKU09OLnN0cmluZ2lmeShbe2NvdW50OjIsIGlkOiBcIjU5MjA2ZDgwYzVjYTFjMTNlMGNlNTc4OVwifV0pXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgLy8gd3gucmVkaXJlY3RUbyh7XHJcbiAgICAgICAgLy8gICAgIHVybDogJ29yZGVyRGV0YWlsP2lkPTU5OTcxZTliYTFhOWExMTY2NmJmZmVhNSdcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICAvLyB3eC5yZWRpcmVjdFRvKHtcclxuICAgICAgICAvLyAgICAgdXJsOiAnb3JkZXInXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc2V0VXNlckluZm8oKSB7XHJcbiAgICAgICAgbGV0IHJlcztcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXMgPSBhd2FpdCBpbml0VXNlcih0aGlzKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHRvYXN0KCfojrflj5bnlKjmiLfkv6Hmga/lpLHotKUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOmAgumFjeS6p+WTgeWIl+ihqFxyXG4gICAgICovXHJcbiAgICBhZGFwdExpc3QgPSAoZGF0YSkgPT4ge1xyXG4gICAgICAgIHZhciBiYW5uZXJPcHRpb24gPSBbXTtcclxuICAgICAgICBkYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgdmFyIHN0b3JhZ2VJZHMgPSBpdGVtLnN0b3JhZ2VJZHM7XHJcbiAgICAgICAgICAgIGl0ZW0uY291bnQgPSAxO1xyXG4gICAgICAgICAgICBpZiAoc3RvcmFnZUlkcyAmJiBzdG9yYWdlSWRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgc3RvcmFnZUlkcy5mb3JFYWNoKChzdG9yYWdlSWQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5Lqn5ZOB5LuF5pi+56S656ysMeW8oOWbvlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmltYWdlVXJsID0gY29tcHJlc3NJbWFnZShzdG9yYWdlSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5YW25L2Z5Zu+54mH5pS+5YiwYmFubmVy5Lit5pi+56S6XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFubmVyT3B0aW9uLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IGNvbXByZXNzSW1hZ2Uoc3RvcmFnZUlkKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pZDogaXRlbS5faWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmJhbm5lck9wdGlvbiA9IGJhbm5lck9wdGlvbjtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluS6p+WTgeWIl+ihqCBcclxuICAgICAqL1xyXG4gICAgZ2V0UHJvZHVjdExpc3QgPSAoKSA9PiB7XHJcbiAgICAgICAgd3guc2hvd0xvYWRpbmcoe3RpdGxlOiAn5Yqg6L295LitJ30pO1xyXG4gICAgICAgIGdldExpc3QoKVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0cyA9IHRoaXMuYWRhcHRMaXN0KHJlcy5kYXRhLmxpc3QpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdHMgPSBbXTtcclxuICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOi0reS5sFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHBheSAoaXRlbSkge1xyXG4gICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgIHVybDogJ29yZGVyQ29uZmlybT9wcm9kdWN0cz0nICsgSlNPTi5zdHJpbmdpZnkoW3tcclxuICAgICAgICAgICAgICAgICAgICBjb3VudDogMSxcclxuICAgICAgICAgICAgICAgICAgICBpZDogaXRlbS5faWRcclxuICAgICAgICAgICAgICAgIH1dKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmmL7npLrmt7vliqDliLDotK3nianovablr7nor53moYZcclxuICAgICAgICAgKi9cclxuICAgICAgICBzaG93QWRkVG9DYXJkOiAoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiRpbnZva2UoJ2FkZFRvQ2FyZCcsICdzaG93JywgaXRlbSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5re75Yqg5Yiw6LSt54mp6L2m5Lit5aSE55CGIFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGFkZFRvQ2FyZEhhbmRsZXIgKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYWRkIHRvIGNhcmQgc3VjY2VzcycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=