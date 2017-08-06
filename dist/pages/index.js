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
        }, _this.$props = { "footer": { "from": "home" }, "addToCard": { "v-bind:product.sync": "selectedProduct" } }, _this.$events = { "addToCard": { "v-on:addtocardsuccess": "addToCardHandler" } }, _this.components = {
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
            wx.redirectTo({
                url: 'orderConfirm?products=' + JSON.stringify([{ count: 2, id: "59206d80c5ca1c13e0ce5789" }])
            });
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiZGF0YSIsImJhbm5lck9wdGlvbiIsInByb2R1Y3RzIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsInNlbGVjdGVkUHJvZHVjdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiZm9vdGVyIiwiYWRkVG9DYXJkIiwiYWRhcHRMaXN0IiwiZm9yRWFjaCIsIml0ZW0iLCJzdG9yYWdlSWRzIiwiY291bnQiLCJsZW5ndGgiLCJzdG9yYWdlSWQiLCJpbmRleCIsImltYWdlVXJsIiwicHVzaCIsImltYWdlIiwiX2lkIiwiZ2V0UHJvZHVjdExpc3QiLCJ3eCIsInNob3dMb2FkaW5nIiwidGhlbiIsInJlcyIsImhpZGVMb2FkaW5nIiwibGlzdCIsIiRhcHBseSIsImNhdGNoIiwibWV0aG9kcyIsInBheSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJKU09OIiwic3RyaW5naWZ5IiwiaWQiLCJzaG93QWRkVG9DYXJkIiwic2V0VGltZW91dCIsIiRpbnZva2UiLCJhZGRUb0NhcmRIYW5kbGVyIiwiY29uc29sZSIsImxvZyIsImdldE9wZW5JZCIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsInRpdGxlIiwibmFtZSIsInNldFVzZXJJbmZvIiwicmVkaXJlY3RUbyIsInNob3dUb2FzdCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxJLEdBQU87QUFDSEMsMEJBQWMsRUFEWDtBQUVIQyxzQkFBVSxJQUZQO0FBR0hDLDJCQUFlLElBSFo7QUFJSEMsc0JBQVUsSUFKUDtBQUtIQyxzQkFBVSxJQUxQO0FBTUhDLHNCQUFVLElBTlA7QUFPSEMsNkJBQWlCO0FBUGQsUyxR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QUFPO0FBREUsaUNBQWI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLUjs7OztBQTBCQTs7Ozs7OztFQTFFK0IsZUFBS0ssSTs7a0JBQW5CdkQsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IGZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3RlcidcclxuaW1wb3J0IHsgZ2V0TGlzdCB9IGZyb20gJy4uL3NlcnZpY2UvcHJvZHVjdCdcclxuaW1wb3J0IHsgbG9naW4sIHRva2VuIH0gZnJvbSAnLi4vc2VydmljZS91c2VyJ1xyXG5pbXBvcnQgY29tcHJlc3NJbWFnZSBmcm9tICcuLi9mdW5jdGlvbi9jb21wcmVzc0ltYWdlJ1xyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZydcclxuaW1wb3J0IHsgZ2V0VXNlckluZm8gfSBmcm9tICcuLi9zZXJ2aWNlL2dsb2JhbCdcclxuaW1wb3J0IHVzZXJJbmZvIGZyb20gJy4uL3BsdWdpbi91c2VySW5mbydcclxuaW1wb3J0IGluaXRVc2VyIGZyb20gJy4uL2Z1bmN0aW9uL2luaXRVc2VyJ1xyXG5pbXBvcnQgYWRkVG9DYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvYWRkVG9DYXJkJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgZGF0YSA9IHtcclxuICAgICAgICBiYW5uZXJPcHRpb246IFtdLFxyXG4gICAgICAgIHByb2R1Y3RzOiBudWxsLFxyXG4gICAgICAgIGluZGljYXRvckRvdHM6IHRydWUsXHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgaW50ZXJ2YWw6IDUwMDAsXHJcbiAgICAgICAgZHVyYXRpb246IDEwMDAsXHJcbiAgICAgICAgc2VsZWN0ZWRQcm9kdWN0OiB7fVxyXG4gICAgfVxyXG5cclxuICAgJHByb3BzID0ge1wiZm9vdGVyXCI6e1wiZnJvbVwiOlwiaG9tZVwifSxcImFkZFRvQ2FyZFwiOntcInYtYmluZDpwcm9kdWN0LnN5bmNcIjpcInNlbGVjdGVkUHJvZHVjdFwifX07XHJcbiRldmVudHMgPSB7XCJhZGRUb0NhcmRcIjp7XCJ2LW9uOmFkZHRvY2FyZHN1Y2Nlc3NcIjpcImFkZFRvQ2FyZEhhbmRsZXJcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgICAgICBmb290ZXIsXHJcbiAgICAgICAgYWRkVG9DYXJkXHJcbiAgICB9XHJcblxyXG4gICAgb25TaG93KCkge1xyXG4gICAgICAgIGlmICh1c2VySW5mby5nZXRPcGVuSWQoKSkge1xyXG4gICAgICAgICAgICB0aGlzLiRpbnZva2UoJ2Zvb3RlcicsICdnZXRDb3VudEJ5T3BlbmRJZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRQcm9kdWN0TGlzdCgpO1xyXG4gICAgICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBjb25maWcubmFtZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2V0VXNlckluZm8oKTtcclxuICAgICAgICAvLyB3eC5yZWRpcmVjdFRvKHtcclxuICAgICAgICAvLyAgICAgdXJsOiAncHJvZHVjdERldGFpbD9waWQ9NTkyMDZkODBjNWNhMWMxM2UwY2U1Nzg5J1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIHd4LnJlZGlyZWN0VG8oe1xyXG4gICAgICAgICAgICB1cmw6ICdvcmRlckNvbmZpcm0/cHJvZHVjdHM9JyArIEpTT04uc3RyaW5naWZ5KFt7Y291bnQ6MiwgaWQ6IFwiNTkyMDZkODBjNWNhMWMxM2UwY2U1Nzg5XCJ9XSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzZXRVc2VySW5mbygpIHtcclxuICAgICAgICBsZXQgcmVzO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJlcyA9IGF3YWl0IGluaXRVc2VyKHRoaXMpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn6I635Y+W55So5oi35L+h5oGv5aSx6LSlJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOmAgumFjeS6p+WTgeWIl+ihqFxyXG4gICAgICovXHJcbiAgICBhZGFwdExpc3QgPSAoZGF0YSkgPT4ge1xyXG4gICAgICAgIHZhciBiYW5uZXJPcHRpb24gPSBbXTtcclxuICAgICAgICBkYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgdmFyIHN0b3JhZ2VJZHMgPSBpdGVtLnN0b3JhZ2VJZHM7XHJcbiAgICAgICAgICAgIGl0ZW0uY291bnQgPSAxO1xyXG4gICAgICAgICAgICBpZiAoc3RvcmFnZUlkcyAmJiBzdG9yYWdlSWRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgc3RvcmFnZUlkcy5mb3JFYWNoKChzdG9yYWdlSWQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5Lqn5ZOB5LuF5pi+56S656ysMeW8oOWbvlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmltYWdlVXJsID0gY29tcHJlc3NJbWFnZShzdG9yYWdlSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5YW25L2Z5Zu+54mH5pS+5YiwYmFubmVy5Lit5pi+56S6XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFubmVyT3B0aW9uLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IGNvbXByZXNzSW1hZ2Uoc3RvcmFnZUlkKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pZDogaXRlbS5faWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmJhbm5lck9wdGlvbiA9IGJhbm5lck9wdGlvbjtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluS6p+WTgeWIl+ihqCBcclxuICAgICAqL1xyXG4gICAgZ2V0UHJvZHVjdExpc3QgPSAoKSA9PiB7XHJcbiAgICAgICAgd3guc2hvd0xvYWRpbmcoKTtcclxuICAgICAgICBnZXRMaXN0KClcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdHMgPSB0aGlzLmFkYXB0TGlzdChyZXMuZGF0YS5saXN0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzID0gW107XHJcbiAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDotK3kubBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwYXkgKGl0ZW0pIHtcclxuICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICdvcmRlckNvbmZpcm0/cHJvZHVjdHM9JyArIEpTT04uc3RyaW5naWZ5KFt7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW0uX2lkXHJcbiAgICAgICAgICAgICAgICB9XSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5pi+56S65re75Yqg5Yiw6LSt54mp6L2m5a+56K+d5qGGXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc2hvd0FkZFRvQ2FyZDogKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFByb2R1Y3QgPSBpdGVtO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kaW52b2tlKCdhZGRUb0NhcmQnLCAnc2hvdycpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5re75Yqg5Yiw6LSt54mp6L2m5Lit5aSE55CGIFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGFkZFRvQ2FyZEhhbmRsZXIgKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYWRkIHRvIGNhcmQgc3VjY2VzcycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=