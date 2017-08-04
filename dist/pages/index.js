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

var cardRequest = _interopRequireWildcard(_card);

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

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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
            selectedProduct: {}
        }, _this.$props = { "footer": { "from": "home" }, "addToCard": { "v-bind:product.sync": "selectedProduct" } }, _this.$events = { "addToCard": { "v-on:addtocard": "addToCardHandler" } }, _this.components = {
            footer: _footer2.default,
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
                _this.selectedProduct = item;
                setTimeout(function () {
                    _this.$invoke('addToCard', 'show');
                });
            },

            /**
             * 添加商品到购物车
             */
            addToCardHandler: function addToCardHandler(data) {
                wx.showLoading();
                cardRequest.addToCard({
                    product: data._id,
                    count: data.count
                }).then(function () {
                    wx.hideLoading();
                    // this.$invoke('footer', 'getCountByOpendId');
                    wx.showToast({
                        title: '已成功加到购物车'
                    });
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

                                wx.showToast({
                                    title: '获取用户信息失败'
                                });

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNhcmRSZXF1ZXN0IiwiSW5kZXgiLCJkYXRhIiwiYmFubmVyT3B0aW9uIiwicHJvZHVjdHMiLCJpbmRpY2F0b3JEb3RzIiwiYXV0b3BsYXkiLCJpbnRlcnZhbCIsImR1cmF0aW9uIiwic2VsZWN0ZWRQcm9kdWN0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJmb290ZXIiLCJhZGRUb0NhcmQiLCJhZGFwdExpc3QiLCJmb3JFYWNoIiwiaXRlbSIsInN0b3JhZ2VJZHMiLCJjb3VudCIsImxlbmd0aCIsInN0b3JhZ2VJZCIsImluZGV4IiwiaW1hZ2VVcmwiLCJwdXNoIiwiaW1hZ2UiLCJfaWQiLCJnZXRQcm9kdWN0TGlzdCIsInd4Iiwic2hvd0xvYWRpbmciLCJ0aGVuIiwicmVzIiwiaGlkZUxvYWRpbmciLCJsaXN0IiwiJGFwcGx5IiwiY2F0Y2giLCJtZXRob2RzIiwicGF5IiwibmF2aWdhdGVUbyIsInVybCIsIkpTT04iLCJzdHJpbmdpZnkiLCJpZCIsInNob3dBZGRUb0NhcmQiLCJzZXRUaW1lb3V0IiwiJGludm9rZSIsImFkZFRvQ2FyZEhhbmRsZXIiLCJwcm9kdWN0Iiwic2hvd1RvYXN0IiwidGl0bGUiLCJnZXRPcGVuSWQiLCJzZXROYXZpZ2F0aW9uQmFyVGl0bGUiLCJuYW1lIiwic2V0VXNlckluZm8iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0lBQVlBLFc7O0FBQ1o7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkMsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxJLEdBQU87QUFDSEMsMEJBQWMsRUFEWDtBQUVIQyxzQkFBVSxJQUZQO0FBR0hDLDJCQUFlLElBSFo7QUFJSEMsc0JBQVUsSUFKUDtBQUtIQyxzQkFBVSxJQUxQO0FBTUhDLHNCQUFVLElBTlA7QUFPSEMsNkJB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Ozt1Q0FFWSx3QkFBUyxJQUFULEM7OztBQUFaQSxtQzs7Ozs7Ozs7QUFFQUgsbUNBQUdvQixTQUFILENBQWE7QUFDVEMsMkNBQU87QUFERSxpQ0FBYjs7Ozs7Ozs7Ozs7Ozs7OztBQUtSOzs7O0FBMEJBOzs7Ozs7O0VBcEUrQixlQUFLSyxJOztrQkFBbkJyRCxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgZm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJ1xyXG5pbXBvcnQgeyBnZXRMaXN0IH0gZnJvbSAnLi4vc2VydmljZS9wcm9kdWN0J1xyXG5pbXBvcnQgKiBhcyBjYXJkUmVxdWVzdCBmcm9tICcuLi9zZXJ2aWNlL2NhcmQnXHJcbmltcG9ydCB7IGxvZ2luLCB0b2tlbiB9IGZyb20gJy4uL3NlcnZpY2UvdXNlcidcclxuaW1wb3J0IGNvbXByZXNzSW1hZ2UgZnJvbSAnLi4vZnVuY3Rpb24vY29tcHJlc3NJbWFnZSdcclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnXHJcbmltcG9ydCB7IGdldFVzZXJJbmZvIH0gZnJvbSAnLi4vc2VydmljZS9nbG9iYWwnXHJcbmltcG9ydCB1c2VySW5mbyBmcm9tICcuLi9wbHVnaW4vdXNlckluZm8nXHJcbmltcG9ydCBpbml0VXNlciBmcm9tICcuLi9mdW5jdGlvbi9pbml0VXNlcidcclxuaW1wb3J0IGFkZFRvQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL2FkZFRvQ2FyZCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGRhdGEgPSB7XHJcbiAgICAgICAgYmFubmVyT3B0aW9uOiBbXSxcclxuICAgICAgICBwcm9kdWN0czogbnVsbCxcclxuICAgICAgICBpbmRpY2F0b3JEb3RzOiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgIGludGVydmFsOiA1MDAwLFxyXG4gICAgICAgIGR1cmF0aW9uOiAxMDAwLFxyXG4gICAgICAgIHNlbGVjdGVkUHJvZHVjdDoge31cclxuICAgIH1cclxuXHJcbiAgICRwcm9wcyA9IHtcImZvb3RlclwiOntcImZyb21cIjpcImhvbWVcIn0sXCJhZGRUb0NhcmRcIjp7XCJ2LWJpbmQ6cHJvZHVjdC5zeW5jXCI6XCJzZWxlY3RlZFByb2R1Y3RcIn19O1xyXG4kZXZlbnRzID0ge1wiYWRkVG9DYXJkXCI6e1widi1vbjphZGR0b2NhcmRcIjpcImFkZFRvQ2FyZEhhbmRsZXJcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgICAgICBmb290ZXIsXHJcbiAgICAgICAgYWRkVG9DYXJkXHJcbiAgICB9XHJcblxyXG4gICAgb25TaG93KCkge1xyXG4gICAgICAgIGlmICh1c2VySW5mby5nZXRPcGVuSWQoKSkge1xyXG4gICAgICAgICAgICB0aGlzLiRpbnZva2UoJ2Zvb3RlcicsICdnZXRDb3VudEJ5T3BlbmRJZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRQcm9kdWN0TGlzdCgpO1xyXG4gICAgICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBjb25maWcubmFtZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2V0VXNlckluZm8oKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzZXRVc2VySW5mbygpIHtcclxuICAgICAgICBsZXQgcmVzO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJlcyA9IGF3YWl0IGluaXRVc2VyKHRoaXMpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn6I635Y+W55So5oi35L+h5oGv5aSx6LSlJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOmAgumFjeS6p+WTgeWIl+ihqFxyXG4gICAgICovXHJcbiAgICBhZGFwdExpc3QgPSAoZGF0YSkgPT4ge1xyXG4gICAgICAgIHZhciBiYW5uZXJPcHRpb24gPSBbXTtcclxuICAgICAgICBkYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgdmFyIHN0b3JhZ2VJZHMgPSBpdGVtLnN0b3JhZ2VJZHM7XHJcbiAgICAgICAgICAgIGl0ZW0uY291bnQgPSAxO1xyXG4gICAgICAgICAgICBpZiAoc3RvcmFnZUlkcyAmJiBzdG9yYWdlSWRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgc3RvcmFnZUlkcy5mb3JFYWNoKChzdG9yYWdlSWQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5Lqn5ZOB5LuF5pi+56S656ysMeW8oOWbvlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmltYWdlVXJsID0gY29tcHJlc3NJbWFnZShzdG9yYWdlSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5YW25L2Z5Zu+54mH5pS+5YiwYmFubmVy5Lit5pi+56S6XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFubmVyT3B0aW9uLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IGNvbXByZXNzSW1hZ2Uoc3RvcmFnZUlkKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pZDogaXRlbS5faWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmJhbm5lck9wdGlvbiA9IGJhbm5lck9wdGlvbjtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluS6p+WTgeWIl+ihqCBcclxuICAgICAqL1xyXG4gICAgZ2V0UHJvZHVjdExpc3QgPSAoKSA9PiB7XHJcbiAgICAgICAgd3guc2hvd0xvYWRpbmcoKTtcclxuICAgICAgICBnZXRMaXN0KClcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdHMgPSB0aGlzLmFkYXB0TGlzdChyZXMuZGF0YS5saXN0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzID0gW107XHJcbiAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDotK3kubBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwYXkgKGl0ZW0pIHtcclxuICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICdvcmRlckNvbmZpcm0/cHJvZHVjdHM9JyArIEpTT04uc3RyaW5naWZ5KFt7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW0uX2lkXHJcbiAgICAgICAgICAgICAgICB9XSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5pi+56S65re75Yqg5Yiw6LSt54mp6L2m5a+56K+d5qGGXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc2hvd0FkZFRvQ2FyZDogKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFByb2R1Y3QgPSBpdGVtO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kaW52b2tlKCdhZGRUb0NhcmQnLCAnc2hvdycpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5re75Yqg5ZWG5ZOB5Yiw6LSt54mp6L2mXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgYWRkVG9DYXJkSGFuZGxlciAoZGF0YSkge1xyXG4gICAgICAgICAgICB3eC5zaG93TG9hZGluZygpO1xyXG4gICAgICAgICAgICBjYXJkUmVxdWVzdC5hZGRUb0NhcmQoe1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdDogZGF0YS5faWQsXHJcbiAgICAgICAgICAgICAgICBjb3VudDogZGF0YS5jb3VudFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoKT0+IHtcclxuICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLiRpbnZva2UoJ2Zvb3RlcicsICdnZXRDb3VudEJ5T3BlbmRJZCcpO1xyXG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+W3suaIkOWKn+WKoOWIsOi0reeJqei9pidcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19