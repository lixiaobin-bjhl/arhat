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
                _this.$invoke('addToCard', 'show');
                // wx.showLoading();
                // addToCard({
                //     product: item._id,
                //     count: 1
                // })
                // .then(()=> {
                //     wx.hideLoading();
                //     this.$invoke('footer', 'getCountByOpendId');
                //     toast('已成功加到购物车');
                // })
            },

            /**
             * 添加商品到购物车
             */
            addToCardHandler: function addToCardHandler(data) {
                console.log(data);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNhcmRSZXF1ZXN0IiwiSW5kZXgiLCJkYXRhIiwiYmFubmVyT3B0aW9uIiwicHJvZHVjdHMiLCJpbmRpY2F0b3JEb3RzIiwiYXV0b3BsYXkiLCJpbnRlcnZhbCIsImR1cmF0aW9uIiwic2VsZWN0ZWRQcm9kdWN0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJmb290ZXIiLCJhZGRUb0NhcmQiLCJhZGFwdExpc3QiLCJmb3JFYWNoIiwiaXRlbSIsInN0b3JhZ2VJZHMiLCJjb3VudCIsImxlbmd0aCIsInN0b3JhZ2VJZCIsImluZGV4IiwiaW1hZ2VVcmwiLCJwdXNoIiwiaW1hZ2UiLCJfaWQiLCJnZXRQcm9kdWN0TGlzdCIsInd4Iiwic2hvd0xvYWRpbmciLCJ0aGVuIiwicmVzIiwiaGlkZUxvYWRpbmciLCJsaXN0IiwiJGFwcGx5IiwiY2F0Y2giLCJtZXRob2RzIiwicGF5IiwibmF2aWdhdGVUbyIsInVybCIsIkpTT04iLCJzdHJpbmdpZnkiLCJpZCIsInNob3dBZGRUb0NhcmQiLCIkaW52b2tlIiwiYWRkVG9DYXJkSGFuZGxlciIsImNvbnNvbGUiLCJsb2ciLCJnZXRPcGVuSWQiLCJzZXROYXZpZ2F0aW9uQmFyVGl0bGUiLCJ0aXRsZSIsIm5hbWUiLCJzZXRVc2VySW5mbyIsInRvYXN0IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztJQUFZQSxXOztBQUNaOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJDLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNqQkMsSSxHQUFPO0FBQ0hDLDBCQUFjLEVBRFg7QUFFSEMsc0JBQVUsSUFGUDtBQUdIQywyQkFBZSxJQUhaO0FBSUhDLHNCQUFVLElBSlA7QUFLSEMsc0JBQVUsSUFMUDtBQU1IQyxzQkFBVSxJQU5QO0FBT0hDLDZCQUFpQjtBQVBkLFMs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aW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IGZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3RlcidcclxuaW1wb3J0IHsgZ2V0TGlzdCB9IGZyb20gJy4uL3NlcnZpY2UvcHJvZHVjdCdcclxuaW1wb3J0ICogYXMgY2FyZFJlcXVlc3QgZnJvbSAnLi4vc2VydmljZS9jYXJkJ1xyXG5pbXBvcnQgeyBsb2dpbiwgdG9rZW4gfSBmcm9tICcuLi9zZXJ2aWNlL3VzZXInXHJcbmltcG9ydCBjb21wcmVzc0ltYWdlIGZyb20gJy4uL2Z1bmN0aW9uL2NvbXByZXNzSW1hZ2UnXHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJ1xyXG5pbXBvcnQgeyBnZXRVc2VySW5mbyB9IGZyb20gJy4uL3NlcnZpY2UvZ2xvYmFsJ1xyXG5pbXBvcnQgdXNlckluZm8gZnJvbSAnLi4vcGx1Z2luL3VzZXJJbmZvJ1xyXG5pbXBvcnQgaW5pdFVzZXIgZnJvbSAnLi4vZnVuY3Rpb24vaW5pdFVzZXInXHJcbmltcG9ydCBhZGRUb0NhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9hZGRUb0NhcmQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICAgIGJhbm5lck9wdGlvbjogW10sXHJcbiAgICAgICAgcHJvZHVjdHM6IG51bGwsXHJcbiAgICAgICAgaW5kaWNhdG9yRG90czogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICBpbnRlcnZhbDogNTAwMCxcclxuICAgICAgICBkdXJhdGlvbjogMTAwMCxcclxuICAgICAgICBzZWxlY3RlZFByb2R1Y3Q6IHt9XHJcbiAgICB9XHJcblxyXG4gICAkcHJvcHMgPSB7XCJmb290ZXJcIjp7XCJmcm9tXCI6XCJob21lXCJ9LFwiYWRkVG9DYXJkXCI6e1widi1iaW5kOnByb2R1Y3Quc3luY1wiOlwic2VsZWN0ZWRQcm9kdWN0XCJ9fTtcclxuJGV2ZW50cyA9IHtcImFkZFRvQ2FyZFwiOntcInYtb246YWRkdG9jYXJkXCI6XCJhZGRUb0NhcmRIYW5kbGVyXCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgICAgZm9vdGVyLFxyXG4gICAgICAgIGFkZFRvQ2FyZFxyXG4gICAgfVxyXG5cclxuICAgIG9uU2hvdygpIHtcclxuICAgICAgICBpZiAodXNlckluZm8uZ2V0T3BlbklkKCkpIHtcclxuICAgICAgICAgICAgdGhpcy4kaW52b2tlKCdmb290ZXInLCAnZ2V0Q291bnRCeU9wZW5kSWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuZ2V0UHJvZHVjdExpc3QoKTtcclxuICAgICAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe1xyXG4gICAgICAgICAgICB0aXRsZTogY29uZmlnLm5hbWVcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNldFVzZXJJbmZvKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc2V0VXNlckluZm8oKSB7XHJcbiAgICAgICAgbGV0IHJlcztcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXMgPSBhd2FpdCBpbml0VXNlcih0aGlzKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHRvYXN0KCfojrflj5bnlKjmiLfkv6Hmga/lpLHotKUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOmAgumFjeS6p+WTgeWIl+ihqFxyXG4gICAgICovXHJcbiAgICBhZGFwdExpc3QgPSAoZGF0YSkgPT4ge1xyXG4gICAgICAgIHZhciBiYW5uZXJPcHRpb24gPSBbXTtcclxuICAgICAgICBkYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgdmFyIHN0b3JhZ2VJZHMgPSBpdGVtLnN0b3JhZ2VJZHM7XHJcbiAgICAgICAgICAgIGl0ZW0uY291bnQgPSAxO1xyXG4gICAgICAgICAgICBpZiAoc3RvcmFnZUlkcyAmJiBzdG9yYWdlSWRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgc3RvcmFnZUlkcy5mb3JFYWNoKChzdG9yYWdlSWQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5Lqn5ZOB5LuF5pi+56S656ysMeW8oOWbvlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmltYWdlVXJsID0gY29tcHJlc3NJbWFnZShzdG9yYWdlSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWFtuS9meWbvueJh+aUvuWIsGJhbm5lcuS4reaYvuekulxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhbm5lck9wdGlvbi5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlOiBjb21wcmVzc0ltYWdlKHN0b3JhZ2VJZCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaWQ6IGl0ZW0uX2lkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5iYW5uZXJPcHRpb24gPSBiYW5uZXJPcHRpb247XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bkuqflk4HliJfooaggXHJcbiAgICAgKi9cclxuICAgIGdldFByb2R1Y3RMaXN0ID0gKCkgPT4ge1xyXG4gICAgICAgIHd4LnNob3dMb2FkaW5nKCk7XHJcbiAgICAgICAgZ2V0TGlzdCgpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzID0gdGhpcy5hZGFwdExpc3QocmVzLmRhdGEubGlzdCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0cyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6LSt5LmwXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcGF5IChpdGVtKSB7XHJcbiAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnb3JkZXJDb25maXJtP3Byb2R1Y3RzPScgKyBKU09OLnN0cmluZ2lmeShbe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBpdGVtLl9pZFxyXG4gICAgICAgICAgICAgICAgfV0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOaYvuekuua3u+WKoOWIsOi0reeJqei9puWvueivneahhlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNob3dBZGRUb0NhcmQ6IChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRQcm9kdWN0ID0gaXRlbTtcclxuICAgICAgICAgICAgdGhpcy4kaW52b2tlKCdhZGRUb0NhcmQnLCAnc2hvdycpO1xyXG4gICAgICAgICAgICAvLyB3eC5zaG93TG9hZGluZygpO1xyXG4gICAgICAgICAgICAvLyBhZGRUb0NhcmQoe1xyXG4gICAgICAgICAgICAvLyAgICAgcHJvZHVjdDogaXRlbS5faWQsXHJcbiAgICAgICAgICAgIC8vICAgICBjb3VudDogMVxyXG4gICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICAvLyAudGhlbigoKT0+IHtcclxuICAgICAgICAgICAgLy8gICAgIHd4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLiRpbnZva2UoJ2Zvb3RlcicsICdnZXRDb3VudEJ5T3BlbmRJZCcpO1xyXG4gICAgICAgICAgICAvLyAgICAgdG9hc3QoJ+W3suaIkOWKn+WKoOWIsOi0reeJqei9picpO1xyXG4gICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOa3u+WKoOWVhuWTgeWIsOi0reeJqei9plxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGFkZFRvQ2FyZEhhbmRsZXIgKGRhdGEpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==