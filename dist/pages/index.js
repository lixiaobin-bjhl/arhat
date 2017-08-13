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
            // wx.redirectTo({
            //     url: 'productDetail?pid=59206d80c5ca1c13e0ce5789'
            // });
            // wx.redirectTo({
            //     url: 'orderConfirm?products=' + JSON.stringify([{count:2, id: "59206d80c5ca1c13e0ce5789"}])
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiZGF0YSIsImJhbm5lck9wdGlvbiIsInByb2R1Y3RzIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsInNlbGVjdGVkUHJvZHVjdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiZm9vdGVyIiwiY29weXJpZ2h0IiwiYWRkVG9DYXJkIiwiYWRhcHRMaXN0IiwiZm9yRWFjaCIsIml0ZW0iLCJzdG9yYWdlSWRzIiwiY291bnQiLCJsZW5ndGgiLCJzdG9yYWdlSWQiLCJpbmRleCIsImltYWdlVXJsIiwicHVzaCIsImltYWdlIiwiX2lkIiwiZ2V0UHJvZHVjdExpc3QiLCJ3eCIsInNob3dMb2FkaW5nIiwidGhlbiIsInJlcyIsImhpZGVMb2FkaW5nIiwibGlzdCIsIiRhcHBseSIsImNhdGNoIiwibWV0aG9kcyIsInBheSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJKU09OIiwic3RyaW5naWZ5IiwiaWQiLCJzaG93QWRkVG9DYXJkIiwiJGludm9rZSIsImFkZFRvQ2FyZEhhbmRsZXIiLCJjb25zb2xlIiwibG9nIiwiZ2V0T3BlbklkIiwic2V0TmF2aWdhdGlvbkJhclRpdGxlIiwidGl0bGUiLCJuYW1lIiwic2V0VXNlckluZm8iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLEksR0FBTztBQUNIQywwQkFBYyxFQURYO0FBRUhDLHNCQUFVLElBRlA7QUFHSEMsMkJBQWUsSUFIWjtBQUlIQyxzQkFBVSxJQUpQO0FBS0hDLHNCQUFVLElBTFA7QUFNSEMsc0JBQVUsSUFOUDtBQU9IQyw2QkFBaUI7QUFQZCxTLFFBVVJDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxRQUFPLE1BQVIsRUFBVixFLFFBQ1pDLE8sR0FBVSxFQUFDLGFBQVksRUFBQyx5QkFBd0Isa0JBQXpCLEVBQWIsRSxRQUNUQyxVLEdBQWE7QUFDTkMsb0NBRE07QUFFTkMsMENBRk07QUFHTkM7QUFITSxTLFFBd0NWQyxTLEdBQVksVUFBQ2QsSUFBRCxFQUFVO0FBQ2xCLGdCQUFJQyxlQUFlLEVBQW5CO0FBQ0FELGlCQUFLZSxPQUFMLENBQWEsVUFBQ0MsSUFBRCxFQUFVO0FBQ25CLG9CQUFJQyxhQUFhRCxLQUFLQyxVQUF0QjtBQUNBRCxxQkFBS0UsS0FBTCxHQUFhLENBQWI7QUFDQSxvQkFBSUQsY0FBY0EsV0FBV0UsTUFBN0IsRUFBcUM7QUFDakNGLCtCQUFXRixPQUFYLENBQW1CLFVBQUNLLFNBQUQsRUFBWUMsS0FBWixFQUFzQjtBQUNyQztBQUNBLDRCQUFJQSxVQUFVLENBQWQsRUFBaUI7QUFDYkwsaUNBQUtNLFFBQUwsR0FBZ0IsNkJBQWNGLFNBQWQsQ0FBaEI7QUFDSjtBQUNDLHlCQUhELE1BR087QUFDSG5CLHlDQUFhc0IsSUFBYixDQUFrQjtBQUNkQyx1Q0FBTyw2QkFBY0osU0FBZCxDQURPO0FBRWRLLHFDQUFLVCxLQUFLUztBQUZJLDZCQUFsQjtBQUlIO0FBQ0oscUJBWEQ7QUFZSDtBQUNKLGFBakJEO0FBa0JBLGtCQUFLeEIsWUFBTCxHQUFvQkEsWUFBcEI7QUFDQSxtQkFBT0QsSUFBUDtBQUNILFMsUUFJRDBCLGMsR0FBaUIsWUFBTTtBQUNuQkMsZUFBR0MsV0FBSDtBQUNBLG9DQUNLQyxJQURMLENBQ1UsVUFBQ0MsR0FBRCxFQUFTO0FBQ1hILG1CQUFHSSxXQUFIO0FBQ0Esc0JBQUs3QixRQUFMLEdBQWdCLE1BQUtZLFNBQUwsQ0FBZWdCLElBQUk5QixJQUFKLENBQVNnQyxJQUF4QixDQUFoQjtBQUNBLHNCQUFLQyxNQUFMO0FBQ0gsYUFMTCxFQU1LQyxLQU5MLENBTVcsWUFBTTtBQUNULHNCQUFLaEMsUUFBTCxHQUFnQixFQUFoQjtBQUNBeUIsbUJBQUdJLFdBQUg7QUFDSCxhQVRMO0FBVUgsUyxRQUVESSxPLEdBQVU7QUFDTjs7O0FBR0FDLGVBSk0sZUFJRHBCLElBSkMsRUFJSztBQUNQVyxtQkFBR1UsVUFBSCxDQUFjO0FBQ1ZDLHlCQUFLLDJCQUEyQkMsS0FBS0MsU0FBTCxDQUFlLENBQUM7QUFDNUN0QiwrQkFBTyxDQURxQztBQUU1Q3VCLDRCQUFJekIsS0FBS1M7QUFGbUMscUJBQUQsQ0FBZjtBQUR0QixpQkFBZDtBQU1ILGFBWEs7OztBQWFOOzs7QUFHQWlCLDJCQUFlLHVCQUFDMUIsSUFBRCxFQUFVO0FBQ3JCLHNCQUFLMkIsT0FBTCxDQUFhLFdBQWIsRUFBMEIsTUFBMUIsRUFBa0MzQixJQUFsQztBQUNILGFBbEJLOztBQW9CTjs7O0FBR0E0Qiw0QkF2Qk0sOEJBdUJjO0FBQ2hCQyx3QkFBUUMsR0FBUixDQUFZLHFCQUFaO0FBQ0g7QUF6QkssUzs7Ozs7aUNBMUVEO0FBQ0wsZ0JBQUksbUJBQVNDLFNBQVQsRUFBSixFQUEwQjtBQUN0QixxQkFBS0osT0FBTCxDQUFhLFFBQWIsRUFBdUIsbUJBQXZCO0FBQ0g7QUFDSjs7O2lDQUVRO0FBQ0wsaUJBQUtqQixjQUFMO0FBQ0FDLGVBQUdxQixxQkFBSCxDQUF5QjtBQUNyQkMsdUJBQU8saUJBQU9DO0FBRE8sYUFBekI7QUFHQSxpQkFBS0MsV0FBTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOzs7Ozs7Ozs7O0FBR09yQixtQzs7O3VDQUVZLHdCQUFTLElBQVQsQzs7O0FBQVpBLG1DOzs7Ozs7OztBQUVBLHFEQUFNLFVBQU47Ozs7Ozs7Ozs7Ozs7Ozs7QUFHUjs7OztBQTBCQTs7Ozs7OztFQTVFK0IsZUFBS3NCLEk7O2tCQUFuQnJELEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCBmb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInXHJcbmltcG9ydCB7IGdldExpc3QgfSBmcm9tICcuLi9zZXJ2aWNlL3Byb2R1Y3QnXHJcbmltcG9ydCB7IGxvZ2luLCB0b2tlbiB9IGZyb20gJy4uL3NlcnZpY2UvdXNlcidcclxuaW1wb3J0IGNvbXByZXNzSW1hZ2UgZnJvbSAnLi4vZnVuY3Rpb24vY29tcHJlc3NJbWFnZSdcclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnXHJcbmltcG9ydCB7IGdldFVzZXJJbmZvIH0gZnJvbSAnLi4vc2VydmljZS9nbG9iYWwnXHJcbmltcG9ydCB1c2VySW5mbyBmcm9tICcuLi9wbHVnaW4vdXNlckluZm8nXHJcbmltcG9ydCBpbml0VXNlciBmcm9tICcuLi9mdW5jdGlvbi9pbml0VXNlcidcclxuaW1wb3J0IGFkZFRvQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL2FkZFRvQ2FyZCdcclxuaW1wb3J0IGNvcHlyaWdodCBmcm9tICcuLi9jb21wb25lbnRzL2NvcHlyaWdodCdcclxuaW1wb3J0IHRvYXN0IGZyb20gJy4uL2Z1bmN0aW9uL3RvYXN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgZGF0YSA9IHtcclxuICAgICAgICBiYW5uZXJPcHRpb246IFtdLFxyXG4gICAgICAgIHByb2R1Y3RzOiBudWxsLFxyXG4gICAgICAgIGluZGljYXRvckRvdHM6IHRydWUsXHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgaW50ZXJ2YWw6IDUwMDAsXHJcbiAgICAgICAgZHVyYXRpb246IDEwMDAsXHJcbiAgICAgICAgc2VsZWN0ZWRQcm9kdWN0OiBudWxsXHJcbiAgICB9XHJcblxyXG4gICAkcHJvcHMgPSB7XCJmb290ZXJcIjp7XCJmcm9tXCI6XCJob21lXCJ9fTtcclxuJGV2ZW50cyA9IHtcImFkZFRvQ2FyZFwiOntcInYtb246YWRkdG9jYXJkc3VjY2Vzc1wiOlwiYWRkVG9DYXJkSGFuZGxlclwifX07XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgICAgIGZvb3RlcixcclxuICAgICAgICBjb3B5cmlnaHQsXHJcbiAgICAgICAgYWRkVG9DYXJkXHJcbiAgICB9XHJcblxyXG4gICAgb25TaG93KCkge1xyXG4gICAgICAgIGlmICh1c2VySW5mby5nZXRPcGVuSWQoKSkge1xyXG4gICAgICAgICAgICB0aGlzLiRpbnZva2UoJ2Zvb3RlcicsICdnZXRDb3VudEJ5T3BlbmRJZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRQcm9kdWN0TGlzdCgpO1xyXG4gICAgICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBjb25maWcubmFtZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2V0VXNlckluZm8oKTtcclxuICAgICAgICAvLyB3eC5yZWRpcmVjdFRvKHtcclxuICAgICAgICAvLyAgICAgdXJsOiAncHJvZHVjdERldGFpbD9waWQ9NTkyMDZkODBjNWNhMWMxM2UwY2U1Nzg5J1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIC8vIHd4LnJlZGlyZWN0VG8oe1xyXG4gICAgICAgIC8vICAgICB1cmw6ICdvcmRlckNvbmZpcm0/cHJvZHVjdHM9JyArIEpTT04uc3RyaW5naWZ5KFt7Y291bnQ6MiwgaWQ6IFwiNTkyMDZkODBjNWNhMWMxM2UwY2U1Nzg5XCJ9XSlcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICAvLyB3eC5yZWRpcmVjdFRvKHtcclxuICAgICAgICAvLyAgICAgdXJsOiAnb3JkZXInXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc2V0VXNlckluZm8oKSB7XHJcbiAgICAgICAgbGV0IHJlcztcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXMgPSBhd2FpdCBpbml0VXNlcih0aGlzKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHRvYXN0KCfojrflj5bnlKjmiLfkv6Hmga/lpLHotKUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOmAgumFjeS6p+WTgeWIl+ihqFxyXG4gICAgICovXHJcbiAgICBhZGFwdExpc3QgPSAoZGF0YSkgPT4ge1xyXG4gICAgICAgIHZhciBiYW5uZXJPcHRpb24gPSBbXTtcclxuICAgICAgICBkYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgdmFyIHN0b3JhZ2VJZHMgPSBpdGVtLnN0b3JhZ2VJZHM7XHJcbiAgICAgICAgICAgIGl0ZW0uY291bnQgPSAxO1xyXG4gICAgICAgICAgICBpZiAoc3RvcmFnZUlkcyAmJiBzdG9yYWdlSWRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgc3RvcmFnZUlkcy5mb3JFYWNoKChzdG9yYWdlSWQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5Lqn5ZOB5LuF5pi+56S656ysMeW8oOWbvlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmltYWdlVXJsID0gY29tcHJlc3NJbWFnZShzdG9yYWdlSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5YW25L2Z5Zu+54mH5pS+5YiwYmFubmVy5Lit5pi+56S6XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFubmVyT3B0aW9uLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IGNvbXByZXNzSW1hZ2Uoc3RvcmFnZUlkKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pZDogaXRlbS5faWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmJhbm5lck9wdGlvbiA9IGJhbm5lck9wdGlvbjtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluS6p+WTgeWIl+ihqCBcclxuICAgICAqL1xyXG4gICAgZ2V0UHJvZHVjdExpc3QgPSAoKSA9PiB7XHJcbiAgICAgICAgd3guc2hvd0xvYWRpbmcoKTtcclxuICAgICAgICBnZXRMaXN0KClcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdHMgPSB0aGlzLmFkYXB0TGlzdChyZXMuZGF0YS5saXN0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzID0gW107XHJcbiAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDotK3kubBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwYXkgKGl0ZW0pIHtcclxuICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICdvcmRlckNvbmZpcm0/cHJvZHVjdHM9JyArIEpTT04uc3RyaW5naWZ5KFt7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW0uX2lkXHJcbiAgICAgICAgICAgICAgICB9XSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5pi+56S65re75Yqg5Yiw6LSt54mp6L2m5a+56K+d5qGGXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc2hvd0FkZFRvQ2FyZDogKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgdGhpcy4kaW52b2tlKCdhZGRUb0NhcmQnLCAnc2hvdycsIGl0ZW0pO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOa3u+WKoOWIsOi0reeJqei9puS4reWkhOeQhiBcclxuICAgICAgICAgKi9cclxuICAgICAgICBhZGRUb0NhcmRIYW5kbGVyICgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FkZCB0byBjYXJkIHN1Y2Nlc3MnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19