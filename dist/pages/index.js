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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiZGF0YSIsImJhbm5lck9wdGlvbiIsInByb2R1Y3RzIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsInNlbGVjdGVkUHJvZHVjdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiZm9vdGVyIiwiYWRkVG9DYXJkIiwiYWRhcHRMaXN0IiwiZm9yRWFjaCIsIml0ZW0iLCJzdG9yYWdlSWRzIiwiY291bnQiLCJsZW5ndGgiLCJzdG9yYWdlSWQiLCJpbmRleCIsImltYWdlVXJsIiwicHVzaCIsImltYWdlIiwiX2lkIiwiZ2V0UHJvZHVjdExpc3QiLCJ3eCIsInNob3dMb2FkaW5nIiwidGhlbiIsInJlcyIsImhpZGVMb2FkaW5nIiwibGlzdCIsIiRhcHBseSIsImNhdGNoIiwibWV0aG9kcyIsInBheSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJKU09OIiwic3RyaW5naWZ5IiwiaWQiLCJzaG93QWRkVG9DYXJkIiwic2V0VGltZW91dCIsIiRpbnZva2UiLCJhZGRUb0NhcmRIYW5kbGVyIiwiY29uc29sZSIsImxvZyIsImdldE9wZW5JZCIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsInRpdGxlIiwibmFtZSIsInNldFVzZXJJbmZvIiwic2hvd1RvYXN0IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLEksR0FBTztBQUNIQywwQkFBYyxFQURYO0FBRUhDLHNCQUFVLElBRlA7QUFHSEMsMkJBQWUsSUFIWjtBQUlIQyxzQkFBVSxJQUpQO0FBS0hDLHNCQUFVLElBTFA7QUFNSEMsc0JBQVUsSUFOUDtBQU9IQyw2QkFBaUI7QUFQZCxTLFFBVVJDLE0sR0FBUyxF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c0NvbnRlbnQiOlsiXHJcblxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgZm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJ1xyXG5pbXBvcnQgeyBnZXRMaXN0IH0gZnJvbSAnLi4vc2VydmljZS9wcm9kdWN0J1xyXG5pbXBvcnQgeyBsb2dpbiwgdG9rZW4gfSBmcm9tICcuLi9zZXJ2aWNlL3VzZXInXHJcbmltcG9ydCBjb21wcmVzc0ltYWdlIGZyb20gJy4uL2Z1bmN0aW9uL2NvbXByZXNzSW1hZ2UnXHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJ1xyXG5pbXBvcnQgeyBnZXRVc2VySW5mbyB9IGZyb20gJy4uL3NlcnZpY2UvZ2xvYmFsJ1xyXG5pbXBvcnQgdXNlckluZm8gZnJvbSAnLi4vcGx1Z2luL3VzZXJJbmZvJ1xyXG5pbXBvcnQgaW5pdFVzZXIgZnJvbSAnLi4vZnVuY3Rpb24vaW5pdFVzZXInXHJcbmltcG9ydCBhZGRUb0NhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9hZGRUb0NhcmQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICAgIGJhbm5lck9wdGlvbjogW10sXHJcbiAgICAgICAgcHJvZHVjdHM6IG51bGwsXHJcbiAgICAgICAgaW5kaWNhdG9yRG90czogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICBpbnRlcnZhbDogNTAwMCxcclxuICAgICAgICBkdXJhdGlvbjogMTAwMCxcclxuICAgICAgICBzZWxlY3RlZFByb2R1Y3Q6IHt9XHJcbiAgICB9XHJcblxyXG4gICAkcHJvcHMgPSB7XCJmb290ZXJcIjp7XCJmcm9tXCI6XCJob21lXCJ9LFwiYWRkVG9DYXJkXCI6e1widi1iaW5kOnByb2R1Y3Quc3luY1wiOlwic2VsZWN0ZWRQcm9kdWN0XCJ9fTtcclxuJGV2ZW50cyA9IHtcImFkZFRvQ2FyZFwiOntcInYtb246YWRkdG9jYXJkc3VjY2Vzc1wiOlwiYWRkVG9DYXJkSGFuZGxlclwifX07XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgICAgIGZvb3RlcixcclxuICAgICAgICBhZGRUb0NhcmRcclxuICAgIH1cclxuXHJcbiAgICBvblNob3coKSB7XHJcbiAgICAgICAgaWYgKHVzZXJJbmZvLmdldE9wZW5JZCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGludm9rZSgnZm9vdGVyJywgJ2dldENvdW50QnlPcGVuZElkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLmdldFByb2R1Y3RMaXN0KCk7XHJcbiAgICAgICAgd3guc2V0TmF2aWdhdGlvbkJhclRpdGxlKHtcclxuICAgICAgICAgICAgdGl0bGU6IGNvbmZpZy5uYW1lXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zZXRVc2VySW5mbygpO1xyXG4gICAgICAgIC8vIHd4LnJlZGlyZWN0VG8oe1xyXG4gICAgICAgIC8vICAgICB1cmw6ICdwcm9kdWN0RGV0YWlsP3BpZD01OTIwNmQ4MGM1Y2ExYzEzZTBjZTU3ODknXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgLy8gd3gucmVkaXJlY3RUbyh7XHJcbiAgICAgICAgLy8gICAgIHVybDogJ29yZGVyQ29uZmlybT9wcm9kdWN0cz0nICsgSlNPTi5zdHJpbmdpZnkoW3tjb3VudDoyLCBpZDogXCI1OTIwNmQ4MGM1Y2ExYzEzZTBjZTU3ODlcIn1dKVxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIC8vIHd4LnJlZGlyZWN0VG8oe1xyXG4gICAgICAgIC8vICAgICB1cmw6ICdvcmRlcidcclxuICAgICAgICAvLyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzZXRVc2VySW5mbygpIHtcclxuICAgICAgICBsZXQgcmVzO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJlcyA9IGF3YWl0IGluaXRVc2VyKHRoaXMpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn6I635Y+W55So5oi35L+h5oGv5aSx6LSlJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOmAgumFjeS6p+WTgeWIl+ihqFxyXG4gICAgICovXHJcbiAgICBhZGFwdExpc3QgPSAoZGF0YSkgPT4ge1xyXG4gICAgICAgIHZhciBiYW5uZXJPcHRpb24gPSBbXTtcclxuICAgICAgICBkYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgdmFyIHN0b3JhZ2VJZHMgPSBpdGVtLnN0b3JhZ2VJZHM7XHJcbiAgICAgICAgICAgIGl0ZW0uY291bnQgPSAxO1xyXG4gICAgICAgICAgICBpZiAoc3RvcmFnZUlkcyAmJiBzdG9yYWdlSWRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgc3RvcmFnZUlkcy5mb3JFYWNoKChzdG9yYWdlSWQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5Lqn5ZOB5LuF5pi+56S656ysMeW8oOWbvlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmltYWdlVXJsID0gY29tcHJlc3NJbWFnZShzdG9yYWdlSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5YW25L2Z5Zu+54mH5pS+5YiwYmFubmVy5Lit5pi+56S6XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFubmVyT3B0aW9uLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IGNvbXByZXNzSW1hZ2Uoc3RvcmFnZUlkKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pZDogaXRlbS5faWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmJhbm5lck9wdGlvbiA9IGJhbm5lck9wdGlvbjtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluS6p+WTgeWIl+ihqCBcclxuICAgICAqL1xyXG4gICAgZ2V0UHJvZHVjdExpc3QgPSAoKSA9PiB7XHJcbiAgICAgICAgd3guc2hvd0xvYWRpbmcoKTtcclxuICAgICAgICBnZXRMaXN0KClcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdHMgPSB0aGlzLmFkYXB0TGlzdChyZXMuZGF0YS5saXN0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzID0gW107XHJcbiAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDotK3kubBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwYXkgKGl0ZW0pIHtcclxuICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICdvcmRlckNvbmZpcm0/cHJvZHVjdHM9JyArIEpTT04uc3RyaW5naWZ5KFt7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW0uX2lkXHJcbiAgICAgICAgICAgICAgICB9XSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5pi+56S65re75Yqg5Yiw6LSt54mp6L2m5a+56K+d5qGGXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc2hvd0FkZFRvQ2FyZDogKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFByb2R1Y3QgPSBpdGVtO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kaW52b2tlKCdhZGRUb0NhcmQnLCAnc2hvdycpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5re75Yqg5Yiw6LSt54mp6L2m5Lit5aSE55CGIFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGFkZFRvQ2FyZEhhbmRsZXIgKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYWRkIHRvIGNhcmQgc3VjY2VzcycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=