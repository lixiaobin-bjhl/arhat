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

var _productSubject = require('./../service/productSubject.js');

var productSubjectRequest = _interopRequireWildcard(_productSubject);

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
            subjects: [],
            subjectId: '',
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
            for (var l = data.length - 1, i = l; i >= 0; i--) {
                var item = data[i];
                var storageIds = item.storageIds;
                item.count = 1;
                var length = storageIds.length;
                if (storageIds && length) {
                    storageIds.forEach(function (storageId, index) {
                        // 如果一个产品有多张图片，把第一张放到banner中, 并且bannger中只放5张图片
                        if (length > 1 && index === 0 && bannerOption.length < 5) {
                            bannerOption.push({
                                image: (0, _compressImage2.default)(storageId),
                                _id: item._id
                            });
                        }
                        // 产品的最后一张个为售卖图片
                        if (index === length - 1) {
                            item.imageUrl = (0, _compressImage2.default)(storageId);
                        }
                    });
                }
            }
            // 筛选分类时，不要改变bannerOption
            if (!_this.bannerOption.length) {
                if (!bannerOption.length) {
                    // 没有banner就不要显示图片
                    _this.bannerOption = null;
                } else {
                    _this.bannerOption = bannerOption;
                }
            }
            return data;
        }, _this.getProductList = function () {
            wx.showLoading({ title: '加载中' });
            (0, _product.getList)({
                subjectId: _this.subjectId
            }).then(function (res) {
                wx.hideLoading();
                _this.products = _this.adaptList(res.data.list);
                _this.$apply();
            }).catch(function () {
                _this.products = [];
                wx.hideLoading();
            });
        }, _this.getProductSubjectList = function () {
            productSubjectRequest.getList().then(function (res) {
                _this.subjects = res.data.list;
                _this.$apply();
            });
        }, _this.methods = {
            /**
             * 改变分类
             */
            changeSubject: function changeSubject(item, index) {
                var _this2 = this;

                // 把之前选中的分类清除
                this.subjects.forEach(function (n, index) {
                    if (item._id != n._id) {
                        _this2.subjects[index].active = false;
                    }
                });
                this.subjects[index].active = !item.active;
                if (item.active) {
                    this.subjectId = '';
                } else {
                    this.subjectId = item._id;
                }
                this.getProductList();
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
            this.getProductSubjectList();
            wx.setNavigationBarTitle({
                title: _config2.default.name
            });
            this.setUserInfo();
            // wx.redirectTo({
            //     url: 'productDetail?pid=599922ea78c14837b64945b5'
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

                                (0, _toast2.default)('获取用户信息失败，小程序不能正常为您提供服务^_^');

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


        /**
         * 获取产品的分类信息 
         */

    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByb2R1Y3RTdWJqZWN0UmVxdWVzdCIsIkluZGV4IiwiZGF0YSIsImJhbm5lck9wdGlvbiIsInByb2R1Y3RzIiwic3ViamVjdHMiLCJzdWJqZWN0SWQiLCJpbmRpY2F0b3JEb3RzIiwiYXV0b3BsYXkiLCJpbnRlcnZhbCIsImR1cmF0aW9uIiwic2VsZWN0ZWRQcm9kdWN0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJmb290ZXIiLCJjb3B5cmlnaHQiLCJhZGRUb0NhcmQiLCJhZGFwdExpc3QiLCJsIiwibGVuZ3RoIiwiaSIsIml0ZW0iLCJzdG9yYWdlSWRzIiwiY291bnQiLCJmb3JFYWNoIiwic3RvcmFnZUlkIiwiaW5kZXgiLCJwdXNoIiwiaW1hZ2UiLCJfaWQiLCJpbWFnZVVybCIsImdldFByb2R1Y3RMaXN0Iiwid3giLCJzaG93TG9hZGluZyIsInRpdGxlIiwidGhlbiIsInJlcyIsImhpZGVMb2FkaW5nIiwibGlzdCIsIiRhcHBseSIsImNhdGNoIiwiZ2V0UHJvZHVjdFN1YmplY3RMaXN0IiwiZ2V0TGlzdCIsIm1ldGhvZHMiLCJjaGFuZ2VTdWJqZWN0IiwibiIsImFjdGl2ZSIsInNob3dBZGRUb0NhcmQiLCIkaW52b2tlIiwiYWRkVG9DYXJkSGFuZGxlciIsImNvbnNvbGUiLCJsb2ciLCJnZXRPcGVuaWQiLCJzZXROYXZpZ2F0aW9uQmFyVGl0bGUiLCJuYW1lIiwic2V0VXNlckluZm8iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0lBQVlBLHFCOztBQUNaOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQyxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLEksR0FBTztBQUNIQywwQkFBYyxFQURYO0FBRUhDLHNCQUFVLElBRlA7QUFHSEMsc0JBQVUs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IiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgZm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJ1xyXG5pbXBvcnQgeyBnZXRMaXN0IH0gZnJvbSAnLi4vc2VydmljZS9wcm9kdWN0J1xyXG5pbXBvcnQgKiBhcyBwcm9kdWN0U3ViamVjdFJlcXVlc3QgZnJvbSAnLi4vc2VydmljZS9wcm9kdWN0U3ViamVjdCdcclxuaW1wb3J0IHsgbG9naW4sIHRva2VuIH0gZnJvbSAnLi4vc2VydmljZS91c2VyJ1xyXG5pbXBvcnQgY29tcHJlc3NJbWFnZSBmcm9tICcuLi9mdW5jdGlvbi9jb21wcmVzc0ltYWdlJ1xyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZydcclxuaW1wb3J0IHsgZ2V0VXNlckluZm8gfSBmcm9tICcuLi9zZXJ2aWNlL2dsb2JhbCdcclxuaW1wb3J0IHVzZXJJbmZvIGZyb20gJy4uL3BsdWdpbi91c2VySW5mbydcclxuaW1wb3J0IGluaXRVc2VyIGZyb20gJy4uL2Z1bmN0aW9uL2luaXRVc2VyJ1xyXG5pbXBvcnQgYWRkVG9DYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvYWRkVG9DYXJkJ1xyXG5pbXBvcnQgY29weXJpZ2h0IGZyb20gJy4uL2NvbXBvbmVudHMvY29weXJpZ2h0J1xyXG5pbXBvcnQgdG9hc3QgZnJvbSAnLi4vZnVuY3Rpb24vdG9hc3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICAgIGJhbm5lck9wdGlvbjogW10sXHJcbiAgICAgICAgcHJvZHVjdHM6IG51bGwsXHJcbiAgICAgICAgc3ViamVjdHM6IFtdLFxyXG4gICAgICAgIHN1YmplY3RJZDogJycsXHJcbiAgICAgICAgaW5kaWNhdG9yRG90czogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICBpbnRlcnZhbDogNTAwMCxcclxuICAgICAgICBkdXJhdGlvbjogMTAwMCxcclxuICAgICAgICBzZWxlY3RlZFByb2R1Y3Q6IG51bGxcclxuICAgIH1cclxuXHJcbiAgICRwcm9wcyA9IHtcImZvb3RlclwiOntcImZyb21cIjpcImhvbWVcIn19O1xyXG4kZXZlbnRzID0ge1wiYWRkVG9DYXJkXCI6e1widi1vbjphZGR0b2NhcmRzdWNjZXNzXCI6XCJhZGRUb0NhcmRIYW5kbGVyXCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgICAgZm9vdGVyLFxyXG4gICAgICAgIGNvcHlyaWdodCxcclxuICAgICAgICBhZGRUb0NhcmRcclxuICAgIH1cclxuXHJcbiAgICBvblNob3coKSB7XHJcbiAgICAgICAgaWYgKHVzZXJJbmZvLmdldE9wZW5pZCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGludm9rZSgnZm9vdGVyJywgJ2dldENvdW50QnlPcGVuZElkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLmdldFByb2R1Y3RMaXN0KCk7XHJcbiAgICAgICAgdGhpcy5nZXRQcm9kdWN0U3ViamVjdExpc3QoKTtcclxuICAgICAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe1xyXG4gICAgICAgICAgICB0aXRsZTogY29uZmlnLm5hbWVcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNldFVzZXJJbmZvKCk7XHJcbiAgICAgICAgLy8gd3gucmVkaXJlY3RUbyh7XHJcbiAgICAgICAgLy8gICAgIHVybDogJ3Byb2R1Y3REZXRhaWw/cGlkPTU5OTkyMmVhNzhjMTQ4MzdiNjQ5NDViNSdcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICAvLyB3eC5yZWRpcmVjdFRvKHtcclxuICAgICAgICAvLyAgICAgdXJsOiAnb3JkZXJDb25maXJtP3Byb2R1Y3RzPScgKyBKU09OLnN0cmluZ2lmeShbe2NvdW50OjIsIGlkOiBcIjU5MjA2ZDgwYzVjYTFjMTNlMGNlNTc4OVwifV0pXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgLy8gd3gucmVkaXJlY3RUbyh7XHJcbiAgICAgICAgLy8gICAgIHVybDogJ29yZGVyRGV0YWlsP2lkPTU5OTcxZTliYTFhOWExMTY2NmJmZmVhNSdcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICAvLyB3eC5yZWRpcmVjdFRvKHtcclxuICAgICAgICAvLyAgICAgdXJsOiAnb3JkZXInXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc2V0VXNlckluZm8oKSB7XHJcbiAgICAgICAgbGV0IHJlcztcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXMgPSBhd2FpdCBpbml0VXNlcih0aGlzKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHRvYXN0KCfojrflj5bnlKjmiLfkv6Hmga/lpLHotKXvvIzlsI/nqIvluo/kuI3og73mraPluLjkuLrmgqjmj5DkvpvmnI3liqFeX14nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOmAgumFjeS6p+WTgeWIl+ihqFxyXG4gICAgICovXHJcbiAgICBhZGFwdExpc3QgPSAoZGF0YSkgPT4ge1xyXG4gICAgICAgIHZhciBiYW5uZXJPcHRpb24gPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBsID0gZGF0YS5sZW5ndGggLTEsIGkgPSBsOyBpID49IDA7IGktLSApIHtcclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBkYXRhW2ldO1xyXG4gICAgICAgICAgICB2YXIgc3RvcmFnZUlkcyA9IGl0ZW0uc3RvcmFnZUlkcztcclxuICAgICAgICAgICAgaXRlbS5jb3VudCA9IDE7XHJcbiAgICAgICAgICAgIHZhciBsZW5ndGggPSBzdG9yYWdlSWRzLmxlbmd0aDtcclxuICAgICAgICAgICAgaWYgKHN0b3JhZ2VJZHMgJiYgbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBzdG9yYWdlSWRzLmZvckVhY2goKHN0b3JhZ2VJZCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpzkuIDkuKrkuqflk4HmnInlpJrlvKDlm77niYfvvIzmiornrKzkuIDlvKDmlL7liLBiYW5uZXLkuK0sIOW5tuS4lGJhbm5nZXLkuK3lj6rmlL415byg5Zu+54mHXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxlbmd0aCA+IDEgJiYgaW5kZXggPT09IDAgJiYgYmFubmVyT3B0aW9uLmxlbmd0aCA8IDUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFubmVyT3B0aW9uLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IGNvbXByZXNzSW1hZ2Uoc3RvcmFnZUlkKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pZDogaXRlbS5faWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOS6p+WTgeeahOacgOWQjuS4gOW8oOS4quS4uuWUruWNluWbvueJh1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gbGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmltYWdlVXJsID0gY29tcHJlc3NJbWFnZShzdG9yYWdlSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOetm+mAieWIhuexu+aXtu+8jOS4jeimgeaUueWPmGJhbm5lck9wdGlvblxyXG4gICAgICAgIGlmICghdGhpcy5iYW5uZXJPcHRpb24ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGlmICghYmFubmVyT3B0aW9uLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgLy8g5rKh5pyJYmFubmVy5bCx5LiN6KaB5pi+56S65Zu+54mHXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhbm5lck9wdGlvbiA9IG51bGw7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhbm5lck9wdGlvbiA9IGJhbm5lck9wdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluS6p+WTgeWIl+ihqCBcclxuICAgICAqL1xyXG4gICAgZ2V0UHJvZHVjdExpc3QgPSAoKSA9PiB7XHJcbiAgICAgICAgd3guc2hvd0xvYWRpbmcoe3RpdGxlOiAn5Yqg6L295LitJ30pO1xyXG4gICAgICAgIGdldExpc3Qoe1xyXG4gICAgICAgICAgICBzdWJqZWN0SWQ6IHRoaXMuc3ViamVjdElkXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdHMgPSB0aGlzLmFkYXB0TGlzdChyZXMuZGF0YS5saXN0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzID0gW107XHJcbiAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bkuqflk4HnmoTliIbnsbvkv6Hmga8gXHJcbiAgICAgKi9cclxuICAgIGdldFByb2R1Y3RTdWJqZWN0TGlzdCA9ICgpID0+IHtcclxuICAgICAgICBwcm9kdWN0U3ViamVjdFJlcXVlc3QuZ2V0TGlzdCgpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJqZWN0cyA9IHJlcy5kYXRhLmxpc3Q7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmlLnlj5jliIbnsbtcclxuICAgICAgICAgKi8gXHJcbiAgICAgICAgY2hhbmdlU3ViamVjdCAoaXRlbSwgaW5kZXgpIHtcclxuICAgICAgICAgICAgLy8g5oqK5LmL5YmN6YCJ5Lit55qE5YiG57G75riF6ZmkXHJcbiAgICAgICAgICAgIHRoaXMuc3ViamVjdHMuZm9yRWFjaCgobiwgaW5kZXgpPT4ge1xyXG4gICAgICAgICAgICAgICBpZiAoaXRlbS5faWQgIT0gbi5faWQpICB7XHJcbiAgICAgICAgICAgICAgICAgICB0aGlzLnN1YmplY3RzW2luZGV4XS5hY3RpdmUgPSBmYWxzZTsgXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuc3ViamVjdHNbaW5kZXhdLmFjdGl2ZSA9ICFpdGVtLmFjdGl2ZTtcclxuICAgICAgICAgICAgaWYgKGl0ZW0uYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgIHRoaXMuc3ViamVjdElkID0gJyc7IFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJqZWN0SWQgPSBpdGVtLl9pZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmdldFByb2R1Y3RMaXN0KCk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5pi+56S65re75Yqg5Yiw6LSt54mp6L2m5a+56K+d5qGGXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc2hvd0FkZFRvQ2FyZDogKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgdGhpcy4kaW52b2tlKCdhZGRUb0NhcmQnLCAnc2hvdycsIGl0ZW0pO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOa3u+WKoOWIsOi0reeJqei9puS4reWkhOeQhiBcclxuICAgICAgICAgKi9cclxuICAgICAgICBhZGRUb0NhcmRIYW5kbGVyICgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FkZCB0byBjYXJkIHN1Y2Nlc3MnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19